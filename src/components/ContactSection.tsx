"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, ExternalLink } from "lucide-react";

export function ContactSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { amount: 0.2, once: false });

  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, delay: 0.15, ease: [0.215, 0.61, 0.355, 1] as const },
    },
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct mailto URL with pre-filled content
    const subject = encodeURIComponent(`Portfolio Contact - ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Thong,\n\n${formData.message}\n\nBest regards,\n${formData.name}\n${formData.email}`
    );

    const mailtoUrl = `mailto:minhthong7375@gmail.com?subject=${subject}&body=${body}`;

    // Open default email client
    window.location.href = mailtoUrl;
  };

  return (
    <motion.section
      ref={sectionRef}
      id="contact"
      className="min-h-screen py-24 px-4 md:px-8 lg:px-16 flex items-center bg-background"
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Let's Chat</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project idea? Want to talk about AI? Or just want to grab coffee?
            I'm always open to meeting new people.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-muted-foreground">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-muted-foreground/60"
                  placeholder="Luu Tran"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-muted-foreground">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-muted-foreground/60"
                  placeholder="LuuTran@gmail.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-muted-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none placeholder:text-muted-foreground/60"
                  placeholder="Tell me about your project, or just say hi!"
                />
              </div>

              <motion.button
                type="submit"
                className="w-full py-4 px-6 rounded-xl bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-2 hover:bg-primary-dark transition-all"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <ExternalLink className="w-5 h-5" />
                Open Email Client
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Direct Contact */}
            <div className="p-6 rounded-2xl bg-card border border-border">
              <h3 className="font-bold mb-4 text-foreground">Prefer to reach out directly?</h3>
              <div className="space-y-3">
                <a
                  href="mailto:minhthong7375@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <span>minhthong7375@gmail.com</span>
                </a>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-secondary" />
                  </div>
                  <span>Sydney, Australia</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="p-6 rounded-2xl bg-card border border-border">
              <h3 className="font-bold mb-4 text-foreground">Find me online</h3>
              <div className="flex gap-3">
                <a
                  href="https://github.com/LuuMTran"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-border hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/luu-minh-thong-tran-31971b238/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-border hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Fun note */}
            <div className="p-4 rounded-xl bg-primary-light border border-border">
              <p className="text-sm text-muted-foreground">
                <strong className="text-primary">Pro tip:</strong> I usually respond within 24 hours.
                If you don't hear back, check your spam folder or try LinkedIn!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
