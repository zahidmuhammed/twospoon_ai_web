import styles from "./Section5.module.css";
import { Section5PhotoMarquee } from "./Section5PhotoMarquee";
import stripStyles from "@/ui/MarqueeStrip/MarqueeStrip.module.css";

export function Section5() {
  return (
    <section className={styles.section5}>
      <div className={styles.container3}>
        <div className={styles.div55}>
          <div className={`${styles.div54} ${stripStyles.fullBleed}`}>
            <Section5PhotoMarquee />
          </div>
        </div>
      </div>
    </section>
  );
}
