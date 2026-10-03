import styles from "./BenefitsAndPerksSection.module.css";
import { Card } from "../Card";

export function BenefitsAndPerksSection() {
  return (
    <section className={styles.benefitsAndPerksSection} id={"benefits-perks"}>
      <div className={styles.benefitsAndPerks}>
        <div className={styles.benefitsAndPerks2}>
          <div className={styles.benefitsAndPerks3}>
            <div className={styles.deployingAIToWorkAcrossYourOrganisation}>
              <p className={styles.benefitsAndPerks4} dir={"auto"}>
                Benefits and Perks
              </p>
            </div>
          </div>
        </div>
        <div className={styles.frame2147238986}>
          <Card
            icon={
              '<svg role="presentation" viewBox="0 0 24 24" style="fill: rgb(0, 0, 0); stroke-width: 1px; stop-color: rgb(0, 0, 0); flood-color: rgb(0, 0, 0); font-family: sans-serif; font-size: 12px; font-weight: 400;"><use href="#1117325152" style="fill: rgb(0, 0, 0); stroke-width: 1px; stop-color: rgb(0, 0, 0); flood-color: rgb(0, 0, 0); transform-origin: 0px 0px; font-family: sans-serif; font-size: 12px; font-weight: 400;"></use></svg>'
            }
            ownershipByDefault={"Ownership by default"}
            takeInitiativeMake={"Take initiative, make decisions, and drive meaningful outcomes."}
          />
          <Card
            icon={
              '<svg role="presentation" viewBox="0 0 24 24" style="fill: rgb(0, 0, 0); stroke-width: 1px; stop-color: rgb(0, 0, 0); flood-color: rgb(0, 0, 0); font-family: sans-serif; font-size: 12px; font-weight: 400;"><use href="#3983989637" style="fill: rgb(0, 0, 0); stroke-width: 1px; stop-color: rgb(0, 0, 0); flood-color: rgb(0, 0, 0); transform-origin: 0px 0px; font-family: sans-serif; font-size: 12px; font-weight: 400;"></use></svg>'
            }
            ownershipByDefault={"Learn across disciplines"}
            takeInitiativeMake={"Work across AI, design, engineering, and strategy every day."}
          />
          <Card
            icon={
              '<svg role="presentation" viewBox="0 0 24 24" style="fill: rgb(0, 0, 0); stroke-width: 1px; stop-color: rgb(0, 0, 0); flood-color: rgb(0, 0, 0); font-family: sans-serif; font-size: 12px; font-weight: 400;"><use href="#147701615" style="fill: rgb(0, 0, 0); stroke-width: 1px; stop-color: rgb(0, 0, 0); flood-color: rgb(0, 0, 0); transform-origin: 0px 0px; font-family: sans-serif; font-size: 12px; font-weight: 400;"></use></svg>'
            }
            ownershipByDefault={"Flexible by design"}
            takeInitiativeMake={"Work where you do your best thinking while staying connected."}
          />
        </div>
      </div>
    </section>
  );
}
