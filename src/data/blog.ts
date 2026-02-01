// Blog posts data
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
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
    tags: ["Neural Networks", "Python", "NumPy", "Tutorial"],
    featured: true,
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
    tags: ["Transformers", "BERT", "GPT", "Attention Mechanism"],
    featured: true,
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
    tags: ["Hyperparameter Tuning", "Bayesian Optimization", "Optuna"],
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
    tags: ["CNN", "Computer Vision", "Image Classification", "OpenCV"],
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
    tags: ["Deployment", "FastAPI", "Docker", "CI/CD"],
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
    tags: ["XGBoost", "LightGBM", "Gradient Boosting", "Ensemble"],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter((post) => post.featured);
}

export function getAllCategories(): string[] {
  const categories = new Set(blogPosts.map((post) => post.category));
  return Array.from(categories);
}
