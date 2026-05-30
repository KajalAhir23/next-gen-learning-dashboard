"use client";

import { createContext, useContext } from "react";
import { useActiveNav } from "./use-active-nav";

const NavContext = createContext(null);

export function NavProvider({ children }) {
  const nav = useActiveNav();

  return <NavContext.Provider value={nav}>{children}</NavContext.Provider>;
}

export function useNav() {
  const context = useContext(NavContext);
  if (!context) {
    throw new Error("useNav must be used within NavProvider");
  }
  return context;
}
