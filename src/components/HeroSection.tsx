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
              <span className="bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent">
                {name}
              </span>
            </h1>
          </motion.div>

          {/* Line 2: Title */}
          <motion.div variants={lineVariants}>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-muted-foreground">
              {title}
            </h2>
          </motion.div>

          {/* Subtitle - HUMANIZED */}
          <motion.p
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mt-6 leading-relaxed"
            variants={lineVariants}
          >
            Hey! I'm Luu. When I was in grade 10, I watched Andrew Ng's Machine Learning course and was fascinated by how the real world can turn into mathematical representation to help computers replicate human intelligence: the ability to predict. With curiosity, I made this far and building real-world AI applications. Currently studying AI at UTS in Sydney.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
            variants={lineVariants}
          >
            <motion.button
              onClick={() => scrollToSection("#contact")}
              className="px-8 py-4 rounded-full font-semibold flex items-center gap-2 bg-primary text-white hover:bg-primary-dark transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail className="w-5 h-5" />
              Get in Touch
            </motion.button>
            
            <motion.button
              onClick={() => scrollToSection("#projects")}
              className="px-8 py-4 rounded-full font-semibold flex items-center gap-2 border-2 border-border text-muted-foreground hover:border-primary hover:text-primary transition-all bg-card"
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
              href="https://github.com/LuuMTran" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:bg-muted transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-muted-foreground" />
            </a>
            <a 
              href="https://www.linkedin.com/in/luu-minh-thong-tran-31971b238/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:bg-primary-light hover:border-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground" />
            </a>
            <a 
              href="mailto:minhthong7375@gmail.com"
              className="p-3 rounded-full border border-border hover:bg-primary-light hover:border-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-muted-foreground" />
            </a>
          </motion.div>

          {/* Stats Row */}
          <motion.div 
            className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mt-12 pt-8 border-t border-border"
            variants={lineVariants}
          >
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">5+</div>
              <div className="text-sm text-muted-foreground">ML Models Built</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">10+</div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">3+</div>
              <div className="text-sm text-muted-foreground">Years Learning</div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
