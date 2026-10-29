import { test, expect, type Page } from "@playwright/test";
import routes from "../src/data/routes.json";

async function open(page: Page, route: string) {
  await page.goto(route);
  await page.waitForFunction(route => document.body.dataset.themeReady === route, route);
}

test("all dashboard routes initialize without browser errors and preserve account navigation", async ({ page }) => {
  test.setTimeout(180_000);
  const errors: string[] = [];
  page.on("pageerror", e => errors.push(e.message));
  const dashboardRoutes = routes.map(r => r.route).filter(r => /^\/(candidate-(dashboard|profile|resume|appliedjob|shortlist|message|alerts|follow|meeting|passwordchange|deleteprofile)|employer-(dashboard|dash-.+|job-price))$/.test(r));
  expect(dashboardRoutes.length).toBeGreaterThan(20);
  for (const route of dashboardRoutes) {
    await open(page, route);
    await expect(page.locator(".dash__content")).toBeVisible();
    if (route.startsWith("/employer")) await expect(page.locator('.dash__menu a[href="/candidate-meeting"]')).toHaveCount(0);
    const active = page.locator(".dash__menu .nav-link.active");
    if (await active.count()) await expect(active).toHaveAttribute("href", route);
  }
  expect(errors).toEqual([]);
});

test("dashboard search, pagination, view, edit and deletion survive reload", async ({ page }) => {
  await open(page, "/employer-dash-alert");
  const rows = page.locator(".single__data__table:visible");
  await expect(rows).toHaveCount(3);
  await page.getByRole("button", { name: "2", exact: true }).click();
  await expect(page.getByRole("button", { name: "2", exact: true })).toHaveAttribute("aria-current", "page");
  await rows.first().locator('[data-dashboard-action="edit"]').click();
  await page.getByRole("dialog").locator("textarea").fill("Updated alert");
  await page.getByRole("button", { name: "Save changes", exact: true }).click();
  await page.locator(".search__job input").fill("Updated alert");
  await expect(rows).toHaveCount(1);
  await rows.first().locator('[data-dashboard-action="view"]').click();
  await expect(page.getByRole("dialog")).toContainText("Updated alert");
  await page.getByRole("button", { name: "Close", exact: true }).click();
  await page.reload();
  await page.locator(".search__job input").fill("Updated alert");
  await expect(rows).toHaveCount(1);
  await rows.first().locator('[data-dashboard-action="delete"]').click();
  await expect(rows).toHaveCount(0);
  await page.reload();
  await page.locator(".search__job input").fill("Updated alert");
  await expect(rows).toHaveCount(0);
});

test("job posting creates a reviewable draft that can be edited and deleted", async ({ page }) => {
  await open(page, "/employer-dash-jobpost");
  for (const field of await page.locator('.dash__content input[required], .dash__content textarea[required]').all()) await field.fill("Test job draft");
  await page.locator("#jt").fill("Dashboard Engineer");
  await page.getByRole("button", { name: "Post Job", exact: true }).click();
  await expect(page).toHaveURL("/employer-dash-job");
  const drafts = page.locator(".jobpath-job-drafts");
  await expect(drafts).toContainText("Dashboard Engineer");
  await drafts.getByRole("button", { name: "Edit", exact: true }).click();
  await expect(page.locator("#jt")).toHaveValue("Dashboard Engineer");
  await page.locator("#jt").fill("Updated Engineer");
  await page.getByRole("button", { name: "Post Job", exact: true }).click();
  await expect(drafts).toContainText("Updated Engineer");
  await expect(drafts.locator("strong")).toHaveCount(1);
  await page.reload();
  await expect(drafts).toContainText("Updated Engineer");
  await drafts.getByRole("button", { name: "Delete", exact: true }).click();
  await expect(drafts).toContainText("No job drafts yet");
});

test("message drafts persist per recipient and search filters contacts", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await open(page, "/candidate-message");
  const input = page.locator('.input__msg input[type="text"]');
  await input.fill("Persistent message");
  await page.getByRole("button", { name: "Save message draft" }).click();
  await expect(page.locator(".chat__content")).toContainText("Persistent message (draft)");
  await page.reload();
  await expect(page.locator(".chat__content")).toContainText("Persistent message (draft)");
  const people = page.locator(".single__chat__person:visible");
  await people.nth(1).click();
  await expect(page.locator(".chat__content")).not.toContainText("Persistent message");
  await people.first().click();
  await expect(page.locator(".chat__content")).toContainText("Persistent message");
  await page.locator(".search__job input:visible").fill("No such person");
  await expect(people).toHaveCount(0);
});

test("profile extra fields restore and invalid fields cannot be saved", async ({ page }) => {
  await open(page, "/candidate-profile");
  const panel = page.locator(".dash__content");
  await panel.getByRole("button", { name: "Save Profile", exact: true }).click();
  expect(await page.evaluate(() => localStorage.getItem("jobpath:draft:/candidate-profile"))).toBeNull();
  for (const field of await panel.locator('input[required],textarea[required]').all()) {
    const type = await field.getAttribute("type");
    await field.fill(type === "email" ? "test@example.com" : type === "date" ? "1995-01-15" : "Test profile");
  }
  await panel.getByRole("link", { name: "Add Another Network", exact: true }).click();
  await panel.locator(".jobpath-added-field input").fill("https://example.com/network");
  await panel.getByRole("button", { name: "Save Profile", exact: true }).click();
  await expect(page.locator(".jobpath-notice")).toContainText("saved in this browser");
  await page.reload();
  await expect(panel.locator(".jobpath-added-field input")).toHaveValue("https://example.com/network");
});

test("password validation and deletion cancel do not store passwords or delete drafts", async ({ page }) => {
  await open(page, "/candidate-passwordchange");
  await page.locator("#currentPassword").fill("CurrentPass1");
  await page.locator("#Newpassword").fill("NewPass123");
  await page.locator("#Retypepassword").fill("Mismatch123");
  await page.locator('.dash__content button[type="submit"]').click();
  await expect(page.locator(".jobpath-notice")).toContainText("do not match");
  await open(page, "/candidate-deleteprofile");
  await page.evaluate(() => localStorage.setItem("jobpath:draft:/candidate-profile", JSON.stringify({ name: "Keep me" })));
  await page.getByRole("button", { name: "Cancel", exact: true }).click();
  await expect(page).toHaveURL("/candidate-dashboard");
  await open(page, "/candidate-deleteprofile");
  await page.getByRole("button", { name: "Delete Profile", exact: true }).click();
  await expect(page.locator(".jobpath-notice")).toContainText("requires an authentication service");
  expect(await page.evaluate(() => localStorage.getItem("jobpath:draft:/candidate-profile"))).toContain("Keep me");
});

test("mobile dashboard sidebar opens and follows role-specific links", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await open(page, "/employer-dash-jobpost");
  await page.locator(".sidebar__action").click();
  await expect(page.locator(".dashboard__left")).toHaveClass(/active/);
  await page.locator('.dash__menu a[href="/employer-dash-meeting"]').click();
  await expect(page).toHaveURL("/employer-dash-meeting");
});

test("resume navigation, additional skills and section removals survive reload", async ({ page }) => {
  await open(page, "/candidate-resume");
  await expect(page.getByRole("link", { name: "Education", exact: true })).toHaveAttribute("href", "#education");
  const education = page.locator("#education .accordion-item").first();
  await education.locator(".accordion-button").click();
  await education.getByRole("link", { name: "Remove Education", exact: true }).click();
  await expect(education).toBeHidden();
  await page.getByRole("link", { name: "Add Skill", exact: true }).click();
  await page.locator(".jobpath-added-field input").fill("TypeScript");
  await page.getByRole("button", { name: "Save Resume", exact: true }).click();
  await expect(page.locator(".jobpath-notice")).toContainText("saved in this browser");
  await page.reload();
  await expect(education).toBeHidden();
  await expect(page.locator(".jobpath-added-field input")).toHaveValue("TypeScript");
});

test("recent applicants create meeting drafts and download a sample CV", async ({ page }) => {
  await open(page, "/employer-dashboard");
  const downloaded = page.waitForEvent("download");
  await page.locator('[data-dashboard-action="download"]').first().click();
  expect((await downloaded).suggestedFilename()).toMatch(/-cv\.txt$/);
  await page.locator('[data-dashboard-action="meeting"]').first().click();
  await page.getByRole("dialog").locator("textarea").fill("Interview · November 2 at 10:00 · https://example.com/meeting");
  await page.getByRole("button", { name: "Save changes", exact: true }).click();
  await expect(page).toHaveURL("/employer-dash-meeting");
  await expect(page.locator(".jobpath-meeting-drafts")).toContainText("Interview");
  await page.reload();
  await expect(page.locator(".jobpath-meeting-drafts")).toContainText("Interview");
  await page.getByRole("button", { name: "Delete meeting draft", exact: true }).click();
  await expect(page.locator(".jobpath-meeting-drafts")).toContainText("No meeting drafts yet");
});
