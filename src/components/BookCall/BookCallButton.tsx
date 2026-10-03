"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { CALENDLY_SCHEDULING_URL } from "@/config/booking";
import buttonStyles from "./BookCallButton.module.css";
import modalStyles from "./BookCallModal.module.css";
import { loadCalendlyWidget } from "./loadCalendlyWidget";

export interface BookCallButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function BookCallButton({ children, className, onClick, ...rest }: BookCallButtonProps) {
  const [open, setOpen] = useState(false);
  const embedHostRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, close]);

  useEffect(() => {
    if (!open) return;

    const host = embedHostRef.current;
    if (!host) return;

    host.innerHTML = "";
    let cancelled = false;

    loadCalendlyWidget()
      .then(() => {
        if (cancelled || !embedHostRef.current || !window.Calendly) return;
        window.Calendly.initInlineWidget({
          url: CALENDLY_SCHEDULING_URL,
          parentElement: embedHostRef.current,
          prefill: {},
          utm: {},
        });
      })
      .catch((error) => {
        console.log("🚀 Calendly embed failed to load", error);
      });

    return () => {
      cancelled = true;
      host.innerHTML = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className={[buttonStyles.reset, className].filter(Boolean).join(" ")}
        onClick={(event) => {
          onClick?.(event);
          if (!event.defaultPrevented) setOpen(true);
        }}
        {...rest}
      >
        {children}
      </button>
      {open ? (
        <div
          className={modalStyles.backdrop}
          role="presentation"
          onClick={(event) => {
            if (event.target === event.currentTarget) close();
          }}
        >
          <div className={modalStyles.panel} role="dialog" aria-modal="true" aria-label="Book a call">
            <button type="button" className={modalStyles.close} onClick={close} aria-label="Close">
              ×
            </button>
            <div ref={embedHostRef} className={modalStyles.embedHost} />
          </div>
        </div>
      ) : null}
    </>
  );
}
