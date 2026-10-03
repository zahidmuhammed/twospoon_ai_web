"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

export const INDUSTRY_TAB_IDS = [
  "technology",
  "finance",
  "media",
  "healthcare",
  "manufacturing",
] as const;

export type IndustryTabId = (typeof INDUSTRY_TAB_IDS)[number];

type IndustriesTabContextValue = {
  activeIndex: number;
  activeId: IndustryTabId;
  setActiveIndex: (index: number) => void;
  setActiveId: (id: IndustryTabId) => void;
};

const IndustriesTabContext = createContext<IndustriesTabContextValue | null>(null);

export function IndustriesTabProvider({ children }: { children: ReactNode }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const setActiveId = useCallback((id: IndustryTabId) => {
    const index = INDUSTRY_TAB_IDS.indexOf(id);
    if (index >= 0) setActiveIndex(index);
  }, []);

  const value = useMemo(
    () => ({
      activeIndex,
      activeId: INDUSTRY_TAB_IDS[activeIndex],
      setActiveIndex,
      setActiveId,
    }),
    [activeIndex, setActiveId],
  );

  return <IndustriesTabContext.Provider value={value}>{children}</IndustriesTabContext.Provider>;
}

export function useIndustriesTab(): IndustriesTabContextValue {
  const context = useContext(IndustriesTabContext);
  if (!context) {
    throw new Error("useIndustriesTab must be used within IndustriesTabProvider");
  }
  return context;
}

/** Matches Framer export `cubic-bezier(.2,.8,.2,1)` on industries carousel. */
const CAROUSEL_EASE = [0.2, 0.8, 0.2, 1] as const;
const CAROUSEL_DURATION_BASE = 0.757;
const CAROUSEL_DURATION_PER_STEP = 0.055;
const CAROUSEL_DURATION_MAX = 1.05;

export function IndustriesCardsTrack({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) {
  const { activeIndex } = useIndustriesTab();
  const trackRef = useRef<HTMLDivElement>(null);
  const prevIndexRef = useRef(activeIndex);
  const [step, setStep] = useState(1304);
  const reduceMotion = useReducedMotion();

  const slideDistance = Math.abs(activeIndex - prevIndexRef.current);
  const slideDuration = reduceMotion
    ? 0
    : Math.min(
        CAROUSEL_DURATION_MAX,
        CAROUSEL_DURATION_BASE + Math.max(slideDistance - 1, 0) * CAROUSEL_DURATION_PER_STEP,
      );

  useLayoutEffect(() => {
    prevIndexRef.current = activeIndex;
  }, [activeIndex]);

  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track?.firstElementChild) return;

    const measure = () => {
      const first = track.firstElementChild as HTMLElement;
      const gap = Number.parseFloat(getComputedStyle(track).columnGap || "24") || 24;
      const nextStep = first.offsetWidth + gap;
      setStep((prev) => (Math.abs(prev - nextStep) < 0.5 ? prev : nextStep));
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(track);
    if (track.firstElementChild instanceof HTMLElement) {
      observer.observe(track.firstElementChild);
    }
    return () => observer.disconnect();
  }, []);

  const targetX = -activeIndex * step;

  return (
    <motion.div
      ref={trackRef}
      className={className}
      style={{ y: "-50%" }}
      animate={{ x: targetX }}
      initial={false}
      transition={{
        x: {
          type: "tween",
          duration: slideDuration,
          ease: CAROUSEL_EASE,
        },
      }}
    >
      {children}
    </motion.div>
  );
}
