"use client";

import { motion } from "framer-motion";
import { 
  Brain, 
  Database, 
  Code2, 
  Cloud, 
  GitBranch, 
  BarChart3,
  Terminal,
  Layers
} from "lucide-react";

const skills = [
  {
    name: "Python",
    icon: <Terminal className="w-8 h-8" />,
    category: "Language",
  },
  {
    name: "TensorFlow",
    icon: <Brain className="w-8 h-8" />,
    category: "Deep Learning",
  },
  {
    name: "PyTorch",
    icon: <Layers className="w-8 h-8" />,
    category: "Deep Learning",
  },
  {
    name: "Scikit-learn",
    icon: <BarChart3 className="w-8 h-8" />,
    category: "ML Library",
  },
  {
    name: "SQL/PostgreSQL",
    icon: <Database className="w-8 h-8" />,
    category: "Database",
  },
  {
    name: "Docker",
    icon: <Code2 className="w-8 h-8" />,
    category: "DevOps",
  },
  {
    name: "AWS/GCP",
    icon: <Cloud className="w-8 h-8" />,
    category: "Cloud",
  },
  {
    name: "Git/GitHub",
    icon: <GitBranch className="w-8 h-8" />,
    category: "Version Control",
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="min-h-screen py-24 px-4 md:px-8 lg:px-16 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills I Have</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proficient in end-to-end machine learning workflows, from data preprocessing 
            and model development to deployment and scaling in production environments.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="group relative flex flex-col items-center justify-center p-6 rounded-xl border border-border bg-background/50 hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="mb-3 text-foreground group-hover:text-primary transition-colors">
                {skill.icon}
              </div>
              <h3 className="font-semibold text-sm text-center">{skill.name}</h3>
              <span className="text-xs text-muted-foreground mt-1">{skill.category}</span>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="p-6 rounded-xl border border-border bg-background/30">
            <h4 className="font-bold mb-2">Machine Learning</h4>
            <p className="text-sm text-muted-foreground">
              Classification, Regression, Clustering, NLP, Computer Vision, Time Series Analysis
            </p>
          </div>
          <div className="p-6 rounded-xl border border-border bg-background/30">
            <h4 className="font-bold mb-2">Deep Learning</h4>
            <p className="text-sm text-muted-foreground">
              CNNs, RNNs, Transformers, GANs, Transfer Learning, Model Optimization
            </p>
          </div>
          <div className="p-6 rounded-xl border border-border bg-background/30">
            <h4 className="font-bold mb-2">MLOps</h4>
            <p className="text-sm text-muted-foreground">
              Model Deployment, API Development, CI/CD Pipelines, Monitoring, Version Control
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
