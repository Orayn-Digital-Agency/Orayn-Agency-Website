'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden:   { opacity: 0, y: 28 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const statsVariants = {
  hidden:   { opacity: 0, y: 20 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const STATS = [
  { value: '13+',   label: 'Apps Shipped to Production' },
  { value: '100%',  label: 'Custom — No Templates Used' },
  { value: '7–10',  label: 'Business Day Delivery' },
] as const

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-orayn-dark overflow-hidden flex flex-col justify-center"
      aria-label="Hero"
    >
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(196, 154, 40, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(196, 154, 40, 1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      {/* Radial glow top-left */}
      <div
        className="absolute -top-40 -left-40 w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(circle, #C49A28, transparent)' }}
        aria-hidden="true"
      />

      {/* Radial glow bottom-right */}
      <div
        className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{ background: 'radial-gradient(circle, #1B2A4A, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <motion.div
          className="max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orayn-gold/30 bg-orayn-gold/10 font-inter text-xs font-semibold text-orayn-gold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-orayn-gold animate-pulse" aria-hidden="true" />
              Nigerian-Founded. International Standards.
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="mt-6 font-sora text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight"
          >
            We Build Digital{' '}
            <span className="text-orayn-gold">Presence</span>{' '}
            That Wins Clients
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="mt-6 font-inter text-lg md:text-xl text-white/65 max-w-2xl leading-relaxed"
          >
            Custom websites, mobile apps, web applications, and automation systems — built to production-grade standards. No templates. No shortcuts. Every project ships.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#work"
              className="btn-primary text-base py-3.5 px-8 group"
            >
              See Our Work
              <ArrowRight
                size={18}
                className="transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
            <a
              href="#contact"
              className="btn-secondary text-base py-3.5 px-8 border-white/30 text-white hover:bg-white/10 hover:border-white/60"
            >
              <Play size={16} aria-hidden="true" />
              Get a Free Demo
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={statsVariants}
            className="mt-16 pt-8 border-t border-white/10 grid grid-cols-3 gap-6 md:gap-12 max-w-xl"
          >
            {STATS.map((stat) => (
              <div key={stat.value}>
                <div className="font-sora text-2xl md:text-3xl font-bold text-orayn-gold">
                  {stat.value}
                </div>
                <div className="mt-1 font-inter text-xs text-white/50 leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        aria-hidden="true"
      >
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-orayn-gold/60" />
        <span className="font-inter text-xs text-white/30 uppercase tracking-widest">Scroll</span>
      </motion.div>
    </section>
  )
}
