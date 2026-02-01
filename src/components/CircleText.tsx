"use client";

import { motion } from "framer-motion";

interface CircleTextProps {
  text: string;
  radius?: number;
}

export function CircleText({ text, radius = 160 }: CircleTextProps) {
  const characters = text.split("");
  const angleStep = 360 / characters.length;

  return (
    <motion.div
      className="absolute flex items-center justify-center rounded-full will-change-transform"
      style={{ width: radius * 2, height: radius * 2 }}
      animate={{ rotate: 360 }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {characters.map((char, index) => {
        const angle = index * angleStep;
        return (
          <span
            key={index}
            className="absolute text-3xl font-bold uppercase origin-bottom"
            style={{
              transform: `rotate(${angle}deg) translateY(-${radius}px)`,
              left: "50%",
              top: "50%",
              marginLeft: "-0.5em",
              marginTop: "-0.5em",
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        );
      })}
    </motion.div>
  );
}
