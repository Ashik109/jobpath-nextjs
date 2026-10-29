import { test, expect } from "@playwright/test";
import catalog from "../src/data/catalog.json";
import routes from "../src/data/routes.json";
import originalCardStructures from "./fixtures/original-cards.json";

test("job and employer cards retain the original HTML elements and classes", async ({ page }) => {
  test.setTimeout(120_000);
  const routes = ["job-list-1", "job-list-2", "job-list-3", "job-list-4", "job-list-5", "employer-1", "employer-2", "employer-3"];
  for (const route of routes) {
    await page.goto(`/${route}`);
    const results = page.locator(".jobpath-catalog-results");
    for (const mode of ["Grid", "List"] as const) {
      const pane = results.locator(`#${mode.toLowerCase()}`);
      const container = await pane.count() ? pane : results;
      const card = container.locator(".rts__job__card, .rts__job__card__big").first();
      const structure = await card.evaluate(element => {
        type Shape = { tag: string; class: string; children: Shape[] };
        const shape = (node: Element): Shape => ({ tag: node.tagName.toLowerCase(), class: node.getAttribute("class") || "", children: Array.from(node.children).map(shape) });
        return shape(element);
      });
      expect(structure, `${route} ${mode}`).toEqual(originalCardStructures[`${route}${mode}` as keyof typeof originalCardStructures]);
    }
  }
});

test("AOS reveals scrolled sections and initializes after client navigation", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", error => errors.push(error.message));
  await page.goto("/");
  const hero = page.locator("h1[data-aos]");
  await expect(hero).toHaveClass(/aos-animate/);
  const below = page.locator('[data-aos]').last();
  await below.scrollIntoViewIfNeeded();
  await expect(below).toHaveClass(/aos-animate/);
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.getByRole("link", { name: "Home", exact: true }).first().hover();
  await page.getByRole("link", { name: "Home Two", exact: true }).click();
  await expect(page).toHaveURL("/home-two");
  await expect(page.locator("h1[data-aos]")).toHaveClass(/aos-animate/);
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect(page.locator("[data-aos]").last()).toHaveCSS("opacity", "1");
  await expect(page.locator("[data-aos]").last()).toHaveCSS("transform", "none");
  expect(errors).toEqual([]);
});

test("every converted route and catalog slug responds", async ({ request }) => {
  test.setTimeout(240_000);
  const paths = new Set(routes.map(route => route.route));
  for (const [kind, records] of Object.entries(catalog)) for (const slug of Object.keys(records)) paths.add(`/${kind}/${slug}`);
  const failures: string[] = [];
  const all = [...paths];
  for (let i = 0; i < all.length; i += 6) {
    await Promise.all(all.slice(i, i + 6).map(async path => {
      const response = await request.get(path);
      if (response.status() !== 200) failures.push(`${path}: ${response.status()}`);
    }));
  }
  expect(failures).toEqual([]);
  for (const kind of Object.keys(catalog)) expect((await request.get(`/${kind}/this-record-does-not-exist`)).status()).toBe(404);
});

test("listing sorting, pagination and record-specific detail data", async ({ page }) => {
  await page.goto("/job-list-1");
  const results = page.locator(".jobpath-catalog-results");
  await expect(results.getByRole("status")).toContainText("of 20 results");
  const first = await results.locator("#grid .job__title").first().textContent();
  await results.getByRole("navigation", { name: "Results pagination" }).getByRole("link", { name: "2", exact: true }).click();
  await expect(page).toHaveURL(/page=2/);
  await expect(results.locator("#grid .job__title").first()).not.toHaveText(first!);
  await results.locator('.nice-select[aria-label="Sort results"]').click();
  await results.getByRole("option", { name: "Name: Z–A", exact: true }).click();
  const expected = Object.values(catalog.job).sort((a, b) => b.title.localeCompare(a.title))[0];
  await expect(results.locator("#grid .job__title").first()).toHaveText(expected.title);
  await results.locator("#grid .job__title a").first().click();
  await expect(page).toHaveURL(`/job/${expected.slug}`);
  await expect(page.locator("h3.job__title").first()).toHaveText(expected.title);
  await expect(page.locator(".company__icon img").first()).toHaveAttribute("src", expected.image);
  await expect(page).toHaveTitle(`${expected.title} | Jobpath`);
});

test("search query filters catalog and empty results can reset", async ({ page }) => {
  await page.goto("/job-list-1?q=Software");
  const results = page.locator(".jobpath-catalog-results");
  const titles = await results.locator("#grid .job__title").allTextContents();
  expect(titles.length).toBeGreaterThan(0);
  expect(titles.every(title => /software/i.test(title))).toBeTruthy();
  await page.goto("/job-list-1?q=not-a-real-job-name");
  await expect(results.getByRole("status")).toContainText("No results");
  await results.getByRole("link", { name: "Clear filters" }).click();
  await expect(results.getByRole("status")).toContainText("of 20 results");
});

test("details layouts bind the selected record and unknown slugs show 404", async ({ page }) => {
  const job = catalog.job["software-engineer-apple"];
  for (const route of ["job", "job-details-2", "job-details-3", "job-details-4"]) {
    await page.goto(`/${route}/${job.slug}`);
    await expect(page.locator("h3.job__title").first()).toHaveText(job.title);
  }
  await page.goto("/candidate/jonathon-doe");
  await expect(page.locator("h3.job__title")).toHaveText("Jonathon Doe");
  await page.goto("/employer/microsoft-com");
  await expect(page.locator("h3.job__title")).toHaveText("Microsoft.com");
  await page.goto("/blog/7-ways-job-post-has-improved-business-today");
  await expect(page.locator("h3.job__title")).toHaveText(catalog.blog["7-ways-job-post-has-improved-business-today"].title);
});

test("shortlist, applications and CV download persist", async ({ page }) => {
  await page.goto("/candidate/michael-roy");
  await page.getByRole("button", { name: "Shortlist", exact: true }).first().click();
  await page.goto("/candidate-shortlist");
  await expect(page.locator(".jobpath-saved-records")).toContainText("Michael Roy");
  await page.reload();
  await expect(page.locator(".jobpath-saved-records")).toContainText("Michael Roy");
  await page.goto("/job/software-engineer-apple");
  await page.getByRole("button", { name: /Apply This/ }).first().click();
  await expect(page.getByRole("button", { name: "Application Saved" }).first()).toBeVisible();
  await page.goto("/candidate-appliedjob");
  await expect(page.locator(".jobpath-saved-records")).toContainText("Software Engineer, Apple");
  await page.goto("/candidate/michael-roy");
  const downloadEvent = page.waitForEvent("download");
  await page.getByRole("button", { name: "Cv Download" }).click();
  expect((await downloadEvent).suggestedFilename()).toBe("michael-roy-cv.txt");
  await page.goto("/employer/upwork-com");
  await page.getByRole("button", { name: "Follow Company" }).click();
  await page.goto("/candidate-follow");
  await expect(page.locator(".jobpath-saved-records")).toContainText("Upwork.com");
});

test("modal, FAQ, pricing and slider lifecycle work without browser errors", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", error => errors.push(error.message));
  await page.goto("/");
  await page.waitForFunction(() => document.body.dataset.themeReady === "/");
  await expect(page.locator(".swiper-initialized").first()).toBeVisible();
  await page.getByRole("link", { name: "Login Button", exact: true }).first().click();
  await expect(page.locator("#loginModal")).toBeVisible();
  await page.locator("#loginModal").getByRole("button", { name: "Close" }).click();
  await expect(page.locator("#loginModal")).not.toBeVisible();
  await page.goto("/faq");
  await page.waitForFunction(() => document.body.dataset.themeReady === "/faq");
  const question = page.locator(".accordion-button").nth(1);
  await question.click();
  await expect(question).toHaveAttribute("aria-expanded", "true");
  await page.goto("/pricing");
  await page.waitForFunction(() => document.body.dataset.themeReady === "/pricing");
  await page.locator('label[for="pricing__toogle"]').click();
  await expect(page.locator(".yearly__pricing").first()).toHaveClass(/active/);
  await page.screenshot({ path: "test-results/pricing-desktop.png", fullPage: false });
  expect(errors).toEqual([]);
});

test("mobile menu navigates through React routes", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  const errors: string[] = [];
  page.on("pageerror", error => errors.push(error.message));
  await page.goto("/");
  await page.waitForFunction(() => document.body.dataset.themeReady === "/");
  await page.locator('header button[data-bs-target="#offcanvas"]').click();
  await expect(page.locator("#offcanvas")).toBeVisible();
  await page.locator(".jobpath-mobile-nav").getByText("Home", { exact: true }).click();
  await page.locator(".jobpath-mobile-nav").getByRole("link", { name: "Home 2", exact: true }).click();
  await expect(page).toHaveURL("/home-two");
  await page.waitForFunction(() => document.body.dataset.themeReady === "/home-two");
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(0);
  await expect(page.locator(".offcanvas-backdrop")).toHaveCount(0);
  await page.screenshot({ path: "test-results/home-mobile.png", fullPage: false, animations: "disabled" });
  expect(errors).toEqual([]);
});

test("dashboard charts and chart tabs render", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", error => errors.push(error.message));
  await page.goto("/candidate-dashboard");
  await page.waitForFunction(() => document.body.dataset.themeReady === "/candidate-dashboard");
  await expect(page.locator(".apexcharts-svg")).toHaveCount(3);
  await page.getByRole("tab", { name: "Monthly" }).or(page.getByRole("button", { name: "Monthly", exact: true })).click();
  await expect(page.locator("#mothly")).toHaveClass(/active/);
  await page.screenshot({ path: "test-results/dashboard-desktop.png", fullPage: false });
  expect(errors).toEqual([]);
});

test("profile draft validates, saves and restores after reload", async ({ page }) => {
  await page.goto("/candidate-profile");
  await page.waitForFunction(() => document.body.dataset.themeReady === "/candidate-profile");
  const panel = page.locator(".dash__content");
  const fields = panel.locator('input[required]:not([type="file"]):not([type="checkbox"]), textarea[required]');
  for (const field of await fields.all()) {
    const type = await field.getAttribute("type");
    await field.fill(type === "email" ? "preview@example.com" : type === "number" ? "5" : type === "date" ? "1995-01-15" : type === "url" ? "https://example.com" : "Preview Profile");
  }
  const firstName = panel.locator('input[type="text"]').first();
  await firstName.fill("Jobpath Preview");
  await panel.getByRole("button", { name: "Save Profile", exact: true }).click();
  await expect(page.getByRole("status").last()).toContainText("saved in this browser");
  await page.reload();
  await expect(firstName).toHaveValue("Jobpath Preview");
});

test("home search, grid/list toggle, video lightbox and slider route cleanup", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", error => errors.push(error.message));
  await page.goto("/");
  await page.waitForFunction(() => document.body.dataset.themeReady === "/");
  await page.locator(".rts__job__search").getByRole("button", { name: "Search", exact: true }).click();
  await expect(page).toHaveURL(/job-list-1/);
  await page.waitForFunction(() => document.body.dataset.themeReady === "/job-list-1");
  await page.locator('button[data-bs-target="#list"]').click();
  await expect(page.locator("#list")).toHaveClass(/active/);
  await page.locator('button[data-bs-target="#grid"]').click();
  await expect(page.locator("#grid")).toHaveClass(/active/);
  await page.goto("/job/software-engineer-apple");
  await page.waitForFunction(() => document.body.dataset.themeReady === "/job/software-engineer-apple");
  await page.locator("[data-lightbox]").first().click();
  await expect(page.locator(".glightbox-container")).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.locator(".glightbox-container")).toHaveCount(0);
  await page.goto("/");
  await page.waitForFunction(() => document.body.dataset.themeReady === "/");
  await page.getByRole("link", { name: "Pages", exact: true }).hover();
  await page.getByRole("link", { name: "About", exact: true }).click();
  await expect(page).toHaveURL("/about");
  await page.waitForFunction(() => document.body.dataset.themeReady === "/about");
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(0);
  await page.screenshot({ path: "test-results/about-desktop.png", fullPage: false, animations: "disabled" });
  expect(errors).toEqual([]);
});
