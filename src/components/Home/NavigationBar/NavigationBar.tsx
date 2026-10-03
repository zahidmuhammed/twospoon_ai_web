import styles from "./NavigationBar.module.css";

export function NavigationBar() {
  return (
    <nav className={styles.navigationBar}>
      <div className={styles.technology12}>
        <div className={styles.activeDesktop} data-highlight={"true"} tabIndex={0}>
          <div className={styles.technology13}>
            <div className={styles.name}>
              <p className={styles.technology14} dir={"auto"}>
                Technology
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.finance142}>
        <div
          className={styles.inactiveDesktop}
          data-highlight={"true"}
          tabIndex={0}
          data-framecoded-trigger={"h7aty3q"}
          data-framecoded-state={"h7aty3qsroot"}
        >
          <div className={styles.finance152}>
            <div className={styles.name2}>
              <p className={styles.finance162} dir={"auto"} data-framecoded-state={"h7aty3qs0_0_0"}>
                Finance
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.media12}>
        <div
          className={styles.inactiveDesktop2}
          data-highlight={"true"}
          tabIndex={0}
          data-framecoded-trigger={"h7ktjsp"}
          data-framecoded-state={"h7ktjspsroot"}
        >
          <div className={styles.media13}>
            <div className={styles.name3}>
              <p className={styles.media14} dir={"auto"} data-framecoded-state={"h7ktjsps0_0_0"}>
                Media
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.healthcare12}>
        <div
          className={styles.inactiveDesktop3}
          data-highlight={"true"}
          tabIndex={0}
          data-framecoded-trigger={"h6quqps"}
          data-framecoded-state={"h6quqpssroot"}
        >
          <div className={styles.healthcare13}>
            <div className={styles.name4}>
              <p
                className={styles.healthcare14}
                dir={"auto"}
                data-framecoded-state={"h6quqpss0_0_0"}
              >
                Healthcare
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.manufacturing12}>
        <div
          className={styles.inactiveDesktop4}
          data-highlight={"true"}
          tabIndex={0}
          data-framecoded-trigger={"h70ucer"}
          data-framecoded-state={"h70ucersroot"}
        >
          <div className={styles.manufacturing13}>
            <div className={styles.name5}>
              <p
                className={styles.manufacturing14}
                dir={"auto"}
                data-framecoded-state={"h70ucers0_0_0"}
              >
                Manufacturing
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
