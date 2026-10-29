import { test, expect } from "@playwright/test";
import routes from "../src/data/routes.json";

test("every select across all template routes uses Nice Select", async ({ page }) => {
  test.setTimeout(180_000);
  const errors: string[] = [];
  page.on("pageerror", error => errors.push(error.message));
  let count = 0;
  for (const route of [...new Set(routes.map(item => item.route))]) {
    await page.goto(route);
    await expect.poll(() => page.locator("select").evaluateAll(selects => selects.every(select => select.nextElementSibling?.classList.contains("nice-select") && getComputedStyle(select).display === "none"))).toBe(true);
    const selects = await page.locator("select").count();
    expect(await page.locator(".nice-select").count(), route).toBe(selects);
    count += selects;
  }
  expect(count).toBeGreaterThan(60);
  expect(errors).toEqual([]);
  console.log(`Verified ${count} Nice Select controls across all 62 template routes.`);
});

test("Nice Select supports keyboard selection and sends real form values", async ({ page }) => {
  await page.goto("/");
  const location = page.locator('#location + .nice-select');
  await location.click();
  await location.getByRole("option", { name: "Dhaka", exact: true }).click();
  await expect(page.locator("select#location")).toHaveValue("2");
  await expect(location.locator(".current")).toHaveText("Dhaka");
  const type = page.locator('#job__type + .nice-select');
  await type.focus();
  await page.keyboard.press("ArrowDown");
  await page.keyboard.press("ArrowDown");
  await page.keyboard.press("Enter");
  await expect(type.locator(".current")).toHaveText("Full Time");
  await page.locator(".rts__job__search").getByRole("button", { name: "Search", exact: true }).click();
  await expect(page).toHaveURL(/location=Dhaka/);
  await expect(page).toHaveURL(/type=Full\+Time/);
});

test("selected dashboard values restore after saving, and reset synchronizes", async ({ page }) => {
  await page.goto("/candidate-profile");
  const gender = page.locator('#gender + .nice-select');
  await gender.click();
  await gender.getByRole("option", { name: "Female", exact: true }).click();
  await expect(page.locator("select#gender")).toHaveValue("female");
  await page.evaluate(() => document.querySelector<HTMLFormElement>('.my__profile__tab')!.reset());
  await expect(gender.locator(".current")).toHaveText("Male");
  await gender.click();
  await gender.getByRole("option", { name: "Other", exact: true }).click();
  const fields = page.locator('.dash__content input[required]:not([type="file"]):not([type="checkbox"]), .dash__content textarea[required]');
  for (const field of await fields.all()) {
    const type = await field.getAttribute("type");
    await field.fill(type === "email" ? "preview@example.com" : type === "number" ? "5" : type === "date" ? "1995-01-15" : type === "url" ? "https://example.com" : "Preview Profile");
  }
  await page.getByRole("button", { name: "Save Profile", exact: true }).click();
  await expect(page.getByRole("status").last()).toContainText("saved in this browser");
  await page.reload();
  await expect(gender.locator(".current")).toHaveText("Other");
  await expect(page.locator("select#gender")).toHaveValue("other");
});

test("controlled sorting and repeated route navigation do not duplicate dropdowns", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", error => errors.push(error.message));
  await page.goto("/job-list-1");
  const sort = page.locator('.nice-select[aria-label="Sort results"]');
  await sort.click();
  await sort.getByRole("option", { name: "Name: Z–A", exact: true }).click();
  await expect(page).toHaveURL(/sort=title-desc/);
  await expect(sort.locator(".current")).toHaveText("Name: Z–A");
  await page.goBack();
  await expect(sort.locator(".current")).toHaveText("Default");
  for (const name of ["Home Two", "Home Five", "Home Two"]) {
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.getByRole("link", { name: "Home", exact: true }).first().hover();
    await page.getByRole("link", { name, exact: true }).click();
    await page.waitForFunction(() => document.body.dataset.niceSelectReady === "true");
    await expect.poll(async () => await page.locator(".nice-select").count() === await page.locator("select").count()).toBe(true);
  }
  await page.screenshot({ path: "test-results/nice-select-home.png", fullPage: false });
  expect(errors).toEqual([]);
});

test("disabled options cannot be chosen and required fields focus the dropdown", async ({ page }) => {
  await page.goto("/contact-1");
  await page.evaluate(() => {
    const form = document.createElement("form");
    form.id = "nice-select-validation";
    const select = document.createElement("select");
    select.name = "required-choice"; select.required = true;
    select.add(new Option("Choose a value", ""));
    const disabled = new Option("Unavailable", "disabled"); disabled.disabled = true; select.add(disabled);
    select.add(new Option("Available", "available"));
    form.append(select); document.body.append(form);
  });
  const form = page.locator("#nice-select-validation");
  await expect(form.locator(".nice-select")).toHaveCount(1);
  expect(await form.evaluate(form => (form as HTMLFormElement).reportValidity())).toBe(false);
  await expect(form.locator(".nice-select")).toBeFocused();
  await expect(form.getByRole("option", { name: "Unavailable", exact: true })).toHaveAttribute("aria-disabled", "true");
  await form.locator(".nice-select").click();
  await form.getByRole("option", { name: "Available", exact: true }).click();
  expect(await form.evaluate(form => (form as HTMLFormElement).checkValidity())).toBe(true);
});
