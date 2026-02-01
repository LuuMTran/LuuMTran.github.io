"use client";

import {
  GridBackground,
  Navigation,
  HeroSection,
  AboutSection,
  SkillsSection,
  ProjectsSection,
  BlogSection,
  ContactSection,
} from "@/components";

export default function Home() {
  return (
    <main className="relative bg-background overflow-x-hidden">
      {/* Grid Background */}
      <GridBackground />

      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section - Moved up right after Hero */}
      <AboutSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Blog Section - NEW: Show latest posts */}
      <BlogSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-slate-500">
            © 2024 Luu Minh Thong Tran. Built with Next.js, Tailwind CSS, and lots of ☕
          </p>
        </div>
      </footer>
    </main>
  );
}
