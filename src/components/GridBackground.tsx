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

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
      {/* Base grid pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(112, 141, 205, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(112, 141, 205, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Mouse-following effects - only render on client */}
      {isMounted && (
        <>
          {/* Mouse-following gradient spotlight */}
          <div
            className="fixed pointer-events-none"
            style={{
              left: mousePosition.x - 200,
              top: mousePosition.y - 200,
              width: 400,
              height: 400,
              background: `radial-gradient(circle at center, rgba(112, 141, 205, 0.1) 0%, transparent 60%)`,
            }}
          />

          {/* Mouse-following grid highlight */}
          <div
            className="fixed pointer-events-none"
            style={{
              left: mousePosition.x - 150,
              top: mousePosition.y - 150,
              width: 300,
              height: 300,
              backgroundImage: `
                linear-gradient(to right, rgba(112, 141, 205, 0.3) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(112, 141, 205, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
              backgroundPosition: `${-mousePosition.x % 50}px ${-mousePosition.y % 50}px`,
              mask: "radial-gradient(circle at center, black 0%, transparent 60%)",
              WebkitMask: "radial-gradient(circle at center, black 0%, transparent 60%)",
            }}
          />
        </>
      )}
    </div>
  );
}
