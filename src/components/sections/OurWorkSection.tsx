'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const PROJECTS = [
  {
    name:        'VooltGroup',
    category:    'Web Application',
    description:
      'A full-stack business operations platform for an energy solutions company — featuring client portal, project tracking, and an admin dashboard managing multiple service lines.',
    tech:        ['Next.js', 'Supabase', 'Tailwind CSS'],
    color:       '#1B2A4A',
  },
  {
    name:        'EyeBalance',
    category:    'Mobile Application',
    description:
      'A cross-platform vision wellness app published on Google Play and the App Store, helping users track screen time, schedule eye exercises, and monitor eye health metrics.',
    tech:        ['React Native', 'Expo', 'Firebase'],
    color:       '#0F4C81',
  },
  {
    name:        'CoopAxis',
    category:    'SaaS Platform',
    description:
      'A cooperative management SaaS platform enabling member registration, contribution tracking, loan processing, and automated statement generation for credit unions.',
    tech:        ['Next.js', 'Node.js', 'PostgreSQL', 'Paystack'],
    color:       '#1A6B3C',
  },
  {
    name:        'LeadForge',
    category:    'Automation System',
    description:
      'An n8n-powered lead generation and qualification engine for a B2B sales team — scraping, scoring, enriching, and routing 10,000+ leads per month with zero manual input.',
    tech:        ['n8n', 'Apify', 'Supabase', 'Google Sheets'],
    color:       '#7A5200',
  },
  {
    name:        'Campus Connect',
    category:    'University Portal',
    description:
      'A student-facing web application for a private university — handling course registration, result viewing, fee payment via Paystack, and departmental announcements.',
    tech:        ['Next.js', 'Supabase', 'Paystack', 'Tailwind CSS'],
    color:       '#6B1A1A',
  },
] as const

export default function OurWorkSection() {
  return (
    <section id="work" className="py-24 bg-white" aria-label="Our Work">
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
            Selected Projects
          </span>
          <h2 className="mt-3 section-heading">
            Production Apps. Real Clients. Shipped.
          </h2>
          <p className="mt-4 section-subheading">
            13+ commercially shipped applications across mobile, web, SaaS, and automation. Every project below is live in production.
          </p>
        </motion.div>

        {/* Project grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.09 }}
              className="card group hover:border-orayn-gold/30 hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              {/* Color bar */}
              <div
                className="h-1.5 rounded-full mb-5 w-12 transition-all duration-300 group-hover:w-20"
                style={{ backgroundColor: project.color }}
                aria-hidden="true"
              />

              {/* Category badge */}
              <span className="font-inter text-xs font-semibold text-orayn-gold uppercase tracking-widest">
                {project.category}
              </span>

              {/* Name */}
              <h3 className="mt-2 font-sora text-xl font-bold text-orayn-navy">
                {project.name}
              </h3>

              {/* Description */}
              <p className="mt-3 font-inter text-sm text-orayn-gray leading-relaxed flex-1">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="mt-5 flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded bg-orayn-light font-inter text-xs font-medium text-orayn-gray"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* View link */}
              <div className="mt-5 pt-4 border-t border-orayn-mid">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 font-inter text-sm font-semibold text-orayn-navy hover:text-orayn-gold transition-colors duration-200 group/link"
                  aria-label={`Enquire about ${project.name}`}
                >
                  Enquire About This Project
                  <ExternalLink
                    size={13}
                    className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
