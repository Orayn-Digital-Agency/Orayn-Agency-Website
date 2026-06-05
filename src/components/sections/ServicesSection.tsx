'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Globe, Smartphone, LayoutDashboard, Zap, ArrowRight } from 'lucide-react'

const SERVICES = [
  {
    icon:        Globe,
    title:       'Website Design & Development',
    description:
      'Professional, mobile-first, SEO-ready websites built in React and Next.js. Every site is custom-coded from the ground up — no page builders, no generic templates.',
    stack:       ['React', 'Next.js', 'Tailwind CSS'],
  },
  {
    icon:        Smartphone,
    title:       'Mobile App Development',
    description:
      'Android and iOS applications published to Google Play and the App Store. Built with React Native or Flutter depending on project requirements.',
    stack:       ['React Native', 'Flutter', 'Google Play', 'App Store'],
  },
  {
    icon:        LayoutDashboard,
    title:       'Web App & SaaS Engineering',
    description:
      'Full-stack web applications with authentication, dashboards, real-time features, and databases. Scalable architecture built for production from day one.',
    stack:       ['Next.js', 'Supabase', 'Node.js', 'PostgreSQL'],
  },
  {
    icon:        Zap,
    title:       'Automation & AI Agents',
    description:
      'Custom n8n workflows and AI agent systems that replace repetitive business tasks — from lead generation to customer communication. One-time build, ongoing value.',
    stack:       ['n8n', 'GPT-4o', 'Claude API', 'Webhooks'],
  },
] as const

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
}

const cardVariants = {
  hidden:   { opacity: 0, y: 32 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export default function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="services" className="py-24 bg-white" aria-label="Services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55 }}
        >
          <span className="font-inter text-xs font-semibold text-orayn-gold uppercase tracking-widest">
            What We Build
          </span>
          <h2 className="mt-3 section-heading">
            Four Service Lines. All Custom-Built.
          </h2>
          <p className="mt-4 section-subheading">
            Every deliverable is written from scratch to your exact requirements. We do not use templates, drag-and-drop builders, or off-the-shelf components.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          ref={ref}
          className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {SERVICES.map((service) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className="card group hover:border-orayn-gold/40 hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                {/* Icon */}
                <div className="w-11 h-11 rounded-orayn bg-orayn-navy/8 flex items-center justify-center flex-shrink-0 group-hover:bg-orayn-navy transition-colors duration-300">
                  <Icon
                    size={22}
                    className="text-orayn-navy group-hover:text-orayn-gold transition-colors duration-300"
                    aria-hidden="true"
                  />
                </div>

                {/* Content */}
                <h3 className="mt-5 font-sora text-base font-semibold text-orayn-navy leading-snug">
                  {service.title}
                </h3>
                <p className="mt-2.5 font-inter text-sm text-orayn-gray leading-relaxed flex-1">
                  {service.description}
                </p>

                {/* Stack tags */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {service.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-orayn-light font-inter text-xs font-medium text-orayn-gray"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Learn more */}
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-1.5 font-inter text-sm font-semibold text-orayn-navy hover:text-orayn-gold transition-colors duration-200 group/link"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn More
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-200 group-hover/link:translate-x-1"
                    aria-hidden="true"
                  />
                </a>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom note */}
        <motion.p
          className="mt-10 font-inter text-sm text-orayn-gray text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Orayn does not offer SEO management, social media management, Google Ads, or content marketing.
        </motion.p>
      </div>
    </section>
  )
}
