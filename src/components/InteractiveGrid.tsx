"use client";

import { useEffect, useRef, useState } from "react";

interface MousePosition {
    x: number;
    y: number;
}

export function InteractiveGrid() {
    const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                setMousePosition({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top,
                });
            }
        };

        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);

        const container = containerRef.current;
        if (container) {
            container.addEventListener("mousemove", handleMouseMove);
            container.addEventListener("mouseenter", handleMouseEnter);
            container.addEventListener("mouseleave", handleMouseLeave);
        }

        return () => {
            if (container) {
                container.removeEventListener("mousemove", handleMouseMove);
                container.removeEventListener("mouseenter", handleMouseEnter);
                container.removeEventListener("mouseleave", handleMouseLeave);
            }
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 overflow-hidden pointer-events-auto"
            style={{ zIndex: 0 }}
        >
            {/* Base grid pattern */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, rgba(112, 141, 205, 0.2) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(112, 141, 205, 0.2) 1px, transparent 1px)
                    `,
                    backgroundSize: "60px 60px",
                }}
            />

            {/* Floating dots */}
            <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1.5 h-1.5 rounded-full bg-[#708dcd] opacity-40"
                        style={{
                            left: `${10 + (i * 4.5) % 90}%`,
                            top: `${5 + (i * 5.3) % 90}%`,
                            animation: `float ${3 + (i % 3)}s ease-in-out infinite`,
                            animationDelay: `${i * 0.2}s`,
                        }}
                    />
                ))}
            </div>

            {/* Mouse-following gradient spotlight */}
            <div
                className="absolute pointer-events-none transition-opacity duration-300"
                style={{
                    left: mousePosition.x - 200,
                    top: mousePosition.y - 200,
                    width: 400,
                    height: 400,
                    background: `radial-gradient(circle at center, rgba(112, 141, 205, ${isHovering ? 0.15 : 0}) 0%, transparent 70%)`,
                    opacity: isHovering ? 1 : 0,
                    transition: "opacity 0.3s ease",
                }}
            />

            {/* Mouse-following grid highlight */}
            <div
                className="absolute pointer-events-none transition-opacity duration-300"
                style={{
                    left: mousePosition.x - 150,
                    top: mousePosition.y - 150,
                    width: 300,
                    height: 300,
                    opacity: isHovering ? 1 : 0,
                    backgroundImage: `
            linear-gradient(to right, rgba(112, 141, 205, 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(112, 141, 205, 0.3) 1px, transparent 1px)
          `,
                    backgroundSize: "60px 60px",
                    backgroundPosition: `${-mousePosition.x % 60}px ${-mousePosition.y % 60}px`,
                    mask: "radial-gradient(circle at center, black 0%, transparent 70%)",
                    WebkitMask: "radial-gradient(circle at center, black 0%, transparent 70%)",
                }}
            />

            {/* CSS Animation */}
            <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
        </div>
    );
}
