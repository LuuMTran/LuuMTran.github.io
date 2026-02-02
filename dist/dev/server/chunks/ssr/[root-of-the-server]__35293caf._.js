module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/data/blog.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
        slug: "in-depth-svm-visualizations",
        title: "In-depth SVM with Visualizations",
        excerpt: "A comprehensive deep dive into Support Vector Machines, from loss functions and primal/dual forms to kernel tricks and SMO optimization, complete with visual explanations.",
        content: `
# In-depth SVM with visualisations 

## Background

I have been studying traditional classification machines and learning algorithms. It grinded through different kinds of models from linear-family models to complicated methods such as ensemble methods. I understanded quite well until I met Support Vector Machines.

On the surface, I can understand quite well what struck me is its optimization algorithms. Unlike other models, optimization is based on gradients or entropy for trees. However, the way SVM optimizes its weight works quite differently, which I will explain later on.


## Introduction

Ok let look at what is Support Vector Machine and what is does. Imagine there are 2 groups of people wants to divde the land equally by drawing a straight line, SVM will help them equally between them. Now, bring it to the context of machine learning, a SVM will find a hyperplane that seperate 2 classes with maximal margin (equal land). 

Have a lookt at this decision boundary (although it is not linear but we get to that part). it perfectly give the decision boundary right in the midde!!


![alt text](/images/svm-blog/image.png)



Hmmm... seems easy right? 

Well then how it do it? Let's look at the loss function:

### Loss Function

$$
\\begin{aligned}\\min_{w, b} \\; \\frac{1}{2} \\lVert w \\rVert^2 + C \\sum_{i=1}^{n} \\max \\left( 0, \\; 1 - y_i \\left( w^T x_i + b \\right) \\right)\\end{aligned}
$$


The term $\\max \\left( 0, \\; 1 - y_i \\left( w^T x_i + b \\right) \\right)$ seems familar right? Thats right!! It's the perceptron loss! It try to minimse the perceptron loss meaning it try to  correctly classify the samples! What about the first term? Well its the regularization term which means it try to divide the land equally! Finally, the C controls how you would want the classfier to focus on correctly classify or divide the land equally.

### Primal-form 

WARNING: Math-heavy, you can skip this and belive that the loss function has the primal form as the equation below (same thing but different notation)


By transforming the objective function to produce a set constraint, it can be later manipulated into the dual form. The un-constrained objective function can be re-written as:

$$
\\min_{w, b, \\xi} \\; \\frac{1}{2} \\lVert w \\rVert^2 + C \\sum_{i=1}^{n} \\xi_i\\quad \\text{s.t.} \\quad y_i (w^T x_i + b) \\geq 1 - \\xi_i, \\quad \\xi_i \\geq 0
$$

Where $\\xi_i$ and the constraint 
$y_i (w^T x_i + b) \\geq 1 - \\xi_i, \\; \\xi_i \\geq 0$ 
is equivalent to 
$\\max \\left( 0, 1 - y_i (w^T x_i + b) \\right)$. 
By introducing these constraints, the problem can be transformed into its dual form to utilize the kernel trick.

### Dual Form

WARNING: Math-heavy, you can skip this and belive that primal form has the dual form as the equation below (same thing but now the new objective is to optimize alpha, not w!)

Before transforming from primal to dual form, it is crucial to view the weights as the contributions of all the input samples. Suppose the input sample X has the dimension of [n x m] where n is number of samples and m is number of features. The weight ($w$) on the other hand has the dimension of [m x 1] which m is number of features. This means that by letting $w  = X^T\\alpha$, $\\alpha$ need to have the dimension of [n x 1]. This implies that $\\alpha$ is a set of weights each sample give to contribute to w. The view of the weight is a contribution of the samples also seen from other model such as linear regression as it has the close-form solution of $w=(X^TX)^{-1}X^Ty$ for the weight. Back to SVM, the weight became a weighted sum of all data sample which instead of optimizing the weight, the new goal is to optimize $\\alpha_i \\forall i$ Interestingly,there is a characteristic that every correctly classified sample and outside margin will have a weight of 0 which means that during inference, only support vector matters.

By substituting $w = \\sum_{i=1}^m \\alpha_i y_i x_i$ into the Lagrangian of the constrained soft-margin primal problem and taking derivatives with respect to $w$, $b$, and $\\xi$, we obtain the dual formulation: 

$$
\\max_{\\alpha} \\; \\sum_{i=1}^{m} \\alpha_i - \\frac{1}{2} \\sum_{i=1}^{m} \\sum_{j=1}^{m} \\alpha_i \\alpha_j y_i y_j \\, x_i^T x_j\\quad \\text{s.t.} \\quad     0 \\leq \\alpha_i \\leq C, \\; \\sum_{i=1}^{m} \\alpha_i y_i = 0
$$

### Kernel trick

If you made this far, it is fasinating because the rest is packed with visualisations!!!

Now here comes the cool part, now lets make it learn non-linear relationships. Imagine folding your in quarter and cut a line in the middle making a square in the middle, SVM also the same way, it non-linearly maps to anothe dimensional space where you hope for the best the data is linearly seperable and when it maps back to the original space, it will be a non-linear boundary like a curve or a zic-zac pattern. Starting by shooting your sample to the space called phi
$$
x_i \\mapsto \\phi(x_i)
$$

Then the dual form becomes:

$$
\\begin{aligned}\\max_{\\alpha} \\quad
& \\sum_{i=1}^{m} \\alpha_i
- \\frac{1}{2}
\\sum_{i=1}^{m} \\sum_{j=1}^{m}
\\alpha_i \\alpha_j y_i y_j \\, 
\\phi(x_i)^{T} \\phi(x_j) \\\\[6pt]
\\text{s.t.} \\quad
& 0 \\le \\alpha_i \\le C, \\quad \\forall i = 1, \\ldots, m, \\\\[4pt]
& \\sum_{i=1}^{m} \\alpha_i y_i = 0
\\end{aligned}
$$

But remember, we are optimizing $\\alpha$ ! So the term $\\phi(x_i)^{T} \\phi(x_j)$ does not change the whole time! but recomputing each iteration is very expensive so we precomputed it first then access later! Even better, we dont need to define phi, we create a matrix where:

$$
K_{ij} = K(x_i, x_j) = \\phi(x_i)^{\\top} \\phi(x_j)
$$
What a genius idea!

Here is the visualisation of the polynomial kernel (first few slides):

<iframe src="https://14522561-svm-presentation.netlify.app/" width="100%" height="600px" style="border: none; border-radius: 8px;" allowfullscreen></iframe>


### Optimization - SMO  

OK now comes the parts that they might not teach you in-class. How do SVM optimize? It will use an algorithm called Sequential Minimal Optimization and below is an visual approach to this algorithm.

If you carefully inspect the dual formulation enough long you will see that it has the constraint meaning that if you optimize 1 $\\alpha$ you need to update another. That leads to this visualization

![alt text](/images/svm-blog/image-1.png)


Think of them like a pulley system, you lift one up, you lower one down but you dont want to go to high

You want to optimize the alplas so that if you pick 2 alphas and optimize them, you will need to optimize another (The sum constraint). Also, you dont want to optimize them too far

Now with multiples alpha the pulley system would look like this

![alt text](/images/svm-blog/image-2.png)

The red block are locked in place. Each iteration, you will pick 1 alpha sequentially and another randomly to optimize them.

Now what fascinating is that each iteration you need only 1 step to optimize because they follow a quadratic form.

![alt text](/images/svm-blog/image-3.png)

Because you dont want to respect the 0 to C contraint for both alphas, you will set the lower and higher bound so that yo can stick to the bound if the optimal point is fall out of range!

Repeat the process and TADAAA!!! You made it!

## Final thought

Just remember, SVM is orgimi, you fold the paper and hope for the best :)

Thanks so much for reading and stay in touch with me on linkedin!
    `,
        date: "2025-02-02",
        readTime: "15 min read",
        category: "Machine Learning",
        tags: [
            "SVM",
            "Support Vector Machines",
            "Optimization",
            "Kernel Methods",
            "Visualizations"
        ],
        featured: true
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
}),
"[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogPostContent.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BlogPostContent",
    ()=>BlogPostContent
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const BlogPostContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call BlogPostContent() from the server but BlogPostContent is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogPostContent.tsx <module evaluation>", "BlogPostContent");
}),
"[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogPostContent.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BlogPostContent",
    ()=>BlogPostContent
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const BlogPostContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call BlogPostContent() from the server but BlogPostContent is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogPostContent.tsx", "BlogPostContent");
}),
"[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogPostContent.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$src$2f$components$2f$BlogPostContent$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogPostContent.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$src$2f$components$2f$BlogPostContent$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogPostContent.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$src$2f$components$2f$BlogPostContent$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/app/blog/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BlogPostPage,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$src$2f$data$2f$blog$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/data/blog.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$src$2f$components$2f$BlogPostContent$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogPostContent.tsx [app-rsc] (ecmascript)");
;
;
;
;
async function BlogPostPage({ params }) {
    const { slug } = await params;
    const post = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$src$2f$data$2f$blog$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBlogPostBySlug"])(slug);
    if (!post) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$src$2f$components$2f$BlogPostContent$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BlogPostContent"], {
        post: post
    }, void 0, false, {
        fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/app/blog/[slug]/page.tsx",
        lineNumber: 20,
        columnNumber: 10
    }, this);
}
function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$src$2f$data$2f$blog$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["blogPosts"].map((post)=>({
            slug: post.slug
        }));
}
}),
"[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/app/blog/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/app/blog/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__35293caf._.js.map