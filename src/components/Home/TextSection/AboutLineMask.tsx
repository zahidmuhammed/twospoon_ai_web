"use client";

import { motion, useScroll, useTransform } from "motion/react";
import type { RefObject } from "react";
import { LINE_REVEAL_TRANSLATE_MAX } from "./aboutLineRevealCurve";
import { useAboutVisibleLineCount } from "./useAboutVisibleLineCount";

type AboutLineMaskProps = {
  className: string;
  aboutUsRef: RefObject<HTMLDivElement | null>;
  lineIndex: number;
};

export function AboutLineMask({ className, aboutUsRef, lineIndex }: AboutLineMaskProps) {
  const visibleLineCount = useAboutVisibleLineCount();
  const isActive = lineIndex < visibleLineCount;
  const sequenceIndex = isActive ? lineIndex : 0;
  const segmentStart = sequenceIndex / visibleLineCount;
  const segmentEnd = (sequenceIndex + 1) / visibleLineCount;

  const { scrollYProgress } = useScroll({
    target: aboutUsRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(
    scrollYProgress,
    isActive ? [segmentStart, segmentEnd] : [0, 1],
    isActive ? [0, LINE_REVEAL_TRANSLATE_MAX] : [0, 0],
  );

  return (
    <motion.div
      className={className}
      style={{
        x,
        transformPerspective: 1200,
        willChange: "transform",
      }}
    />
  );
}
