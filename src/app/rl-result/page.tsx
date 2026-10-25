import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "JetRacer Parking Results | Luu Minh Thong Tran",
  description:
    "A comparison of JetRacer autonomous parking policies before and after PPO training with human-scored rewards.",
};

const resultGroups = [
  {
    title: "After imitation learning, before PPO",
    videos: Array.from({ length: 8 }, (_, index) => ({
      src: `/videos/rl-result/before/before-${String(index + 1).padStart(2, "0")}.mp4`,
      poster: `/videos/rl-result/before/before-${String(index + 1).padStart(2, "0")}.jpg`,
    })),
  },
  {
    title: "After PPO",
    videos: Array.from({ length: 7 }, (_, index) => ({
      src: `/videos/rl-result/after/after-${String(index + 1).padStart(2, "0")}.mp4`,
      poster: `/videos/rl-result/after/after-${String(index + 1).padStart(2, "0")}.jpg`,
    })),
  },
];

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
        <h1>Improving Parking Behaviour with Human-Scored PPO</h1>
        <p className={styles.authors}>
          <span>Luu Minh Thong Tran</span>
          <span>Felix Colin Lianto</span>
          <span>Darrel Phung</span>
        </p>
      </header>

      <section id="results" className={styles.results}>
        {resultGroups.map((group) => (
          <div className={styles.resultGroup} key={group.title}>
            <div className={styles.sectionHeading}>
              <h2>{group.title}</h2>
            </div>

            <div className={styles.mediaGrid}>
              {group.videos.map((video, index) => (
                <video
                  className={styles.video}
                  controls
                  muted
                  playsInline
                  preload="metadata"
                  poster={video.poster}
                  aria-label={`${group.title} rollout ${index + 1}`}
                  key={video.src}
                >
                  <source src={video.src} type="video/mp4" />
                </video>
              ))}
            </div>
          </div>
        ))}

        <div className={styles.resultGroup}>
          <div className={styles.sectionHeading}>
            <h2>Complete run</h2>
          </div>
          <video
            className={`${styles.video} ${styles.completeVideo}`}
            controls
            muted
            playsInline
            preload="metadata"
            poster="/videos/rl-result/complete/complete-run.jpg"
            aria-label="Complete autonomous parking run"
          >
            <source
              src="/videos/rl-result/complete/complete-run.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </section>
    </main>
  );
}
