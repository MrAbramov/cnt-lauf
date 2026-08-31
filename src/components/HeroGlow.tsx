"use client";

import { useEffect, useRef } from "react";

export default function HeroGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    const hero = glow?.closest(".hero") as HTMLElement | null;
    if (!glow || !hero) return;

    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!hasFinePointer || reduceMotion) return;

    function handleMove(event: MouseEvent) {
      const rect = hero!.getBoundingClientRect();
      glow!.style.left = `${event.clientX - rect.left}px`;
      glow!.style.top = `${event.clientY - rect.top}px`;
      glow!.style.opacity = "1";
    }

    function handleLeave() {
      glow!.style.opacity = "0";
    }

    hero.addEventListener("mousemove", handleMove);
    hero.addEventListener("mouseleave", handleLeave);
    return () => {
      hero.removeEventListener("mousemove", handleMove);
      hero.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return <div className="hero-glow" ref={glowRef} aria-hidden="true" />;
}
