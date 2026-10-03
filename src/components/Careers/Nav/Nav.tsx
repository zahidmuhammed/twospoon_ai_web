"use client";

import styles from "./Nav.module.css";
import { Image } from "../../../ui/Image";
import Link from "next/link";
import { BookCallButton } from "@/components/BookCall";
import { useCareersNavOverFooter } from "./useCareersNavOverFooter";
import { useCareersNavSolidBackground } from "./useCareersNavSolidBackground";

export function Nav() {
  const overFooter = useCareersNavOverFooter();
  const solidBackground = useCareersNavSolidBackground();
  const themeClass = overFooter ? styles.navThemeOnFooter : styles.navThemeOnContent;
  const backgroundClass =
    overFooter || !solidBackground
      ? styles.navTransparentBackground
      : styles.navSolidBackground;

  return (
    <nav className={`${styles.nav} ${themeClass} ${backgroundClass}`}>
      <div className={styles.div105}>
        <div className={styles.div104}>
          <div className={styles.div103}>
            <div className={styles.desktopBlack} data-framecoded-motion={"r2cg"}>
              <div className={styles.bookCall} data-framecoded-motion={"r2cf"}>
                <div className={styles.div97} data-framecoded-motion={"r2c1"}>
                  <Link href={"/"} className={styles.tSLogo} data-framecoded-motion={"r2c0"}>
                    <div className={styles.div96}>
                      <Image
                        className={styles.image37}
                        src={"/assets/v3gpFv7Huv6h1IzaQwOzHc4vfE-1d557d16d8.png"}
                        alt={"Image37"}
                        width={285}
                        height={96}
                        srcSet={
                          "/assets/v3gpFv7Huv6h1IzaQwOzHc4vfE-ae3080bf22.png 143w, /assets/v3gpFv7Huv6h1IzaQwOzHc4vfE-d4d564441a.png 285w, /assets/v3gpFv7Huv6h1IzaQwOzHc4vfE-7235382e07.png 570w"
                        }
                        sizes={"(max-width: 285px) 100vw, 285px"}
                      />
                    </div>
                  </Link>
                  <div className={styles.navClose} data-name={"NavClose"}>
                    <nav
                      className={styles.navOpenBlack}
                      data-name={"NavClose"}
                      data-highlight={"true"}
                      tabIndex={0}
                    >
                      <div className={styles.div902}></div>
                      <div className={styles.div912}></div>
                    </nav>
                  </div>
                </div>
                <div className={styles.careers}>
                  <nav className={styles.navLinkButton} data-name={"Nav Link Button"}>
                    <Link
                      href={"/careers"}
                      className={
                        overFooter ? styles.tertiaryWhiteText : styles.tertiaryBlackTetx
                      }
                      data-name={"Nav Link Button"}
                      data-highlight={"true"}
                      data-framer-page-link-current={"true"}
                      tabIndex={0}
                    >
                      <div className={styles.careers2}>
                        <div className={styles.applyToJoin}>
                          <p className={styles.careers3} dir={"auto"}>
                            Careers
                          </p>
                        </div>
                      </div>
                    </Link>
                  </nav>
                  <div className={styles.bookCall2}>
                    <BookCallButton
                      className={overFooter ? styles.white : styles.black}
                      data-highlight={"true"}
                      tabIndex={0}
                    >
                      <div className={styles.buttonLabel}>
                        <p className={styles.bookCall3} dir={"auto"}>
                          Book a call
                        </p>
                      </div>
                      <div className={styles.div100} aria-hidden={"true"}>
                        <div className={styles.div99}>
                          <span
                            className={styles.icon7}
                            data-framecoded-svg="true"
                            aria-hidden="true"
                            dangerouslySetInnerHTML={{
                              __html:
                                '<svg preserveAspectRatio="none" width="100%" height="100%" style="fill: currentColor; stroke-width: 1px;"><use href="#svg-707097840_304"></use></svg>',
                            }}
                          />
                        </div>
                      </div>
                    </BookCallButton>
                  </div>
                  <nav
                    className={styles.navOpenBlack2}
                    data-name={"NavClose"}
                    data-highlight={"true"}
                    tabIndex={0}
                  >
                    <div className={styles.div903}></div>
                    <div className={styles.div913}></div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
