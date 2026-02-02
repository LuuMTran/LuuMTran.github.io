"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, FileText } from "lucide-react";

const projects = [
  {
    title: "Policy Graph Builder",
    description: "A legal knowledge graph system that processes policy documents and builds interconnected semantic networks. Automatically extracts document structure, detects cross-document references, and enables intelligent document retrieval using vector embeddings.",
    technologies: ["FastAPI", "PostgreSQL", "ChromaDB", "Docker", "OpenAI API", "WhyHow.AI SDK", "Vector Search"],
    githubUrl: "https://github.com/LuuMTran/Policy-graph-builder",
    liveUrl: null,
    type: "github",
  },
  {
    title: "Auto Reddit Research",
    description: "Automated Reddit comment analysis pipeline that scrapes discussions, classifies comments by semantic similarity using BGE-M3 embeddings, and discovers hidden subtopics through BERTopic modeling. Enables large-scale social media research with intelligent filtering.",
    technologies: ["BERTopic", "BGE-M3", "FAISS", "Sentence-Transformers", "UMAP", "HDBSCAN", "Selenium", "Semantic Search"],
    githubUrl: "https://github.com/LuuMTran/Auto-Reddit-Research",
    liveUrl: null,
    type: "github",
  },
  {
    title: "Chess Outcome Predictor",
    description: "Machine learning system predicting chess game outcomes based on player ratings, opening codes, and time controls. Includes comprehensive exploratory data analysis and automated preprocessing pipelines deployed as a web service.",
    technologies: ["Scikit-learn", "Pandas", "Flask", "Classification Models", "Data Pipelines", "Feature Engineering"],
    githubUrl: "https://github.com/LuuMTran/Chess_Predictor",
    liveUrl: "https://chess-predictor.onrender.com/",
    type: "github",
  },
  {
    title: "Build Support Vector Machine from Scratch",
    description: "Academic research implementation exploring Support Vector Machine theory from mathematical foundations. Covers kernel methods, optimization techniques, hyperparameter tuning strategies, and comparative analysis against library implementations.",
    technologies: ["SVM", "Kernel Methods", "Mathematical Optimization", "Hyperparameter Tuning", "Model Evaluation", "NumPy", "Pandas", "Matplotlib"],
    githubUrl: "/files/SVM.pdf",
    liveUrl: null,
    type: "pdf",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen py-24 px-4 md:px-8 lg:px-16 flex items-center bg-background">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header - NO SPARKLES */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Things I've Built</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            These projects taught me more than any tutorial ever could. Each one has a story.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              {/* Project Number Badge */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-muted flex items-center justify-center text-lg font-bold text-muted-foreground group-hover:bg-primary-light group-hover:text-primary transition-colors">
                0{index + 1}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <a 
                  href={project.type === "pdf" ? project.githubUrl : project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors pr-12 cursor-pointer"
                >
                  {project.title}
                </a>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.type === "pdf" ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <FileText className="w-4 h-4" />
                      View PDF
                    </a>
                  ) : (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  )}
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
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-border text-muted-foreground font-semibold hover:border-primary hover:text-primary transition-all"
          >
            <Github className="w-5 h-5" />
            More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
