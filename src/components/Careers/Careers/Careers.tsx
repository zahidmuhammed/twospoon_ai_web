import styles from "./Careers.module.css";
import { BenefitsAndPerksSection } from "../BenefitsAndPerksSection";
import { EngineeringSection } from "../EngineeringSection";
import { LifeAtTwoSpoonSection } from "../LifeAtTwoSpoonSection";
import { Nav } from "../Nav";
import { Section2 } from "../Section2";
import { Section3 } from "../Section3";
import { Section4 } from "../Section4";
import { Section5 } from "../Section5";
import { FooterHero, FOOTER_HERO_ID_CAREERS } from "@/components/Footer";

export function Careers() {
  return (
    <div className={styles.div120} id={"main"}>
      <section className={styles.section} data-layout-template={"true"}>
        <div className={styles.wereAssemblingTeam}>
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
          <EngineeringSection />
          <BenefitsAndPerksSection />
          <LifeAtTwoSpoonSection />
        </div>
        <div className={styles.div94} id={"overlay"}></div>
        <div className={styles.div95}></div>
        <div className={styles.div106}>
          <Nav />
        </div>
        <FooterHero id={FOOTER_HERO_ID_CAREERS} careersLinkCurrent />
      </section>
    </div>
  );
}
