"use client";

import { useSyncExternalStore } from "react";

function readVisibleLineCount(): number {
  if (typeof window === "undefined") return 5;
  if (window.matchMedia("(max-width: 809px)").matches) return 9;
  if (window.matchMedia("(max-width: 1119px)").matches) return 8;
  return 5;
}

function subscribeVisibleLineCount(onStoreChange: () => void): () => void {
  const queries = [
    window.matchMedia("(max-width: 809px)"),
    window.matchMedia("(max-width: 1119px)"),
  ];
  for (const query of queries) {
    query.addEventListener("change", onStoreChange);
  }
  return () => {
    for (const query of queries) {
      query.removeEventListener("change", onStoreChange);
    }
  };
}

export function useAboutVisibleLineCount(): number {
  return useSyncExternalStore(subscribeVisibleLineCount, readVisibleLineCount, () => 5);
}
