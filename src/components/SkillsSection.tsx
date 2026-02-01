"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const skills = [
  {
    name: "TensorFlow",
    icon: "/icons/tensorflow.svg",
    category: "Deep Learning",
  },
  {
    name: "PyTorch",
    icon: "/icons/pytorch.svg",
    category: "Deep Learning",
  },
  {
    name: "Scikit-learn",
    icon: "/icons/scikit-learn.svg",
    category: "ML Library",
  },
  {
    name: "Pandas",
    icon: "/icons/pandas.svg",
    category: "Data Processing",
  },
  {
    name: "HuggingFace",
    icon: "/icons/huggingface.svg",
    category: "Embeddings",
  },
  {
    name: "FastAPI",
    icon: "/icons/fastapi.svg",
    category: "Web Framework",
  },
  {
    name: "Selenium",
    icon: "/icons/selenium.svg",
    category: "Web Scraping",
  },
  {
    name: "PostgreSQL",
    icon: "/icons/postgresql.svg",
    category: "Database",
  },
  {
    name: "Docker",
    icon: "/icons/docker.svg",
    category: "DevOps",
  },
  {
    name: "AWS/GCP",
    icon: "/icons/cloud.svg",
    category: "Cloud",
  },
  {
    name: "Git/GitHub",
    icon: "/icons/git.svg",
    category: "Version Control",
  },
  {
    name: "BERTopic",
    icon: "/icons/bertopic.svg",
    category: "Topic Modeling",
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="min-h-screen py-24 px-4 md:px-8 lg:px-16 flex items-center bg-background">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header - NO SPARKLES */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Skills & Tools</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            These are the technologies I work with day-to-day. I'm always learning something new.
          </p>
        </motion.div>

        {/* Skills Grid - 3x4 layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="group relative flex flex-col items-center justify-center p-6 rounded-2xl border border-border bg-card card-hover transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              {/* Icon */}
              <div className="mb-3 relative w-10 h-10">
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="font-semibold text-sm text-center text-foreground">{skill.name}</h3>
              <span className="text-xs text-muted-foreground mt-1">{skill.category}</span>
            </motion.div>
          ))}
        </div>

        {/* Additional Info - 3 boxes at bottom */}
        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="p-6 rounded-2xl border border-border bg-card card-hover transition-all duration-300">
            <h4 className="font-bold mb-2 text-foreground">Machine Learning</h4>
            <p className="text-sm text-muted-foreground">
              Classification, Regression, NLP, Computer Vision, Time Series
            </p>
          </div>
          <div className="p-6 rounded-2xl border border-border bg-card card-hover transition-all duration-300">
            <h4 className="font-bold mb-2 text-foreground">Deep Learning</h4>
            <p className="text-sm text-muted-foreground">
              CNNs, RNNs, Transformers, Transfer Learning
            </p>
          </div>
          <div className="p-6 rounded-2xl border border-border bg-card card-hover transition-all duration-300">
            <h4 className="font-bold mb-2 text-foreground">Data & MLOps</h4>
            <p className="text-sm text-muted-foreground">
              Model Deployment, APIs, Docker, CI/CD
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
