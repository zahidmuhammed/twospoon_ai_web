import styles from "./Nav.module.css";
import { Image } from "../../../ui/Image";
import Link from "next/link";
export function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.div10}>
        <div className={styles.div9}>
          <div className={styles.div8} data-framecoded-motion={"rj"}>
            <div className={styles.desktop} data-framecoded-motion={"ri"}>
              <div className={styles.bookCall}>
                <div className={styles.div2}>
                  <Link href={"/"} className={styles.tSLogo} data-framer-page-link-current={"true"}>
                    <div className={styles.div}>
                      <Image
                        className={styles.image}
                        src={"/assets/1IBJt3Kk0BWgZiQy99caMRoTc-8d281a0a7b.png"}
                        alt={"twospoon.ai image"}
                        width={285}
                        height={96}
                        srcSet={
                          "/assets/1IBJt3Kk0BWgZiQy99caMRoTc-0f2ff72f1b.png 143w, /assets/1IBJt3Kk0BWgZiQy99caMRoTc-98b8828716.png 285w, /assets/1IBJt3Kk0BWgZiQy99caMRoTc-ea912e9b9e.png 570w"
                        }
                        sizes={"(max-width: 285px) 100vw, 285px"}
                        priority
                      />
                    </div>
                  </Link>
                  <div className={styles.navClose} data-name={"NavClose"}>
                    <div
                      className={styles.navOpenWhite}
                      data-name={"NavClose"}
                      data-highlight={"true"}
                      tabIndex={0}
                      data-framecoded-motion={"ru3"}
                    >
                      <div className={styles.div22} data-framecoded-motion={"ru1"}></div>
                      <div className={styles.div3} data-framecoded-motion={"ru2"}></div>
                    </div>
                  </div>
                </div>
                <div className={styles.careers}>
                  <nav className={styles.navLinkButton} data-name={"Nav Link Button"}>
                    <Link
                      href={"/careers"}
                      className={styles.tertiaryWhiteText}
                      data-name={"Nav Link Button"}
                      data-highlight={"true"}
                      tabIndex={0}
                      data-framecoded-trigger={"h3777ai"}
                      data-framecoded-state={"h3777aisroot"}
                    >
                      <div className={styles.careers2}>
                        <div className={styles.applyToJoin} data-framecoded-motion={"r5"}>
                          <p
                            className={styles.careers3}
                            dir={"auto"}
                            data-framecoded-state={"t0s19"}
                            data-framecoded-motion={"r4"}
                          >
                            Careers
                          </p>
                        </div>
                      </div>
                    </Link>
                  </nav>
                  <div className={styles.bookCall2}>
                    <a
                      className={styles.white}
                      data-highlight={"true"}
                      tabIndex={0}
                      data-framecoded-trigger={"h1cawftl"}
                      data-framecoded-state={"h1cawftlsroot"}
                      data-framecoded-motion={"re"}
                    >
                      <div className={styles.buttonLabel} data-framecoded-motion={"ra"}>
                        <p
                          className={styles.bookCall3}
                          dir={"auto"}
                          data-framecoded-state={"h1cawftls0_0"}
                          data-framecoded-motion={"r9"}
                        >
                          Book a call
                        </p>
                      </div>
                      <div className={styles.div5} aria-hidden={"true"}>
                        <div className={styles.div4}>
                          <span
                            className={styles.icon}
                            data-framecoded-svg="true"
                            aria-hidden="true"
                            dangerouslySetInnerHTML={{
                              __html:
                                '<svg preserveAspectRatio="none" width="100%" height="100%" style="fill: rgb(0, 0, 0); stroke-width: 1px; stop-color: rgb(0, 0, 0); flood-color: rgb(0, 0, 0); font-family: sans-serif; font-size: 12px; font-weight: 400;"><use href="#svg-707097840_304" style="fill: rgb(0, 0, 0); stroke-width: 1px; stop-color: rgb(0, 0, 0); flood-color: rgb(0, 0, 0); transform-origin: 0px 0px; font-family: sans-serif; font-size: 12px; font-weight: 400;"></use></svg>',
                            }}
                          />
                        </div>
                      </div>
                    </a>
                  </div>
                  <div
                    className={styles.navOpenWhite2}
                    data-name={"NavClose"}
                    data-highlight={"true"}
                    tabIndex={0}
                    data-framecoded-motion={"r1kl"}
                  >
                    <div className={styles.div23} data-framecoded-motion={"r1kj"}></div>
                    <div className={styles.div32} data-framecoded-motion={"r1kk"}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
