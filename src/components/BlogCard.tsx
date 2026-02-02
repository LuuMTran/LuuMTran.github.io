"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { BlogPost } from "@/data/blog";

interface BlogCardProps {
  post: BlogPost;
  index: number;
  featured?: boolean;
}

export function BlogCard({ post, index, featured = false }: BlogCardProps) {
  if (featured) {
    return (
      <motion.article
        className="group relative overflow-hidden rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <div className="p-6">
          {/* Category Badge - No Icon */}
          <div className="inline-block px-3 py-1 rounded-full bg-primary-light border border-border mb-4">
            <span className="text-xs font-medium text-primary">{post.category}</span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-muted-foreground text-sm mb-4 line-clamp-3 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Meta */}
          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {post.date}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {post.readTime}
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-xs rounded-full bg-muted text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Read More Link */}
          <Link
            href={`/blog/${post.slug}`}
            className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all"
          >
            Read More
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Hover Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      </motion.article>
    );
  }

  return (
    <motion.article
      className="group relative overflow-hidden rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div className="p-5">
        {/* Category - No Icon */}
        <div className="inline-block px-2.5 py-0.5 rounded-full bg-primary-light border border-border mb-3">
          <span className="text-xs font-medium text-primary">{post.category}</span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
          {post.excerpt}
        </p>

        {/* Meta */}
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {post.date}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {post.readTime}
          </div>
        </div>
      </div>

      {/* Link Overlay */}
      <Link href={`/blog/${post.slug}`} className="absolute inset-0" aria-label={`Read ${post.title}`} />
    </motion.article>
  );
}
