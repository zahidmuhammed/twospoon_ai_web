import type { CSSProperties } from "react";

export const HERO_IMAGE_MARQUEE_VARS: CSSProperties = {
  "--marquee-gap": "24px",
  "--marquee-duration": "120s",
} as CSSProperties;

export const PARTNER_LOGO_MARQUEE_VARS: CSSProperties = {
  "--marquee-gap": "64px",
  "--marquee-duration": "55s",
} as CSSProperties;

/** Home hero strip: original `.list` used 0 column-gap between logos */
export const HOME_LOGO_MARQUEE_VARS: CSSProperties = {
  "--marquee-gap": "0px",
  "--marquee-duration": "55s",
} as CSSProperties;

export const CAREERS_LOGO_MARQUEE_VARS: CSSProperties = {
  "--marquee-gap": "0px",
  "--marquee-duration": "55s",
} as CSSProperties;

export const SECTION5_PHOTO_MARQUEE_VARS: CSSProperties = {
  "--marquee-gap": "24px",
  "--marquee-duration": "70s",
} as CSSProperties;
