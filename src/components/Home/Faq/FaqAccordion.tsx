"use client";

import { motion, useReducedMotion } from "motion/react";
import { useCallback, useState } from "react";
import { FAQ_ITEMS } from "./faqContent";
import styles from "./FaqAccordion.module.css";

const PANEL_EASE = [0.2, 0.8, 0.2, 1] as const;
const PANEL_DURATION = 0.45;

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  const toggle = useCallback((index: number) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  }, []);

  return (
    <div className={styles.list}>
      {FAQ_ITEMS.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question} className={styles.item}>
            <button
              type="button"
              className={styles.trigger}
              aria-expanded={isOpen}
              onClick={() => toggle(index)}
            >
              <span className={styles.question}>{item.question}</span>
              <span
                className={`${styles.icon} ${isOpen ? styles.iconOpen : ""}`}
                aria-hidden
              />
            </button>
            <motion.div
              className={styles.answerWrap}
              initial={false}
              animate={{
                height: isOpen ? "auto" : 0,
                opacity: isOpen ? 1 : 0,
              }}
              transition={{
                height: {
                  duration: reduceMotion ? 0 : PANEL_DURATION,
                  ease: PANEL_EASE,
                },
                opacity: {
                  duration: reduceMotion ? 0 : PANEL_DURATION * 0.85,
                  ease: PANEL_EASE,
                },
              }}
            >
              <p className={styles.answer}>{item.answer}</p>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
