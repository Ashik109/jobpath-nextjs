import { test, expect } from "@playwright/test";

const values = ["20", "11", "1", "100"];
const displayed = ["20K", "11K", "1M", "100+"];

test("all counter layouts and aliases count up once when scrolled into view", async ({ page }) => {
  test.setTimeout(120_000);
  for (const route of ["/", "/home-one", "/home-two", "/home-three", "/home-six", "/about", "/index-2", "/index-3", "/index-6"]) {
    await page.goto(route);
    await page.waitForFunction(() => document.body.dataset.themeReady === location.pathname);
    const counters = page.locator(".counter");
    await expect(counters).toHaveText(["0", "0", "0", "0"]);
    await counters.first().scrollIntoViewIfNeeded();
    await expect.poll(() => counters.first().evaluate(element => Number(element.textContent)), { intervals: [30, 50] }).toBeGreaterThan(0);
    expect(Number(await counters.first().textContent())).toBeLessThan(20);
    await expect(counters).toHaveText(values);
    expect(await counters.evaluateAll(elements => elements.map(element => element.parentElement!.textContent!.replace(/\s+/g, "")))).toEqual(displayed);
    await page.evaluate(() => window.scrollTo(0, 0));
    await counters.first().scrollIntoViewIfNeeded();
    await page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
    await expect(counters).toHaveText(values);
  }
});

test("counters stop cleanly and initialize again after client navigation", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", error => errors.push(error.message));
  await page.goto("/");
  await page.waitForFunction(() => document.body.dataset.themeReady === location.pathname);
  await page.locator(".counter").first().scrollIntoViewIfNeeded();
  for (const name of ["Home Two", "Home Six", "Home One"]) {
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.getByRole("link", { name: "Home", exact: true }).first().hover();
    await page.getByRole("link", { name, exact: true }).click();
    await page.waitForFunction(() => document.body.dataset.themeReady === location.pathname);
    await expect(page.locator(".counter")).toHaveText(["0", "0", "0", "0"]);
    await page.locator(".counter").first().scrollIntoViewIfNeeded();
    await expect.poll(() => page.locator(".counter").first().evaluate(element => Number(element.textContent))).toBeGreaterThan(0);
  }
  await expect(page.locator(".counter")).toHaveText(values);
  expect(errors).toEqual([]);
});

test("reduced motion displays final counter values without animation", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/about");
  await page.waitForFunction(() => document.body.dataset.themeReady === location.pathname);
  await expect(page.locator(".counter")).toHaveText(values);
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.goto("/home-two");
  await page.waitForFunction(() => document.body.dataset.themeReady === location.pathname);
  await page.locator(".counter").first().scrollIntoViewIfNeeded();
  await expect.poll(() => page.locator(".counter").first().evaluate(element => Number(element.textContent))).toBeGreaterThan(0);
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect(page.locator(".counter")).toHaveText(values);
});
