"use client";

import { useEffect, useState } from "react";

const FOOTER_ID = "careers-footer-hero";
const NAV_OVERLAP_PX = 88;

/** True when the fixed careers nav sits over the blue footer hero. */
export function useCareersNavOverFooter(): boolean {
  const [overFooter, setOverFooter] = useState(false);

  useEffect(() => {
    const footer = document.getElementById(FOOTER_ID);
    if (!footer) return;

    const update = () => {
      const { top, bottom } = footer.getBoundingClientRect();
      setOverFooter(top < NAV_OVERLAP_PX && bottom > 0);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return overFooter;
}
