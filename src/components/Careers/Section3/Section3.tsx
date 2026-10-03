import styles from "./Section3.module.css";
import hostStyles from "./CareersLogoMarquee.module.css";
import { CareersLogoMarquee } from "./CareersLogoMarquee";

export function Section3() {
  return (
    <section className={styles.section3}>
      <div className={styles.wrapper10}>
        <div className={`${styles.div39} ${hostStyles.maskViewport}`}>
          <CareersLogoMarquee />
        </div>
      </div>
    </section>
  );
}
