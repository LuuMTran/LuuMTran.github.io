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
  Layers,
  Sparkles
} from "lucide-react";

const skills = [
  {
    name: "Python",
    icon: <Terminal className="w-8 h-8" />,
    category: "Language",
    color: "from-blue-500 to-blue-600",
  },
  {
    name: "TensorFlow",
    icon: <Brain className="w-8 h-8" />,
    category: "Deep Learning",
    color: "from-orange-500 to-orange-600",
  },
  {
    name: "PyTorch",
    icon: <Layers className="w-8 h-8" />,
    category: "Deep Learning",
    color: "from-red-500 to-red-600",
  },
  {
    name: "Scikit-learn",
    icon: <BarChart3 className="w-8 h-8" />,
    category: "ML Library",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    name: "SQL/PostgreSQL",
    icon: <Database className="w-8 h-8" />,
    category: "Database",
    color: "from-blue-600 to-indigo-600",
  },
  {
    name: "Docker",
    icon: <Code2 className="w-8 h-8" />,
    category: "DevOps",
    color: "from-blue-400 to-cyan-500",
  },
  {
    name: "AWS/GCP",
    icon: <Cloud className="w-8 h-8" />,
    category: "Cloud",
    color: "from-amber-500 to-orange-500",
  },
  {
    name: "Git/GitHub",
    icon: <GitBranch className="w-8 h-8" />,
    category: "Version Control",
    color: "from-slate-600 to-slate-700",
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="min-h-screen py-24 px-4 md:px-8 lg:px-16 flex items-center bg-white/50">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-600">Technical Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">Skills I Have</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Proficient in end-to-end machine learning workflows, from data preprocessing 
            and model development to deployment and scaling in production environments.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="group relative flex flex-col items-center justify-center p-6 rounded-2xl border border-slate-200 bg-white hover:border-blue-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Icon with gradient background */}
              <div className={`mb-3 p-3 rounded-xl bg-gradient-to-br ${skill.color} text-white shadow-lg`}>
                {skill.icon}
              </div>
              <h3 className="font-semibold text-sm text-center text-slate-800">{skill.name}</h3>
              <span className="text-xs text-slate-500 mt-1">{skill.category}</span>
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
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
          <div className="p-6 rounded-2xl border border-slate-200 bg-white hover:border-blue-300 hover:shadow-lg transition-all">
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
              <Brain className="w-6 h-6 text-blue-600" />
            </div>
            <h4 className="font-bold mb-2 text-slate-900">Machine Learning</h4>
            <p className="text-sm text-slate-600">
              Classification, Regression, Clustering, NLP, Computer Vision, Time Series Analysis
            </p>
          </div>
          <div className="p-6 rounded-2xl border border-slate-200 bg-white hover:border-emerald-300 hover:shadow-lg transition-all">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-4">
              <Layers className="w-6 h-6 text-emerald-600" />
            </div>
            <h4 className="font-bold mb-2 text-slate-900">Deep Learning</h4>
            <p className="text-sm text-slate-600">
              CNNs, RNNs, Transformers, GANs, Transfer Learning, Model Optimization
            </p>
          </div>
          <div className="p-6 rounded-2xl border border-slate-200 bg-white hover:border-blue-300 hover:shadow-lg transition-all">
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
              <Cloud className="w-6 h-6 text-blue-600" />
            </div>
            <h4 className="font-bold mb-2 text-slate-900">MLOps</h4>
            <p className="text-sm text-slate-600">
              Model Deployment, API Development, CI/CD Pipelines, Monitoring, Version Control
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
