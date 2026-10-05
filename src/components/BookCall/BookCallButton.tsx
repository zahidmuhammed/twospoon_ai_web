"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { BookCallCalEmbed } from "./BookCallCalEmbed";
import buttonStyles from "./BookCallButton.module.css";
import modalStyles from "./BookCallModal.module.css";

export interface BookCallButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function BookCallButton({ children, className, onClick, ...rest }: BookCallButtonProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  const overlay =
    open && mounted ? (
      <div className={modalStyles.backdrop} role="presentation">
        <button
          type="button"
          className={`${buttonStyles.reset} ${modalStyles.close}`}
          onClick={(event) => {
            event.stopPropagation();
            close();
          }}
          aria-label="Close"
        >
          ×
        </button>
        <div className={modalStyles.embedHost}>
          <BookCallCalEmbed />
        </div>
      </div>
    ) : null;

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
      {overlay ? createPortal(overlay, document.body) : null}
    </>
  );
}
