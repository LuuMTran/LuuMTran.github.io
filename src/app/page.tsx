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
    <main className="relative overflow-x-hidden">
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

      {/* Blog Section */}
      <BlogSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Luu Minh Thong Tran
          </p>
        </div>
      </footer>
    </main>
  );
}
