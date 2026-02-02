"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Share2, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/data/blog";
import { GridBackground } from "@/components/GridBackground";

interface BlogPostContentProps {
  post: BlogPost;
}

export function BlogPostContent({ post }: BlogPostContentProps) {
  // Convert markdown-like content to simple HTML with dark mode support
  const contentHtml = post.content
    .split('\n')
    .map(line => {
      if (line.startsWith('# ')) {
        return `<h1 class="text-3xl font-bold text-foreground mt-8 mb-4">${line.replace('# ', '')}</h1>`;
      }
      if (line.startsWith('## ')) {
        return `<h2 class="text-2xl font-bold text-foreground mt-6 mb-3">${line.replace('## ', '')}</h2>`;
      }
      if (line.startsWith('### ')) {
        return `<h3 class="text-xl font-bold text-foreground mt-4 mb-2">${line.replace('### ', '')}</h3>`;
      }
      if (line.startsWith('```')) {
        return '';
      }
      if (line.startsWith('[Continue') || line.startsWith('[Full content')) {
        return '';
      }
      if (line.trim() === '') {
        return '<br />';
      }
      return `<p class="text-muted-foreground leading-relaxed mb-4">${line}</p>`;
    })
    .join('');

  return (
    <main className="relative min-h-screen bg-background">
      {/* Grid Background */}
      <GridBackground />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <Link 
            href="/blog" 
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-medium">Back to Blog</span>
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 relative">
              <Image
                src="/logo.svg"
                alt="Luu Tran Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-bold text-foreground">Blog</span>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className="pt-8 pb-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Article Header */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Category - No Icon */}
            <div className="inline-block px-3 py-1 rounded-full bg-primary-light border border-border mb-4">
              <span className="text-sm font-medium text-primary">{post.category}</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-muted border border-border text-sm text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Share Buttons */}
            <div className="flex items-center gap-3 pt-4 border-t border-border">
              <span className="text-sm text-muted-foreground">Share:</span>
              <button className="p-2 rounded-full border border-border hover:bg-primary-light hover:border-primary hover:text-primary transition-all">
                <Twitter className="w-4 h-4" />
              </button>
              <button className="p-2 rounded-full border border-border hover:bg-primary-light hover:border-primary hover:text-primary transition-all">
                <Linkedin className="w-4 h-4" />
              </button>
              <button className="p-2 rounded-full border border-border hover:bg-primary-light hover:border-primary hover:text-primary transition-all">
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Article Body */}
          <motion.div
            className="prose prose-lg max-w-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div 
              className="bg-card rounded-2xl p-8 md:p-12 border border-border shadow-sm"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
          </motion.div>

          {/* Navigation */}
          <motion.div
            className="mt-12 flex items-center justify-between pt-8 border-t border-border"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <Link
              href="/blog"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>All Articles</span>
            </Link>
          </motion.div>
        </div>
      </article>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Luu Minh Thong Tran
          </p>
        </div>
      </footer>
    </main>
  );
}
