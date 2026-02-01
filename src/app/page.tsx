"use client";

import { motion } from "framer-motion";
import {
  CircleText,
  CenterTitle,
  SocialLinks,
  ThemeToggle,
  GridBackground,
} from "@/components";

export default function Home() {
  return (
    <main className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      {/* Grid Background */}
      <GridBackground />

      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Social Links Sidebar */}
      <SocialLinks />

      {/* Main Content Container */}
      <motion.div
        className="fixed inset-0 z-100 flex items-center justify-center bg-background overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative flex items-center justify-center w-full h-full scale-[0.55] sm:scale-[0.75] md:scale-100 transition-transform duration-300">
          {/* Rotating Circle Text */}
          <CircleText text="LUU MINH THONG TRAN • " radius={160} />

          {/* Center Title */}
          <CenterTitle text="AI/ML Engineer" />
        </div>
      </motion.div>
    </main>
  );
}
