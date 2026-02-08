"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Share2, Linkedin, Copy, Mail, Check } from "lucide-react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import { BlogPost } from "@/data/blog";
import { GridBackground } from "@/components/GridBackground";

import { useState } from "react";

interface BlogPostContentProps {
  post: BlogPost;
}

export function BlogPostContent({ post }: BlogPostContentProps) {
  const [copied, setCopied] = useState(false);

  const getShareUrl = () => {
    if (typeof window !== "undefined") {
      return window.location.href;
    }
    return "";
  };

  const handleLinkedInShare = () => {
    const url = getShareUrl();
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    window.open(linkedInUrl, "_blank", "width=600,height=600");
  };

  const handleCopyLink = async () => {
    const url = getShareUrl();
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy link:", err);
    }
  };

  const handleEmailShare = () => {
    const url = getShareUrl();
    const subject = encodeURIComponent(`Check out: ${post.title}`);
    const body = encodeURIComponent(`I thought you might find this interesting:\n\n${post.title}\n\n${url}`);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };

  return (
    <main className="relative min-h-screen bg-background">
      {/* KaTeX CSS */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css"
        integrity="sha384-n8MVd4RsNIU0tAv4ct0nTaAbDJwPJzDEaqSD1odI+WdtXRGWt2kTvGFasHpSy3SV"
        crossOrigin="anonymous"
      />

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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="36"
              viewBox="0 0 323 229"
              className="text-primary"
            >
              <path d="M 1 131 C -0.83 135.83 4.67 137.67 7 136 C 9.33 134.33 11.83 125.5 15 121 C 18.17 116.5 21.67 112 26 109 C 30.33 106 34.83 103.67 41 103 C 47.17 102.33 55 103.5 63 105 C 71 106.5 81.33 111.17 89 112 C 96.67 112.83 105.17 109.83 109 110 C 112.83 110.17 111.17 107.33 112 113 C 112.83 118.67 113.17 137.83 114 144 C 114.83 150.17 115.17 148 117 150 C 118.83 152 121.67 154.33 125 156 C 128.33 157.67 133.5 159.5 137 160 C 140.5 160.5 142.33 163.17 146 159 C 149.67 154.83 155.83 136.33 159 135 C 162.17 133.67 163.17 147.5 165 151 C 166.83 154.5 166.5 154.33 170 156 C 173.5 157.67 182.33 160.83 186 161 C 189.67 161.17 189.5 161.33 192 157 C 194.5 152.67 198 140.17 201 135 C 204 129.83 205.17 127.5 210 126 C 214.83 124.5 220.67 124.5 230 126 C 239.33 127.5 257.33 133.67 266 135 C 274.67 136.33 277.5 135 282 134 C 286.5 133 289.5 131.33 293 129 C 296.5 126.67 299.67 124.5 303 120 C 306.33 115.5 312.17 105.83 313 102 C 313.83 98.17 310.17 95.33 308 97 C 305.83 98.67 303 107.67 300 112 C 297 116.33 294.5 120 290 123 C 285.5 126 279.33 129.17 273 130 C 266.67 130.83 259.83 129.5 252 128 C 244.17 126.5 234.17 121.83 226 121 C 217.83 120.17 210.5 117.17 203 123 C 195.5 128.83 185.33 151.17 181 156 C 176.67 160.83 177.83 154.17 177 152 C 176.17 149.83 175.33 153.83 176 143 C 176.67 132.17 179.17 97.33 181 87 C 182.83 76.67 183.17 82.67 187 81 C 190.83 79.33 206.83 80.67 204 77 C 201.17 73.33 176.67 58.67 170 59 C 163.33 59.33 167.5 74.33 164 79 C 160.5 83.67 149.83 85.17 149 87 C 148.17 88.83 156.83 89 159 90 C 161.17 91 163.67 85.67 162 93 C 160.33 100.33 153.5 123.67 149 134 C 144.5 144.33 138 152.33 135 155 C 132 157.67 131.83 152.67 131 150 C 130.17 147.33 130 145.67 130 139 C 130 132.33 129.17 122.17 131 110 C 132.83 97.83 142 74.67 141 66 C 140 57.33 129 55.67 125 58 C 121 60.33 118.83 72.83 117 80 C 115.17 87.17 115.5 96.67 114 101 C 112.5 105.33 111.67 104.83 108 106 C 104.33 107.17 100.5 109.17 92 108 C 83.5 106.83 66.83 100.5 57 99 C 47.17 97.5 39.5 97.67 33 99 C 26.5 100.33 23.33 101.67 18 107 C 12.67 112.33 2.83 126.17 1 131 Z" fill="currentColor" fillRule="nonzero" />
            </svg>
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
              <button
                onClick={handleLinkedInShare}
                className="p-2 rounded-full border border-border hover:bg-primary-light hover:border-primary hover:text-primary transition-all"
                title="Share on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </button>
              <button
                onClick={handleCopyLink}
                className="p-2 rounded-full border border-border hover:bg-primary-light hover:border-primary hover:text-primary transition-all"
                title={copied ? "Copied!" : "Copy link"}
              >
                {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
              </button>
              <button
                onClick={handleEmailShare}
                className="p-2 rounded-full border border-border hover:bg-primary-light hover:border-primary hover:text-primary transition-all"
                title="Share via Email"
              >
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Article Body */}
          <motion.div
            className="prose prose-lg max-w-none dark:prose-invert"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-card rounded-2xl p-8 md:p-12 border border-border shadow-sm">
              <style>{`
                .katex-display {
                  margin: 1.5em 0;
                  overflow-x: auto;
                  overflow-y: hidden;
                }
                .katex-display .katex {
                  display: block;
                  margin: 0 auto;
                  text-align: center;
                }
                iframe {
                  max-width: 100%;
                }
              `}</style>
              <ReactMarkdown
                remarkPlugins={[remarkMath]}
                rehypePlugins={[rehypeRaw, rehypeKatex]}
                components={{
                  h1: ({ children }) => (
                    <h1 className="text-3xl font-bold text-foreground mt-8 mb-4">{children}</h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-2xl font-bold text-foreground mt-6 mb-3">{children}</h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-xl font-bold text-foreground mt-4 mb-2">{children}</h3>
                  ),
                  p: ({ children }) => (
                    <p className="text-muted-foreground leading-relaxed mb-4">{children}</p>
                  ),
                  img: ({ src, alt }) => (
                    <img
                      src={src}
                      alt={alt}
                      className="w-full max-w-2xl mx-auto my-6 rounded-lg shadow-md block"
                    />
                  ),
                  iframe: ({ src, ...props }) => (
                    <div className="my-6 w-full overflow-hidden rounded-lg shadow-lg">
                      <iframe
                        src={src}
                        {...props}
                        className="w-full h-[500px] md:h-[600px] border-0"
                        allowFullScreen
                      />
                    </div>
                  ),
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>
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
