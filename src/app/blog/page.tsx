"use client";

import { motion } from "framer-motion";
import { Sparkles, BookOpen, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { blogPosts, getFeaturedPosts } from "@/data/blog";
import { BlogCard } from "@/components/BlogCard";
import { GridBackground } from "@/components/GridBackground";

export default function BlogPage() {
  const featuredPosts = getFeaturedPosts();
  const allPosts = blogPosts;

  return (
    <main className="relative min-h-screen bg-slate-50">
      {/* Grid Background */}
      <GridBackground />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <Link 
            href="/" 
            className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-medium">Back to Portfolio</span>
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center text-white">
              <BookOpen className="w-4 h-4" />
            </div>
            <span className="font-bold text-slate-800">Blog</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-16 pb-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-600">AI/ML Insights</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              Blog & Articles
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Sharing my journey in AI/ML engineering. Deep dives into machine learning concepts, 
              tutorials, and practical implementation guides.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-12 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              className="text-2xl font-bold mb-8 text-slate-900"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              Featured Articles
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredPosts.map((post, index) => (
                <BlogCard key={post.slug} post={post} index={index} featured />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-2xl font-bold mb-8 text-slate-900"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            All Articles
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allPosts.map((post, index) => (
              <BlogCard key={post.slug} post={post} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-slate-500">
            © 2024 Luu Minh Thong Tran. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
