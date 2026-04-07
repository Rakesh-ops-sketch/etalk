"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  kind: "voice" | "ai";
  phase: number;
};

function initParticles(w: number, h: number, count: number): Particle[] {
  const list: Particle[] = [];
  for (let i = 0; i < count; i++) {
    list.push({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.1,
      vy: (Math.random() - 0.5) * 0.085,
      r: Math.random() * 1.5 + 0.55,
      /* Half “voice” nodes → fewer edges (links require an “ai” node) */
      kind: i % 2 === 0 ? "voice" : "ai",
      phase: Math.random() * Math.PI * 2,
    });
  }
  return list;
}

function drawFrame(
  ctx: CanvasRenderingContext2D,
  particles: Particle[],
  w: number,
  h: number,
  time: number,
  staticOnly: boolean,
) {
  ctx.clearRect(0, 0, w, h);

  const narrow = w < 640;
  /* Subtle but readable; phones slightly softer */
  const lineAlphaBase = staticOnly ? 0.08 : 0.105;
  const lineAlpha = narrow ? lineAlphaBase * 0.92 : lineAlphaBase;
  const linkDist = narrow ? 66 : 78;
  const lineWMain = narrow ? 0.52 : 0.58;
  const lineWGlow = narrow ? 0.3 : 0.34;
  const motionAmp = narrow ? 0.16 : 0.2;
  const vDot = narrow ? 0.18 : 0.21;
  const aiDot = narrow ? 0.16 : 0.19;

  if (!staticOnly) {
    for (const p of particles) {
      if (p.kind === "voice") {
        p.y += Math.sin(time * 1.8 + p.phase + p.x * 0.008) * motionAmp;
      }
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
      p.x = Math.max(0, Math.min(w, p.x));
      p.y = Math.max(0, Math.min(h, p.y));
    }
  }

  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const a = particles[i];
      const b = particles[j];
      const dx = a.x - b.x;
      const dy = a.y - b.y;
      const d = Math.hypot(dx, dy);
      if (d < linkDist && (a.kind === "ai" || b.kind === "ai")) {
        const falloff = 1 - d / linkDist;
        const a1 = lineAlpha * falloff;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = `rgba(30, 58, 95, ${a1})`;
        ctx.lineWidth = lineWMain;
        ctx.lineCap = "round";
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = `rgba(200, 155, 45, ${a1 * 0.46})`;
        ctx.lineWidth = lineWGlow;
        ctx.stroke();
      }
    }
  }

  for (const p of particles) {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle =
      p.kind === "voice"
        ? `rgba(51, 65, 85, ${vDot})`
        : `rgba(200, 150, 30, ${aiDot})`;
    ctx.fill();
  }
}

export function HeroParticles({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let particles: Particle[] = [];
    let raf = 0;
    const t0 = performance.now();

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = Math.max(rect.height, 320);
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const narrow = w < 640;
      /* Moderate counts + short link distance = few visible connections */
      const count = narrow ? 42 : w < 1024 ? 50 : 56;
      particles = initParticles(w, h, count);
      if (reduceMotion) {
        drawFrame(ctx, particles, w, h, 0, true);
      }
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();

    if (reduceMotion) {
      return () => ro.disconnect();
    }

    const loop = (now: number) => {
      const w = canvas.clientWidth;
      const h = Math.max(canvas.clientHeight, 320);
      const t = (now - t0) * 0.001;
      drawFrame(ctx, particles, w, h, t, false);
      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 h-full min-h-[22rem] w-full ${className}`}
      aria-hidden
    />
  );
}
