"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, MoveRight } from "lucide-react";

const STATS = [
  { value: "13+", label: "Applications Shipped" },
  { value: "7", label: "Day Delivery" },
  { value: "100%", label: "Custom Code" },
  { value: "4", label: "Service Tiers" },
] as const;

const TECH_STRIP = [
  "Next.js",
  "React",
  "TypeScript",
  "Supabase",
  "PostgreSQL",
  "Tailwind CSS",
  "Framer Motion",
  "Node.js",
  "Vercel",
  "Paystack",
  "n8n",
  "React Native",
  "Expo",
  "OpenAI",
  "Resend",
] as const;

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Animated dot grid on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let t = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);

      const gap = 44;
      const cols = Math.ceil(width / gap) + 1;
      const rows = Math.ceil(height / gap) + 1;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * gap;
          const y = r * gap;
          // Radial fade from center
          const cx = width / 2;
          const cy = height / 2;
          const dist = Math.hypot(x - cx, y - cy);
          const maxD = Math.hypot(cx, cy);
          const alpha = Math.max(0, 0.22 - (dist / maxD) * 0.22);
          // Subtle pulse
          const wave = Math.sin(t * 0.6 + (r + c) * 0.4) * 0.04;
          ctx.beginPath();
          ctx.arc(x, y, 1, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(196,154,40,${alpha + wave})`;
          ctx.fill();
        }
      }
      t += 0.012;
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden bg-orayn-darker"
      style={{ maxWidth: "100vw" }}
    >
      {/* Dot grid canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden="true"
      />

      {/* Grid lines bg */}
      <div
        className="absolute inset-0 grid-bg opacity-40 pointer-events-none"
        aria-hidden="true"
      />

      {/* Top-left gold accent bar */}
      <div
        className="absolute top-0 left-0 w-px h-48 bg-gradient-to-b from-orayn-gold to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute top-0 left-0 w-48 h-px bg-gradient-to-r from-orayn-gold to-transparent"
        aria-hidden="true"
      />

      {/* Bottom-right gold accent bar */}
      <div
        className="absolute bottom-0 right-0 w-px h-48 bg-gradient-to-t from-orayn-gold/40 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-48 h-px bg-gradient-to-l from-orayn-gold/40 to-transparent"
        aria-hidden="true"
      />

      {/* Radial glow behind headline */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(196,154,40,0.07) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* ── Main content ── */}
      <div className="relative flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full px-5 sm:px-8 lg:px-10 pt-28 pb-12">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-5 h-px bg-orayn-gold" aria-hidden="true" />
            <span className="section-eyebrow">Nigerian Software Studio</span>
          </div>

          {/* Headline */}
          <h1 className="font-sora text-4xl sm:text-5xl lg:text-[64px] font-bold text-white leading-[1.06] tracking-tight mb-6">
            We Build the{" "}
            <span className="relative inline-block">
              <span className="text-orayn-gold">Digital Products</span>
              {/* Underline rule */}
              <span
                className="absolute left-0 -bottom-1 w-full h-px bg-orayn-gold/40"
                aria-hidden="true"
              />
            </span>{" "}
            Nigerian Businesses Deserve.
          </h1>

          {/* Sub */}
          <p className="font-inter text-base sm:text-lg text-white/55 leading-relaxed max-w-xl mb-10">
            Custom-coded websites, mobile apps, SaaS platforms, and automation
            systems — engineered to international standard, delivered within
            days, priced for the Nigerian market.
          </p>

          {/* CTA row */}
          <div className="flex flex-wrap items-center gap-4 mb-14">
            <a href="#contact" className="btn-primary group">
              Start Your Project
              <ArrowRight
                size={15}
                className="group-hover:translate-x-0.5 transition-transform"
                aria-hidden="true"
              />
            </a>
            <a href="#work" className="btn-outline group">
              See Our Work
              <MoveRight
                size={15}
                className="group-hover:translate-x-0.5 transition-transform"
                aria-hidden="true"
              />
            </a>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-x-10 gap-y-5">
            {STATS.map(({ value, label }) => (
              <div key={label} className="flex flex-col gap-0.5">
                <span className="font-sora text-2xl sm:text-3xl font-bold text-orayn-gold leading-none">
                  {value}
                </span>
                <span className="font-inter text-xs text-white/40 tracking-wide">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right-side decorative code block — hidden on mobile */}
        <div
          className="absolute right-10 top-1/2 -translate-y-1/2 hidden xl:block w-[340px]"
          aria-hidden="true"
        >
          <div className="border border-white/[0.08] rounded-orayn bg-white/[0.02] backdrop-blur-sm p-5">
            <div className="flex items-center gap-1.5 mb-4">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
              <span className="ml-2 font-mono text-[10px] text-white/20">
                orayn.config.ts
              </span>
            </div>
            <pre className="font-mono text-[11px] leading-[1.8] text-white/40 whitespace-pre-wrap">
              {`const project = {
  client:   "Your Business",
  timeline: "7 business days",
  stack: [
    "Next.js 15",
    "TypeScript",
    "Supabase",
    "Tailwind CSS",
  ],
  payment: {
    upfront: "60%",
    onDelivery: "40%",
  },
  status: `}
              <span className="text-orayn-gold">{`"building"`}</span>
              {`,
}`}
            </pre>
          </div>
          {/* Floating tag */}
          <div className="absolute -bottom-4 -right-4 flex items-center gap-2 bg-orayn-gold/10 border border-orayn-gold/20 rounded-sm px-3 py-2">
            <div className="w-1.5 h-1.5 rounded-full bg-orayn-gold pulse-gold" />
            <span className="font-mono text-[10px] text-orayn-gold">
              Live in production
            </span>
          </div>
        </div>
      </div>

      {/* Tech strip scroll marquee */}
      <div
        className="relative border-t border-white/[0.06] bg-white/[0.02] overflow-hidden"
        aria-hidden="true"
      >
        <div className="flex whitespace-nowrap py-3.5">
          <div className="marquee-track flex items-center gap-0">
            {[...TECH_STRIP, ...TECH_STRIP].map((tech, i) => (
              <span
                key={`${tech}-${i}`}
                className="inline-flex items-center gap-6 px-6"
              >
                <span className="font-mono text-xs text-white/30 tracking-wide uppercase">
                  {tech}
                </span>
                <span className="w-px h-3 bg-white/10" />
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="relative flex justify-center py-5" aria-hidden="true">
        <div className="flex flex-col items-center gap-1.5 opacity-30">
          <div className="w-px h-10 bg-gradient-to-b from-transparent to-orayn-gold" />
          <span className="font-mono text-[9px] text-white/40 uppercase tracking-widest">
            Scroll
          </span>
        </div>
      </div>
    </section>
  );
}
