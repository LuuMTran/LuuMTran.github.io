"use client";

import { motion } from "framer-motion";
import { 
  Database, 
  GitBranch, 
  BarChart3,
  Terminal,
  Layers,
  Cloud,
  Cpu,
  Container
} from "lucide-react";

// Real tech icons as SVG components
const PythonIcon = () => (
  <svg viewBox="0 0 128 128" className="w-10 h-10">
    <linearGradient id="python-original-a" gradientUnits="userSpaceOnUse" x1="70.252" y1="1237.476" x2="170.659" y2="1151.089" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)">
      <stop offset="0" stopColor="#5A9FD4"/>
      <stop offset="1" stopColor="#306998"/>
    </linearGradient>
    <linearGradient id="python-original-b" gradientUnits="userSpaceOnUse" x1="209.474" y1="1098.811" x2="173.62" y2="1149.537" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)">
      <stop offset="0" stopColor="#FFD43B"/>
      <stop offset="1" stopColor="#FFE873"/>
    </linearGradient>
    <path fill="url(#python-original-a)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.347 5.71-12.347 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V57.142c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z"/>
    <path fill="url(#python-original-b)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z"/>
  </svg>
);

const TensorFlowIcon = () => (
  <svg viewBox="0 0 128 128" className="w-10 h-10">
    <path fill="#FF6F00" d="M64.8 0L19.2 26.4v75.2l14.4 8.4V35.2L64.8 12l31.2 17.2v75.2l14.4-8.4V26.4L64.8 0z"/>
    <path fill="#FF6F00" d="M64.8 24L34 41.6v44.8l14.4-8.4V49.6l16.4-9.6 16.4 9.6v28.4l14.4 8.4V41.6L64.8 24z"/>
    <path fill="#FF6F00" d="M64.8 73.6l-14.4 8.4v16.8l14.4-8.4 14.4 8.4V82l-14.4-8.4z"/>
  </svg>
);

const PyTorchIcon = () => (
  <svg viewBox="0 0 128 128" className="w-10 h-10">
    <path fill="#EE4C2C" d="M32.6 89.3c-13.3-13.3-13.3-35 0-48.3l24.8 24.8-5.7 5.7-19.1-19.1c-10.2 10.2-10.2 26.9 0 37.1 9.8 9.8 25.6 10.2 35.8.9l5.7 5.7c-12.9 12.4-33.4 12.1-46-.8z"/>
    <path fill="#EE4C2C" d="M98.7 66.7L73.9 41.9l5.7-5.7 19.1 19.1c10.2-10.2 10.2-26.9 0-37.1-9.8-9.8-25.6-10.2-35.8-.9l-5.7-5.7c13.1-12.7 34-12.4 46.7.7 13.3 13.3 13.3 35.1 0 48.3l-5.2-5.6z"/>
    <circle fill="#EE4C2C" cx="63.9" cy="66.8" r="8"/>
  </svg>
);

const skills = [
  {
    name: "Python",
    icon: <PythonIcon />,
    category: "Language",
  },
  {
    name: "TensorFlow",
    icon: <TensorFlowIcon />,
    category: "Deep Learning",
  },
  {
    name: "PyTorch",
    icon: <PyTorchIcon />,
    category: "Deep Learning",
  },
  {
    name: "Scikit-learn",
    icon: <BarChart3 className="w-10 h-10 text-orange-600" />,
    category: "ML Library",
  },
  {
    name: "SQL/PostgreSQL",
    icon: <Database className="w-10 h-10 text-blue-600" />,
    category: "Database",
  },
  {
    name: "Docker",
    icon: <Container className="w-10 h-10 text-blue-500" />,
    category: "DevOps",
  },
  {
    name: "AWS/GCP",
    icon: <Cloud className="w-10 h-10 text-amber-500" />,
    category: "Cloud",
  },
  {
    name: "Git/GitHub",
    icon: <GitBranch className="w-10 h-10 text-slate-700" />,
    category: "Version Control",
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="min-h-screen py-24 px-4 md:px-8 lg:px-16 flex items-center bg-slate-50/50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header - NO SPARKLES */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-slate-100">Skills & Tools</h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
            These are the technologies I work with day-to-day. I'm always learning something new.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="group relative flex flex-col items-center justify-center p-6 rounded-2xl border border-slate-200 bg-white dark:bg-slate-800 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {/* Icon */}
              <div className="mb-3">
                {skill.icon}
              </div>
              <h3 className="font-semibold text-sm text-center text-slate-800 dark:text-slate-100">{skill.name}</h3>
              <span className="text-xs text-slate-600 dark:text-slate-400 mt-1">{skill.category}</span>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="p-6 rounded-2xl border border-slate-200 bg-white dark:bg-slate-800 dark:border-slate-700">
            <h4 className="font-bold mb-2 text-slate-900 dark:text-slate-100">Machine Learning</h4>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Classification, Regression, NLP, Computer Vision, Time Series
            </p>
          </div>
          <div className="p-6 rounded-2xl border border-slate-200 bg-white dark:bg-slate-800 dark:border-slate-700">
            <h4 className="font-bold mb-2 text-slate-900 dark:text-slate-100">Deep Learning</h4>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              CNNs, RNNs, Transformers, Transfer Learning
            </p>
          </div>
          <div className="p-6 rounded-2xl border border-slate-200 bg-white dark:bg-slate-800 dark:border-slate-700">
            <h4 className="font-bold mb-2 text-slate-900 dark:text-slate-100">MLOps</h4>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Model Deployment, APIs, Docker, CI/CD
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
