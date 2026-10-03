"use client";

import type { ComponentPropsWithoutRef, CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";
import styles from "./Marquee.module.css";

export interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: ReactNode;
  repeat?: number;
  /** When false, animation is paused (e.g. prefers-reduced-motion). */
  play?: boolean;
  style?: CSSProperties;
}

/**
 * Infinite horizontal marquee (Magic UI pattern, CSS-module implementation).
 * @see https://magicui.design/docs/components/marquee
 */
export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  repeat = 4,
  play = true,
  style,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      style={style}
      className={cn(
        styles.root,
        pauseOnHover && styles.pauseOnHover,
        !play && styles.paused,
        className,
      )}
    >
      {Array.from({ length: repeat }, (_, index) => (
        <div
          key={index}
          className={styles.track}
          style={reverse ? { animationDirection: "reverse" } : undefined}
          aria-hidden={index > 0 ? true : undefined}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
