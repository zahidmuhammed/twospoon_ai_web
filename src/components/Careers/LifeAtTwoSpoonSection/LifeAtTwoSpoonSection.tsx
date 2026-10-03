import styles from "./LifeAtTwoSpoonSection.module.css";
import { LifeAtTwoSpoonGallery } from "./LifeAtTwoSpoonGallery";

export function LifeAtTwoSpoonSection() {
  return (
    <section className={styles.lifeAtTwoSpoonSection}>
      <div className={styles.lifeAtTwoSpoon}>
        <div className={styles.lifeAtTwoSpoon2}>
          <div className={styles.lifeAtTwoSpoon3}>
            <div className={styles.deployingAIToWorkAcrossYourOrganisation2}>
              <p className={styles.lifeAtTwoSpoon4} dir={"auto"}>
                Life at TwoSpoon
              </p>
            </div>
          </div>
          <div
            className={
              styles.twospoonsHelpsAmbitiousOrganisationsOperationalizeAIThroughSystemsDesignedForRealWorldWorkflowsMeasurableOutcomesAndLongTermImpact3
            }
          >
            <p className={styles.wereAssemblingTeam3} dir={"auto"}>
              We're assembling a team of exceptional engineers, researchers, operators, and domain
              experts to transform critical institutions with AI. If you're driven by curiosity and
              real-world impact, we'd love to hear from you.
            </p>
          </div>
        </div>
        <div className={styles.div91}>
          <div className={styles.div90}>
            <LifeAtTwoSpoonGallery />
          </div>
        </div>
        <div className={styles.div92} id={"invisible"}></div>
      </div>
    </section>
  );
}
