"use client";

import { Suspense, useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import { mountTheme } from "@/lib/theme";

function ThemeLifecycle({ bodyClass }: { bodyClass: string }) {
  const pathname = usePathname();
  useLayoutEffect(() => {
    const abort = new AbortController();
    const classes = bodyClass.split(/\s+/).filter(Boolean);
    let cleanup: (() => void) | undefined;
    document.body.classList.add("loaded", ...classes);
    if (!window.location.hash) window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    void mountTheme(abort.signal).then(dispose => {
      if (abort.signal.aborted) dispose();
      else {
        cleanup = dispose;
        // Next.js can choose a section below an absolute header as its scroll target.
        if (!window.location.hash) window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        document.body.dataset.themeReady = pathname;
      }
    }).catch(error => { if (!abort.signal.aborted) console.error("Jobpath theme initialization failed", error); });
    return () => {
      abort.abort();
      cleanup?.();
      document.body.classList.remove(...classes);
      delete document.body.dataset.themeReady;
    };
  }, [bodyClass, pathname]);
  return null;
}

export default function ThemeController(props: { bodyClass: string }) {
  return <Suspense fallback={null}><ThemeLifecycle {...props} /></Suspense>;
}
