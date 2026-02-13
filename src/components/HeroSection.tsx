"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  Mail, FolderOpen, Github, Linkedin,
  // Math/Calculus icons
  Sigma, Pi, Infinity as InfinityIcon, Calculator,
  // Statistics icons
  BarChart3, LineChart, TrendingUp, PieChart,
  // ML/AI icons
  Brain, Cpu, Network, Binary, Bot, Workflow
} from "lucide-react";

// Background floating icons configuration - organic drift animation parameters
// Each icon has unique timing to create natural, non-synchronized movement
const floatingIcons = [
  // Left side - spread vertically along edge
  { Icon: Sigma, position: "top-[12%] left-[3%]", size: 26, delay: 0, 
    floatDuration: 12, floatRange: 25, xRange: 18, rotationRange: 6 },
  { Icon: Pi, position: "top-[28%] left-[5%]", size: 22, delay: 1.2, 
    floatDuration: 14, floatRange: 22, xRange: 14, rotationRange: 5 },
  { Icon: Brain, position: "top-[45%] left-[2%]", size: 24, delay: 0.8, 
    floatDuration: 11, floatRange: 28, xRange: 20, rotationRange: 7 },
  { Icon: LineChart, position: "bottom-[35%] left-[4%]", size: 22, delay: 2.1, 
    floatDuration: 13, floatRange: 20, xRange: 16, rotationRange: 5 },
  { Icon: Calculator, position: "bottom-[20%] left-[3%]", size: 20, delay: 3.2, 
    floatDuration: 15, floatRange: 24, xRange: 18, rotationRange: 6 },

  // Right side - spread vertically along edge
  { Icon: Network, position: "top-[15%] right-[3%]", size: 24, delay: 0.5, 
    floatDuration: 13, floatRange: 22, xRange: 16, rotationRange: 6 },
  { Icon: Cpu, position: "top-[32%] right-[4%]", size: 22, delay: 1.5, 
    floatDuration: 11, floatRange: 26, xRange: 20, rotationRange: 7 },
  { Icon: BarChart3, position: "top-[50%] right-[2%]", size: 26, delay: 0.3, 
    floatDuration: 14, floatRange: 20, xRange: 14, rotationRange: 5 },
  { Icon: Bot, position: "bottom-[30%] right-[5%]", size: 22, delay: 2.5, 
    floatDuration: 12, floatRange: 28, xRange: 22, rotationRange: 8 },
  { Icon: Workflow, position: "bottom-[15%] right-[3%]", size: 24, delay: 1.8, 
    floatDuration: 10, floatRange: 24, xRange: 18, rotationRange: 6 },

  // Far corners - subtle accents
  { Icon: InfinityIcon, position: "top-[8%] left-[8%]", size: 18, delay: 2.0, 
    floatDuration: 16, floatRange: 18, xRange: 12, rotationRange: 4 },
  { Icon: Binary, position: "bottom-[10%] left-[7%]", size: 18, delay: 3.5, 
    floatDuration: 14, floatRange: 20, xRange: 15, rotationRange: 5 },
  { Icon: TrendingUp, position: "top-[10%] right-[9%]", size: 20, delay: 1.0, 
    floatDuration: 12, floatRange: 22, xRange: 16, rotationRange: 6 },
  { Icon: PieChart, position: "bottom-[8%] right-[8%]", size: 18, delay: 2.8, 
    floatDuration: 15, floatRange: 18, xRange: 14, rotationRange: 4 },
];

export function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { amount: 0.2, once: false });

  // Scroll-based fade for floating icons - fade starts later for better visibility
  const { scrollY } = useScroll();
  const iconsOpacity = useTransform(scrollY, [0, 500], [0.7, 0]);

  const name = "LUU MINH THONG TRAN";
  const title = "AI/ML Engineer";

  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, delay: 0.15, ease: [0.215, 0.61, 0.355, 1] as const },
    },
  };

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
    <motion.section
      ref={sectionRef}
      id="hero"
      className="min-h-screen flex items-center justify-center relative px-4 py-20"
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Floating Background Icons - organic drift animation, fade out on scroll */}
      {floatingIcons.map(({ Icon, position, size, delay, floatDuration, floatRange, xRange, rotationRange }, index) => (
        <motion.div
          key={index}
          className={`absolute ${position} pointer-events-none hidden md:block`}
          style={{ opacity: iconsOpacity }}
          initial={{ opacity: 0, scale: 0.8, y: 0, rotate: 0 }}
          animate={{
            opacity: 0.55,
            scale: [1, 1.04, 0.97, 1.02, 1],
            y: [0, -floatRange, floatRange * 0.4, -floatRange * 0.6, 0],
            x: [0, xRange, -xRange * 0.5, xRange * 0.7, 0],
            rotate: [0, rotationRange, -rotationRange * 0.6, rotationRange * 0.4, 0],
          }}
          transition={{
            opacity: { duration: 1.2, delay: delay + 0.3 },
            scale: { 
              duration: floatDuration * 1.4, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: delay 
            },
            y: {
              duration: floatDuration,
              repeat: Infinity,
              ease: "linear",
              delay: delay
            },
            x: {
              duration: floatDuration * 1.15,
              repeat: Infinity,
              ease: "linear",
              delay: delay + 0.3
            },
            rotate: {
              duration: floatDuration * 0.85,
              repeat: Infinity,
              ease: "easeInOut",
              delay: delay + 0.2
            },
          }}
        >
          <Icon
            size={size}
            className="text-primary/60 drop-shadow-[0_0_8px_rgba(112,141,205,0.4)]"
            strokeWidth={1.5}
          />
        </motion.div>
      ))}

      <div className="text-center max-w-5xl mx-auto relative z-10">
        {/* Main Content Container */}
        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Line 1: Greeting */}
          <motion.div variants={lineVariants}>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6">
              Hi there, I'm
            </p>
          </motion.div>

          {/* Line 2: Name - Large Bold with Glow Effect */}
          <div className="relative py-8">
            {/* Floating dots scattered around name */}
            {[
              { left: '-8%', top: '20%' },
              { left: '5%', top: '-40%' },
              { left: '15%', top: '110%' },
              { left: '25%', top: '-30%' },
              { left: '40%', top: '120%' },
              { left: '55%', top: '-50%' },
              { left: '70%', top: '115%' },
              { left: '85%', top: '-35%' },
              { left: '95%', top: '105%' },
              { left: '102%', top: '30%' },
              { left: '-5%', top: '80%' },
              { left: '105%', top: '70%' },
            ].map((pos, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-[#708dcd] floating-dot opacity-50"
                style={{
                  left: pos.left,
                  top: pos.top,
                  animationDelay: `${i * 0.4}s`,
                  animationDuration: `${4 + (i % 3)}s`,
                }}
              />
            ))}

            {/* Glow effect - outside animation */}
            <div
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              aria-hidden="true"
            >
              <div
                className="w-[120%] h-28 blur-2xl opacity-70"
                style={{
                  background: 'linear-gradient(90deg, transparent 0%, rgba(112, 141, 205, 0.7) 15%, rgba(112, 141, 205, 0.7) 85%, transparent 100%)',
                }}
              />
            </div>
            <motion.div variants={lineVariants}>
              <h1 className="relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-none text-slate-700 dark:text-slate-300">
                {name}
              </h1>
            </motion.div>
          </div>

          {/* Line 3: Title */}
          <motion.div variants={lineVariants}>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-muted-foreground mt-4">
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
    </motion.section>
  );
}
