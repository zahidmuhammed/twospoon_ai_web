"use client";

import { useIndustriesTab, type IndustryTabId } from "../Industries/IndustriesTabContext";
import styles from "./NavigationBar.module.css";

type TabConfig = {
  id: IndustryTabId;
  label: string;
  wrapperClass: string;
  inactiveClass: string;
};

const TABS: TabConfig[] = [
  {
    id: "technology",
    label: "Technology",
    wrapperClass: "technology12",
    inactiveClass: "inactiveDesktop",
  },
  {
    id: "finance",
    label: "Finance",
    wrapperClass: "finance142",
    inactiveClass: "inactiveDesktop",
  },
  {
    id: "media",
    label: "Media",
    wrapperClass: "media12",
    inactiveClass: "inactiveDesktop2",
  },
  {
    id: "healthcare",
    label: "Healthcare",
    wrapperClass: "healthcare12",
    inactiveClass: "inactiveDesktop3",
  },
  {
    id: "manufacturing",
    label: "Manufacturing",
    wrapperClass: "manufacturing12",
    inactiveClass: "inactiveDesktop4",
  },
];

export function NavigationBar() {
  const { activeId, setActiveId } = useIndustriesTab();

  return (
    <nav className={styles.navigationBar} aria-label="Industries">
      {TABS.map((tab) => {
        const isActive = activeId === tab.id;
        return (
          <div
            key={tab.id}
            className={styles[tab.wrapperClass as keyof typeof styles]}
          >
            <button
              type="button"
              className={isActive ? styles.activeDesktop : styles[tab.inactiveClass as keyof typeof styles]}
              aria-pressed={isActive}
              onClick={() => setActiveId(tab.id)}
            >
              <div
                className={
                  tab.id === "technology"
                    ? styles.technology13
                    : tab.id === "finance"
                      ? styles.finance152
                      : tab.id === "media"
                        ? styles.media13
                        : tab.id === "healthcare"
                          ? styles.healthcare13
                          : styles.manufacturing13
                }
              >
                <div
                  className={
                    tab.id === "technology"
                      ? styles.name
                      : tab.id === "finance"
                        ? styles.name2
                        : tab.id === "media"
                          ? styles.name3
                          : tab.id === "healthcare"
                            ? styles.name4
                            : styles.name5
                  }
                >
                  <p
                    className={
                      tab.id === "technology"
                        ? styles.technology14
                        : tab.id === "finance"
                          ? styles.finance162
                          : tab.id === "media"
                            ? styles.media14
                            : tab.id === "healthcare"
                              ? styles.healthcare14
                              : styles.manufacturing14
                    }
                    dir={"auto"}
                  >
                    {tab.label}
                  </p>
                </div>
              </div>
            </button>
          </div>
        );
      })}
    </nav>
  );
}
