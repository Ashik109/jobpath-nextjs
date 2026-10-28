"use client";

import { Suspense, useEffect } from "react";
import { usePathname } from "next/navigation";

let initialized = false;

function AosLifecycle() {
  const pathname = usePathname();
  useEffect(() => {
    let disposed = false;
    let frame = 0;
    void import("aos").then(({ default: AOS }) => {
      if (disposed) return;
      if (!initialized) {
        AOS.init({ once: true, duration: 800, offset: 60, easing: "ease-out-cubic" });
        initialized = true;
        document.documentElement.dataset.aosReady = "true";
      }
      frame = requestAnimationFrame(() => {
        if (!disposed) AOS.refreshHard();
      });
    });
    return () => { disposed = true; cancelAnimationFrame(frame); };
  }, [pathname]);
  return null;
}

export default function AosController() {
  return <Suspense fallback={null}><AosLifecycle /></Suspense>;
}
