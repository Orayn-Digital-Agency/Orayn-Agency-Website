'use client'

import { motion } from 'framer-motion'
import { Search, Code2, CheckCircle } from 'lucide-react'

const STEPS = [
  {
    number: '01',
    icon:   Search,
    title:  'We Research Your Business',
    body:   'We find your business on Google Maps, study your services, location, and existing presence — or lack thereof. No form to fill out. No call needed from your end.',
  },
  {
    number: '02',
    icon:   Code2,
    title:  'We Build Your Demo For Free',
    body:   'We build a fully live, professional website for your business and host it at a real URL. You can share it, open it on your phone, and see exactly what your website will look like.',
  },
  {
    number: '03',
    icon:   CheckCircle,
    title:  'You Review and Decide',
    body:   'We send you the link and give you 24 hours to review it. No pressure. No upfront payment to see the demo. If you like it and want to proceed, we finalize everything from there.',
  },
] as const

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 bg-orayn-dark" aria-label="How It Works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55 }}
        >
          <span className="font-inter text-xs font-semibold text-orayn-gold uppercase tracking-widest">
            The Process
          </span>
          <h2 className="mt-3 font-sora text-3xl md:text-4xl font-bold text-white">
            You See the Product Before You Pay
          </h2>
          <p className="mt-4 font-inter text-base md:text-lg text-white/60 max-w-xl mx-auto leading-relaxed">
            We have rethought the agency model from the ground up. Our presell approach removes every barrier between you and a great website.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative">
          {/* Connecting line (desktop only) */}
          <div
            className="hidden md:block absolute top-10 left-[calc(16.67%+24px)] right-[calc(16.67%+24px)] h-px border-t border-dashed border-white/15"
            aria-hidden="true"
          />

          {STEPS.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: i * 0.14 }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Step circle */}
                <div className="relative z-10 w-20 h-20 rounded-full border-2 border-orayn-gold/30 bg-orayn-navy flex items-center justify-center flex-shrink-0">
                  <Icon size={28} className="text-orayn-gold" aria-hidden="true" />
                  <span
                    className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-orayn-gold flex items-center justify-center font-inter text-xs font-bold text-orayn-dark"
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                </div>

                {/* Content */}
                <h3 className="mt-6 font-sora text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-3 font-inter text-sm text-white/60 leading-relaxed max-w-xs">
                  {step.body}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="font-inter text-sm text-white/50 mb-5">
            Ready to see what we build for your business?
          </p>
          <a href="#contact" className="btn-primary text-base py-3.5 px-10">
            Request Your Free Demo
          </a>
        </motion.div>
      </div>
    </section>
  )
}
