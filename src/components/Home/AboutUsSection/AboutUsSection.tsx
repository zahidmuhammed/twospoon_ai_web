"use client";

import { useRef } from "react";
import styles from "../Home/Home.module.css";
import { TextSection } from "../TextSection";

const SPACER_SECTIONS: Array<{ id: string; className: string }> = [
  { id: "1", className: styles.section2 },
  { id: "2", className: styles.section3 },
  { id: "3", className: styles.section4 },
  { id: "4", className: styles.section5 },
  { id: "5", className: styles.section6 },
  { id: "6", className: styles.section7 },
  { id: "7", className: styles.section8 },
  { id: "8", className: styles.section9 },
  { id: "9", className: styles.section10 },
];

export function AboutUsSection() {
  const aboutUsRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className={styles.aboutUs} id={"about-us"} ref={aboutUsRef}>
      <div className={styles.container2}>
        <TextSection aboutUsRef={aboutUsRef} />
        {SPACER_SECTIONS.map((section) => (
          <section
            key={section.id}
            className={section.className}
            id={section.id}
            aria-hidden={true}
          />
        ))}
      </div>
    </div>
  );
}
