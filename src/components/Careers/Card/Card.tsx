import styles from "./Card.module.css";

export interface CardProps {
  /** Inline SVG markup */
  icon: string;
  /** Text */
  ownershipByDefault: string;
  /** Text */
  takeInitiativeMake: string;
}

export function Card(props: CardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.ownershipByDefault2}>
        <span
          className={styles.icon4}
          data-framecoded-svg="true"
          aria-hidden="true"
          dangerouslySetInnerHTML={{ __html: props.icon }}
        />
        <div className={styles.ownershipByDefault3}>
          <div className={styles.ownershipByDefault4}>
            <div className={styles.ownershipByDefault}>
              <p className={styles.ownershipByDefault5} dir={"auto"}>
                {props.ownershipByDefault}
              </p>
            </div>
          </div>
          <div className={styles.takeInitiativeMake}>
            <div className={styles.takeInitiativeMakeDecisionsAndDriveMeaningfulOutcomes}>
              <p className={styles.takeInitiativeMake2} dir={"auto"}>
                {props.takeInitiativeMake}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
