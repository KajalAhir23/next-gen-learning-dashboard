"use client";

import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

function resolveActiveIdFromUrl() {
  if (typeof window === "undefined") return "home";

  const hash = window.location.hash;
  if (hash === "#courses") return "courses";
  if (hash === "#settings") return "settings";
  return "home";
}

export function useActiveNav() {
  const pathname = usePathname();
  const [activeId, setActiveId] = useState("home");

  const syncFromUrl = useCallback(() => {
    setActiveId(resolveActiveIdFromUrl());
  }, []);

  useEffect(() => {
    const handle = requestAnimationFrame(() => {
      syncFromUrl();
    });
    return () => cancelAnimationFrame(handle);
  }, [pathname, syncFromUrl]);

  useEffect(() => {
    window.addEventListener("hashchange", syncFromUrl);
    return () => window.removeEventListener("hashchange", syncFromUrl);
  }, [syncFromUrl]);

  const selectNav = (id) => setActiveId(id);

  return { activeId, selectNav };
}
