"use client";

import { useEffect, useState } from "react";

const FIRST_SECTION_ID = "careers-first-section";
const NAV_HEIGHT_PX = 88;

/** True once the user has scrolled past the careers page first section. */
export function useCareersNavSolidBackground(): boolean {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const section = document.getElementById(FIRST_SECTION_ID);
    if (!section) return;

    const update = () => {
      setSolid(section.getBoundingClientRect().bottom <= NAV_HEIGHT_PX);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return solid;
}
