import { test, expect } from "@playwright/test";
import type Swiper from "swiper";
import routes from "../src/data/routes.json";

declare global { interface HTMLElement { swiper?: Swiper } }

for (const width of [390, 820, 1440, 1920]) {
  test(`all template sliders work at ${width}px`, async ({ page }) => {
    test.setTimeout(240_000);
    await page.setViewportSize({ width, height: 900 });
    const errors: string[] = [];
    page.on("pageerror", error => errors.push(error.message));
    const paths = [...new Set(routes.map(route => route.route))];
    let checked = 0;
    for (const route of paths) {
      await page.goto(route);
      await page.waitForFunction(() => document.body.dataset.themeReady === location.pathname);
      const failures = await page.evaluate(async () => {
        const failures: string[] = [];
        const elements = Array.from(document.querySelectorAll<HTMLElement>(".swiper-wrapper")).map(wrapper => wrapper.parentElement!);
        const sliders = elements.map(element => element.swiper);
        sliders.forEach(slider => { if (slider) { slider.autoplay?.stop(); slider.params.speed = 0; } });
        for (let i = 0; i < elements.length; i++) {
          const el = elements[i], slider = sliders[i];
          const label = `${location.pathname}: ${el.className}`;
          if (!slider?.initialized) { failures.push(`${label}: not initialized`); continue; }
          if (slider.isLocked) failures.push(`${label}: locked`);
          if (slider.width <= 0) failures.push(`${label}: zero width`);
          const before = slider.realIndex;
          slider.slideNext(0);
          await new Promise(requestAnimationFrame);
          await new Promise(requestAnimationFrame);
          if (slider.realIndex === before) failures.push(`${label}: slideNext did not advance`);
          const next = Array.isArray(slider.navigation.nextEl) ? slider.navigation.nextEl[0] : slider.navigation.nextEl;
          if (next) {
            const indexes = sliders.map(s => s?.realIndex);
            next.click();
            await new Promise(requestAnimationFrame);
            await new Promise(requestAnimationFrame);
            if (slider.realIndex === indexes[i]) failures.push(`${label}: next arrow did not advance`);
            sliders.forEach((other, j) => { if (j !== i && other?.realIndex !== indexes[j]) failures.push(`${label}: arrow also moved slider ${j}`); });
            if (!next.querySelector('[class*="right"]')) failures.push(`${label}: forward arrow points left`);
          }
          const pagination = slider.pagination;
          if (pagination?.bullets.length > 1) {
            const before = slider.realIndex;
            pagination.bullets[(before + 1) % pagination.bullets.length].click();
            await new Promise(requestAnimationFrame);
            await new Promise(requestAnimationFrame);
            if (slider.realIndex === before) failures.push(`${label}: pagination did not advance`);
          }
        }
        return failures;
      });
      expect(failures, route).toEqual([]);
      checked += await page.locator(".swiper-wrapper").count();
    }
    expect(checked).toBeGreaterThan(20);
    expect(errors).toEqual([]);
    console.log(`Checked ${checked} slider instances across ${paths.length} routes at ${width}px.`);
  });
}

test("slider autoplay, swipe, controls and cleanup survive client navigation", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", error => errors.push(error.message));
  await page.goto("/home-two");
  await page.waitForFunction(() => document.body.dataset.themeReady === location.pathname);
  const slider = page.locator(".cat__slider");
  await slider.scrollIntoViewIfNeeded();
  await page.mouse.move(0, 0);
  await slider.evaluate(element => {
    const s = (element as HTMLElement).swiper!;
    s.autoplay.stop(); s.params.speed = 0;
    if (typeof s.params.autoplay === "object") s.params.autoplay.delay = 60;
    element.setAttribute("data-test-start-index", String(s.realIndex));
    s.autoplay.start();
  });
  await expect.poll(() => slider.evaluate(element => (element as HTMLElement).swiper!.realIndex !== Number(element.getAttribute("data-test-start-index")))).toBe(true);
  await slider.evaluate(element => (element as HTMLElement).swiper!.autoplay.stop());
  const before = await slider.evaluate(element => (element as HTMLElement).swiper!.realIndex);
  const box = await slider.boundingBox();
  await page.mouse.move(box!.x + box!.width * .8, box!.y + box!.height / 2);
  await page.mouse.down();
  await page.mouse.move(box!.x + box!.width * .2, box!.y + box!.height / 2, { steps: 12 });
  await page.mouse.up();
  await expect.poll(() => slider.evaluate(element => (element as HTMLElement).swiper!.realIndex)).not.toBe(before);
  for (const name of ["Home Five", "Home Two", "Home Five"]) {
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.getByRole("link", { name: "Home", exact: true }).first().hover();
    await page.getByRole("link", { name, exact: true }).click();
    await page.waitForFunction(() => document.body.dataset.themeReady === location.pathname);
    const wrappers = await page.locator(".swiper-wrapper").evaluateAll(elements => elements.map(el => el.children.length));
    expect(wrappers.every(count => count > 1 && count < 25)).toBe(true);
  }
  for (const width of [1920, 390, 820, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await expect.poll(() => page.locator(".swiper-wrapper").evaluateAll(wrappers => wrappers.every(wrapper => {
      const slider = wrapper.parentElement!.swiper;
      return Boolean(slider?.initialized && !slider.isLocked && slider.width > 0);
    }))).toBe(true);
  }
  expect(errors).toEqual([]);
});
