(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,67499,(e,t,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},41633,e=>{"use strict";let t=(0,e.i(35972).default)("linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);e.s(["Linkedin",()=>t],41633)},68325,e=>{"use strict";let t=(0,e.i(35972).default)("twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);e.s(["Twitter",()=>t],68325)},40132,e=>{"use strict";let t=(0,e.i(35972).default)("share-2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);e.s(["Share2",()=>t],40132)},54381,e=>{"use strict";var t=e.i(1408),a=e.i(68856),r=e.i(62550),s=e.i(224),i=e.i(53884),n=e.i(57419),l=e.i(40132),o=e.i(68325),c=e.i(41633),d=e.i(40474),m=e.i(34032);function u({post:e}){let u=e.content.split("\n").map(e=>e.startsWith("# ")?`<h1 class="text-3xl font-bold text-slate-900 mt-8 mb-4">${e.replace("# ","")}</h1>`:e.startsWith("## ")?`<h2 class="text-2xl font-bold text-slate-900 mt-6 mb-3">${e.replace("## ","")}</h2>`:e.startsWith("### ")?`<h3 class="text-xl font-bold text-slate-900 mt-4 mb-2">${e.replace("### ","")}</h3>`:e.startsWith("```")||e.startsWith("[Continue")||e.startsWith("[Full content")?"":""===e.trim()?"<br />":`<p class="text-slate-600 leading-relaxed mb-4">${e}</p>`).join("");return(0,t.jsxs)("main",{className:"relative min-h-screen bg-slate-50",children:[(0,t.jsx)(m.GridBackground,{}),(0,t.jsx)("header",{className:"sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200",children:(0,t.jsxs)("div",{className:"max-w-4xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between",children:[(0,t.jsxs)(d.default,{href:"/blog",className:"flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors",children:[(0,t.jsx)(r.ArrowLeft,{className:"w-4 h-4"}),(0,t.jsx)("span",{className:"font-medium",children:"Back to Blog"})]}),(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsx)("div",{className:"w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center text-white",children:(0,t.jsx)(n.BookOpen,{className:"w-4 h-4"})}),(0,t.jsx)("span",{className:"font-bold text-slate-800",children:"Blog"})]})]})}),(0,t.jsx)("article",{className:"pt-8 pb-16 px-4 md:px-8",children:(0,t.jsxs)("div",{className:"max-w-4xl mx-auto",children:[(0,t.jsxs)(a.motion.div,{className:"mb-8",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},children:[(0,t.jsxs)("div",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-4",children:[(0,t.jsx)(n.BookOpen,{className:"w-3 h-3 text-blue-600"}),(0,t.jsx)("span",{className:"text-sm font-medium text-blue-600",children:e.category})]}),(0,t.jsx)("h1",{className:"text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6",children:e.title}),(0,t.jsxs)("div",{className:"flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-6",children:[(0,t.jsxs)("div",{className:"flex items-center gap-1",children:[(0,t.jsx)(s.Calendar,{className:"w-4 h-4"}),e.date]}),(0,t.jsxs)("div",{className:"flex items-center gap-1",children:[(0,t.jsx)(i.Clock,{className:"w-4 h-4"}),e.readTime]})]}),(0,t.jsx)("div",{className:"flex flex-wrap gap-2 mb-8",children:e.tags.map(e=>(0,t.jsx)("span",{className:"px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-sm text-slate-600",children:e},e))}),(0,t.jsxs)("div",{className:"flex items-center gap-3 pt-4 border-t border-slate-200",children:[(0,t.jsx)("span",{className:"text-sm text-slate-500",children:"Share:"}),(0,t.jsx)("button",{className:"p-2 rounded-full border border-slate-200 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 transition-all",children:(0,t.jsx)(o.Twitter,{className:"w-4 h-4"})}),(0,t.jsx)("button",{className:"p-2 rounded-full border border-slate-200 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 transition-all",children:(0,t.jsx)(c.Linkedin,{className:"w-4 h-4"})}),(0,t.jsx)("button",{className:"p-2 rounded-full border border-slate-200 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 transition-all",children:(0,t.jsx)(l.Share2,{className:"w-4 h-4"})})]})]}),(0,t.jsx)(a.motion.div,{className:"prose prose-lg max-w-none",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},children:(0,t.jsx)("div",{className:"bg-white rounded-2xl p-8 md:p-12 border border-slate-200 shadow-sm",dangerouslySetInnerHTML:{__html:u}})}),(0,t.jsx)(a.motion.div,{className:"mt-12 flex items-center justify-between pt-8 border-t border-slate-200",initial:{opacity:0},animate:{opacity:1},transition:{duration:.4,delay:.4},children:(0,t.jsxs)(d.default,{href:"/blog",className:"flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors",children:[(0,t.jsx)(r.ArrowLeft,{className:"w-4 h-4"}),(0,t.jsx)("span",{children:"All Articles"})]})})]})}),(0,t.jsx)("footer",{className:"py-8 px-4 border-t border-slate-200 bg-white",children:(0,t.jsx)("div",{className:"max-w-4xl mx-auto text-center",children:(0,t.jsx)("p",{className:"text-sm text-slate-500",children:"© 2024 Luu Minh Thong Tran. All rights reserved."})})})]})}e.s(["BlogPostContent",()=>u])},3151,e=>{"use strict";let t=(0,e.i(35972).default)("sparkles",[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]]);e.s(["Sparkles",()=>t],3151)},14186,89255,e=>{"use strict";var t=e.i(1408),a=e.i(68856),r=e.i(224),s=e.i(53884);let i=(0,e.i(35972).default)("arrow-right",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);e.s(["ArrowRight",()=>i],89255);var n=e.i(57419),l=e.i(40474);function o({post:e,index:o,featured:c=!1}){return c?(0,t.jsxs)(a.motion.article,{className:"group relative overflow-hidden rounded-2xl border border-slate-200 bg-white hover:border-blue-300 transition-all duration-300 hover:shadow-xl",initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.5,delay:.1*o},children:[(0,t.jsxs)("div",{className:"p-6",children:[(0,t.jsxs)("div",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-4",children:[(0,t.jsx)(n.BookOpen,{className:"w-3 h-3 text-blue-600"}),(0,t.jsx)("span",{className:"text-xs font-medium text-blue-600",children:e.category})]}),(0,t.jsx)("h3",{className:"text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2",children:e.title}),(0,t.jsx)("p",{className:"text-slate-600 text-sm mb-4 line-clamp-3 leading-relaxed",children:e.excerpt}),(0,t.jsxs)("div",{className:"flex items-center gap-4 text-xs text-slate-500 mb-4",children:[(0,t.jsxs)("div",{className:"flex items-center gap-1",children:[(0,t.jsx)(r.Calendar,{className:"w-3 h-3"}),e.date]}),(0,t.jsxs)("div",{className:"flex items-center gap-1",children:[(0,t.jsx)(s.Clock,{className:"w-3 h-3"}),e.readTime]})]}),(0,t.jsx)("div",{className:"flex flex-wrap gap-1.5",children:e.tags.slice(0,3).map(e=>(0,t.jsx)("span",{className:"px-2 py-0.5 text-xs rounded-full bg-slate-100 text-slate-600",children:e},e))}),(0,t.jsxs)(l.default,{href:`/blog/${e.slug}`,className:"mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:gap-2 transition-all",children:["Read More",(0,t.jsx)(i,{className:"w-4 h-4"})]})]}),(0,t.jsx)("div",{className:"absolute inset-0 bg-gradient-to-br from-blue-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"})]}):(0,t.jsxs)(a.motion.article,{className:"group relative overflow-hidden rounded-xl border border-slate-200 bg-white hover:border-blue-300 transition-all duration-300 hover:shadow-lg",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.4,delay:.1*o},children:[(0,t.jsxs)("div",{className:"p-5",children:[(0,t.jsx)("div",{className:"inline-block px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-100 mb-3",children:(0,t.jsx)("span",{className:"text-xs font-medium text-blue-600",children:e.category})}),(0,t.jsx)("h3",{className:"text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2",children:e.title}),(0,t.jsx)("p",{className:"text-slate-600 text-sm mb-3 line-clamp-2",children:e.excerpt}),(0,t.jsxs)("div",{className:"flex items-center gap-3 text-xs text-slate-500",children:[(0,t.jsxs)("div",{className:"flex items-center gap-1",children:[(0,t.jsx)(r.Calendar,{className:"w-3 h-3"}),e.date]}),(0,t.jsxs)("div",{className:"flex items-center gap-1",children:[(0,t.jsx)(s.Clock,{className:"w-3 h-3"}),e.readTime]})]})]}),(0,t.jsx)(l.default,{href:`/blog/${e.slug}`,className:"absolute inset-0","aria-label":`Read ${e.title}`})]})}e.s(["BlogCard",()=>o],14186)},74787,e=>{"use strict";let t=[{slug:"neural-network-from-scratch",title:"Building a Neural Network from Scratch",excerpt:"Learn how to implement backpropagation and gradient descent to build a fully functional neural network using only NumPy.",content:`
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
    `,date:"2023-12-15",readTime:"9 min read",category:"Machine Learning",tags:["XGBoost","LightGBM","Gradient Boosting","Ensemble"]}];function a(){return t.filter(e=>e.featured)}e.s(["blogPosts",0,t,"getFeaturedPosts",()=>a])}]);