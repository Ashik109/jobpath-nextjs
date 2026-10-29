import { mountSliders } from "./sliders";
import { mountCounters } from "./counters";

export async function mountTheme(signal: AbortSignal) {
  const bootstrap = await import("bootstrap");
  if (signal.aborted) return () => {};
  const abort = new AbortController();
  const eventOptions = { signal: abort.signal };
  const cleanups: (() => void)[] = [];
  cleanups.push(mountSliders(signal));
  cleanups.push(mountCounters(signal));

  const onScroll = () => {
    document.querySelectorAll(".rts__header").forEach(el => el.classList.toggle("sticky", window.scrollY > 100));
    document.getElementById("rts-back-to-top")?.classList.toggle("show", window.scrollY > 100);
  };
  window.addEventListener("scroll", onScroll, { passive: true, ...eventOptions });
  document.addEventListener("shown.bs.tab", () => window.dispatchEvent(new Event("resize")), eventOptions);
  onScroll();

  document.querySelectorAll<HTMLAnchorElement>(".dash__menu .nav-link").forEach(link => {
    link.classList.toggle("active", new URL(link.href).pathname === window.location.pathname);
  });

  document.addEventListener("click", event => {
    const target = event.target instanceof Element ? event.target : null;
    if (!target) return;
    if (target.closest("#rts-back-to-top")) window.scrollTo({ top: 0, behavior: "smooth" });
    if (target.closest(".sidebar__action")) document.querySelector(".dashboard__left")?.classList.toggle("active");
    else if (!target.closest(".dashboard__left")) document.querySelector(".dashboard__left")?.classList.remove("active");
    const accountType = target.closest<HTMLButtonElement>(".tab__switch .nav-link");
    if (accountType) {
      accountType.parentElement?.querySelectorAll(".nav-link").forEach(el => el.classList.toggle("active", el === accountType));
    }
    const anchor = target.closest<HTMLAnchorElement>('a[href^="#"]');
    if (anchor && !anchor.dataset.bsToggle && anchor.getAttribute("href") !== "#") {
      const id = anchor.getAttribute("href")!.slice(1);
      const section = document.getElementById(id);
      if (section) {
        event.preventDefault();
        section.scrollIntoView({ behavior: "smooth", block: "start" });
        anchor.closest("nav")?.querySelectorAll(".nav-link").forEach(el => el.classList.toggle("active", el === anchor));
      }
    }
  }, eventOptions);

  const updatePricing = (yearly: boolean) => {
    document.querySelectorAll<HTMLElement>(".monthly__pricing").forEach(el => { el.classList.toggle("active", !yearly); el.classList.toggle("hide", yearly); });
    document.querySelectorAll<HTMLElement>(".yearly__pricing").forEach(el => { el.classList.toggle("active", yearly); el.classList.toggle("hide", !yearly); });
  };
  document.addEventListener("change", event => {
    const input = event.target;
    if (!(input instanceof HTMLInputElement)) return;
    if (input.matches(".pricing__toogle")) updatePricing(input.checked);
    if (input.name === "package") updatePricing(input.id === "package2");
    if (input.type === "file" && input.files?.[0]) {
      const file = input.files[0];
      const image = input.closest(".info__top")?.querySelector<HTMLImageElement>(".author__image img");
      if (image && file.type.startsWith("image/")) {
        const url = URL.createObjectURL(file);
        image.src = url;
        cleanups.push(() => URL.revokeObjectURL(url));
      }
    }
  }, eventOptions);

  const chartElements = document.querySelectorAll<HTMLElement>('[id*="chart__candidate"], [id*="chart__employer"]');
  if (chartElements.length) {
    const { default: ApexCharts } = await import("apexcharts");
    if (!signal.aborted) {
      for (const element of chartElements) {
        const chart = new ApexCharts(element, {
          chart: { type: "area", height: 360, toolbar: { show: false }, animations: { enabled: false } },
          series: [{ name: "Profile views", data: [100, 200, 300, 400, 500, 800, 700, 800, 1000, 850, 920, 1100] }],
          colors: ["#34A853"], stroke: { curve: "smooth", width: 2 },
          dataLabels: { enabled: false },
          xaxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] },
          fill: { type: "gradient", gradient: { opacityFrom: 0.4, opacityTo: 0.02 } },
        });
        await chart.render();
        cleanups.push(() => chart.destroy());
      }
    }
  }
  if (document.querySelector("[data-lightbox], .video-play, .popup-video, [data-glightbox]")) {
    const { default: GLightbox } = await import("glightbox");
    if (!signal.aborted) {
      const lightbox = GLightbox({ selector: "[data-lightbox], .video-play, .popup-video, [data-glightbox]" });
      cleanups.push(() => lightbox.destroy());
    }
  }

  let cleaned = false;
  const cleanup = () => {
    if (cleaned) return;
    cleaned = true;
    abort.abort();
    cleanups.forEach(dispose => dispose());
    document.querySelectorAll(".modal, .offcanvas").forEach(el => {
      const modal = el.classList.contains("modal");
      const instance = modal ? bootstrap.Modal.getInstance(el) : bootstrap.Offcanvas.getInstance(el);
      if (!instance) return;
      if (el.matches(".show, .showing, .hiding")) {
        // Bootstrap must finish its exit transition before disposal.
        el.addEventListener(modal ? "hidden.bs.modal" : "hidden.bs.offcanvas", () => instance.dispose(), { once: true });
        el.addEventListener(modal ? "shown.bs.modal" : "shown.bs.offcanvas", () => instance.hide(), { once: true });
        instance.hide();
      } else instance.dispose();
    });
    document.querySelectorAll(".modal-backdrop, .offcanvas-backdrop").forEach(el => el.remove());
    document.body.classList.remove("modal-open");
    document.body.style.removeProperty("overflow");
    document.body.style.removeProperty("padding-right");
  };
  if (signal.aborted) cleanup();
  return cleanup;
}
