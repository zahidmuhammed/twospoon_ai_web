"use client";

import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import {
  BOOKING_CAL_CONFIG,
  BOOKING_CAL_LINK,
  BOOKING_CAL_UI,
} from "@/config/booking";

export function BookCallCalEmbed() {
  useEffect(() => {
    void (async () => {
      const cal = await getCalApi();
      cal("ui", BOOKING_CAL_UI);
    })();
  }, []);

  return (
    <Cal
      calLink={BOOKING_CAL_LINK}
      config={{
        theme: BOOKING_CAL_CONFIG.theme,
        layout: BOOKING_CAL_CONFIG.layout,
      }}
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
    />
  );
}
