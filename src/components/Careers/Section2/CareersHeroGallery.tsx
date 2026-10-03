"use client";

import { useReducedMotion } from "motion/react";
import { Image } from "../../../ui/Image";
import { Marquee } from "@/ui/Marquee";
import { CAREERS_HERO_SLIDES } from "./careersHeroSlides";
import { HERO_IMAGE_MARQUEE_VARS } from "@/ui/MarqueeStrip/marqueePresets";
import stripStyles from "@/ui/MarqueeStrip/MarqueeStrip.module.css";
import galleryStyles from "./CareersHeroGallery.module.css";
import styles from "./Section2.module.css";

function slideClassNames(index: number) {
  const suffix = index === 1 ? "" : String(index);
  return {
    item: styles[`item${suffix}` as keyof typeof styles],
    el: styles[`el${suffix}` as keyof typeof styles],
    img: styles[`iMG${suffix}` as keyof typeof styles],
    frame: styles[`div${index + 4}` as keyof typeof styles],
    image: styles[`image${suffix}` as keyof typeof styles],
  };
}

export function CareersHeroGallery() {
  const reduceMotion = useReducedMotion();

  return (
    <div className={stripStyles.fullBleed}>
      <div className={`${styles.div19} ${galleryStyles.div19Stretch}`}>
        <Marquee
          className={stripStyles.marquee}
          pauseOnHover
          play={!reduceMotion}
          repeat={4}
          data-motion-hover-root
          style={HERO_IMAGE_MARQUEE_VARS}
        >
          {CAREERS_HERO_SLIDES.map((slide) => {
            const cls = slideClassNames(slide.index);
            return (
              <div key={slide.index} className={stripStyles.slide}>
                <div className={cls.item}>
                  <div className={cls.el}>
                    <div className={cls.img}>
                      <div className={cls.frame}>
                        <Image
                          className={cls.image}
                          src={slide.src}
                          alt={slide.alt}
                          width={slide.width}
                          height={slide.height}
                          srcSet={slide.srcSet}
                          sizes={slide.sizes}
                          priority={slide.priority}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Marquee>
      </div>
    </div>
  );
}
