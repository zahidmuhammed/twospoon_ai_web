"use client";

import { AboutLineMask } from "./AboutLineMask";
import styles from "./TextSection.module.css";
import type { RefObject } from "react";

const LINE_MASKS: Array<{ className: string; lineIndex: number }> = [
  { className: styles.frame, lineIndex: 0 },
  { className: styles.div29, lineIndex: 1 },
  { className: styles.div30, lineIndex: 2 },
  { className: styles.div31, lineIndex: 3 },
  { className: styles.div322, lineIndex: 4 },
  { className: styles.div302, lineIndex: 5 },
  { className: styles.div312, lineIndex: 6 },
  { className: styles.div323, lineIndex: 7 },
  { className: styles.div324, lineIndex: 8 },
];

type TextSectionProps = {
  aboutUsRef: RefObject<HTMLDivElement | null>;
};

export function TextSection({ aboutUsRef }: TextSectionProps) {
  return (
    <section className={styles.textSection}>
      <div className={styles.everyEnterpriseHas}>
        <div className={styles.everyEnterpriseHas2}>
          <div className={styles.everyEnterpriseHas3}>
            <div className={styles.deployingAIToWorkAcrossYourOrganisation2}>
              <p className={styles.everyEnterpriseHas4} dir={"auto"}>
                Every enterprise has the same AI vendors, the same models, the same roadmap. The gap
                isn't technology -  it's the team executing it. Twospoon embeds inside your org as
                that team. Strategy, engineering, deployment, and everything that comes after owned
                end-to-end, built to compound over time.
              </p>
            </div>
          </div>
          {LINE_MASKS.map(({ className, lineIndex }) => (
            <AboutLineMask
              key={className}
              className={className}
              aboutUsRef={aboutUsRef}
              lineIndex={lineIndex}
            />
          ))}
          <div className={styles.div33}></div>
        </div>
      </div>
    </section>
  );
}
