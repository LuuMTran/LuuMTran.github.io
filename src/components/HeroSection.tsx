"use client";

import { motion } from "framer-motion";
import { Mail, FolderOpen, Github, Linkedin } from "lucide-react";

export function HeroSection() {
  const name = "LUU MINH THONG TRAN";
  const title = "AI/ML Engineer";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3,
      },
    },
  };

  const lineVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1] as const,
      },
    },
  };

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative px-4 py-20">
      <div className="text-center max-w-5xl mx-auto">
        {/* Main Content Container */}
        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Line 1: Name - Responsive sizing */}
          <motion.div variants={lineVariants}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight break-words">
              <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                {name}
              </span>
            </h1>
          </motion.div>

          {/* Line 2: Title */}
          <motion.div variants={lineVariants}>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-slate-600">
              {title}
            </h2>
          </motion.div>

          {/* Subtitle - HUMANIZED */}
          <motion.p 
            className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto mt-6 leading-relaxed"
            variants={lineVariants}
          >
            Hey! I'm Thong. I got into AI because I was fascinated by how Netflix knows exactly 
            what I want to watch. Now I build intelligent systems that solve real problems. 
            Currently studying AI at UTS in Sydney.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
            variants={lineVariants}
          >
            <motion.button
              onClick={() => scrollToSection("#contact")}
              className="px-8 py-4 rounded-full font-semibold flex items-center gap-2 bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail className="w-5 h-5" />
              Get in Touch
            </motion.button>
            
            <motion.button
              onClick={() => scrollToSection("#projects")}
              className="px-8 py-4 rounded-full font-semibold flex items-center gap-2 border-2 border-slate-300 text-slate-700 hover:border-blue-500 hover:text-blue-600 transition-all bg-white"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FolderOpen className="w-5 h-5" />
              See My Work
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex items-center justify-center gap-4 mt-6"
            variants={lineVariants}
          >
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-slate-200 hover:bg-slate-100 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-slate-600" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-slate-200 hover:bg-blue-50 hover:border-blue-300 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-slate-600" />
            </a>
          </motion.div>

          {/* Stats Row */}
          <motion.div 
            className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mt-12 pt-8 border-t border-slate-200"
            variants={lineVariants}
          >
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-600">5+</div>
              <div className="text-sm text-slate-500">ML Models Built</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-600">10+</div>
              <div className="text-sm text-slate-500">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-600">3+</div>
              <div className="text-sm text-slate-500">Years Learning</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          <span className="text-sm text-slate-400">Scroll down</span>
          <motion.div
            className="w-6 h-10 rounded-full border-2 border-slate-300 flex items-start justify-center p-2 cursor-pointer hover:border-blue-500 transition-colors"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            onClick={() => scrollToSection("#about")}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
