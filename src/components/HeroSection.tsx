"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail, FolderOpen } from "lucide-react";

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
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1] as const,
      },
    },
  };

  const charVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
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
    <section id="hero" className="min-h-screen flex items-center justify-center relative px-4">
      <div className="text-center max-w-5xl mx-auto">
        {/* Main Content Container */}
        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Line 1: Name - Bigger, Bolder */}
          <motion.div variants={lineVariants}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none">
              {name.split("").map((char, index) => (
                <motion.span
                  key={index}
                  className="inline-block gradient-text"
                  variants={charVariants}
                  style={{
                    textShadow: "0 0 40px rgba(37, 99, 235, 0.3)",
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </h1>
          </motion.div>

          {/* Decorative Line */}
          <motion.div 
            className="flex items-center justify-center gap-4"
            variants={lineVariants}
          >
            <div className="h-1 w-20 rounded-full bg-gradient-to-r from-transparent via-blue-500 to-blue-500" />
            <div className="h-1 w-3 rounded-full bg-emerald-500" />
            <div className="h-1 w-20 rounded-full bg-gradient-to-l from-transparent via-emerald-500 to-emerald-500" />
          </motion.div>

          {/* Line 2: Title */}
          <motion.div variants={lineVariants}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-600 tracking-wide">
              {title.split("").map((char, index) => (
                <motion.span
                  key={index}
                  className="inline-block"
                  variants={charVariants}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </h2>
          </motion.div>

          {/* Subtitle */}
          <motion.p 
            className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mt-6"
            variants={lineVariants}
          >
            Transforming data into intelligent solutions through machine learning, 
            deep learning, and data science
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
            variants={lineVariants}
          >
            <motion.button
              onClick={() => scrollToSection("#contact")}
              className="btn-primary px-8 py-4 rounded-full font-semibold flex items-center gap-2 text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5" />
              Get in Touch
            </motion.button>
            
            <motion.button
              onClick={() => scrollToSection("#projects")}
              className="px-8 py-4 rounded-full font-semibold flex items-center gap-2 border-2 border-slate-300 text-slate-700 hover:border-blue-500 hover:text-blue-600 transition-all bg-white/50 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FolderOpen className="w-5 h-5" />
              View Projects
            </motion.button>
          </motion.div>

          {/* Stats Row */}
          <motion.div 
            className="flex flex-wrap items-center justify-center gap-8 md:gap-16 mt-16 pt-8 border-t border-slate-200"
            variants={lineVariants}
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">5+</div>
              <div className="text-sm text-slate-500 mt-1">ML Models</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">10+</div>
              <div className="text-sm text-slate-500 mt-1">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">3+</div>
              <div className="text-sm text-slate-500 mt-1">Years Exp.</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2 }}
        >
          <span className="text-sm text-slate-400">Scroll to explore</span>
          <motion.div
            className="w-6 h-10 rounded-full border-2 border-slate-300 flex items-start justify-center p-2 cursor-pointer hover:border-blue-500 transition-colors"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            onClick={() => scrollToSection("#skills")}
          >
            <motion.div 
              className="w-1.5 h-1.5 rounded-full bg-gradient-to-b from-blue-500 to-emerald-500"
            />
          </motion.div>
        </motion.div>

        {/* Background Decorations */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />
      </div>
    </section>
  );
}
