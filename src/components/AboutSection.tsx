"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Mail, Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

const timelineItems = [
  {
    title: "Peer Helper",
    organization: "UTS College",
    period: "Mar 2025 - Present",
    description: "Communicates effectively to help current students understand coursework materials.",
  },
  {
    title: "AI/Data Internship",
    organization: "Katalyst",
    period: "Dec 2025 - Feb 2026",
    description: "Internship focused on AI/Data tasks in Ho Chi Minh City, Vietnam.",
  },
  {
    title: "Bachelor of Computing Science (Honours), Artificial Intelligence and Data Analytics",
    organization: "University of Technology Sydney",
    period: "Feb 2025 - Nov 2027",
    description: "Grade: 7/7.",
  },
  {
    title: "Diploma of Information Technology",
    organization: "UTS College",
    period: "Feb 2024 - Dec 2024",
    description: "Grade: 6.6/7.",
  },
];

export function AboutSection() {
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

  return (
    <motion.section
      ref={sectionRef}
      id="about"
      className="min-h-screen py-24 px-4 md:px-8 lg:px-16 flex items-center"
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">About Me</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Profile & Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Profile Picture - LinkedIn Style */}
            <div className="flex flex-col items-center lg:items-start">
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-card shadow-xl bg-gradient-to-br from-blue-500 to-emerald-500">
                <Image
                  src="/images/profile.jpg"
                  alt="Luu Minh Thong Tran"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Bio */}
            <div>
              <p className="text-primary font-medium mb-2">Hello!</p>
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">I'm Luu</h3>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Hey everyone! I'm Luu, a student studying Artificial Intelligence at UTS. 
                  Currently, I'm focusing on developing Python programming skills, Machine Learning, 
                  Deep Learning, and Data Science.
                </p>
                <p>
                  I hope to have the opportunity to learn, develop myself, and contribute to real 
                  projects in the AI/ML field. If you have any internship opportunities, projects, 
                  or simply want to connect and share, don't hesitate to contact me! ^^
                </p>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 mt-6 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Sydney, Australia</span>
              </div>

              {/* Social Links */}
              <div className="flex gap-3 mt-6">
                <a
                  href="https://www.linkedin.com/in/luu-minh-thong-tran-31971b238/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-border hover:bg-primary-light hover:border-primary transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-muted-foreground" />
                </a>
                <a
                  href="https://github.com/LuuMTran"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-border hover:bg-muted transition-all"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5 text-muted-foreground" />
                </a>
                <a
                  href="mailto:minhthong7375@gmail.com"
                  className="p-3 rounded-full border border-border hover:bg-primary-light transition-all"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5 text-muted-foreground" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-foreground">My Journey</h3>
            <div className="space-y-6">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="relative pl-8 pb-6 border-l-2 border-border last:pb-0"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-2 border-card shadow" />
                  
                  <span className="text-sm text-muted-foreground font-medium">{item.period}</span>
                  <h4 className="font-bold text-foreground mt-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.organization}</p>
                  <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Currently Looking For */}
            <motion.div 
              className="mt-8 p-6 rounded-2xl bg-primary-light border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <h4 className="font-bold mb-2 text-primary-dark">Currently Looking For</h4>
              <p className="text-sm text-primary">
                I'm actively seeking internship opportunities in AI/ML engineering where I can 
                apply my skills, learn from experienced professionals, and contribute to impactful projects. 
                If you're hiring, I'd love to connect!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
