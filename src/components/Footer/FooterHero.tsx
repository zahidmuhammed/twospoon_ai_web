import styles from "../Home/Home/Home.module.css";
import { Image } from "../../ui/Image";
import Link from "next/link";
import { BookCallArrow, BookCallButton } from "@/components/BookCall";
import { UnicornScene } from "@/components/Unicorn";

export const FOOTER_HERO_ID_HOME = "home-footer-hero";
export const FOOTER_HERO_ID_CAREERS = "careers-footer-hero";

type FooterHeroProps = {
  id?: string;
  careersLinkCurrent?: boolean;
};

export function FooterHero({
  id = FOOTER_HERO_ID_HOME,
  careersLinkCurrent = false,
}: FooterHeroProps) {
  return (
    <div className={styles.div1802} id={id}>
      <div className={styles.p2026TwospoonAll}>
        <div className={styles.p2026TwospoonAll2}>
          <div className={styles.turnAIInto}>
            <div className={styles.specialisedAIFor5}>
              <div className={styles.specialisedAIFor6}>
                <div className={styles.specialisedAIFor7}>
                  <div className={styles.specialisedAIFor8} data-border={"true"}>
                    <div className={styles.description3}>
                      <p className={styles.specialisedAIFor9} dir={"auto"}>
                        Specialised AI for your business
                      </p>
                    </div>
                  </div>
                  <div className={styles.deployingAIToWorkAcrossYourOrganisation6}>
                    <p className={styles.turnAIInto2} dir={"auto"}>
                      Turn AI Into Operational Leverage
                    </p>
                  </div>
                  <div className={styles.description4}>
                    <p className={styles.moveBeyondExperiments} dir={"auto"}>
                      Move beyond experiments and deploy systems engineered around your workflows,
                      data, and business reality.
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.bookCall13}>
                <BookCallButton
                  className={styles.white3}
                  data-highlight={"true"}
                  tabIndex={0}
                >
                  <div className={styles.buttonLabel5}>
                    <p className={styles.bookCall14} dir={"auto"}>
                      Book a call
                    </p>
                  </div>
                  <div className={styles.div171} aria-hidden={"true"}>
                    <div className={styles.div1702}>
                      <BookCallArrow className={styles.icon17} />
                    </div>
                  </div>
                </BookCallButton>
              </div>
            </div>
          </div>
          <div className={styles.copyrightAndSocials}>
            <div className={styles.copyright}>
              <div className={styles.frame2} aria-hidden={"true"}></div>
              <div className={styles.p2025OrdinaAllRightsReserved}>
                <p className={styles.p2026TwospoonAll3} dir={"auto"}>
                  2026 Twospoon - All Rights Reserved
                </p>
              </div>
            </div>
            <div className={styles.careers4}>
              <div className={styles.careers5}>
                <div className={styles.p2025OrdinaAllRightsReserved2}>
                  <p className={styles.careers6} dir={"auto"}>
                    <Link
                      href={"/careers"}
                      className={styles.careersLink}
                      {...(careersLinkCurrent
                        ? { "data-framer-page-link-current": "true" }
                        : {})}
                    >
                      Careers
                    </Link>
                  </p>
                </div>
                <div className={styles.p2025OrdinaAllRightsReserved3}>
                  <p className={styles.privacyPolicy} dir={"auto"}>
                    <a
                      href={"https://twospoon.ai/privacy_policy.html"}
                      target={"_blank"}
                      rel="noopener noreferrer"
                      className={styles.privacyPolicyLink}
                    >
                      Privacy Policy
                    </a>
                  </p>
                </div>
                <div className={styles.p2025OrdinaAllRightsReserved4}>
                  <p className={styles.termsOfService} dir={"auto"}>
                    <a
                      href={"https://twospoon.ai/terms_and_conditions.html"}
                      target={"_blank"}
                      rel="noopener noreferrer"
                      className={styles.termsOfServiceLink}
                    >
                      Terms of service
                    </a>
                  </p>
                </div>
              </div>
              <a
                href={"https://www.linkedin.com/company/twospoon/"}
                target={"_blank"}
                rel="noopener noreferrer"
                className={styles.socials}
              >
                <div className={styles.div1742} aria-hidden={"true"}></div>
              </a>
            </div>
          </div>
          <div className={styles.overlay22}></div>
          <div className={styles.madeWithUnicorn5}>
            <div className={styles.madeWithUnicorn6}>
              <UnicornScene embed={"embed_002"} className={styles.madeWithUnicorn7} lazyLoad>
                <a
                  href={"https://unicorn.studio?utm_source=public-url"}
                  target={"_blank"}
                  rel="noopener noreferrer"
                  className={styles.madeWithUnicornLink2}
                >
                  <Image
                    className={styles.madeWithUnicorn8}
                    src={"/assets/made_in_us_small_web-2eb0d8d979.svg"}
                    alt={"Made with unicorn.studio"}
                  />
                </a>
              </UnicornScene>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
