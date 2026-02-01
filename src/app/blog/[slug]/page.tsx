import { notFound } from "next/navigation";
import { getBlogPostBySlug, blogPosts } from "@/data/blog";
import { BlogPostContent } from "@/components/BlogPostContent";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Server Component
export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return <BlogPostContent post={post} />;
}

// Generate static paths for all blog posts
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}
