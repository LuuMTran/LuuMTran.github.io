(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,67499,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"warnOnce",{enumerable:!0,get:function(){return a}});let a=e=>{}},74787,e=>{"use strict";let t=[{slug:"neural-network-from-scratch",title:"Building a Neural Network from Scratch",excerpt:"Learn how to implement backpropagation and gradient descent to build a fully functional neural network using only NumPy.",content:`
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
    `,date:"2024-01-15",readTime:"8 min read",category:"Deep Learning",tags:["Neural Networks","Python","NumPy","Tutorial"],featured:!0},{slug:"transformers-explained",title:"Transformers Explained: A Visual Guide",excerpt:"A comprehensive visual explanation of the Transformer architecture that powers GPT, BERT, and modern NLP systems.",content:`
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
    `,date:"2024-01-10",readTime:"12 min read",category:"NLP",tags:["Transformers","BERT","GPT","Attention Mechanism"],featured:!0},{slug:"hyperparameter-tuning-guide",title:"The Complete Guide to Hyperparameter Tuning",excerpt:"Master hyperparameter optimization techniques including Grid Search, Random Search, Bayesian Optimization, and Hyperband.",content:`
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
    `,date:"2024-01-05",readTime:"10 min read",category:"MLOps",tags:["Hyperparameter Tuning","Bayesian Optimization","Optuna"]},{slug:"computer-vision-cnn",title:"Computer Vision with CNNs: From Theory to Practice",excerpt:"Learn how Convolutional Neural Networks process images and build your own image classifier from scratch.",content:`
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
    `,date:"2023-12-28",readTime:"15 min read",category:"Computer Vision",tags:["CNN","Computer Vision","Image Classification","OpenCV"]},{slug:"deploying-ml-models",title:"Deploying ML Models to Production: A Practical Guide",excerpt:"Learn how to deploy machine learning models using FastAPI, Docker, and cloud platforms with CI/CD pipelines.",content:`
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
    `,date:"2023-12-20",readTime:"11 min read",category:"MLOps",tags:["Deployment","FastAPI","Docker","CI/CD"]},{slug:"gradient-boosting-explained",title:"Gradient Boosting Explained: XGBoost, LightGBM, CatBoost",excerpt:"Deep dive into gradient boosting algorithms and when to use each variant for maximum performance.",content:`
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
    `,date:"2023-12-15",readTime:"9 min read",category:"Machine Learning",tags:["XGBoost","LightGBM","Gradient Boosting","Ensemble"]}];function r(){return t.filter(e=>e.featured)}e.s(["blogPosts",0,t,"getFeaturedPosts",()=>r])},14186,89255,e=>{"use strict";var t=e.i(1408),r=e.i(68856),a=e.i(224),i=e.i(53884);let n=(0,e.i(35972).default)("arrow-right",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);e.s(["ArrowRight",()=>n],89255);var s=e.i(40474);function o({post:e,index:o,featured:l=!1}){return l?(0,t.jsxs)(r.motion.article,{className:"group relative overflow-hidden rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-xl",initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.5,delay:.1*o},children:[(0,t.jsxs)("div",{className:"p-6",children:[(0,t.jsx)("div",{className:"inline-block px-3 py-1 rounded-full bg-primary-light border border-border mb-4",children:(0,t.jsx)("span",{className:"text-xs font-medium text-primary",children:e.category})}),(0,t.jsx)("h3",{className:"text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2",children:e.title}),(0,t.jsx)("p",{className:"text-muted-foreground text-sm mb-4 line-clamp-3 leading-relaxed",children:e.excerpt}),(0,t.jsxs)("div",{className:"flex items-center gap-4 text-xs text-muted-foreground mb-4",children:[(0,t.jsxs)("div",{className:"flex items-center gap-1",children:[(0,t.jsx)(a.Calendar,{className:"w-3 h-3"}),e.date]}),(0,t.jsxs)("div",{className:"flex items-center gap-1",children:[(0,t.jsx)(i.Clock,{className:"w-3 h-3"}),e.readTime]})]}),(0,t.jsx)("div",{className:"flex flex-wrap gap-1.5",children:e.tags.slice(0,3).map(e=>(0,t.jsx)("span",{className:"px-2 py-0.5 text-xs rounded-full bg-muted text-muted-foreground",children:e},e))}),(0,t.jsxs)(s.default,{href:`/blog/${e.slug}`,className:"mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all",children:["Read More",(0,t.jsx)(n,{className:"w-4 h-4"})]})]}),(0,t.jsx)("div",{className:"absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"})]}):(0,t.jsxs)(r.motion.article,{className:"group relative overflow-hidden rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.4,delay:.1*o},children:[(0,t.jsxs)("div",{className:"p-5",children:[(0,t.jsx)("div",{className:"inline-block px-2.5 py-0.5 rounded-full bg-primary-light border border-border mb-3",children:(0,t.jsx)("span",{className:"text-xs font-medium text-primary",children:e.category})}),(0,t.jsx)("h3",{className:"text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2",children:e.title}),(0,t.jsx)("p",{className:"text-muted-foreground text-sm mb-3 line-clamp-2",children:e.excerpt}),(0,t.jsxs)("div",{className:"flex items-center gap-3 text-xs text-muted-foreground",children:[(0,t.jsxs)("div",{className:"flex items-center gap-1",children:[(0,t.jsx)(a.Calendar,{className:"w-3 h-3"}),e.date]}),(0,t.jsxs)("div",{className:"flex items-center gap-1",children:[(0,t.jsx)(i.Clock,{className:"w-3 h-3"}),e.readTime]})]})]}),(0,t.jsx)(s.default,{href:`/blog/${e.slug}`,className:"absolute inset-0","aria-label":`Read ${e.title}`})]})}e.s(["BlogCard",()=>o],14186)},94718,e=>{"use strict";var t=e.i(1408),r=e.i(68856),a=e.i(62550),i=e.i(40474),n=e.i(63282),s=e.i(74787),o=e.i(14186),l=e.i(34032);function d(){let e=(0,s.getFeaturedPosts)(),d=s.blogPosts;return(0,t.jsxs)("main",{className:"relative min-h-screen bg-background",children:[(0,t.jsx)(l.GridBackground,{}),(0,t.jsx)("header",{className:"sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border",children:(0,t.jsxs)("div",{className:"max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between",children:[(0,t.jsxs)(i.default,{href:"/",className:"flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors",children:[(0,t.jsx)(a.ArrowLeft,{className:"w-4 h-4"}),(0,t.jsx)("span",{className:"font-medium",children:"Back to Portfolio"})]}),(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsx)("div",{className:"w-8 h-8 relative",children:(0,t.jsx)(n.default,{src:"/logo.svg",alt:"Luu Tran Logo",fill:!0,className:"object-contain"})}),(0,t.jsx)("span",{className:"font-bold text-foreground",children:"Blog"})]})]})}),(0,t.jsx)("section",{className:"pt-16 pb-12 px-4 md:px-8",children:(0,t.jsx)("div",{className:"max-w-7xl mx-auto text-center",children:(0,t.jsxs)(r.motion.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},children:[(0,t.jsx)("h1",{className:"text-4xl md:text-5xl font-bold mb-4 text-foreground",children:"Blog & Articles"}),(0,t.jsx)("p",{className:"text-lg text-muted-foreground max-w-2xl mx-auto",children:"Sharing my journey in AI/ML engineering. Deep dives into machine learning concepts, tutorials, and practical implementation guides."})]})})}),e.length>0&&(0,t.jsx)("section",{className:"py-12 px-4 md:px-8",children:(0,t.jsxs)("div",{className:"max-w-7xl mx-auto",children:[(0,t.jsx)(r.motion.h2,{className:"text-2xl font-bold mb-8 text-foreground",initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.4,delay:.2},children:"Featured Articles"}),(0,t.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:e.map((e,r)=>(0,t.jsx)(o.BlogCard,{post:e,index:r,featured:!0},e.slug))})]})}),(0,t.jsx)("section",{className:"py-12 px-4 md:px-8",children:(0,t.jsxs)("div",{className:"max-w-7xl mx-auto",children:[(0,t.jsx)(r.motion.h2,{className:"text-2xl font-bold mb-8 text-foreground",initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.4,delay:.3},children:"All Articles"}),(0,t.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:d.map((e,r)=>(0,t.jsx)(o.BlogCard,{post:e,index:r},e.slug))})]})}),(0,t.jsx)("footer",{className:"py-8 px-4 border-t border-border bg-background",children:(0,t.jsx)("div",{className:"max-w-7xl mx-auto text-center",children:(0,t.jsx)("p",{className:"text-sm text-muted-foreground",children:"© 2024 Luu Minh Thong Tran"})})})]})}e.s(["default",()=>d])}]);