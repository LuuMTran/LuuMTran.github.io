import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Github, Play } from "lucide-react";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "JetRacer Parking Results | Luu Minh Thong Tran",
  description:
    "A comparison of JetRacer autonomous parking policies before and after PPO training with human-scored rewards.",
};

const resultGroups = [
  {
    eyebrow: "Baseline",
    title: "After imitation learning, before PPO",
    description:
      "The initial policies learned from recorded human driving demonstrations.",
  },
  {
    eyebrow: "Final policy",
    title: "After PPO",
    description:
      "The policies after reinforcement learning with human-scored rewards.",
  },
];

const parkingTasks = ["Direct parking", "Reverse parking"];

export default function ReinforcementLearningResults() {
  return (
    <main className={styles.page}>
      <nav className={styles.nav} aria-label="Page navigation">
        <Link href="/" className={styles.backLink}>
          <ArrowLeft size={17} aria-hidden="true" />
          Portfolio
        </Link>
      </nav>

      <header className={styles.hero}>
        <p className={styles.kicker}>JetRacer autonomous parking</p>
        <h1>Improving Parking Behaviour with Human-Scored PPO</h1>
        <p className={styles.author}>Luu Minh Thong Tran</p>
        <p className={styles.summary}>
          A visual comparison of autonomous direct and reverse parking after
          imitation learning and after policy refinement with PPO.
        </p>

        <div className={styles.actions}>
          <a
            href="https://github.com/LuuMTran/jetracer-autoparking"
            target="_blank"
            rel="noreferrer"
            className={styles.primaryAction}
          >
            <Github size={18} aria-hidden="true" />
            Project code
          </a>
          <a href="#results" className={styles.secondaryAction}>
            View results
          </a>
        </div>
      </header>

      <section id="results" className={styles.results}>
        {resultGroups.map((group) => (
          <div className={styles.resultGroup} key={group.title}>
            <div className={styles.sectionHeading}>
              <p>{group.eyebrow}</p>
              <h2>{group.title}</h2>
              <span>{group.description}</span>
            </div>

            <div className={styles.mediaGrid}>
              {parkingTasks.map((task) => (
                <article className={styles.mediaCard} key={task}>
                  <div className={styles.placeholder}>
                    <div className={styles.playIcon} aria-hidden="true">
                      <Play size={24} fill="currentColor" />
                    </div>
                    <span>Video coming soon</span>
                  </div>
                  <div className={styles.cardCaption}>
                    <h3>{task}</h3>
                    <p>Autonomous policy rollout</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </section>

      <footer className={styles.footer}>
        <span>JetRacer autonomous parking project</span>
        <span>2026</span>
      </footer>
    </main>
  );
}
