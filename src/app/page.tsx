"use client";

import { motion } from "framer-motion";
import {
  CircleText,
  CenterTitle,
  SocialLinks,
  GridBackground,
  Navigation,
  SkillsSection,
  ProjectsSection,
  AboutSection,
  ContactSection,
} from "@/components";

export default function Home() {
  return (
    <main className="relative bg-background overflow-x-hidden">
      {/* Grid Background */}
      <GridBackground />

      {/* Navigation */}
      <Navigation />

      {/* Social Links Sidebar */}
      <SocialLinks />

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative">
        <motion.div
          className="relative flex items-center justify-center w-full h-full scale-[0.55] sm:scale-[0.75] md:scale-100 transition-transform duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Rotating Circle Text */}
          <CircleText text="LUU MINH THONG TRAN • " radius={160} />

          {/* Center Title */}
          <CenterTitle text="AI/ML Engineer" />
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          <span className="text-sm text-muted-foreground">Scroll to explore</span>
          <motion.div
            className="w-6 h-10 rounded-full border-2 border-border flex items-start justify-center p-2"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
          </motion.div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <SkillsSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* About Section */}
      <AboutSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Luu Minh Thong Tran. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
