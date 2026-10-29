export function mountCounters(signal: AbortSignal) {
  const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const counters = Array.from(document.querySelectorAll<HTMLElement>(".counter")).flatMap(element => {
    const node = Array.from(element.childNodes).find((child): child is Text => child instanceof Text && Boolean(child.data.trim()));
    if (!node) return [];
    const original = node.data;
    const text = original.trim();
    const match = text.match(/^([^\d+-]*)([+-]?\d[\d,]*(?:\.\d+)?)(.*)$/);
    if (!match) return [];
    const target = Number(match[2].replaceAll(",", ""));
    if (!Number.isFinite(target)) return [];
    const decimals = match[2].split(".")[1]?.length || 0;
    const format = new Intl.NumberFormat("en-US", { useGrouping: match[2].includes(","), minimumFractionDigits: decimals, maximumFractionDigits: decimals });
    return [{ element, node, original, label: element.getAttribute("aria-label"), text, target, decimals, format, prefix: match[1], suffix: match[3], frame: 0, started: false }];
  });
  if (signal.aborted || motion.matches || !("IntersectionObserver" in window)) return () => {};

  let disposed = false;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const counter = counters.find(counter => counter.element === entry.target);
      if (!counter || counter.started) return;
      counter.started = true;
      observer.unobserve(counter.element);
      const start = performance.now();
      const tick = (time: number) => {
        if (disposed || !counter.element.isConnected) return;
        const progress = Math.min(1, (time - start) / 1800);
        const multiplier = 10 ** counter.decimals;
        const value = Math.trunc(counter.target * (1 - (1 - progress) ** 3) * multiplier) / multiplier;
        const text = counter.prefix + counter.format.format(value) + counter.suffix;
        counter.node.data = progress === 1 ? counter.original : counter.original.replace(counter.text, text);
        if (progress < 1) counter.frame = requestAnimationFrame(tick);
        else counter.frame = 0;
      };
      counter.frame = requestAnimationFrame(tick);
    });
  }, { threshold: 0.2 });

  counters.forEach(counter => {
    // Keep the existing span and its React-owned text node; suffixes remain untouched.
    if (counter.label === null) counter.element.setAttribute("aria-label", counter.text);
    counter.node.data = counter.original.replace(counter.text, counter.prefix + counter.format.format(0) + counter.suffix);
    observer.observe(counter.element);
  });
  const finish = () => {
    observer.disconnect();
    counters.forEach(counter => { cancelAnimationFrame(counter.frame); counter.node.data = counter.original; });
  };
  const onMotionChange = () => { if (motion.matches) finish(); };
  motion.addEventListener("change", onMotionChange);
  const cleanup = () => {
    if (disposed) return;
    disposed = true;
    finish();
    counters.forEach(counter => {
      if (counter.label === null) counter.element.removeAttribute("aria-label");
      else counter.element.setAttribute("aria-label", counter.label);
    });
    motion.removeEventListener("change", onMotionChange);
    signal.removeEventListener("abort", cleanup);
  };
  signal.addEventListener("abort", cleanup, { once: true });
  if (signal.aborted) cleanup();
  return cleanup;
}
