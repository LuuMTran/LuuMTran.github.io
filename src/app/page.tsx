"use client";

import {
  GridBackground,
  Navigation,
  HeroSection,
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

      {/* Hero Section - New 2-line design */}
      <HeroSection />

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
