"use client";

import { motion } from "framer-motion";
import { Linkedin, Github, Mail, Facebook } from "lucide-react";

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

const socialLinks: SocialLink[] = [
  {
    icon: <Linkedin className="w-5 h-5" />,
    href: "https://linkedin.com",
    label: "LinkedIn",
  },
  {
    icon: <Github className="w-5 h-5" />,
    href: "https://github.com",
    label: "GitHub",
  },
  {
    icon: <Mail className="w-5 h-5" />,
    href: "mailto:thong@example.com",
    label: "Email",
  },
  {
    icon: <Facebook className="w-5 h-5" />,
    href: "https://facebook.com",
    label: "Facebook",
  },
];

export function SocialLinks() {
  return (
    <motion.div
      id="social-media"
      className="hidden md:fixed md:flex flex-col top-1/2 left-8 -translate-y-1/2 items-center justify-center gap-4 z-50"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
    >
      {/* Top separator line */}
      <div className="w-px h-12 bg-border" />

      {socialLinks.map((link, index) => (
        <motion.a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn inline-flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background shadow-sm hover:bg-accent hover:text-accent-foreground dark:bg-background/30 dark:border-border dark:hover:bg-background/50 cursor-pointer"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 1.2 + index * 0.1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label={link.label}
        >
          {link.icon}
        </motion.a>
      ))}

      {/* Bottom separator line */}
      <div className="w-px h-12 bg-border" />
    </motion.div>
  );
}
