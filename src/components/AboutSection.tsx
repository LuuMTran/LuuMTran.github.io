"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

const timelineItems = [
  {
    title: "AI/ML Engineer Intern",
    organization: "Tech Company / Research Lab",
    period: "2024 - Present",
    description: "Working on machine learning models for production systems. Gaining hands-on experience with real-world AI applications and MLOps practices.",
  },
  {
    title: "Data Science Intern",
    organization: "Analytics Firm / Startup",
    period: "2023 - 2024",
    description: "Built predictive models and data pipelines. Learned how to handle messy real-world data and deploy models to production environments.",
  },
  {
    title: "Master of Artificial Intelligence",
    organization: "University of Technology Sydney",
    period: "2024 - 2026",
    description: "Currently pursuing Master's degree with focus on deep learning, computer vision, and neural network interpretability.",
  },
  {
    title: "Bachelor of Computer Science",
    organization: "University of Technology Sydney",
    period: "2020 - 2024",
    description: "Completed Bachelor's degree with strong foundation in software engineering, algorithms, and data structures.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="min-h-screen py-24 px-4 md:px-8 lg:px-16 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-slate-100">About Me</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Profile & Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Profile Picture - LinkedIn Style */}
            <div className="flex flex-col items-center lg:items-start">
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white dark:border-slate-700 shadow-xl bg-gradient-to-br from-blue-500 to-emerald-500">
                <Image
                  src="/images/profile.jpg"
                  alt="Luu Minh Thong Tran"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Bio */}
            <div>
              <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">Hello!</p>
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-slate-100">I'm Luu</h3>
              
              <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                <p>
                  I'm Luu Minh Thong Tran, an AI/ML Engineer based in Sydney, Australia. 
                  My journey into artificial intelligence started with a simple curiosity: 
                  how does Netflix know exactly what I want to watch next? That question 
                  led me down the rabbit hole of machine learning, and I've been hooked ever since.
                </p>
                <p>
                  Currently, I'm pursuing my Master's in Artificial Intelligence at the 
                  University of Technology Sydney, where I'm diving deep into deep learning, 
                  computer vision, and neural network architectures.
                </p>
                <p>
                  I'm passionate about building AI systems that solve real-world problems 
                  and make a positive impact. Whether it's developing predictive models or 
                  creating intelligent automation systems, I love turning complex data into 
                  actionable insights.
                </p>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 mt-6 text-slate-500 dark:text-slate-400">
                <MapPin className="w-4 h-4" />
                <span>Sydney, Australia</span>
              </div>

              {/* Social Links */}
              <div className="flex gap-3 mt-6">
                <a
                  href="https://www.linkedin.com/in/luu-minh-thong-tran-31971b238/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-slate-200 dark:border-slate-700 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:border-blue-300 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                </a>
                <a
                  href="https://github.com/LuuMTran"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                </a>
                <a
                  href="mailto:luuminhthongtran@gmail.com"
                  className="p-3 rounded-full border border-slate-200 dark:border-slate-700 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-slate-900 dark:text-slate-100">My Journey So Far</h3>
            <div className="space-y-6">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="relative pl-8 pb-6 border-l-2 border-slate-200 dark:border-slate-700 last:pb-0"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-2 border-white dark:border-slate-800 shadow" />
                  
                  <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">{item.period}</span>
                  <h4 className="font-bold text-slate-900 dark:text-slate-100 mt-1">{item.title}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{item.organization}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">{item.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Currently Looking For */}
            <motion.div 
              className="mt-8 p-6 rounded-2xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <h4 className="font-bold mb-2 text-blue-900 dark:text-blue-300">Currently Looking For</h4>
              <p className="text-sm text-blue-800 dark:text-blue-200">
                I'm actively seeking internship opportunities in AI/ML engineering where I can 
                apply my skills, learn from experienced professionals, and contribute to impactful projects. 
                If you're hiring, I'd love to connect!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
