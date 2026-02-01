"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Neural Vision Classifier",
    description: "Built a CNN for image classification that achieved 95% accuracy on CIFAR-10. This was my first deep learning project and taught me a lot about overfitting.",
    technologies: ["Python", "TensorFlow", "OpenCV"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "NLP Sentiment Engine",
    description: "Created a sentiment analysis tool for social media monitoring. The trickiest part was handling sarcasm - still working on that!",
    technologies: ["Python", "PyTorch", "Transformers"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Predictive Analytics Dashboard",
    description: "A business forecasting tool I built for a class project. My professor said the UI was 'surprisingly good for a backend person'.",
    technologies: ["Python", "Streamlit", "Pandas"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Movie Recommendation System",
    description: "Like Netflix, but much simpler. Uses collaborative filtering to suggest movies based on what similar users liked.",
    technologies: ["Python", "FastAPI", "PostgreSQL"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen py-24 px-4 md:px-8 lg:px-16 flex items-center bg-slate-50/50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header - NO SPARKLES */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-slate-100">Things I've Built</h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
            These projects taught me more than any tutorial ever could. Each one has a story.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white dark:bg-slate-800 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              {/* Project Number Badge */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-lg font-bold text-slate-400 dark:text-slate-500 group-hover:bg-blue-100 group-hover:text-blue-600 dark:group-hover:bg-blue-900 dark:group-hover:text-blue-400 transition-colors">
                0{index + 1}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-slate-100 group-hover:text-blue-600 transition-colors pr-12">
                  {project.title}
                </h3>
                <p className="text-slate-700 dark:text-slate-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a 
            href="https://github.com/LuuMTran" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold hover:border-blue-500 hover:text-blue-600 transition-all"
          >
            <Github className="w-5 h-5" />
            More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
