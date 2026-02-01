"use client";

export function GridBackground() {
  return (
    <div 
      className="fixed inset-0 w-full h-full overflow-hidden -z-10 animated-grid"
      style={{
        backgroundImage: `linear-gradient(to right, var(--border) 1px, transparent 1px),
          linear-gradient(to bottom, var(--border) 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
      }}
    />
  );
}
