"use client";

import { motion, useTransform, type MotionValue } from "motion/react";
import type { CSSProperties } from "react";
import styles from "./Section4.module.css";

type FounderLineMaskProps = {
  lineIndex: number;
  totalLines: number;
  top: number;
  height: number;
  translateMax: number;
  scrollYProgress: MotionValue<number>;
};

export function FounderLineMask({
  lineIndex,
  totalLines,
  top,
  height,
  translateMax,
  scrollYProgress,
}: FounderLineMaskProps) {
  const segmentStart = lineIndex / totalLines;
  const segmentEnd = (lineIndex + 1) / totalLines;

  const x = useTransform(scrollYProgress, [segmentStart, segmentEnd], [0, translateMax], {
    clamp: true,
  });

  const style: CSSProperties = {
    top: `${top}px`,
    height: `${height}px`,
  };

  return (
    <motion.div
      className={styles.founderLineMask}
      style={{
        ...style,
        x,
        transformPerspective: 1200,
        willChange: "transform",
      }}
      aria-hidden={true}
    />
  );
}
