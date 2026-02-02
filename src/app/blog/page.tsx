"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { blogPosts, getFeaturedPosts } from "@/data/blog";
import { BlogCard } from "@/components/BlogCard";
import { GridBackground } from "@/components/GridBackground";

export default function BlogPage() {
  const featuredPosts = getFeaturedPosts();
  const allPosts = blogPosts;

  return (
    <main className="relative min-h-screen bg-background">
      {/* Grid Background */}
      <GridBackground />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <Link 
            href="/" 
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-medium">Back to Portfolio</span>
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

      {/* Hero Section */}
      <section className="pt-16 pb-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Blog & Articles
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
              className="text-2xl font-bold mb-8 text-foreground"
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
            className="text-2xl font-bold mb-8 text-foreground"
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
      <footer className="py-8 px-4 border-t border-border bg-background">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Luu Minh Thong Tran
          </p>
        </div>
      </footer>
    </main>
  );
}
