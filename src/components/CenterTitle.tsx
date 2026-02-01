"use client";

import { motion } from "framer-motion";

interface CenterTitleProps {
  text: string;
}

export function CenterTitle({ text }: CenterTitleProps) {
  const characters = text.split("");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.3,
      },
    },
  };

  const charVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.215, 0.61, 0.355, 1] as const,
      },
    },
  };

  return (
    <motion.div
      className="relative z-10 flex flex-col items-center justify-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="text-5xl md:text-7xl font-black tracking-tighter text-center whitespace-nowrap overflow-visible">
        {characters.map((char, index) => (
          <motion.span
            key={index}
            className="center-char inline-block"
            variants={charVariants}
            style={{
              animationDelay: `${index * 0.1}s`,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
