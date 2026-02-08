"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, BookOpen } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center gap-2 px-6 py-2 rounded-full transition-all duration-300 ${isScrolled
          ? "bg-card/90 backdrop-blur-md shadow-lg border border-border"
          : "bg-card/50 backdrop-blur-sm border border-border"
          }`}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          className="flex items-center gap-2 mr-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="36"
            viewBox="0 0 323 229"
            className="text-primary"
          >
            <path d="M 1 131 C -0.83 135.83 4.67 137.67 7 136 C 9.33 134.33 11.83 125.5 15 121 C 18.17 116.5 21.67 112 26 109 C 30.33 106 34.83 103.67 41 103 C 47.17 102.33 55 103.5 63 105 C 71 106.5 81.33 111.17 89 112 C 96.67 112.83 105.17 109.83 109 110 C 112.83 110.17 111.17 107.33 112 113 C 112.83 118.67 113.17 137.83 114 144 C 114.83 150.17 115.17 148 117 150 C 118.83 152 121.67 154.33 125 156 C 128.33 157.67 133.5 159.5 137 160 C 140.5 160.5 142.33 163.17 146 159 C 149.67 154.83 155.83 136.33 159 135 C 162.17 133.67 163.17 147.5 165 151 C 166.83 154.5 166.5 154.33 170 156 C 173.5 157.67 182.33 160.83 186 161 C 189.67 161.17 189.5 161.33 192 157 C 194.5 152.67 198 140.17 201 135 C 204 129.83 205.17 127.5 210 126 C 214.83 124.5 220.67 124.5 230 126 C 239.33 127.5 257.33 133.67 266 135 C 274.67 136.33 277.5 135 282 134 C 286.5 133 289.5 131.33 293 129 C 296.5 126.67 299.67 124.5 303 120 C 306.33 115.5 312.17 105.83 313 102 C 313.83 98.17 310.17 95.33 308 97 C 305.83 98.67 303 107.67 300 112 C 297 116.33 294.5 120 290 123 C 285.5 126 279.33 129.17 273 130 C 266.67 130.83 259.83 129.5 252 128 C 244.17 126.5 234.17 121.83 226 121 C 217.83 120.17 210.5 117.17 203 123 C 195.5 128.83 185.33 151.17 181 156 C 176.67 160.83 177.83 154.17 177 152 C 176.17 149.83 175.33 153.83 176 143 C 176.67 132.17 179.17 97.33 181 87 C 182.83 76.67 183.17 82.67 187 81 C 190.83 79.33 206.83 80.67 204 77 C 201.17 73.33 176.67 58.67 170 59 C 163.33 59.33 167.5 74.33 164 79 C 160.5 83.67 149.83 85.17 149 87 C 148.17 88.83 156.83 89 159 90 C 161.17 91 163.67 85.67 162 93 C 160.33 100.33 153.5 123.67 149 134 C 144.5 144.33 138 152.33 135 155 C 132 157.67 131.83 152.67 131 150 C 130.17 147.33 130 145.67 130 139 C 130 132.33 129.17 122.17 131 110 C 132.83 97.83 142 74.67 141 66 C 140 57.33 129 55.67 125 58 C 121 60.33 118.83 72.83 117 80 C 115.17 87.17 115.5 96.67 114 101 C 112.5 105.33 111.67 104.83 108 106 C 104.33 107.17 100.5 109.17 92 108 C 83.5 106.83 66.83 100.5 57 99 C 47.17 97.5 39.5 97.67 33 99 C 26.5 100.33 23.33 101.67 18 107 C 12.67 112.33 2.83 126.17 1 131 Z" fill="currentColor" fillRule="nonzero" />
          </svg>
          <span className="font-bold text-sm text-foreground">Luu Tran</span>
        </a>

        {/* Divider */}
        <div className="w-px h-6 bg-border" />

        {/* Nav Links */}
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            className="px-4 py-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors rounded-full hover:bg-primary-light"
          >
            {link.label}
          </a>
        ))}

        {/* Blog Link */}
        <Link
          href="/blog"
          className="px-4 py-1.5 text-sm font-medium text-muted-foreground hover:text-secondary transition-colors rounded-full hover:bg-secondary-light flex items-center gap-1.5"
        >
          <BookOpen className="w-4 h-4" />
          Blog
        </Link>

        {/* Divider */}
        <div className="w-px h-6 bg-border" />

        {/* Theme Toggle */}
        <div className="ml-2">
          <ThemeToggle />
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed top-6 right-6 z-50 flex items-center gap-3">
        <ThemeToggle />
        <motion.button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="w-10 h-10 rounded-full border border-border bg-card/90 backdrop-blur-md shadow-sm flex items-center justify-center"
          whileTap={{ scale: 0.95 }}
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </motion.button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden fixed inset-0 z-40 bg-card/98 backdrop-blur-lg flex flex-col items-center justify-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-2xl font-bold text-foreground hover:text-primary transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.1 }}
            >
              <Link
                href="/blog"
                className="text-2xl font-bold text-foreground hover:text-secondary transition-colors flex items-center gap-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <BookOpen className="w-6 h-6" />
                Blog
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
