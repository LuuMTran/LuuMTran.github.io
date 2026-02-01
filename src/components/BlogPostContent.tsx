"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, BookOpen, Share2, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";
import { BlogPost } from "@/data/blog";
import { GridBackground } from "@/components/GridBackground";

interface BlogPostContentProps {
  post: BlogPost;
}

export function BlogPostContent({ post }: BlogPostContentProps) {
  // Convert markdown-like content to simple HTML
  const contentHtml = post.content
    .split('\n')
    .map(line => {
      if (line.startsWith('# ')) {
        return `<h1 class="text-3xl font-bold text-slate-900 mt-8 mb-4">${line.replace('# ', '')}</h1>`;
      }
      if (line.startsWith('## ')) {
        return `<h2 class="text-2xl font-bold text-slate-900 mt-6 mb-3">${line.replace('## ', '')}</h2>`;
      }
      if (line.startsWith('### ')) {
        return `<h3 class="text-xl font-bold text-slate-900 mt-4 mb-2">${line.replace('### ', '')}</h3>`;
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
      return `<p class="text-slate-600 leading-relaxed mb-4">${line}</p>`;
    })
    .join('');

  return (
    <main className="relative min-h-screen bg-slate-50">
      {/* Grid Background */}
      <GridBackground />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <Link 
            href="/blog" 
            className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-medium">Back to Blog</span>
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center text-white">
              <BookOpen className="w-4 h-4" />
            </div>
            <span className="font-bold text-slate-800">Blog</span>
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
            {/* Category */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-4">
              <BookOpen className="w-3 h-3 text-blue-600" />
              <span className="text-sm font-medium text-blue-600">{post.category}</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-6">
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
                  className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-sm text-slate-600"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Share Buttons */}
            <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
              <span className="text-sm text-slate-500">Share:</span>
              <button className="p-2 rounded-full border border-slate-200 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 transition-all">
                <Twitter className="w-4 h-4" />
              </button>
              <button className="p-2 rounded-full border border-slate-200 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 transition-all">
                <Linkedin className="w-4 h-4" />
              </button>
              <button className="p-2 rounded-full border border-slate-200 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 transition-all">
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
              className="bg-white rounded-2xl p-8 md:p-12 border border-slate-200 shadow-sm"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
          </motion.div>

          {/* Navigation */}
          <motion.div
            className="mt-12 flex items-center justify-between pt-8 border-t border-slate-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <Link
              href="/blog"
              className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>All Articles</span>
            </Link>
          </motion.div>
        </div>
      </article>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-200 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-slate-500">
            © 2024 Luu Minh Thong Tran. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
