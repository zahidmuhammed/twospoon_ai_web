"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { Image } from "../../../ui/Image";
import { BookCallArrow, BookCallButton } from "@/components/BookCall";
import { NAV_LOGO_DARK, NAV_LOGO_WHITE } from "@/config/navAssets";
import styles from "./Nav.module.css";
import { useHomeNavTheme, type HomeNavTheme } from "./useHomeNavTheme";

function themeClass(theme: HomeNavTheme): string {
  if (theme === "solid") return styles.themeSolid;
  if (theme === "footer") return styles.themeFooter;
  return styles.themeHero;
}

function useLightLogo(theme: HomeNavTheme): boolean {
  return theme === "hero" || theme === "footer";
}

export function Nav() {
  const theme = useHomeNavTheme();
  const lightLogo = useLightLogo(theme);
  const logo = lightLogo ? NAV_LOGO_WHITE : NAV_LOGO_DARK;

  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMobile();
    };
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileOpen, closeMobile]);

  useEffect(() => {
    closeMobile();
  }, [theme, closeMobile]);

  return (
    <nav className={`${styles.root} ${themeClass(theme)}`} aria-label="Site">
      <header className={styles.bar}>
        <div className={styles.inner}>
          <Link href="/" className={styles.logoLink} aria-current="page">
            <Image
              className={styles.logo}
              src={logo.src}
              alt="Twospoon"
              width={logo.width}
              height={logo.height}
              srcSet={logo.srcSet}
              sizes={logo.sizes}
              priority
            />
          </Link>

          <div className={styles.desktopActions}>
            <Link href="/careers" className={styles.careersLink}>
              Careers
            </Link>
            <BookCallButton className={styles.cta}>
              Book a call
              <BookCallArrow className={styles.ctaIcon} />
            </BookCallButton>
          </div>

          <button
            type="button"
            className={`${styles.menuButton} ${mobileOpen ? styles.menuButtonOpen : ""}`}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((open) => !open)}
          >
            <span className={styles.menuIcon} aria-hidden="true">
              <span className={styles.menuLine} />
              <span className={styles.menuLine} />
              <span className={styles.menuLine} />
            </span>
          </button>
        </div>
      </header>

      {mobileOpen ? (
        <>
          <div className={styles.mobileBackdrop} role="presentation" onClick={closeMobile} />
          <div className={styles.mobilePanel} role="dialog" aria-modal="true" aria-label="Menu">
            <Link href="/careers" className={styles.mobileCareers} onClick={closeMobile}>
              Careers
            </Link>
            <BookCallButton className={styles.mobileCta} onClick={closeMobile}>
              Book a call
              <BookCallArrow className={styles.mobileCtaIcon} />
            </BookCallButton>
          </div>
        </>
      ) : null}
    </nav>
  );
}
