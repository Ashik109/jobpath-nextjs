"use client";

import { Suspense, useLayoutEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { mountNiceSelects } from "@/lib/nice-select";

function NiceSelectLifecycle() {
  const pathname = usePathname();
  const params = useSearchParams();
  useLayoutEffect(() => {
    const abort = new AbortController();
    let cleanup: (() => void) | undefined;
    void mountNiceSelects(abort.signal).then(dispose => { if (abort.signal.aborted) dispose(); else cleanup = dispose; });
    return () => { abort.abort(); cleanup?.(); };
  }, [pathname, params]);
  return null;
}

export default function NiceSelectController() {
  return <Suspense fallback={null}><NiceSelectLifecycle /></Suspense>;
}
