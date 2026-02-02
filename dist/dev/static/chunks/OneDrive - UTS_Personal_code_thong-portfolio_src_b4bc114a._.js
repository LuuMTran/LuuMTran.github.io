(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/data/blog.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Blog posts data
__turbopack_context__.s([
    "blogPosts",
    ()=>blogPosts,
    "getAllCategories",
    ()=>getAllCategories,
    "getBlogPostBySlug",
    ()=>getBlogPostBySlug,
    "getFeaturedPosts",
    ()=>getFeaturedPosts
]);
const blogPosts = [
    {
        slug: "neural-network-from-scratch",
        title: "Building a Neural Network from Scratch",
        excerpt: "Learn how to implement backpropagation and gradient descent to build a fully functional neural network using only NumPy.",
        content: `
# Building a Neural Network from Scratch

In this comprehensive guide, we'll build a neural network from scratch using only NumPy. This exercise will give you deep insights into how neural networks actually work under the hood.

## Why Build From Scratch?

Understanding the fundamentals is crucial for any ML engineer. While frameworks like TensorFlow and PyTorch abstract away the details, knowing what's happening internally helps you:
- Debug issues more effectively
- Optimize architectures better
- Understand the mathematics behind deep learning

## The Architecture

We'll build a simple feedforward neural network with:
- Input layer
- Two hidden layers with ReLU activation
- Output layer with softmax
- Cross-entropy loss function

## Implementation

### Step 1: Initialize Parameters
\`\`\`python
import numpy as np

def initialize_parameters(layer_dims):
    parameters = {}
    L = len(layer_dims)
    
    for l in range(1, L):
        parameters['W' + str(l)] = np.random.randn(layer_dims[l], layer_dims[l-1]) * 0.01
        parameters['b' + str(l)] = np.zeros((layer_dims[l], 1))
    
    return parameters
\`\`\`

### Step 2: Forward Propagation
The forward pass computes the output of the network...

[Continue with full implementation details]
    `,
        date: "2024-01-15",
        readTime: "8 min read",
        category: "Deep Learning",
        tags: [
            "Neural Networks",
            "Python",
            "NumPy",
            "Tutorial"
        ],
        featured: true
    },
    {
        slug: "transformers-explained",
        title: "Transformers Explained: A Visual Guide",
        excerpt: "A comprehensive visual explanation of the Transformer architecture that powers GPT, BERT, and modern NLP systems.",
        content: `
# Transformers Explained: A Visual Guide

Transformers have revolutionized natural language processing since their introduction in the "Attention Is All You Need" paper. Let's break down how they work.

## The Problem with RNNs

Recurrent Neural Networks process sequences one element at a time, which makes them:
- Slow to train (sequential processing)
- Prone to vanishing gradients
- Unable to capture long-range dependencies effectively

## The Transformer Solution

Transformers solve these issues through:
1. **Self-Attention**: Every token can attend to every other token
2. **Parallel Processing**: No sequential dependencies
3. **Positional Encoding**: Injecting sequence order information

## Architecture Overview

### Encoder Stack
The encoder processes input tokens and creates rich representations...

[Full content continues]
    `,
        date: "2024-01-10",
        readTime: "12 min read",
        category: "NLP",
        tags: [
            "Transformers",
            "BERT",
            "GPT",
            "Attention Mechanism"
        ],
        featured: true
    },
    {
        slug: "hyperparameter-tuning-guide",
        title: "The Complete Guide to Hyperparameter Tuning",
        excerpt: "Master hyperparameter optimization techniques including Grid Search, Random Search, Bayesian Optimization, and Hyperband.",
        content: `
# The Complete Guide to Hyperparameter Tuning

Hyperparameter tuning is both an art and a science. This guide covers all major techniques from basic to advanced.

## What Are Hyperparameters?

Unlike model parameters (weights), hyperparameters are:
- Learning rate
- Batch size
- Number of layers
- Number of units per layer
- Regularization strength

## Manual Tuning

Start with understanding each hyperparameter's effect...

[Full content continues]
    `,
        date: "2024-01-05",
        readTime: "10 min read",
        category: "MLOps",
        tags: [
            "Hyperparameter Tuning",
            "Bayesian Optimization",
            "Optuna"
        ]
    },
    {
        slug: "computer-vision-cnn",
        title: "Computer Vision with CNNs: From Theory to Practice",
        excerpt: "Learn how Convolutional Neural Networks process images and build your own image classifier from scratch.",
        content: `
# Computer Vision with CNNs

Convolutional Neural Networks are the backbone of modern computer vision. Let's understand how they work and build one ourselves.

## Why CNNs for Images?

Images have special properties:
- Spatial structure matters
- Nearby pixels are correlated
- Features are translation invariant

## The Convolution Operation

At the heart of CNNs is the convolution operation...

[Full content continues]
    `,
        date: "2023-12-28",
        readTime: "15 min read",
        category: "Computer Vision",
        tags: [
            "CNN",
            "Computer Vision",
            "Image Classification",
            "OpenCV"
        ]
    },
    {
        slug: "deploying-ml-models",
        title: "Deploying ML Models to Production: A Practical Guide",
        excerpt: "Learn how to deploy machine learning models using FastAPI, Docker, and cloud platforms with CI/CD pipelines.",
        content: `
# Deploying ML Models to Production

Building a model is only half the battle. Deploying it to production requires careful consideration of many factors.

## Deployment Options

### 1. REST API with FastAPI
FastAPI is perfect for ML model serving because:
- High performance (async)
- Automatic API documentation
- Easy to use

### 2. Batch Processing
For scenarios where real-time isn't needed...

[Full content continues]
    `,
        date: "2023-12-20",
        readTime: "11 min read",
        category: "MLOps",
        tags: [
            "Deployment",
            "FastAPI",
            "Docker",
            "CI/CD"
        ]
    },
    {
        slug: "gradient-boosting-explained",
        title: "Gradient Boosting Explained: XGBoost, LightGBM, CatBoost",
        excerpt: "Deep dive into gradient boosting algorithms and when to use each variant for maximum performance.",
        content: `
# Gradient Boosting Explained

Gradient boosting machines have dominated tabular data competitions for years. Let's understand why.

## Ensemble Methods

Three main types:
1. Bagging (Random Forest)
2. Boosting (AdaBoost, Gradient Boosting)
3. Stacking

## How Gradient Boosting Works

The key idea: train models sequentially, each correcting errors of previous ones...

[Full content continues]
    `,
        date: "2023-12-15",
        readTime: "9 min read",
        category: "Machine Learning",
        tags: [
            "XGBoost",
            "LightGBM",
            "Gradient Boosting",
            "Ensemble"
        ]
    }
];
function getBlogPostBySlug(slug) {
    return blogPosts.find((post)=>post.slug === slug);
}
function getFeaturedPosts() {
    return blogPosts.filter((post)=>post.featured);
}
function getAllCategories() {
    const categories = new Set(blogPosts.map((post)=>post.category));
    return Array.from(categories);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BlogCard",
    ()=>BlogCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
"use client";
;
;
;
;
function BlogCard({ post, index, featured = false }) {
    if (featured) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].article, {
            className: "group relative overflow-hidden rounded-2xl border border-slate-200 bg-white hover:border-blue-300 transition-all duration-300 hover:shadow-xl",
            initial: {
                opacity: 0,
                y: 30
            },
            animate: {
                opacity: 1,
                y: 0
            },
            transition: {
                duration: 0.5,
                delay: index * 0.1
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                    className: "w-3 h-3 text-blue-600"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogCard.tsx",
                                    lineNumber: 26,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs font-medium text-blue-600",
                                    children: post.category
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogCard.tsx",
                                    lineNumber: 27,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogCard.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2",
                            children: post.title
                        }, void 0, false, {
                            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogCard.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-slate-600 text-sm mb-4 line-clamp-3 leading-relaxed",
                            children: post.excerpt
                        }, void 0, false, {
                            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogCard.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4 text-xs text-slate-500 mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                            className: "w-3 h-3"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogCard.tsx",
                                            lineNumber: 43,
                                            columnNumber: 15
                                        }, this),
                                        post.date
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogCard.tsx",
                                    lineNumber: 42,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                            className: "w-3 h-3"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogCard.tsx",
                                            lineNumber: 47,
                                            columnNumber: 15
                                        }, this),
                                        post.readTime
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogCard.tsx",
                                    lineNumber: 46,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogCard.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-1.5",
                            children: post.tags.slice(0, 3).map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "px-2 py-0.5 text-xs rounded-full bg-slate-100 text-slate-600",
                                    children: tag
                                }, tag, false, {
                                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogCard.tsx",
                                    lineNumber: 55,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogCard.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: `/blog/${post.slug}`,
                            className: "mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:gap-2 transition-all",
                            children: [
                                "Read More",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogCard.tsx",
                                    lineNumber: 70,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogCard.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogCard.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-gradient-to-br from-blue-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                }, void 0, false, {
                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogCard.tsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogCard.tsx",
            lineNumber: 17,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].article, {
        className: "group relative overflow-hidden rounded-xl border border-slate-200 bg-white hover:border-blue-300 transition-all duration-300 hover:shadow-lg",
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.4,
            delay: index * 0.1
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inline-block px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-100 mb-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs font-medium text-blue-600",
                            children: post.category
                        }, void 0, false, {
                            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogCard.tsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogCard.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2",
                        children: post.title
                    }, void 0, false, {
                        fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogCard.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-600 text-sm mb-3 line-clamp-2",
                        children: post.excerpt
                    }, void 0, false, {
                        fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogCard.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 text-xs text-slate-500",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                        className: "w-3 h-3"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogCard.tsx",
                                        lineNumber: 106,
                                        columnNumber: 13
                                    }, this),
                                    post.date
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogCard.tsx",
                                lineNumber: 105,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                        className: "w-3 h-3"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogCard.tsx",
                                        lineNumber: 110,
                                        columnNumber: 13
                                    }, this),
                                    post.readTime
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogCard.tsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogCard.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogCard.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: `/blog/${post.slug}`,
                className: "absolute inset-0",
                "aria-label": `Read ${post.title}`
            }, void 0, false, {
                fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogCard.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogCard.tsx",
        lineNumber: 81,
        columnNumber: 5
    }, this);
}
_c = BlogCard;
var _c;
__turbopack_context__.k.register(_c, "BlogCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/GridBackground.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GridBackground",
    ()=>GridBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function GridBackground() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 w-full h-full overflow-hidden -z-10 animated-grid",
        style: {
            backgroundImage: `linear-gradient(to right, var(--border) 1px, transparent 1px),
          linear-gradient(to bottom, var(--border) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
        }
    }, void 0, false, {
        fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/GridBackground.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = GridBackground;
var _c;
__turbopack_context__.k.register(_c, "GridBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/app/blog/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BlogPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$src$2f$data$2f$blog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/data/blog.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$src$2f$components$2f$BlogCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$src$2f$components$2f$GridBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/GridBackground.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function BlogPage() {
    const featuredPosts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$src$2f$data$2f$blog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFeaturedPosts"])();
    const allPosts = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$src$2f$data$2f$blog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["blogPosts"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "relative min-h-screen bg-slate-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$src$2f$components$2f$GridBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GridBackground"], {}, void 0, false, {
                fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/app/blog/page.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/app/blog/page.tsx",
                                    lineNumber: 26,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-medium",
                                    children: "Back to Portfolio"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/app/blog/page.tsx",
                                    lineNumber: 27,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/app/blog/page.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center text-white",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/app/blog/page.tsx",
                                        lineNumber: 31,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/app/blog/page.tsx",
                                    lineNumber: 30,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-bold text-slate-800",
                                    children: "Blog"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/app/blog/page.tsx",
                                    lineNumber: 33,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/app/blog/page.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/app/blog/page.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/app/blog/page.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "pt-16 pb-12 px-4 md:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.6
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                        className: "w-4 h-4 text-blue-600"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/app/blog/page.tsx",
                                        lineNumber: 47,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-medium text-blue-600",
                                        children: "AI/ML Insights"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/app/blog/page.tsx",
                                        lineNumber: 48,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/app/blog/page.tsx",
                                lineNumber: 46,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl md:text-5xl font-bold mb-4 text-slate-900",
                                children: "Blog & Articles"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/app/blog/page.tsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg text-slate-600 max-w-2xl mx-auto",
                                children: "Sharing my journey in AI/ML engineering. Deep dives into machine learning concepts, tutorials, and practical implementation guides."
                            }, void 0, false, {
                                fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/app/blog/page.tsx",
                                lineNumber: 53,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/app/blog/page.tsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/app/blog/page.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/app/blog/page.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            featuredPosts.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-12 px-4 md:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                            className: "text-2xl font-bold mb-8 text-slate-900",
                            initial: {
                                opacity: 0,
                                x: -20
                            },
                            animate: {
                                opacity: 1,
                                x: 0
                            },
                            transition: {
                                duration: 0.4,
                                delay: 0.2
                            },
                            children: "Featured Articles"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/app/blog/page.tsx",
                            lineNumber: 65,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                            children: featuredPosts.map((post, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$src$2f$components$2f$BlogCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlogCard"], {
                                    post: post,
                                    index: index,
                                    featured: true
                                }, post.slug, false, {
                                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/app/blog/page.tsx",
                                    lineNumber: 75,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/app/blog/page.tsx",
                            lineNumber: 73,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/app/blog/page.tsx",
                    lineNumber: 64,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/app/blog/page.tsx",
                lineNumber: 63,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-12 px-4 md:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                            className: "text-2xl font-bold mb-8 text-slate-900",
                            initial: {
                                opacity: 0,
                                x: -20
                            },
                            animate: {
                                opacity: 1,
                                x: 0
                            },
                            transition: {
                                duration: 0.4,
                                delay: 0.3
                            },
                            children: "All Articles"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/app/blog/page.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                            children: allPosts.map((post, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$src$2f$components$2f$BlogCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlogCard"], {
                                    post: post,
                                    index: index
                                }, post.slug, false, {
                                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/app/blog/page.tsx",
                                    lineNumber: 95,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/app/blog/page.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/app/blog/page.tsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/app/blog/page.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "py-8 px-4 border-t border-slate-200 bg-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-slate-500",
                        children: "© 2024 Luu Minh Thong Tran. All rights reserved."
                    }, void 0, false, {
                        fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/app/blog/page.tsx",
                        lineNumber: 104,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/app/blog/page.tsx",
                    lineNumber: 103,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/app/blog/page.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/app/blog/page.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = BlogPage;
var _c;
__turbopack_context__.k.register(_c, "BlogPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=OneDrive%20-%20UTS_Personal_code_thong-portfolio_src_b4bc114a._.js.map