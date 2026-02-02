"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { blogPosts } from "@/data/blog";

export function BlogSection() {
  // Get the latest post only
  const latestPost = blogPosts[0];

  return (
    <section id="blog" className="min-h-screen py-24 px-4 md:px-8 lg:px-16 flex items-center bg-background">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Latest from the Blog</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I write about AI/ML concepts, tutorials, and things I'm learning along the way.
          </p>
        </motion.div>

        {/* Featured Blog Post - Smaller */}
        {latestPost && (
          <motion.article
            className="group relative overflow-hidden rounded-xl border border-border bg-background hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="p-6">
              {/* Category */}
              <div className="inline-block px-2.5 py-0.5 rounded-full bg-primary-light border border-border mb-3">
                <span className="text-xs font-medium text-primary">{latestPost.category}</span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {latestPost.title}
              </h3>

              {/* Excerpt */}
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-2">
                {latestPost.excerpt}
              </p>

              {/* Meta */}
              <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {latestPost.date}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {latestPost.readTime}
                </div>
              </div>

              {/* Read More */}
              <Link
                href={`/blog/${latestPost.slug}`}
                className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all"
              >
                Read Article
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.article>
        )}

        {/* Notes Section - No icon, with blue button */}
        <motion.div
          className="mt-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="rounded-xl border border-border bg-background p-6">
            <h3 className="text-lg font-bold text-foreground mb-3">Notes</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              This section is where I'll share quick thoughts, learning notes, and insights from my journey in AI/ML. 
              More notes will be added as my journey continues...
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              Go to Blog
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
