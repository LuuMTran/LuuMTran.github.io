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
  ThemeToggle,
} from "@/components";

export default function Home() {
  return (
    <main className="relative bg-background overflow-x-hidden">
      {/* Grid Background */}
      <GridBackground />

      {/* Theme Toggle */}
      <ThemeToggle />

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

      {/* Blog Section */}
      <BlogSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border bg-background">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Luu Minh Thong Tran. Built with Next.js, Tailwind CSS, and lots of ☕
          </p>
        </div>
      </footer>
    </main>
  );
}
