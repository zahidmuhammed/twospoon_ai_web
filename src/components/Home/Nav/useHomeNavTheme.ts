"use client";

import { useSyncExternalStore } from "react";

const HERO_ID = "home-hero";
import { FOOTER_HERO_ID_HOME } from "@/components/Footer";

const FOOTER_ID = FOOTER_HERO_ID_HOME;
const NAV_HEIGHT_PX = 88;

export type HomeNavTheme = "hero" | "solid" | "footer";

function computeTheme(): HomeNavTheme {
  if (typeof document === "undefined") return "hero";

  const footer = document.getElementById(FOOTER_ID);
  if (footer) {
    const { top, bottom } = footer.getBoundingClientRect();
    if (top < NAV_HEIGHT_PX && bottom > 0) return "footer";
  }

  const hero = document.getElementById(HERO_ID);
  if (hero) {
    const { bottom } = hero.getBoundingClientRect();
    if (bottom > NAV_HEIGHT_PX) return "hero";
  }

  return "solid";
}

function subscribe(onStoreChange: () => void): () => void {
  window.addEventListener("scroll", onStoreChange, { passive: true });
  window.addEventListener("resize", onStoreChange);
  return () => {
    window.removeEventListener("scroll", onStoreChange);
    window.removeEventListener("resize", onStoreChange);
  };
}

function getServerSnapshot(): HomeNavTheme {
  return "hero";
}

export function useHomeNavTheme(): HomeNavTheme {
  return useSyncExternalStore(subscribe, computeTheme, getServerSnapshot);
}
