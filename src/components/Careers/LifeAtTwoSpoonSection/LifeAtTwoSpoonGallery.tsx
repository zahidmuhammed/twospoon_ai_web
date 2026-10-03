"use client";

import { useRef, useState } from "react";
import styles from "./LifeAtTwoSpoonSection.module.css";
import { Image } from "../../../ui/Image";
import { LIFE_AT_GALLERY_SLIDES } from "./lifeAtGallerySlides";

const MAIN_CROSSFADE_MS = 1400;

const MAIN_LAYER_CLASS = [styles.el20, styles.el21, styles.el22, styles.el23] as const;
const MAIN_INNER_CLASS = [styles.div82, styles.div83, styles.div84, styles.div85] as const;
const MAIN_IMAGE_CLASS = [styles.image29, styles.image30, styles.image31, styles.image32] as const;
const THUMB_HIT_CLASS = [styles.el24, styles.el25, styles.el26, styles.el27] as const;
const THUMB_INNER_CLASS = [styles.div86, styles.div87, styles.div88, styles.div89] as const;
const THUMB_IMAGE_CLASS = [styles.image33, styles.image34, styles.image35, styles.image36] as const;
const THUMB_WRAPPER_CLASS = [
  styles.iMGWrapper2,
  styles.iMGWrapper3,
  styles.iMGWrapper4,
  styles.iMGWrapper5,
] as const;
const THUMB_OUTER_CLASS = [styles.inactive, styles.inactive3, styles.inactive5, styles.active2] as const;

export function LifeAtTwoSpoonGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [leavingIndex, setLeavingIndex] = useState<number | null>(null);
  const leaveTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const selectSlide = (index: number) => {
    if (index === activeIndex) {
      return;
    }

    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
    }

    setLeavingIndex(activeIndex);
    setActiveIndex(index);

    leaveTimeoutRef.current = setTimeout(() => {
      setLeavingIndex(null);
      leaveTimeoutRef.current = null;
    }, MAIN_CROSSFADE_MS);
  };

  return (
    <div className={styles.desktop01} data-border={"true"}>
      <div className={styles.imagesWrapper}>
        {LIFE_AT_GALLERY_SLIDES.map((slide, index) => {
          const isActive = index === activeIndex;
          const isLeaving = index === leavingIndex;

          return (
            <div
              key={slide.main.src}
              className={[
                MAIN_LAYER_CLASS[index],
                styles.mainSlideLayer,
                isActive ? styles.mainSlideVisible : styles.mainSlideHidden,
                isLeaving ? styles.mainSlideLeaving : "",
              ]
                .filter(Boolean)
                .join(" ")}
              aria-hidden={!isActive}
            >
              <div className={MAIN_INNER_CLASS[index]}>
                <Image
                  className={MAIN_IMAGE_CLASS[index]}
                  src={slide.main.src}
                  alt={slide.main.alt}
                  width={slide.main.width}
                  height={slide.main.height}
                  srcSet={slide.main.srcSet}
                  sizes={slide.main.sizes}
                  style={
                    slide.main.objectPosition
                      ? { objectPosition: slide.main.objectPosition }
                      : undefined
                  }
                />
              </div>
            </div>
          );
        })}
        <div className={styles.overlay}></div>
      </div>
      <div className={styles.smallImagesWrapper}>
        {LIFE_AT_GALLERY_SLIDES.map((slide, index) => {
          const isActive = index === activeIndex;
          return (
            <div key={slide.thumb.src} className={THUMB_OUTER_CLASS[index]}>
              <div
                className={isActive ? styles.active : styles.inactive2}
                data-border={"true"}
              >
                <div className={THUMB_WRAPPER_CLASS[index]}>
                  <button
                    type="button"
                    className={[
                      THUMB_HIT_CLASS[index],
                      isActive ? styles.thumbSelected : styles.thumbDimmed,
                    ].join(" ")}
                    data-highlight={"true"}
                    aria-label={slide.thumb.alt}
                    aria-pressed={isActive}
                    onClick={() => selectSlide(index)}
                  >
                    <div className={THUMB_INNER_CLASS[index]}>
                      <Image
                        className={THUMB_IMAGE_CLASS[index]}
                        src={slide.thumb.src}
                        alt={slide.thumb.alt}
                        width={slide.thumb.width}
                        height={slide.thumb.height}
                        srcSet={slide.thumb.srcSet}
                        sizes={slide.thumb.sizes}
                      />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
