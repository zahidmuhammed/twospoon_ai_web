"use client";

import type { CSSProperties } from "react";
import { useReducedMotion } from "motion/react";
import { Image } from "../../../ui/Image";
import { Marquee } from "@/ui/Marquee";
import { SECTION5_PHOTO_MARQUEE_VARS } from "@/ui/MarqueeStrip/marqueePresets";
import stripStyles from "@/ui/MarqueeStrip/MarqueeStrip.module.css";
import hostStyles from "./Section5PhotoMarquee.module.css";
import styles from "./Section5.module.css";
import { SECTION5_MARQUEE_SLIDES } from "./section5MarqueeSlides";

const ITEM_CLASS = [styles.item24, styles.item25, styles.item26, styles.item27] as const;
const EL_CLASS = [styles.el15, styles.el16, styles.el17, styles.el18] as const;
const IMG_WRAP_CLASS = [styles.iMG16, styles.iMG17, styles.iMG18, styles.iMG19] as const;
const FRAME_CLASS = [styles.div50, styles.div51, styles.div52, styles.div53] as const;
const IMAGE_CLASS = [styles.image25, styles.image26, styles.image27, styles.image28] as const;

export function Section5PhotoMarquee() {
  const reduceMotion = useReducedMotion();

  return (
    <div className={hostStyles.marqueeHost}>
      <Marquee
        className={stripStyles.marquee}
        pauseOnHover
        play={!reduceMotion}
        repeat={4}
        style={SECTION5_PHOTO_MARQUEE_VARS as CSSProperties}
      >
        <ul className={styles.list3}>
          {SECTION5_MARQUEE_SLIDES.map((slide) => (
            <li
              key={slide.index}
              className={ITEM_CLASS[slide.index]}
              aria-hidden={false}
              aria-posinset={slide.index + 1}
              aria-setsize={SECTION5_MARQUEE_SLIDES.length}
            >
              <div className={EL_CLASS[slide.index]}>
                <div className={IMG_WRAP_CLASS[slide.index]}>
                  <div className={FRAME_CLASS[slide.index]}>
                    <Image
                      className={IMAGE_CLASS[slide.index]}
                      src={slide.src}
                      alt={slide.alt}
                      width={slide.width}
                      height={slide.height}
                      srcSet={slide.srcSet}
                      sizes={slide.sizes}
                    />
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Marquee>
    </div>
  );
}
