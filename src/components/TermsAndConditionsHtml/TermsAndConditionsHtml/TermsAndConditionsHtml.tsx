import styles from "./TermsAndConditionsHtml.module.css";
import Link from "next/link";
export function TermsAndConditionsHtml() {
  return (
    <main className={styles.pageNotFound}>
      <span> </span>
      <section>
        <span> </span>
        <span
          className={styles.icon}
          data-framecoded-svg="true"
          aria-hidden="true"
          dangerouslySetInnerHTML={{
            __html:
              '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="21" fill="currentColor" style="fill: rgb(51, 51, 51); stroke-width: 1px; stop-color: rgb(0, 0, 0); flood-color: rgb(0, 0, 0); font-family: Inter, sans-serif; font-size: 12px; font-weight: 500;">\n        <path d="M 14 0 L 14 7 L 7 7 L 0 0 Z M 14 14 L 7 14 L 7 21 L 0 14 L 0 7 L 7 7 Z" style="fill: rgb(51, 51, 51); stroke-width: 1px; stop-color: rgb(0, 0, 0); flood-color: rgb(0, 0, 0); transform-origin: 0px 0px; font-family: Inter, sans-serif; font-size: 12px; font-weight: 500;"></path>\n      </svg>',
          }}
        />
        <span> </span>
      </section>
      <h1 className={styles.h1}> Page Not Found </h1>
      <div className={styles.thePageYou}>
        {" "}
        The page you are looking for does not exist or may have been moved.{" "}
      </div>
      <Link href={"/"} className={styles.backToHomeLink} role={"button"}>
        Back to Home
      </Link>
      <span> </span>
    </main>
  );
}
