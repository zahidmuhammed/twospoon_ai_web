import styles from "./Section2.module.css";
import galleryLayout from "./CareersHeroGallery.module.css";
import { CareersHeroGallery } from "./CareersHeroGallery";
export function Section2() {
  return (
    <section className={styles.section2} id={"careers-first-section"}>
      <div
        className={`${styles.joinTeamThat} ${galleryLayout.joinTeamThatWithExternalGallery}`}
      >
        <div className={styles.hero}>
          <header className={styles.joinTeamThatHeader}>
            <div className={styles.joinTeamThat2}>
              <div className={styles.h2}>
                <p className={styles.joinTeamThat3} dir={"auto"}>
                  Join a team that turns AI into operational leverage
                </p>
              </div>
            </div>
            <div className={styles.twospoonHelpsAmbitious}>
              <div
                className={
                  styles.twospoonsHelpsAmbitiousOrganisationsOperationalizeAIThroughSystemsDesignedForRealWorldWorkflowsMeasurableOutcomesAndLongTermImpact
                }
              >
                <p className={styles.twospoonHelpsAmbitious2} dir={"auto"}>
                  Twospoon helps ambitious organisations operationalize AI through systems designed
                  for real-world workflows, measurable outcomes, and long-term impact.
                </p>
              </div>
            </div>
          </header>
          <div className={styles.buttonGroup}>
            <div className={styles.viewOpenRoles}>
              <div className={styles.viewOpenRoles2}>
                <a
                  href={"#open-roles"}
                  className={styles.blackNoIcon}
                  data-highlight={"true"}
                  tabIndex={0}
                  data-framecoded-trigger={"h14cuszj"}
                  data-framecoded-state={"h14cuszjsroot"}
                >
                  <div className={styles.buttonLabel}>
                    <p className={styles.viewOpenRoles3} dir={"auto"}>
                      View open roles
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <a href={"#benefits-perks"} className={styles.primaryButton}>
              <div className={styles.buttonLabel2}>
                <p className={styles.learnMore} dir={"auto"}>
                  Learn more
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className={galleryLayout.heroGallerySlot}>
        <CareersHeroGallery />
      </div>
    </section>
  );
}
