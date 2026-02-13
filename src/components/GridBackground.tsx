"use client";

import { useEffect, useState } from "react";

interface MousePosition {
  x: number;
  y: number;
}

export function GridBackground() {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Calculate parallax offset - subtle shift based on mouse position
  const parallaxX = isMounted ? (mousePosition.x - window.innerWidth / 2) / 50 : 0;
  const parallaxY = isMounted ? (mousePosition.y - window.innerHeight / 2) / 50 : 0;

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
      {/* Base grid pattern with parallax jiggle */}
      <div
        className="absolute inset-0 transition-transform duration-100 ease-out"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(112, 141, 205, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(112, 141, 205, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          transform: `translate(${parallaxX}px, ${parallaxY}px)`,
        }}
      />

      {/* Mouse-following gradient spotlight - only render on client */}
      {isMounted && (
        <div
          className="fixed pointer-events-none transition-all duration-75 ease-out"
          style={{
            left: mousePosition.x - 200,
            top: mousePosition.y - 200,
            width: 400,
            height: 400,
            background: `radial-gradient(circle at center, rgba(112, 141, 205, 0.15) 0%, transparent 60%)`,
          }}
        />
      )}
    </div>
  );
}
