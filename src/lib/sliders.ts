import Swiper from "swiper";
import { Autoplay, EffectFade, FreeMode, Navigation, Pagination, Thumbs } from "swiper/modules";
import type { SwiperOptions } from "swiper/types";

const selector = ".swiper-data, .rts__testimonial__four";

function localControls(element: HTMLElement, control: unknown): HTMLElement[] {
  if (control instanceof HTMLElement) return [control];
  if (typeof control !== "string") return [];
  let scope: HTMLElement | null = element;
  while (scope && scope !== document.body) {
    const matches = Array.from(scope.querySelectorAll<HTMLElement>(control));
    if (matches.length) return matches;
    if (scope.matches(".rts__section")) break;
    scope = scope.parentElement;
  }
  return [];
}

export function mountSliders(signal: AbortSignal) {
  const cleanups: (() => void)[] = [];
  document.querySelectorAll<HTMLElement>(selector).forEach(element => {
    const wrapper = element.querySelector<HTMLElement>(":scope > .swiper-wrapper");
    if (!wrapper) return;
    const slides = Array.from(wrapper.children).filter((el): el is HTMLElement => el instanceof HTMLElement && el.classList.contains("swiper-slide"));
    if (!slides.length) return;
    const options: SwiperOptions & { centerSlides?: boolean } = element.dataset.swiper ? JSON.parse(element.dataset.swiper) : {
      slidesPerView: 1, loop: true, autoplay: { delay: 5000 },
      navigation: { nextEl: ".rts__slide__next", prevEl: ".rts__slide__prev" },
    };
    if (options.centerSlides !== undefined) {
      options.centeredSlides = options.centerSlides;
      delete options.centerSlides;
    }
    const autoplay = options.autoplay;
    if (autoplay) options.autoplay = { delay: 4500, disableOnInteraction: false, pauseOnMouseEnter: true, ...(typeof autoplay === "object" ? autoplay : {}) };
    if (options.autoplay && typeof options.autoplay === "object") options.autoplay.delay = Number(options.autoplay.delay);

    const attributes: { element: HTMLElement; name: string; value: string | null }[] = [];
    if (options.navigation && typeof options.navigation === "object") {
      let next = localControls(element, options.navigation.nextEl);
      let prev = localControls(element, options.navigation.prevEl);
      // The template labels its left arrow "next" and its right arrow "prev".
      if (next[0]?.querySelector('[class*="left"]') && prev[0]?.querySelector('[class*="right"]')) [next, prev] = [prev, next];
      options.navigation = { ...options.navigation, nextEl: next[0] || null, prevEl: prev[0] || null, addIcons: false };
      for (const [controls, label] of [[next, "Next slide"], [prev, "Previous slide"]] as const) {
        controls.forEach(control => {
          for (const [name, value] of [["role", "button"], ["tabindex", "0"], ["aria-label", label]]) {
            attributes.push({ element: control, name, value: control.getAttribute(name) });
            control.setAttribute(name, value);
          }
          const onKey = (event: KeyboardEvent) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); control.click(); } };
          control.addEventListener("keydown", onKey);
          cleanups.push(() => control.removeEventListener("keydown", onKey));
        });
      }
    }
    if (options.pagination && typeof options.pagination === "object") {
      const pagination = localControls(element, options.pagination.el)[0];
      options.pagination = pagination ? { ...options.pagination, el: pagination } : false;
    }

    const clones: HTMLElement[] = [];
    if (options.loop && slides.length > 1) {
      const views = [options, ...Object.values(options.breakpoints || {})];
      const minimum = Math.max(...views.map(view => {
        const visible = Math.ceil(Number(view.slidesPerView ?? options.slidesPerView) || 1);
        const group = Number(view.slidesPerGroup ?? options.slidesPerGroup) || 1;
        return visible + (options.centeredSlides ? Math.max(group, Math.ceil((visible + 1) / 2)) : group);
      }));
      // Supply full repeated sets for seamless looping without changing card markup or widths.
      while (slides.length + clones.length < minimum) {
        slides.forEach(slide => {
          const clone = slide.cloneNode(true) as HTMLElement;
          clone.removeAttribute("id");
          clone.querySelectorAll("[id]").forEach(el => el.removeAttribute("id"));
          wrapper.appendChild(clone);
          clones.push(clone);
        });
      }
    } else options.loop = false;

    if (clones.length && options.pagination && typeof options.pagination === "object" && !options.pagination.type) {
      options.pagination.renderBullet = (index, className) => index < slides.length ? `<span class="${className}"></span>` : "";
    }

    const swiper = new Swiper(element, {
      modules: [Navigation, Pagination, Autoplay, EffectFade, Thumbs, FreeMode],
      spaceBetween: 30, ...options,
      observer: true, observeParents: true, resizeObserver: true,
      watchOverflow: true,
    });
    const update = () => { if (!swiper.destroyed) swiper.update(); };
    const updatePagination = () => {
      if (!clones.length || !swiper.pagination?.bullets.length) return;
      const params = swiper.params.pagination;
      const active = typeof params === "object" ? params.bulletActiveClass || "swiper-pagination-bullet-active" : "swiper-pagination-bullet-active";
      swiper.pagination.bullets.forEach((bullet, index) => bullet.classList.toggle(active, index === swiper.realIndex % slides.length));
    };
    swiper.on("paginationUpdate", updatePagination);
    updatePagination();
    element.querySelectorAll("img").forEach(image => {
      image.addEventListener("load", update);
      cleanups.push(() => image.removeEventListener("load", update));
    });
    cleanups.push(() => {
      swiper.destroy(true, true);
      clones.forEach(clone => clone.remove());
      slides.forEach(slide => wrapper.appendChild(slide));
      attributes.forEach(({ element, name, value }) => value === null ? element.removeAttribute(name) : element.setAttribute(name, value));
    });
  });
  let disposed = false;
  const cleanup = () => {
    if (disposed) return;
    disposed = true;
    cleanups.reverse().forEach(dispose => dispose());
    signal.removeEventListener("abort", cleanup);
  };
  signal.addEventListener("abort", cleanup, { once: true });
  if (signal.aborted) cleanup();
  return cleanup;
}
