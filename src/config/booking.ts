export const BOOKING_EVENT_URL = "https://cal.com/santosh-bishnoi/30min";

export const BOOKING_CAL_LINK = "santosh-bishnoi/30min";

/** Iframe fallback only — same layout/theme as BOOKING_CAL_CONFIG */
export const BOOKING_EMBED_URL = `${BOOKING_EVENT_URL}/embed?layout=month_view&theme=dark`;

export const BOOKING_CAL_CONFIG = {
  theme: "dark",
  layout: "month_view",
} as const;

export const BOOKING_CAL_UI = {
  theme: "dark",
  hideEventTypeDetails: false,
  cssVarsPerTheme: {
    light: { "cal-text-emphasis": "#292929" },
    dark: { "cal-text-emphasis": "#FAFAFA" },
  },
} as const;
