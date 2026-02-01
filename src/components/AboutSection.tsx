"use client";

import { motion } from "framer-motion";
import { BookOpen, Building2, GraduationCap, Code2, Terminal, Database, Container } from "lucide-react";

const timelineItems = [
  {
    title: "Master of Artificial Intelligence",
    organization: "University of Technology Sydney",
    period: "2024 - 2026",
    description: "Specializing in machine learning, deep learning, and intelligent systems. Research focus on computer vision and natural language processing.",
    icon: <GraduationCap className="w-5 h-5" />,
    type: "education",
  },
  {
    title: "AI/ML Engineer Intern",
    organization: "Tech Innovations Lab",
    period: "2024",
    description: "Developed and deployed machine learning models for production systems. Implemented recommendation algorithms and optimized model performance.",
    icon: <Building2 className="w-5 h-5" />,
    type: "work",
  },
  {
    title: "Data Science Research Assistant",
    organization: "AI Research Center",
    period: "2023 - 2024",
    description: "Conducted research on neural network architectures and published findings. Assisted in developing novel approaches for time series forecasting.",
    icon: <BookOpen className="w-5 h-5" />,
    type: "work",
  },
  {
    title: "Machine Learning Bootcamp Instructor",
    organization: "Data Science Academy",
    period: "2022 - 2023",
    description: "Taught comprehensive ML courses covering supervised/unsupervised learning, deep learning, and practical implementation with Python frameworks.",
    icon: <Building2 className="w-5 h-5" />,
    type: "work",
  },
  {
    title: "Bachelor of Computer Science",
    organization: "FPT University",
    period: "2020 - 2024",
    description: "Major in Software Engineering with focus on AI and data science. Completed honors thesis on deep learning applications.",
    icon: <GraduationCap className="w-5 h-5" />,
    type: "education",
  },
];

const coreStack = [
  { name: "Python", icon: <Terminal className="w-4 h-4" /> },
  { name: "TensorFlow/PyTorch", icon: <Code2 className="w-4 h-4" /> },
  { name: "SQL", icon: <Database className="w-4 h-4" /> },
  { name: "Docker", icon: <Container className="w-4 h-4" /> },
];

export function AboutSection() {
  return (
    <section id="about" className="min-h-screen py-24 px-4 md:px-8 lg:px-16 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Profile Image Placeholder */}
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              {/* Animated border */}
              <div className="absolute inset-0 rounded-3xl border-2 border-dashed border-primary/30 animate-spin-slow" style={{ animationDuration: '20s' }} />
              
              {/* Profile placeholder */}
              <div className="absolute inset-4 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-border">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-4xl font-bold text-primary">T</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Profile Image</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-medium mb-2">Hello, I am</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-2">Luu Minh Thong Tran</h2>
            <p className="text-xl text-muted-foreground mb-6">AI/ML Engineer</p>
            
            <p className="text-muted-foreground leading-relaxed mb-8">
              Passionate about building intelligent systems that solve real-world problems. 
              With expertise in machine learning, deep learning, and data science, I specialize 
              in transforming complex data into actionable insights and production-ready AI solutions.
            </p>

            {/* Core Stack */}
            <div className="mb-8">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Code2 className="w-4 h-4" />
                Core Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {coreStack.map((item) => (
                  <span
                    key={item.name}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/50 border border-border text-sm font-medium"
                  >
                    {item.icon}
                    {item.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Experience Timeline */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Experience & Education</h3>
              <div className="space-y-4">
                {timelineItems.map((item, index) => (
                  <motion.div
                    key={item.title}
                    className="group relative pl-8 pb-4 border-l-2 border-border last:pb-0 hover:border-primary/50 transition-colors"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-background bg-primary/20 group-hover:bg-primary/50 transition-colors" />
                    
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-primary">{item.icon}</span>
                      <span className="text-sm text-muted-foreground">{item.period}</span>
                    </div>
                    <h4 className="font-bold group-hover:text-primary transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-1">{item.organization}</p>
                    <p className="text-sm text-muted-foreground/80">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
