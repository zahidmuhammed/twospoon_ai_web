"use client";

import { useReducedMotion, useScroll } from "motion/react";
import { useCallback, useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import styles from "./Section4.module.css";
import { FounderLineMask } from "./FounderLineMask";
import {
  measureFounderTextLines,
  type FounderTextLineLayout,
} from "./measureFounderTextLines";

type FounderNoteRevealProps = {
  children: ReactNode;
  className?: string;
};

export function FounderNoteReveal({ children, className }: FounderNoteRevealProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const scrollRootRef = useRef<HTMLElement | null>(null);
  const [scrollRootReady, setScrollRootReady] = useState(false);
  const [layout, setLayout] = useState<FounderTextLineLayout | null>(null);
  const reducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: scrollRootReady ? scrollRootRef : undefined,
    offset: ["start 0.82", "end 0.18"],
  });

  const remeasure = useCallback(() => {
    const root = rootRef.current;
    const paragraph = paragraphRef.current;
    if (!root || !paragraph) return;

    const next = measureFounderTextLines(paragraph, root);
    if (next.lines.length === 0) return;
    setLayout(next);
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    scrollRootRef.current =
      root.closest<HTMLElement>("[data-founder-note-scroll-target]") ?? null;
    setScrollRootReady(Boolean(scrollRootRef.current));
  }, []);

  useLayoutEffect(() => {
    remeasure();

    const root = rootRef.current;
    const paragraph = paragraphRef.current;
    if (!root || !paragraph) return;

    let frame = 0;
    const scheduleRemeasure = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(remeasure);
    };

    const resizeObserver = new ResizeObserver(scheduleRemeasure);
    resizeObserver.observe(root);
    resizeObserver.observe(paragraph);

    window.addEventListener("resize", scheduleRemeasure);

    const fonts = document.fonts;
    if (fonts?.ready) {
      fonts.ready.then(scheduleRemeasure).catch(() => undefined);
    }

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      window.removeEventListener("resize", scheduleRemeasure);
    };
  }, [remeasure]);

  const paragraphClass = [className, styles.founderNoteText].filter(Boolean).join(" ");

  return (
    <div
      ref={rootRef}
      className={styles.founderNoteRevealRoot}
      data-founder-scroll-reveal={true}
    >
      <p ref={paragraphRef} className={paragraphClass} dir={"auto"}>
        {children}
      </p>
      {!reducedMotion &&
        layout?.lines.map((line, lineIndex) => (
        <FounderLineMask
          key={`${line.top}-${lineIndex}`}
          lineIndex={lineIndex}
          totalLines={layout.lines.length}
          top={line.top}
          height={line.height}
          translateMax={layout.translateMax}
          scrollYProgress={scrollYProgress}
        />
        ))}
    </div>
  );
}
