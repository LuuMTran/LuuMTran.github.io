"use client";

import { motion } from "framer-motion";
import { BookOpen, Building2, GraduationCap, Code2, Terminal, Database, Container, Sparkles } from "lucide-react";

const timelineItems = [
  {
    title: "Master of Artificial Intelligence",
    organization: "University of Technology Sydney",
    period: "2024 - 2026",
    description: "Specializing in machine learning, deep learning, and intelligent systems. Research focus on computer vision and natural language processing.",
    icon: <GraduationCap className="w-5 h-5" />,
    type: "education",
  },
  {
    title: "AI/ML Engineer Intern",
    organization: "Tech Innovations Lab",
    period: "2024",
    description: "Developed and deployed machine learning models for production systems. Implemented recommendation algorithms and optimized model performance.",
    icon: <Building2 className="w-5 h-5" />,
    type: "work",
  },
  {
    title: "Data Science Research Assistant",
    organization: "AI Research Center",
    period: "2023 - 2024",
    description: "Conducted research on neural network architectures and published findings. Assisted in developing novel approaches for time series forecasting.",
    icon: <BookOpen className="w-5 h-5" />,
    type: "work",
  },
  {
    title: "Machine Learning Bootcamp Instructor",
    organization: "Data Science Academy",
    period: "2022 - 2023",
    description: "Taught comprehensive ML courses covering supervised/unsupervised learning, deep learning, and practical implementation with Python frameworks.",
    icon: <Building2 className="w-5 h-5" />,
    type: "work",
  },
  {
    title: "Bachelor of Computer Science",
    organization: "FPT University",
    period: "2020 - 2024",
    description: "Major in Software Engineering with focus on AI and data science. Completed honors thesis on deep learning applications.",
    icon: <GraduationCap className="w-5 h-5" />,
    type: "education",
  },
];

const coreStack = [
  { name: "Python", icon: <Terminal className="w-4 h-4" /> },
  { name: "TensorFlow/PyTorch", icon: <Code2 className="w-4 h-4" /> },
  { name: "SQL", icon: <Database className="w-4 h-4" /> },
  { name: "Docker", icon: <Container className="w-4 h-4" /> },
];

export function AboutSection() {
  return (
    <section id="about" className="min-h-screen py-24 px-4 md:px-8 lg:px-16 flex items-center bg-white/50">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-600">About Me</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Profile */}
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              {/* Animated gradient border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500 to-emerald-500 opacity-20 blur-xl animate-pulse" />
              
              {/* Profile placeholder */}
              <div className="absolute inset-2 rounded-2xl bg-white flex items-center justify-center border border-slate-200 shadow-xl">
                <div className="text-center">
                  <div className="w-28 h-28 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center text-white text-5xl font-bold shadow-lg">
                    T
                  </div>
                  <p className="text-slate-500 font-medium">Profile Image</p>
                  <p className="text-sm text-slate-400 mt-1">Luu Minh Thong Tran</p>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div 
                className="absolute -top-4 -right-4 px-3 py-1.5 rounded-full bg-blue-500 text-white text-xs font-semibold shadow-lg"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                AI/ML Engineer
              </motion.div>
              <motion.div 
                className="absolute -bottom-4 -left-4 px-3 py-1.5 rounded-full bg-emerald-500 text-white text-xs font-semibold shadow-lg"
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                Data Scientist
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-blue-600 font-semibold mb-2">Hello, I am</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-2 text-slate-900">Luu Minh Thong Tran</h2>
            <p className="text-xl text-slate-500 mb-6">AI/ML Engineer & Data Scientist</p>
            
            <p className="text-slate-600 leading-relaxed mb-8">
              Passionate about building intelligent systems that solve real-world problems. 
              With expertise in machine learning, deep learning, and data science, I specialize 
              in transforming complex data into actionable insights and production-ready AI solutions.
            </p>

            {/* Core Stack */}
            <div className="mb-8">
              <h4 className="font-semibold mb-3 text-slate-900 flex items-center gap-2">
                <Code2 className="w-4 h-4 text-blue-600" />
                Core Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {coreStack.map((item) => (
                  <span
                    key={item.name}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-sm font-medium text-slate-700"
                  >
                    <span className="text-blue-600">{item.icon}</span>
                    {item.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Experience Timeline */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-slate-900">Experience & Education</h3>
              <div className="space-y-4">
                {timelineItems.map((item, index) => (
                  <motion.div
                    key={item.title}
                    className="group relative pl-8 pb-4 border-l-2 border-slate-200 last:pb-0 hover:border-blue-400 transition-colors"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-white bg-gradient-to-br from-blue-500 to-emerald-500 shadow-md" />
                    
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-blue-600">{item.icon}</span>
                      <span className="text-sm text-slate-500 font-medium">{item.period}</span>
                    </div>
                    <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm text-slate-500 mb-1">{item.organization}</p>
                    <p className="text-sm text-slate-600">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
