(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/CircleText.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CircleText",
    ()=>CircleText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
function CircleText({ text, radius = 160 }) {
    const characters = text.split("");
    const angleStep = 360 / characters.length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "absolute flex items-center justify-center rounded-full will-change-transform",
        style: {
            width: radius * 2,
            height: radius * 2
        },
        animate: {
            rotate: 360
        },
        transition: {
            duration: 20,
            repeat: Infinity,
            ease: "linear"
        },
        children: characters.map((char, index)=>{
            const angle = index * angleStep;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute text-3xl font-bold uppercase origin-bottom",
                style: {
                    transform: `rotate(${angle}deg) translateY(-${radius}px)`,
                    left: "50%",
                    top: "50%",
                    marginLeft: "-0.5em",
                    marginTop: "-0.5em"
                },
                children: char === " " ? "\u00A0" : char
            }, index, false, {
                fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/CircleText.tsx",
                lineNumber: 28,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/CircleText.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = CircleText;
var _c;
__turbopack_context__.k.register(_c, "CircleText");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/CenterTitle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CenterTitle",
    ()=>CenterTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
function CenterTitle({ text }) {
    const characters = text.split("");
    const containerVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.3
            }
        }
    };
    const charVariants = {
        hidden: {
            opacity: 0,
            y: 50,
            scale: 0.8
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: [
                    0.215,
                    0.61,
                    0.355,
                    1
                ]
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "relative z-10 flex flex-col items-center justify-center",
        variants: containerVariants,
        initial: "hidden",
        animate: "visible",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-5xl md:text-7xl font-black tracking-tighter text-center whitespace-nowrap overflow-visible",
            children: characters.map((char, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                    className: "center-char inline-block",
                    variants: charVariants,
                    style: {
                        animationDelay: `${index * 0.1}s`
                    },
                    children: char === " " ? "\u00A0" : char
                }, index, false, {
                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/CenterTitle.tsx",
                    lineNumber: 49,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/CenterTitle.tsx",
            lineNumber: 47,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/CenterTitle.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_c = CenterTitle;
var _c;
__turbopack_context__.k.register(_c, "CenterTitle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/SocialLinks.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SocialLinks",
    ()=>SocialLinks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript) <export default as Linkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/lucide-react/dist/esm/icons/github.js [app-client] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/lucide-react/dist/esm/icons/facebook.js [app-client] (ecmascript) <export default as Facebook>");
"use client";
;
;
;
const socialLinks = [
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"], {
            className: "w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/SocialLinks.tsx",
            lineNumber: 14,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        href: "https://linkedin.com",
        label: "LinkedIn"
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
            className: "w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/SocialLinks.tsx",
            lineNumber: 19,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        href: "https://github.com",
        label: "GitHub"
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
            className: "w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/SocialLinks.tsx",
            lineNumber: 24,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        href: "mailto:thong@example.com",
        label: "Email"
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__["Facebook"], {
            className: "w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/SocialLinks.tsx",
            lineNumber: 29,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        href: "https://facebook.com",
        label: "Facebook"
    }
];
function SocialLinks() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        id: "social-media",
        className: "hidden md:fixed md:flex flex-col top-1/2 left-8 -translate-y-1/2 items-center justify-center gap-4 z-50",
        initial: {
            opacity: 0,
            x: -50
        },
        animate: {
            opacity: 1,
            x: 0
        },
        transition: {
            duration: 0.6,
            delay: 1
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-px h-12 bg-border"
            }, void 0, false, {
                fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/SocialLinks.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            socialLinks.map((link, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                    href: link.href,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "social-btn inline-flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background shadow-sm hover:bg-accent hover:text-accent-foreground dark:bg-background/30 dark:border-border dark:hover:bg-background/50 cursor-pointer",
                    initial: {
                        opacity: 0,
                        scale: 0
                    },
                    animate: {
                        opacity: 1,
                        scale: 1
                    },
                    transition: {
                        duration: 0.3,
                        delay: 1.2 + index * 0.1
                    },
                    whileHover: {
                        scale: 1.1
                    },
                    whileTap: {
                        scale: 0.95
                    },
                    "aria-label": link.label,
                    children: link.icon
                }, link.label, false, {
                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/SocialLinks.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-px h-12 bg-border"
            }, void 0, false, {
                fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/SocialLinks.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/SocialLinks.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_c = SocialLinks;
var _c;
__turbopack_context__.k.register(_c, "SocialLinks");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/ThemeToggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeToggle",
    ()=>ThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function ThemeToggle() {
    _s();
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("light");
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeToggle.useEffect": ()=>{
            setMounted(true);
            const savedTheme = localStorage.getItem("theme");
            const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            const initialTheme = savedTheme || (systemPrefersDark ? "dark" : "light");
            setTheme(initialTheme);
            if (initialTheme === "dark") {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }
            document.documentElement.setAttribute("data-theme", initialTheme);
        }
    }["ThemeToggle.useEffect"], []);
    const toggleTheme = ()=>{
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        if (newTheme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        document.documentElement.setAttribute("data-theme", newTheme);
    };
    if (!mounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "fixed top-6 right-6 z-50 w-10 h-10 rounded-full border border-border bg-card shadow-sm flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-5 h-5"
            }, void 0, false, {
                fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/ThemeToggle.tsx",
                lineNumber: 42,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/ThemeToggle.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
        onClick: toggleTheme,
        className: "theme-toggle fixed top-6 right-6 z-50 w-10 h-10 rounded-full border border-border bg-card shadow-sm hover:bg-accent hover:text-primary hover:border-primary/50 flex items-center justify-center cursor-pointer text-foreground",
        whileHover: {
            scale: 1.1
        },
        whileTap: {
            scale: 0.95
        },
        "aria-label": "Toggle theme",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            mode: "wait",
            initial: false,
            children: theme === "dark" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    rotate: -90
                },
                animate: {
                    opacity: 1,
                    rotate: 0
                },
                exit: {
                    opacity: 0,
                    rotate: 90
                },
                transition: {
                    duration: 0.2
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/ThemeToggle.tsx",
                    lineNumber: 64,
                    columnNumber: 13
                }, this)
            }, "sun", false, {
                fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/ThemeToggle.tsx",
                lineNumber: 57,
                columnNumber: 11
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    rotate: 90
                },
                animate: {
                    opacity: 1,
                    rotate: 0
                },
                exit: {
                    opacity: 0,
                    rotate: -90
                },
                transition: {
                    duration: 0.2
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/ThemeToggle.tsx",
                    lineNumber: 74,
                    columnNumber: 13
                }, this)
            }, "moon", false, {
                fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/ThemeToggle.tsx",
                lineNumber: 67,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/ThemeToggle.tsx",
            lineNumber: 55,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/ThemeToggle.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
_s(ThemeToggle, "yJRom449FMCLHbV8U85fR4UAvks=");
_c = ThemeToggle;
var _c;
__turbopack_context__.k.register(_c, "ThemeToggle");
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
"[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/Navigation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navigation",
    ()=>Navigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$src$2f$components$2f$ThemeToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/ThemeToggle.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const navLinks = [
    {
        href: "#hero",
        label: "Home"
    },
    {
        href: "#skills",
        label: "Skills"
    },
    {
        href: "#projects",
        label: "Projects"
    },
    {
        href: "#about",
        label: "About"
    },
    {
        href: "#contact",
        label: "Contact"
    }
];
function Navigation() {
    _s();
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navigation.useEffect": ()=>{
            const handleScroll = {
                "Navigation.useEffect.handleScroll": ()=>{
                    setIsScrolled(window.scrollY > 100);
                }
            }["Navigation.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll);
            return ({
                "Navigation.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["Navigation.useEffect"];
        }
    }["Navigation.useEffect"], []);
    const handleNavClick = (e, href)=>{
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth"
            });
        }
        setIsMobileMenuOpen(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].nav, {
                className: `fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center gap-2 px-6 py-2 rounded-full transition-all duration-300 ${isScrolled ? "bg-card/90 backdrop-blur-md shadow-lg border border-border" : "bg-card/50 backdrop-blur-sm border border-border"}`,
                initial: {
                    opacity: 0,
                    y: -50
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.6,
                    delay: 0.5
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#hero",
                        onClick: (e)=>handleNavClick(e, "#hero"),
                        className: "flex items-center gap-2 mr-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-8 h-8 relative",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/logo.svg",
                                    alt: "Luu Tran Logo",
                                    fill: true,
                                    className: "object-contain"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/Navigation.tsx",
                                    lineNumber: 60,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/Navigation.tsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold text-sm text-foreground",
                                children: "Luu Tran"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/Navigation.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/Navigation.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-px h-6 bg-border"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/Navigation.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: link.href,
                            onClick: (e)=>handleNavClick(e, link.href),
                            className: "px-4 py-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors rounded-full hover:bg-primary-light",
                            children: link.label
                        }, link.href, false, {
                            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/Navigation.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/blog",
                        className: "px-4 py-1.5 text-sm font-medium text-muted-foreground hover:text-secondary transition-colors rounded-full hover:bg-secondary-light flex items-center gap-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/Navigation.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this),
                            "Blog"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/Navigation.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-px h-6 bg-border"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/Navigation.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ml-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$src$2f$components$2f$ThemeToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeToggle"], {}, void 0, false, {
                            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/Navigation.tsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/Navigation.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/Navigation.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden fixed top-6 right-6 z-50 flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$src$2f$components$2f$ThemeToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeToggle"], {}, void 0, false, {
                        fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/Navigation.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                        onClick: ()=>setIsMobileMenuOpen(!isMobileMenuOpen),
                        className: "w-10 h-10 rounded-full border border-border bg-card/90 backdrop-blur-md shadow-sm flex items-center justify-center",
                        whileTap: {
                            scale: 0.95
                        },
                        children: isMobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/Navigation.tsx",
                            lineNumber: 111,
                            columnNumber: 31
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/Navigation.tsx",
                            lineNumber: 111,
                            columnNumber: 59
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/Navigation.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/Navigation.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isMobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "md:hidden fixed inset-0 z-40 bg-card/98 backdrop-blur-lg flex flex-col items-center justify-center gap-8",
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: 0.3
                    },
                    children: [
                        navLinks.map((link, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                                href: link.href,
                                onClick: (e)=>handleNavClick(e, link.href),
                                className: "text-2xl font-bold text-foreground hover:text-primary transition-colors",
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    delay: index * 0.1
                                },
                                children: link.label
                            }, link.href, false, {
                                fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/Navigation.tsx",
                                lineNumber: 126,
                                columnNumber: 15
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                delay: navLinks.length * 0.1
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/blog",
                                className: "text-2xl font-bold text-foreground hover:text-secondary transition-colors flex items-center gap-2",
                                onClick: ()=>setIsMobileMenuOpen(false),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                        className: "w-6 h-6"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/Navigation.tsx",
                                        lineNumber: 148,
                                        columnNumber: 17
                                    }, this),
                                    "Blog"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/Navigation.tsx",
                                lineNumber: 143,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/Navigation.tsx",
                            lineNumber: 138,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/Navigation.tsx",
                    lineNumber: 118,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/Navigation.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Navigation, "0+zEKVBL95ILuBb5rHE6ViYOHu8=");
_c = Navigation;
var _c;
__turbopack_context__.k.register(_c, "Navigation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/HeroSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeroSection",
    ()=>HeroSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/lucide-react/dist/esm/icons/folder-open.js [app-client] (ecmascript) <export default as FolderOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/lucide-react/dist/esm/icons/github.js [app-client] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript) <export default as Linkedin>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function HeroSection() {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(sectionRef, {
        amount: 0.2,
        once: false
    });
    const name = "LUU MINH THONG TRAN";
    const title = "AI/ML Engineer";
    const sectionVariants = {
        hidden: {
            opacity: 0,
            y: 40
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.9,
                delay: 0.15,
                ease: [
                    0.215,
                    0.61,
                    0.355,
                    1
                ]
            }
        }
    };
    const containerVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.3
            }
        }
    };
    const lineVariants = {
        hidden: {
            opacity: 0,
            y: 30
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [
                    0.215,
                    0.61,
                    0.355,
                    1
                ]
            }
        }
    };
    const scrollToSection = (id)=>{
        const element = document.querySelector(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth"
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
        ref: sectionRef,
        id: "hero",
        className: "min-h-screen flex items-center justify-center relative px-4 py-20",
        variants: sectionVariants,
        initial: "hidden",
        animate: isInView ? "visible" : "hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center max-w-5xl mx-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "space-y-6",
                variants: containerVariants,
                initial: "hidden",
                animate: "visible",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        variants: lineVariants,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight break-words",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent",
                                children: name
                            }, void 0, false, {
                                fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/HeroSection.tsx",
                                lineNumber: 76,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/HeroSection.tsx",
                            lineNumber: 75,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/HeroSection.tsx",
                        lineNumber: 74,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        variants: lineVariants,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl sm:text-2xl md:text-3xl font-medium text-muted-foreground",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/HeroSection.tsx",
                            lineNumber: 84,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/HeroSection.tsx",
                        lineNumber: 83,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                        className: "text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mt-6 leading-relaxed",
                        variants: lineVariants,
                        children: "Hey! I'm Luu. When I was in grade 10, I watched Andrew Ng's Machine Learning course and was fascinated by how the real world can turn into mathematical representation to help computers replicate human intelligence: the ability to predict. With curiosity, I made this far and building real-world AI applications. Currently studying AI at UTS in Sydney."
                    }, void 0, false, {
                        fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/HeroSection.tsx",
                        lineNumber: 90,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "flex flex-col sm:flex-row items-center justify-center gap-4 mt-8",
                        variants: lineVariants,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                onClick: ()=>scrollToSection("#contact"),
                                className: "px-8 py-4 rounded-full font-semibold flex items-center gap-2 bg-primary text-white hover:bg-primary-dark transition-colors",
                                whileHover: {
                                    scale: 1.02
                                },
                                whileTap: {
                                    scale: 0.98
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/HeroSection.tsx",
                                        lineNumber: 108,
                                        columnNumber: 15
                                    }, this),
                                    "Get in Touch"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/HeroSection.tsx",
                                lineNumber: 102,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                onClick: ()=>scrollToSection("#projects"),
                                className: "px-8 py-4 rounded-full font-semibold flex items-center gap-2 border-2 border-border text-muted-foreground hover:border-primary hover:text-primary transition-all bg-card",
                                whileHover: {
                                    scale: 1.02
                                },
                                whileTap: {
                                    scale: 0.98
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__["FolderOpen"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/HeroSection.tsx",
                                        lineNumber: 118,
                                        columnNumber: 15
                                    }, this),
                                    "See My Work"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/HeroSection.tsx",
                                lineNumber: 112,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/HeroSection.tsx",
                        lineNumber: 98,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "flex items-center justify-center gap-4 mt-6",
                        variants: lineVariants,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://github.com/LuuMTran",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "p-3 rounded-full border border-border hover:bg-muted transition-colors",
                                "aria-label": "GitHub",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
                                    className: "w-5 h-5 text-muted-foreground"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/HeroSection.tsx",
                                    lineNumber: 135,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/HeroSection.tsx",
                                lineNumber: 128,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://www.linkedin.com/in/luu-minh-thong-tran-31971b238/",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "p-3 rounded-full border border-border hover:bg-primary-light hover:border-primary transition-colors",
                                "aria-label": "LinkedIn",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"], {
                                    className: "w-5 h-5 text-muted-foreground"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/HeroSection.tsx",
                                    lineNumber: 144,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/HeroSection.tsx",
                                lineNumber: 137,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "mailto:minhthong7375@gmail.com",
                                className: "p-3 rounded-full border border-border hover:bg-primary-light hover:border-primary transition-colors",
                                "aria-label": "Email",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                    className: "w-5 h-5 text-muted-foreground"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/HeroSection.tsx",
                                    lineNumber: 151,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/HeroSection.tsx",
                                lineNumber: 146,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/HeroSection.tsx",
                        lineNumber: 124,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "flex flex-wrap items-center justify-center gap-8 md:gap-12 mt-12 pt-8 border-t border-border",
                        variants: lineVariants,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-2xl md:text-3xl font-bold text-primary",
                                        children: "5+"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/HeroSection.tsx",
                                        lineNumber: 161,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-muted-foreground",
                                        children: "ML Models Built"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/HeroSection.tsx",
                                        lineNumber: 162,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/HeroSection.tsx",
                                lineNumber: 160,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-2xl md:text-3xl font-bold text-primary",
                                        children: "10+"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/HeroSection.tsx",
                                        lineNumber: 165,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-muted-foreground",
                                        children: "Projects"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/HeroSection.tsx",
                                        lineNumber: 166,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/HeroSection.tsx",
                                lineNumber: 164,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-2xl md:text-3xl font-bold text-primary",
                                        children: "3+"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/HeroSection.tsx",
                                        lineNumber: 169,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-muted-foreground",
                                        children: "Years Learning"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/HeroSection.tsx",
                                        lineNumber: 170,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/HeroSection.tsx",
                                lineNumber: 168,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/HeroSection.tsx",
                        lineNumber: 156,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/HeroSection.tsx",
                lineNumber: 67,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/HeroSection.tsx",
            lineNumber: 65,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/HeroSection.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_s(HeroSection, "m0FIn5qC0vMMopIgKoO0cjjZ0cg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = HeroSection;
var _c;
__turbopack_context__.k.register(_c, "HeroSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/SkillsSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SkillsSection",
    ()=>SkillsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const skills = [
    {
        name: "TensorFlow",
        icon: "/icons/tensorflow.svg",
        category: "Deep Learning"
    },
    {
        name: "PyTorch",
        icon: "/icons/pytorch.svg",
        category: "Deep Learning"
    },
    {
        name: "Scikit-learn",
        icon: "/icons/scikit-learn.svg",
        category: "ML Library"
    },
    {
        name: "Pandas",
        icon: "/icons/pandas.svg",
        category: "Data Processing"
    },
    {
        name: "HuggingFace",
        icon: "/icons/huggingface.svg",
        category: "Embeddings"
    },
    {
        name: "FastAPI",
        icon: "/icons/fastapi.svg",
        category: "Web Framework"
    },
    {
        name: "Selenium",
        icon: "/icons/selenium.svg",
        category: "Web Scraping"
    },
    {
        name: "PostgreSQL",
        icon: "/icons/postgresql.svg",
        category: "Database"
    },
    {
        name: "Docker",
        icon: "/icons/docker.svg",
        category: "DevOps"
    },
    {
        name: "AWS/GCP",
        icon: "/icons/cloud.svg",
        category: "Cloud"
    },
    {
        name: "Git/GitHub",
        icon: "/icons/git.svg",
        category: "Version Control"
    },
    {
        name: "BERTopic",
        icon: "/icons/bertopic.svg",
        category: "Topic Modeling"
    }
];
function SkillsSection() {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(sectionRef, {
        amount: 0.2,
        once: false
    });
    const sectionVariants = {
        hidden: {
            opacity: 0,
            y: 40
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.9,
                delay: 0.15,
                ease: [
                    0.215,
                    0.61,
                    0.355,
                    1
                ]
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
        ref: sectionRef,
        id: "skills",
        className: "min-h-screen py-24 px-4 md:px-8 lg:px-16 flex items-center bg-background",
        variants: sectionVariants,
        initial: "hidden",
        animate: isInView ? "visible" : "hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto w-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "mb-16 text-center",
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true
                    },
                    transition: {
                        duration: 0.6
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl md:text-5xl font-bold mb-4 text-foreground",
                            children: "Skills & Tools"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/SkillsSection.tsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-muted-foreground max-w-2xl mx-auto",
                            children: "These are the technologies I work with day-to-day. I'm always learning something new."
                        }, void 0, false, {
                            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/SkillsSection.tsx",
                            lineNumber: 102,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/SkillsSection.tsx",
                    lineNumber: 94,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6",
                    children: skills.map((skill, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "group relative flex flex-col items-center justify-center p-6 rounded-2xl border border-border bg-card card-hover transition-all duration-300",
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                duration: 0.4,
                                delay: index * 0.05
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-3 relative w-10 h-10",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: skill.icon,
                                        alt: skill.name,
                                        fill: true,
                                        className: "object-contain"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/SkillsSection.tsx",
                                        lineNumber: 120,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/SkillsSection.tsx",
                                    lineNumber: 119,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-semibold text-sm text-center text-foreground",
                                    children: skill.name
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/SkillsSection.tsx",
                                    lineNumber: 127,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-muted-foreground mt-1",
                                    children: skill.category
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/SkillsSection.tsx",
                                    lineNumber: 128,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, skill.name, true, {
                            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/SkillsSection.tsx",
                            lineNumber: 110,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/SkillsSection.tsx",
                    lineNumber: 108,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "mt-12 grid grid-cols-1 md:grid-cols-3 gap-6",
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true
                    },
                    transition: {
                        duration: 0.6,
                        delay: 0.3
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 rounded-2xl border border-border bg-card card-hover transition-all duration-300",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-bold mb-2 text-foreground",
                                    children: "Machine Learning"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/SkillsSection.tsx",
                                    lineNumber: 142,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-muted-foreground",
                                    children: "Classification, Regression, NLP, Computer Vision, Time Series"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/SkillsSection.tsx",
                                    lineNumber: 143,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/SkillsSection.tsx",
                            lineNumber: 141,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 rounded-2xl border border-border bg-card card-hover transition-all duration-300",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-bold mb-2 text-foreground",
                                    children: "Deep Learning"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/SkillsSection.tsx",
                                    lineNumber: 148,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-muted-foreground",
                                    children: "CNNs, RNNs, Transformers, Transfer Learning"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/SkillsSection.tsx",
                                    lineNumber: 149,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/SkillsSection.tsx",
                            lineNumber: 147,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 rounded-2xl border border-border bg-card card-hover transition-all duration-300",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-bold mb-2 text-foreground",
                                    children: "Data & MLOps"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/SkillsSection.tsx",
                                    lineNumber: 154,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-muted-foreground",
                                    children: "Model Deployment, APIs, Docker, CI/CD"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/SkillsSection.tsx",
                                    lineNumber: 155,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/SkillsSection.tsx",
                            lineNumber: 153,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/SkillsSection.tsx",
                    lineNumber: 134,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/SkillsSection.tsx",
            lineNumber: 92,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/SkillsSection.tsx",
        lineNumber: 84,
        columnNumber: 5
    }, this);
}
_s(SkillsSection, "m0FIn5qC0vMMopIgKoO0cjjZ0cg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = SkillsSection;
var _c;
__turbopack_context__.k.register(_c, "SkillsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/ProjectsSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectsSection",
    ()=>ProjectsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/lucide-react/dist/esm/icons/github.js [app-client] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const projects = [
    {
        title: "Policy Graph Builder",
        description: "A legal knowledge graph system that processes policy documents and builds interconnected semantic networks. Automatically extracts document structure, detects cross-document references, and enables intelligent document retrieval using vector embeddings.",
        technologies: [
            "FastAPI",
            "PostgreSQL",
            "ChromaDB",
            "Docker",
            "OpenAI API",
            "WhyHow.AI SDK",
            "Vector Search"
        ],
        githubUrl: "https://github.com/LuuMTran/Policy-graph-builder",
        liveUrl: null,
        type: "github"
    },
    {
        title: "Auto Reddit Research",
        description: "Automated Reddit comment analysis pipeline that scrapes discussions, classifies comments by semantic similarity using BGE-M3 embeddings, and discovers hidden subtopics through BERTopic modeling. Enables large-scale social media research with intelligent filtering.",
        technologies: [
            "BERTopic",
            "BGE-M3",
            "FAISS",
            "Sentence-Transformers",
            "UMAP",
            "HDBSCAN",
            "Selenium",
            "Semantic Search"
        ],
        githubUrl: "https://github.com/LuuMTran/Auto-Reddit-Research",
        liveUrl: null,
        type: "github"
    },
    {
        title: "Chess Outcome Predictor",
        description: "Machine learning system predicting chess game outcomes based on player ratings, opening codes, and time controls. Includes comprehensive exploratory data analysis and automated preprocessing pipelines deployed as a web service.",
        technologies: [
            "Scikit-learn",
            "Pandas",
            "Flask",
            "Classification Models",
            "Data Pipelines",
            "Feature Engineering"
        ],
        githubUrl: "https://github.com/LuuMTran/Chess_Predictor",
        liveUrl: "https://chess-predictor.onrender.com/",
        type: "github"
    },
    {
        title: "Build Support Vector Machine from Scratch",
        description: "Academic research implementation exploring Support Vector Machine theory from mathematical foundations. Covers kernel methods, optimization techniques, hyperparameter tuning strategies, and comparative analysis against library implementations.",
        technologies: [
            "SVM",
            "Kernel Methods",
            "Mathematical Optimization",
            "Hyperparameter Tuning",
            "Model Evaluation",
            "NumPy",
            "Pandas",
            "Matplotlib"
        ],
        githubUrl: "/files/SVM.pdf",
        liveUrl: null,
        type: "pdf"
    }
];
function ProjectsSection() {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(sectionRef, {
        amount: 0.2,
        once: false
    });
    const sectionVariants = {
        hidden: {
            opacity: 0,
            y: 40
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.9,
                delay: 0.15,
                ease: [
                    0.215,
                    0.61,
                    0.355,
                    1
                ]
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
        ref: sectionRef,
        id: "projects",
        className: "min-h-screen py-24 px-4 md:px-8 lg:px-16 flex items-center bg-background",
        variants: sectionVariants,
        initial: "hidden",
        animate: isInView ? "visible" : "hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto w-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "mb-16 text-center",
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true
                    },
                    transition: {
                        duration: 0.6
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl md:text-5xl font-bold mb-4 text-foreground",
                            children: "Things I've Built"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/ProjectsSection.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-muted-foreground max-w-2xl mx-auto",
                            children: "These projects taught me more than any tutorial ever could. Each one has a story."
                        }, void 0, false, {
                            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/ProjectsSection.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/ProjectsSection.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8",
                    children: projects.map((project, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "group relative overflow-hidden rounded-2xl border border-border bg-card hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300",
                            initial: {
                                opacity: 0,
                                y: 30
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                duration: 0.5,
                                delay: index * 0.15
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-4 right-4 w-10 h-10 rounded-full bg-muted flex items-center justify-center text-lg font-bold text-muted-foreground group-hover:bg-primary-light group-hover:text-primary transition-colors",
                                    children: [
                                        "0",
                                        index + 1
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/ProjectsSection.tsx",
                                    lineNumber: 91,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: project.type === "pdf" ? project.githubUrl : project.githubUrl,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "block text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors pr-12 cursor-pointer",
                                            children: project.title
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/ProjectsSection.tsx",
                                            lineNumber: 97,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-muted-foreground text-sm mb-4 leading-relaxed",
                                            children: project.description
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/ProjectsSection.tsx",
                                            lineNumber: 105,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-2 mb-4",
                                            children: project.technologies.map((tech)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground",
                                                    children: tech
                                                }, tech, false, {
                                                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/ProjectsSection.tsx",
                                                    lineNumber: 112,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/ProjectsSection.tsx",
                                            lineNumber: 110,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-3",
                                            children: [
                                                project.type === "pdf" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: project.githubUrl,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/ProjectsSection.tsx",
                                                            lineNumber: 130,
                                                            columnNumber: 23
                                                        }, this),
                                                        "View PDF"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/ProjectsSection.tsx",
                                                    lineNumber: 124,
                                                    columnNumber: 21
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: project.githubUrl,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/ProjectsSection.tsx",
                                                            lineNumber: 140,
                                                            columnNumber: 23
                                                        }, this),
                                                        "Code"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/ProjectsSection.tsx",
                                                    lineNumber: 134,
                                                    columnNumber: 21
                                                }, this),
                                                project.liveUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: project.liveUrl,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/ProjectsSection.tsx",
                                                            lineNumber: 151,
                                                            columnNumber: 23
                                                        }, this),
                                                        "Demo"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/ProjectsSection.tsx",
                                                    lineNumber: 145,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/ProjectsSection.tsx",
                                            lineNumber: 122,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/ProjectsSection.tsx",
                                    lineNumber: 96,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, project.title, true, {
                            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/ProjectsSection.tsx",
                            lineNumber: 82,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/ProjectsSection.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "mt-12 text-center",
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true
                    },
                    transition: {
                        duration: 0.5,
                        delay: 0.6
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "https://github.com/LuuMTran",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-border text-muted-foreground font-semibold hover:border-primary hover:text-primary transition-all",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/ProjectsSection.tsx",
                                lineNumber: 175,
                                columnNumber: 13
                            }, this),
                            "More on GitHub"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/ProjectsSection.tsx",
                        lineNumber: 169,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/ProjectsSection.tsx",
                    lineNumber: 162,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/ProjectsSection.tsx",
            lineNumber: 64,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/ProjectsSection.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
_s(ProjectsSection, "m0FIn5qC0vMMopIgKoO0cjjZ0cg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = ProjectsSection;
var _c;
__turbopack_context__.k.register(_c, "ProjectsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/AboutSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AboutSection",
    ()=>AboutSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/lucide-react/dist/esm/icons/github.js [app-client] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript) <export default as Linkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const timelineItems = [
    {
        title: "Peer Helper",
        organization: "UTS College",
        period: "Mar 2025 - Present",
        description: "Communicates effectively to help current students understand coursework materials."
    },
    {
        title: "AI/Data Internship",
        organization: "Katalyst",
        period: "Dec 2025 - Feb 2026",
        description: "Internship focused on AI/Data tasks in Ho Chi Minh City, Vietnam."
    },
    {
        title: "Bachelor of Computing Science (Honours), Artificial Intelligence and Data Analytics",
        organization: "University of Technology Sydney",
        period: "Feb 2025 - Nov 2027",
        description: "Grade: 7/7."
    },
    {
        title: "Diploma of Information Technology",
        organization: "UTS College",
        period: "Feb 2024 - Dec 2024",
        description: "Grade: 6.6/7."
    }
];
function AboutSection() {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(sectionRef, {
        amount: 0.2,
        once: false
    });
    const sectionVariants = {
        hidden: {
            opacity: 0,
            y: 40
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.9,
                delay: 0.15,
                ease: [
                    0.215,
                    0.61,
                    0.355,
                    1
                ]
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
        ref: sectionRef,
        id: "about",
        className: "min-h-screen py-24 px-4 md:px-8 lg:px-16 flex items-center",
        variants: sectionVariants,
        initial: "hidden",
        animate: isInView ? "visible" : "hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto w-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "mb-12 text-center",
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true
                    },
                    transition: {
                        duration: 0.6
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-4xl md:text-5xl font-bold mb-4 text-foreground",
                        children: "About Me"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/AboutSection.tsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/AboutSection.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                x: -30
                            },
                            whileInView: {
                                opacity: 1,
                                x: 0
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                duration: 0.6
                            },
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center lg:items-start",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative w-48 h-48 rounded-full overflow-hidden border-4 border-card shadow-xl bg-gradient-to-br from-blue-500 to-emerald-500",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/images/profile.jpg",
                                            alt: "Luu Minh Thong Tran",
                                            fill: true,
                                            className: "object-cover",
                                            priority: true
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/AboutSection.tsx",
                                            lineNumber: 81,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/AboutSection.tsx",
                                        lineNumber: 80,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/AboutSection.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-primary font-medium mb-2",
                                            children: "Hello!"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/AboutSection.tsx",
                                            lineNumber: 93,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-3xl md:text-4xl font-bold mb-4 text-foreground",
                                            children: "I'm Luu"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/AboutSection.tsx",
                                            lineNumber: 94,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4 text-muted-foreground leading-relaxed",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "Hey everyone! I'm Luu, a student studying Artificial Intelligence at UTS. Currently, I'm focusing on developing Python programming skills, Machine Learning, Deep Learning, and Data Science."
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/AboutSection.tsx",
                                                    lineNumber: 97,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "I hope to have the opportunity to learn, develop myself, and contribute to real projects in the AI/ML field. If you have any internship opportunities, projects, or simply want to connect and share, don't hesitate to contact me! ^^"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/AboutSection.tsx",
                                                    lineNumber: 102,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/AboutSection.tsx",
                                            lineNumber: 96,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mt-6 text-muted-foreground",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/AboutSection.tsx",
                                                    lineNumber: 111,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Sydney, Australia"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/AboutSection.tsx",
                                                    lineNumber: 112,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/AboutSection.tsx",
                                            lineNumber: 110,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-3 mt-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "https://www.linkedin.com/in/luu-minh-thong-tran-31971b238/",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "p-3 rounded-full border border-border hover:bg-primary-light hover:border-primary transition-all",
                                                    "aria-label": "LinkedIn",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"], {
                                                        className: "w-5 h-5 text-muted-foreground"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/AboutSection.tsx",
                                                        lineNumber: 124,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/AboutSection.tsx",
                                                    lineNumber: 117,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "https://github.com/LuuMTran",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "p-3 rounded-full border border-border hover:bg-muted transition-all",
                                                    "aria-label": "GitHub",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
                                                        className: "w-5 h-5 text-muted-foreground"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/AboutSection.tsx",
                                                        lineNumber: 133,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/AboutSection.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "mailto:minhthong7375@gmail.com",
                                                    className: "p-3 rounded-full border border-border hover:bg-primary-light transition-all",
                                                    "aria-label": "Email",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                        className: "w-5 h-5 text-muted-foreground"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/AboutSection.tsx",
                                                        lineNumber: 140,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/AboutSection.tsx",
                                                    lineNumber: 135,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/AboutSection.tsx",
                                            lineNumber: 116,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/AboutSection.tsx",
                                    lineNumber: 92,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/AboutSection.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                x: 30
                            },
                            whileInView: {
                                opacity: 1,
                                x: 0
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                duration: 0.6
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-2xl font-bold mb-8 text-foreground",
                                    children: "My Journey"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/AboutSection.tsx",
                                    lineNumber: 153,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6",
                                    children: timelineItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            className: "relative pl-8 pb-6 border-l-2 border-border last:pb-0",
                                            initial: {
                                                opacity: 0,
                                                x: 20
                                            },
                                            whileInView: {
                                                opacity: 1,
                                                x: 0
                                            },
                                            viewport: {
                                                once: true
                                            },
                                            transition: {
                                                duration: 0.4,
                                                delay: index * 0.1
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-2 border-card shadow"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/AboutSection.tsx",
                                                    lineNumber: 165,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm text-muted-foreground font-medium",
                                                    children: item.period
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/AboutSection.tsx",
                                                    lineNumber: 167,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "font-bold text-foreground mt-1",
                                                    children: item.title
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/AboutSection.tsx",
                                                    lineNumber: 168,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-muted-foreground",
                                                    children: item.organization
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/AboutSection.tsx",
                                                    lineNumber: 169,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-muted-foreground mt-2",
                                                    children: item.description
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/AboutSection.tsx",
                                                    lineNumber: 170,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, item.title, true, {
                                            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/AboutSection.tsx",
                                            lineNumber: 156,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/AboutSection.tsx",
                                    lineNumber: 154,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "mt-8 p-6 rounded-2xl bg-primary-light border border-border",
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    viewport: {
                                        once: true
                                    },
                                    transition: {
                                        duration: 0.4,
                                        delay: 0.3
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-bold mb-2 text-primary-dark",
                                            children: "Currently Looking For"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/AboutSection.tsx",
                                            lineNumber: 183,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-primary",
                                            children: "I'm actively seeking internship opportunities in AI/ML engineering where I can apply my skills, learn from experienced professionals, and contribute to impactful projects. If you're hiring, I'd love to connect!"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/AboutSection.tsx",
                                            lineNumber: 184,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/AboutSection.tsx",
                                    lineNumber: 176,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/AboutSection.tsx",
                            lineNumber: 147,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/AboutSection.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/AboutSection.tsx",
            lineNumber: 57,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/AboutSection.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_s(AboutSection, "m0FIn5qC0vMMopIgKoO0cjjZ0cg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = AboutSection;
var _c;
__turbopack_context__.k.register(_c, "AboutSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/ContactSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContactSection",
    ()=>ContactSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/lucide-react/dist/esm/icons/github.js [app-client] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript) <export default as Linkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function ContactSection() {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(sectionRef, {
        amount: 0.2,
        once: false
    });
    const sectionVariants = {
        hidden: {
            opacity: 0,
            y: 40
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.9,
                delay: 0.15,
                ease: [
                    0.215,
                    0.61,
                    0.355,
                    1
                ]
            }
        }
    };
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: "",
        message: ""
    });
    const handleChange = (e)=>{
        setFormData((prev)=>({
                ...prev,
                [e.target.name]: e.target.value
            }));
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        // Construct mailto URL with pre-filled content
        const subject = encodeURIComponent(`Portfolio Contact - ${formData.name}`);
        const body = encodeURIComponent(`Hi Thong,\n\n${formData.message}\n\nBest regards,\n${formData.name}\n${formData.email}`);
        const mailtoUrl = `mailto:minhthong7375@gmail.com?subject=${subject}&body=${body}`;
        // Open default email client
        window.location.href = mailtoUrl;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
        ref: sectionRef,
        id: "contact",
        className: "min-h-screen py-24 px-4 md:px-8 lg:px-16 flex items-center bg-background",
        variants: sectionVariants,
        initial: "hidden",
        animate: isInView ? "visible" : "hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto w-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "mb-16 text-center",
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true
                    },
                    transition: {
                        duration: 0.6
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl md:text-5xl font-bold mb-4 text-foreground",
                            children: "Let's Chat"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/ContactSection.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-muted-foreground max-w-2xl mx-auto",
                            children: "Have a project idea? Want to talk about AI? Or just want to grab coffee? I'm always open to meeting new people."
                        }, void 0, false, {
                            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/ContactSection.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/ContactSection.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                x: -30
                            },
                            whileInView: {
                                opacity: 1,
                                x: 0
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                duration: 0.6
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleSubmit,
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "name",
                                                className: "block text-sm font-medium mb-2 text-muted-foreground",
                                                children: "Your Name"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/ContactSection.tsx",
                                                lineNumber: 83,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                id: "name",
                                                name: "name",
                                                value: formData.name,
                                                onChange: handleChange,
                                                required: true,
                                                className: "w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-muted-foreground/60",
                                                placeholder: "Luu Tran"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/ContactSection.tsx",
                                                lineNumber: 86,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/ContactSection.tsx",
                                        lineNumber: 82,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "email",
                                                className: "block text-sm font-medium mb-2 text-muted-foreground",
                                                children: "Your Email"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/ContactSection.tsx",
                                                lineNumber: 99,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "email",
                                                id: "email",
                                                name: "email",
                                                value: formData.email,
                                                onChange: handleChange,
                                                required: true,
                                                className: "w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-muted-foreground/60",
                                                placeholder: "LuuTran@gmail.com"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/ContactSection.tsx",
                                                lineNumber: 102,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/ContactSection.tsx",
                                        lineNumber: 98,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "message",
                                                className: "block text-sm font-medium mb-2 text-muted-foreground",
                                                children: "Message"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/ContactSection.tsx",
                                                lineNumber: 115,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                id: "message",
                                                name: "message",
                                                value: formData.message,
                                                onChange: handleChange,
                                                required: true,
                                                rows: 5,
                                                className: "w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none placeholder:text-muted-foreground/60",
                                                placeholder: "Tell me about your project, or just say hi!"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/ContactSection.tsx",
                                                lineNumber: 118,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/ContactSection.tsx",
                                        lineNumber: 114,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                        type: "submit",
                                        className: "w-full py-4 px-6 rounded-xl bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-2 hover:bg-primary-dark transition-all",
                                        whileHover: {
                                            scale: 1.01
                                        },
                                        whileTap: {
                                            scale: 0.99
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/ContactSection.tsx",
                                                lineNumber: 136,
                                                columnNumber: 17
                                            }, this),
                                            "Open Email Client"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/ContactSection.tsx",
                                        lineNumber: 130,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/ContactSection.tsx",
                                lineNumber: 81,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/ContactSection.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "space-y-8",
                            initial: {
                                opacity: 0,
                                x: 30
                            },
                            whileInView: {
                                opacity: 1,
                                x: 0
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                duration: 0.6,
                                delay: 0.2
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-6 rounded-2xl bg-card border border-border",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-bold mb-4 text-foreground",
                                            children: "Prefer to reach out directly?"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/ContactSection.tsx",
                                            lineNumber: 152,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "mailto:minhthong7375@gmail.com",
                                                    className: "flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-10 h-10 rounded-full bg-muted flex items-center justify-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                                className: "w-5 h-5 text-primary"
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/ContactSection.tsx",
                                                                lineNumber: 159,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/ContactSection.tsx",
                                                            lineNumber: 158,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "minhthong7375@gmail.com"
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/ContactSection.tsx",
                                                            lineNumber: 161,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/ContactSection.tsx",
                                                    lineNumber: 154,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3 text-muted-foreground",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-10 h-10 rounded-full bg-muted flex items-center justify-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                className: "w-5 h-5 text-secondary"
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/ContactSection.tsx",
                                                                lineNumber: 165,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/ContactSection.tsx",
                                                            lineNumber: 164,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Sydney, Australia"
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/ContactSection.tsx",
                                                            lineNumber: 167,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/ContactSection.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/ContactSection.tsx",
                                            lineNumber: 153,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/ContactSection.tsx",
                                    lineNumber: 151,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-6 rounded-2xl bg-card border border-border",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-bold mb-4 text-foreground",
                                            children: "Find me online"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/ContactSection.tsx",
                                            lineNumber: 174,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "https://github.com/LuuMTran",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "p-3 rounded-full border border-border hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all",
                                                    "aria-label": "GitHub",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
                                                        className: "w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/ContactSection.tsx",
                                                        lineNumber: 183,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/ContactSection.tsx",
                                                    lineNumber: 176,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "https://www.linkedin.com/in/luu-minh-thong-tran-31971b238/",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "p-3 rounded-full border border-border hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all",
                                                    "aria-label": "LinkedIn",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"], {
                                                        className: "w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/ContactSection.tsx",
                                                        lineNumber: 192,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/ContactSection.tsx",
                                                    lineNumber: 185,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/ContactSection.tsx",
                                            lineNumber: 175,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/ContactSection.tsx",
                                    lineNumber: 173,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4 rounded-xl bg-primary-light border border-border",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-muted-foreground",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                className: "text-primary",
                                                children: "Pro tip:"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/ContactSection.tsx",
                                                lineNumber: 200,
                                                columnNumber: 17
                                            }, this),
                                            " I usually respond within 24 hours. If you don't hear back, check your spam folder or try LinkedIn!"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/ContactSection.tsx",
                                        lineNumber: 199,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/ContactSection.tsx",
                                    lineNumber: 198,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/ContactSection.tsx",
                            lineNumber: 143,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/ContactSection.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/ContactSection.tsx",
            lineNumber: 57,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/ContactSection.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_s(ContactSection, "QxBqe1IIrbdlPznyGVzD16F11ws=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = ContactSection;
var _c;
__turbopack_context__.k.register(_c, "ContactSection");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
"use client";
;
;
;
;
function BlogCard({ post, index, featured = false }) {
    if (featured) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].article, {
            className: "group relative overflow-hidden rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-xl",
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
                            className: "inline-block px-3 py-1 rounded-full bg-primary-light border border-border mb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-medium text-primary",
                                children: post.category
                            }, void 0, false, {
                                fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogCard.tsx",
                                lineNumber: 26,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogCard.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2",
                            children: post.title
                        }, void 0, false, {
                            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogCard.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground text-sm mb-4 line-clamp-3 leading-relaxed",
                            children: post.excerpt
                        }, void 0, false, {
                            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogCard.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4 text-xs text-muted-foreground mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                            className: "w-3 h-3"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogCard.tsx",
                                            lineNumber: 42,
                                            columnNumber: 15
                                        }, this),
                                        post.date
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogCard.tsx",
                                    lineNumber: 41,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                            className: "w-3 h-3"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogCard.tsx",
                                            lineNumber: 46,
                                            columnNumber: 15
                                        }, this),
                                        post.readTime
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogCard.tsx",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogCard.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-1.5",
                            children: post.tags.slice(0, 3).map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "px-2 py-0.5 text-xs rounded-full bg-muted text-muted-foreground",
                                    children: tag
                                }, tag, false, {
                                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogCard.tsx",
                                    lineNumber: 54,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogCard.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: `/blog/${post.slug}`,
                            className: "mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all",
                            children: [
                                "Read More",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogCard.tsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogCard.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogCard.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                }, void 0, false, {
                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogCard.tsx",
                    lineNumber: 74,
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
        className: "group relative overflow-hidden rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg",
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
                        className: "inline-block px-2.5 py-0.5 rounded-full bg-primary-light border border-border mb-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs font-medium text-primary",
                            children: post.category
                        }, void 0, false, {
                            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogCard.tsx",
                            lineNumber: 89,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogCard.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2",
                        children: post.title
                    }, void 0, false, {
                        fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogCard.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground text-sm mb-3 line-clamp-2",
                        children: post.excerpt
                    }, void 0, false, {
                        fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogCard.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 text-xs text-muted-foreground",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                        className: "w-3 h-3"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogCard.tsx",
                                        lineNumber: 105,
                                        columnNumber: 13
                                    }, this),
                                    post.date
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogCard.tsx",
                                lineNumber: 104,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                        className: "w-3 h-3"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogCard.tsx",
                                        lineNumber: 109,
                                        columnNumber: 13
                                    }, this),
                                    post.readTime
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogCard.tsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogCard.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogCard.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: `/blog/${post.slug}`,
                className: "absolute inset-0",
                "aria-label": `Read ${post.title}`
            }, void 0, false, {
                fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogCard.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogCard.tsx",
        lineNumber: 80,
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
"[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogPostContent.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BlogPostContent",
    ()=>BlogPostContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript) <export default as Linkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/react-markdown/lib/index.js [app-client] (ecmascript) <export Markdown as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$remark$2d$math$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/remark-math/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$rehype$2d$katex$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/rehype-katex/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$rehype$2d$raw$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/rehype-raw/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$src$2f$components$2f$GridBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/GridBackground.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
function BlogPostContent({ post }) {
    _s();
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const getShareUrl = ()=>{
        if ("TURBOPACK compile-time truthy", 1) {
            return window.location.href;
        }
        //TURBOPACK unreachable
        ;
    };
    const handleLinkedInShare = ()=>{
        const url = getShareUrl();
        const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        window.open(linkedInUrl, "_blank", "width=600,height=600");
    };
    const handleCopyLink = async ()=>{
        const url = getShareUrl();
        try {
            await navigator.clipboard.writeText(url);
            setCopied(true);
            setTimeout(()=>setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy link:", err);
        }
    };
    const handleEmailShare = ()=>{
        const url = getShareUrl();
        const subject = encodeURIComponent(`Check out: ${post.title}`);
        const body = encodeURIComponent(`I thought you might find this interesting:\n\n${post.title}\n\n${url}`);
        window.location.href = `mailto:?subject=${subject}&body=${body}`;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "relative min-h-screen bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                rel: "stylesheet",
                href: "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css",
                integrity: "sha384-n8MVd4RsNIU0tAv4ct0nTaAbDJwPJzDEaqSD1odI+WdtXRGWt2kTvGFasHpSy3SV",
                crossOrigin: "anonymous"
            }, void 0, false, {
                fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogPostContent.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$src$2f$components$2f$GridBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GridBackground"], {}, void 0, false, {
                fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogPostContent.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/blog",
                            className: "flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogPostContent.tsx",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-medium",
                                    children: "Back to Blog"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogPostContent.tsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogPostContent.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-8 h-8 relative",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/logo.svg",
                                        alt: "Luu Tran Logo",
                                        fill: true,
                                        className: "object-contain"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogPostContent.tsx",
                                        lineNumber: 79,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogPostContent.tsx",
                                    lineNumber: 78,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-bold text-foreground",
                                    children: "Blog"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogPostContent.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogPostContent.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogPostContent.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogPostContent.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                className: "pt-8 pb-16 px-4 md:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "mb-8",
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
                                    className: "inline-block px-3 py-1 rounded-full bg-primary-light border border-border mb-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-medium text-primary",
                                        children: post.category
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogPostContent.tsx",
                                        lineNumber: 103,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogPostContent.tsx",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6",
                                    children: post.title
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogPostContent.tsx",
                                    lineNumber: 107,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogPostContent.tsx",
                                                    lineNumber: 114,
                                                    columnNumber: 17
                                                }, this),
                                                post.date
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogPostContent.tsx",
                                            lineNumber: 113,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogPostContent.tsx",
                                                    lineNumber: 118,
                                                    columnNumber: 17
                                                }, this),
                                                post.readTime
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogPostContent.tsx",
                                            lineNumber: 117,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogPostContent.tsx",
                                    lineNumber: 112,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-2 mb-8",
                                    children: post.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "px-3 py-1 rounded-full bg-muted border border-border text-sm text-muted-foreground",
                                            children: tag
                                        }, tag, false, {
                                            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogPostContent.tsx",
                                            lineNumber: 126,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogPostContent.tsx",
                                    lineNumber: 124,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 pt-4 border-t border-border",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-muted-foreground",
                                            children: "Share:"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogPostContent.tsx",
                                            lineNumber: 137,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleLinkedInShare,
                                            className: "p-2 rounded-full border border-border hover:bg-primary-light hover:border-primary hover:text-primary transition-all",
                                            title: "Share on LinkedIn",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogPostContent.tsx",
                                                lineNumber: 143,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogPostContent.tsx",
                                            lineNumber: 138,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleCopyLink,
                                            className: "p-2 rounded-full border border-border hover:bg-primary-light hover:border-primary hover:text-primary transition-all",
                                            title: copied ? "Copied!" : "Copy link",
                                            children: copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                className: "w-4 h-4 text-green-500"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogPostContent.tsx",
                                                lineNumber: 150,
                                                columnNumber: 27
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogPostContent.tsx",
                                                lineNumber: 150,
                                                columnNumber: 74
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogPostContent.tsx",
                                            lineNumber: 145,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleEmailShare,
                                            className: "p-2 rounded-full border border-border hover:bg-primary-light hover:border-primary hover:text-primary transition-all",
                                            title: "Share via Email",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogPostContent.tsx",
                                                lineNumber: 157,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogPostContent.tsx",
                                            lineNumber: 152,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogPostContent.tsx",
                                    lineNumber: 136,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogPostContent.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "prose prose-lg max-w-none dark:prose-invert",
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.6,
                                delay: 0.2
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-card rounded-2xl p-8 md:p-12 border border-border shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                                        children: `
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
              `
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogPostContent.tsx",
                                        lineNumber: 170,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__["default"], {
                                        remarkPlugins: [
                                            __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$remark$2d$math$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
                                        ],
                                        rehypePlugins: [
                                            __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$rehype$2d$raw$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                                            __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$rehype$2d$katex$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
                                        ],
                                        components: {
                                            h1: ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: "text-3xl font-bold text-foreground mt-8 mb-4",
                                                    children: children
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogPostContent.tsx",
                                                    lineNumber: 190,
                                                    columnNumber: 21
                                                }, void 0),
                                            h2: ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-2xl font-bold text-foreground mt-6 mb-3",
                                                    children: children
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogPostContent.tsx",
                                                    lineNumber: 193,
                                                    columnNumber: 21
                                                }, void 0),
                                            h3: ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold text-foreground mt-4 mb-2",
                                                    children: children
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogPostContent.tsx",
                                                    lineNumber: 196,
                                                    columnNumber: 21
                                                }, void 0),
                                            p: ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-muted-foreground leading-relaxed mb-4",
                                                    children: children
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogPostContent.tsx",
                                                    lineNumber: 199,
                                                    columnNumber: 21
                                                }, void 0),
                                            img: ({ src, alt })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: src,
                                                    alt: alt,
                                                    className: "w-full max-w-2xl mx-auto my-6 rounded-lg shadow-md block"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogPostContent.tsx",
                                                    lineNumber: 202,
                                                    columnNumber: 21
                                                }, void 0),
                                            iframe: ({ src, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "my-6 w-full overflow-hidden rounded-lg shadow-lg",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                                        src: src,
                                                        ...props,
                                                        className: "w-full h-[500px] md:h-[600px] border-0",
                                                        allowFullScreen: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogPostContent.tsx",
                                                        lineNumber: 210,
                                                        columnNumber: 23
                                                    }, void 0)
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogPostContent.tsx",
                                                    lineNumber: 209,
                                                    columnNumber: 21
                                                }, void 0)
                                        },
                                        children: post.content
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogPostContent.tsx",
                                        lineNumber: 185,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogPostContent.tsx",
                                lineNumber: 169,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogPostContent.tsx",
                            lineNumber: 163,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "mt-12 flex items-center justify-between pt-8 border-t border-border",
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            transition: {
                                duration: 0.4,
                                delay: 0.4
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/blog",
                                className: "flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogPostContent.tsx",
                                        lineNumber: 236,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "All Articles"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogPostContent.tsx",
                                        lineNumber: 237,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogPostContent.tsx",
                                lineNumber: 232,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogPostContent.tsx",
                            lineNumber: 226,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogPostContent.tsx",
                    lineNumber: 93,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogPostContent.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "py-8 px-4 border-t border-border bg-background",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl mx-auto text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-muted-foreground",
                        children: "© 2024 Luu Minh Thong Tran"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogPostContent.tsx",
                        lineNumber: 246,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogPostContent.tsx",
                    lineNumber: 245,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogPostContent.tsx",
                lineNumber: 244,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogPostContent.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
_s(BlogPostContent, "NE86rL3vg4NVcTTWDavsT0hUBJs=");
_c = BlogPostContent;
var _c;
__turbopack_context__.k.register(_c, "BlogPostContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BlogSection",
    ()=>BlogSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$src$2f$data$2f$blog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/data/blog.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function BlogSection() {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(sectionRef, {
        amount: 0.2,
        once: false
    });
    const sectionVariants = {
        hidden: {
            opacity: 0,
            y: 40
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.9,
                delay: 0.15,
                ease: [
                    0.215,
                    0.61,
                    0.355,
                    1
                ]
            }
        }
    };
    // Get the latest post only
    const latestPost = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$src$2f$data$2f$blog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["blogPosts"][0];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
        ref: sectionRef,
        id: "blog",
        className: "min-h-screen py-24 px-4 md:px-8 lg:px-16 flex items-center bg-background",
        variants: sectionVariants,
        initial: "hidden",
        animate: isInView ? "visible" : "hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto w-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "mb-12 text-center",
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true
                    },
                    transition: {
                        duration: 0.6
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl md:text-5xl font-bold mb-4 text-foreground",
                            children: "Latest from the Blog"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogSection.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-muted-foreground max-w-2xl mx-auto",
                            children: "I write about AI/ML concepts, tutorials, and things I'm learning along the way."
                        }, void 0, false, {
                            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogSection.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogSection.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this),
                latestPost && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].article, {
                    className: "group relative overflow-hidden rounded-xl border border-border bg-background hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-2xl mx-auto",
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true
                    },
                    transition: {
                        duration: 0.4
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-block px-2.5 py-0.5 rounded-full bg-primary-light border border-border mb-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs font-medium text-primary",
                                    children: latestPost.category
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogSection.tsx",
                                    lineNumber: 61,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogSection.tsx",
                                lineNumber: 60,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors",
                                children: latestPost.title
                            }, void 0, false, {
                                fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogSection.tsx",
                                lineNumber: 65,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-2",
                                children: latestPost.excerpt
                            }, void 0, false, {
                                fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogSection.tsx",
                                lineNumber: 70,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 text-xs text-muted-foreground mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                className: "w-3 h-3"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogSection.tsx",
                                                lineNumber: 77,
                                                columnNumber: 19
                                            }, this),
                                            latestPost.date
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogSection.tsx",
                                        lineNumber: 76,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                className: "w-3 h-3"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogSection.tsx",
                                                lineNumber: 81,
                                                columnNumber: 19
                                            }, this),
                                            latestPost.readTime
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogSection.tsx",
                                        lineNumber: 80,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogSection.tsx",
                                lineNumber: 75,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: `/blog/${latestPost.slug}`,
                                className: "inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all",
                                children: [
                                    "Read Article",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogSection.tsx",
                                        lineNumber: 92,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogSection.tsx",
                                lineNumber: 87,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogSection.tsx",
                        lineNumber: 58,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogSection.tsx",
                    lineNumber: 51,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "mt-12 max-w-2xl mx-auto",
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true
                    },
                    transition: {
                        duration: 0.5,
                        delay: 0.2
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl border border-border bg-background p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-bold text-foreground mb-3",
                                children: "Notes"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogSection.tsx",
                                lineNumber: 107,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground text-sm leading-relaxed mb-4",
                                children: "This section is where I'll share quick thoughts, learning notes, and insights from my journey in AI/ML. More notes will be added as my journey continues..."
                            }, void 0, false, {
                                fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogSection.tsx",
                                lineNumber: 108,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/blog",
                                className: "inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors",
                                children: [
                                    "Go to Blog",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogSection.tsx",
                                        lineNumber: 117,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogSection.tsx",
                                lineNumber: 112,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogSection.tsx",
                        lineNumber: 106,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogSection.tsx",
                    lineNumber: 99,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogSection.tsx",
            lineNumber: 34,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogSection.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_s(BlogSection, "m0FIn5qC0vMMopIgKoO0cjjZ0cg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = BlogSection;
var _c;
__turbopack_context__.k.register(_c, "BlogSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$src$2f$components$2f$CircleText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/CircleText.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$src$2f$components$2f$CenterTitle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/CenterTitle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$src$2f$components$2f$SocialLinks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/SocialLinks.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$src$2f$components$2f$ThemeToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/ThemeToggle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$src$2f$components$2f$GridBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/GridBackground.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$src$2f$components$2f$Navigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/Navigation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$src$2f$components$2f$HeroSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/HeroSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$src$2f$components$2f$SkillsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/SkillsSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$src$2f$components$2f$ProjectsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/ProjectsSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$src$2f$components$2f$AboutSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/AboutSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$src$2f$components$2f$ContactSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/ContactSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$src$2f$components$2f$BlogCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$src$2f$components$2f$BlogPostContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogPostContent.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$src$2f$components$2f$BlogSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogSection.tsx [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$src$2f$components$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$src$2f$components$2f$GridBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/GridBackground.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$src$2f$components$2f$Navigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/Navigation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$src$2f$components$2f$HeroSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/HeroSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$src$2f$components$2f$AboutSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/AboutSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$src$2f$components$2f$SkillsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/SkillsSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$src$2f$components$2f$ProjectsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/ProjectsSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$src$2f$components$2f$BlogSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/BlogSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$src$2f$components$2f$ContactSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/components/ContactSection.tsx [app-client] (ecmascript)");
"use client";
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "relative bg-background overflow-x-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$src$2f$components$2f$GridBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GridBackground"], {}, void 0, false, {
                fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/app/page.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$src$2f$components$2f$Navigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Navigation"], {}, void 0, false, {
                fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/app/page.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$src$2f$components$2f$HeroSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeroSection"], {}, void 0, false, {
                fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/app/page.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$src$2f$components$2f$AboutSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AboutSection"], {}, void 0, false, {
                fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/app/page.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$src$2f$components$2f$SkillsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SkillsSection"], {}, void 0, false, {
                fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/app/page.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$src$2f$components$2f$ProjectsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProjectsSection"], {}, void 0, false, {
                fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/app/page.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$src$2f$components$2f$BlogSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlogSection"], {}, void 0, false, {
                fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/app/page.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$src$2f$components$2f$ContactSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContactSection"], {}, void 0, false, {
                fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/app/page.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "py-8 px-4 border-t border-border bg-background",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__UTS$2f$Personal_code$2f$thong$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-muted-foreground",
                        children: "© 2024 Luu Minh Thong Tran"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/app/page.tsx",
                        lineNumber: 44,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/app/page.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/app/page.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive - UTS/Personal_code/thong-portfolio/src/app/page.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=OneDrive%20-%20UTS_Personal_code_thong-portfolio_src_0e74758f._.js.map