"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Brain, Eye, MessageSquare, BarChart } from "lucide-react";

const projects = [
  {
    title: "Neural Vision Classifier",
    description: "Deep learning model for image classification using Convolutional Neural Networks. Achieves 95%+ accuracy on benchmark datasets with optimized architecture.",
    technologies: ["Python", "TensorFlow", "OpenCV", "Keras"],
    icon: <Eye className="w-6 h-6" />,
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "NLP Sentiment Engine",
    description: "Natural language processing system for sentiment analysis using transformer models. Processes social media data and customer reviews in real-time.",
    technologies: ["Python", "PyTorch", "Transformers", "spaCy"],
    icon: <MessageSquare className="w-6 h-6" />,
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Predictive Analytics Dashboard",
    description: "Interactive ML dashboard for business forecasting and data visualization. Features automated reporting and real-time model performance monitoring.",
    technologies: ["Python", "Scikit-learn", "Streamlit", "Pandas"],
    icon: <BarChart className="w-6 h-6" />,
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Recommendation System",
    description: "Collaborative filtering and content-based recommendation engine. Deployed with FastAPI and optimized for large-scale user datasets.",
    technologies: ["Python", "FastAPI", "PostgreSQL", "Redis"],
    icon: <Brain className="w-6 h-6" />,
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen py-24 px-4 md:px-8 lg:px-16 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Projects I Built</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of machine learning and AI projects showcasing expertise in 
            model development, deployment, and production-ready solutions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-background/50 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              {/* Project Header with Icon */}
              <div className="p-6 pb-0">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    {project.icon}
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full border border-border hover:bg-accent hover:border-primary/50 transition-all"
                      aria-label="View on GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full border border-border hover:bg-accent hover:border-primary/50 transition-all"
                      aria-label="View Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 pt-4">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-accent/50 border border-border hover:bg-primary/10 hover:border-primary/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
