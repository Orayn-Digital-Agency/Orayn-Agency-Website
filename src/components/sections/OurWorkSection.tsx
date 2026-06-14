import { ExternalLink, Code2, Globe, Smartphone, Layers, Zap } from 'lucide-react'

const PROJECTS = [
  {
    category: 'SaaS Platform',
    Icon: Layers,
    title: 'MarketZone CRM',
    subtitle: 'Internal Sales Operations Platform',
    description:
      'A full-stack CRM built for a sales-agent network. Features real-time lead management, role-based dashboards (admin and agent views), commission tracking, Paystack payment integration, and automated lead release logic.',
    stack: ['Next.js 15', 'Supabase', 'TypeScript', 'Paystack', 'Tailwind CSS'],
    metrics: [
      { value: '7 tables',    label: 'Database schema'     },
      { value: 'Real-time',   label: 'Lead management'     },
      { value: 'Multi-role',  label: 'Authentication'      },
    ],
    url: 'https://orayn-market-zone.vercel.app',
    color: '#1B2A4A',
    accentColor: '#C49A28',
  },
  {
    category: 'n8n Automation',
    Icon: Zap,
    title: 'Orayn Lead Engine',
    subtitle: 'Automated Lead Generation System',
    description:
      'An n8n workflow that scrapes Google Maps daily via Apify, scores leads 0–10, deduplicates against Supabase, checks website quality, and appends new leads to a live Google Sheet — fully autonomous.',
    stack: ['n8n Cloud', 'Apify', 'Supabase', 'Google Sheets', 'OpenAI'],
    metrics: [
      { value: 'Daily',      label: 'Automated runs'     },
      { value: '8 cities',   label: 'Nigerian coverage'  },
      { value: 'Zero',       label: 'Manual effort'      },
    ],
    url: null,
    color: '#0D1F1A',
    accentColor: '#C49A28',
  },
  {
    category: 'n8n Automation',
    Icon: Zap,
    title: 'Contract Generator Bot',
    subtitle: 'Telegram PDF Automation',
    description:
      'A Telegram bot that collects six data points via a guided conversation, clones a Google Docs template, fills placeholders, converts to PDF, and delivers a signed contract — all in under 30 seconds.',
    stack: ['n8n Cloud', 'Telegram Bot API', 'Google Docs', 'Google Drive'],
    metrics: [
      { value: '< 30s',      label: 'Contract delivery'  },
      { value: '6 inputs',   label: 'Guided flow'        },
      { value: 'Auto PDF',   label: 'Generation'         },
    ],
    url: null,
    color: '#1A1410',
    accentColor: '#C49A28',
  },
  {
    category: 'Website',
    Icon: Code2,
    title: 'Orayn Agency Website',
    subtitle: 'This Site',
    description:
      'The Orayn public-facing website. Built with Next.js 15, React 19, Sora and Inter type system, Framer Motion, and Supabase for the contact form — deployed to Vercel with full analytics.',
    stack: ['Next.js 15', 'React 19', 'TypeScript', 'Supabase', 'Vercel'],
    metrics: [
      { value: '0ms',        label: 'JavaScript-free hero' },
      { value: 'A+',         label: 'Lighthouse score'     },
      { value: 'Live',       label: 'In production'        },
    ],
    url: 'https://orayn-agency-website.vercel.app',
    color: '#0F1B2D',
    accentColor: '#C49A28',
  },
  {
    category: 'Demo Template',
    Icon: Globe,
    title: 'Business Demo Template',
    subtitle: 'Presell Website System',
    description:
      'A production demo template for restaurants, salons, clinics, and hotels — with gallery, booking form, WhatsApp integration, Google Maps, and testimonials. Deployed per lead in under 60 seconds.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    metrics: [
      { value: '< 60s',      label: 'Deploy per lead'    },
      { value: '10 pages',   label: 'Business template'  },
      { value: '4 tiers',    label: 'Template variants'  },
    ],
    url: null,
    color: '#1A0F0D',
    accentColor: '#C49A28',
  },
] as const


export default function OurWorkSection() {
  return (
    <section id="work" className="relative bg-orayn-dark py-28 lg:py-36">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-5 h-px bg-orayn-gold" aria-hidden="true" />
              <span className="section-eyebrow">Selected Work</span>
            </div>
            <h2 className="font-sora text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Real Applications.{' '}
              <span className="text-orayn-gold">In Production.</span>
            </h2>
          </div>
          <p className="font-inter text-sm text-white/40 max-w-xs leading-relaxed">
            Every project listed here is live and operational.
            No concept mockups. No speculative work.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {PROJECTS.map(({ category, Icon, title, subtitle, description, stack, metrics, url }) => (
            <div
              key={title}
              className="group flex flex-col bg-white/[0.025] border border-white/[0.07] rounded-orayn-card overflow-hidden
                         hover:border-orayn-gold/25 transition-all duration-300"
            >
              {/* Card top accent bar */}
              <div className="h-px w-full bg-gradient-to-r from-orayn-gold/60 via-orayn-gold/20 to-transparent" aria-hidden="true" />

              <div className="p-7 flex flex-col flex-1">
                {/* Category + icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-sm bg-orayn-gold/10 border border-orayn-gold/20 flex items-center justify-center">
                      <Icon size={14} className="text-orayn-gold" aria-hidden="true" />
                    </div>
                    <span className="font-mono text-[10px] text-white/30 uppercase tracking-widest">{category}</span>
                  </div>
                  {url && (
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-7 h-7 rounded-sm border border-white/10 flex items-center justify-center text-white/25 hover:text-orayn-gold hover:border-orayn-gold/40 transition-all duration-200"
                      aria-label={`Open ${title}`}
                    >
                      <ExternalLink size={12} aria-hidden="true" />
                    </a>
                  )}
                  {!url && (
                    <span className="font-mono text-[9px] text-white/20 border border-white/10 rounded-sm px-1.5 py-0.5">Internal</span>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-sora text-base font-bold text-white mb-0.5 leading-snug">{title}</h3>
                <p className="font-inter text-xs text-orayn-gold/70 mb-4">{subtitle}</p>

                {/* Description */}
                <p className="font-inter text-xs text-white/45 leading-relaxed mb-6 flex-1">{description}</p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 mb-6">
                  {metrics.map(({ value, label }) => (
                    <div key={label} className="flex flex-col items-center gap-0.5 bg-white/[0.03] border border-white/[0.05] rounded-sm py-2.5 px-1.5">
                      <span className="font-sora text-sm font-bold text-orayn-gold leading-none">{value}</span>
                      <span className="font-inter text-[9px] text-white/30 text-center leading-tight">{label}</span>
                    </div>
                  ))}
                </div>

                {/* Stack */}
                <div className="flex flex-wrap gap-1.5 pt-5 border-t border-white/[0.06]">
                  {stack.map((tech) => (
                    <span key={tech} className="font-mono text-[9px] text-white/30 bg-white/[0.04] border border-white/[0.07] rounded-sm px-2 py-1">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 p-8 bg-orayn-gold/[0.05] border border-orayn-gold/15 rounded-orayn-card">
          <div>
            <p className="font-sora text-lg font-bold text-white mb-1">Have a project in mind?</p>
            <p className="font-inter text-sm text-white/40">Tell us what you need. We will send a quote within 24 hours.</p>
          </div>
          <a href="#contact" className="btn-primary flex-shrink-0">
            Start a Project
          </a>
        </div>
      </div>
    </section>
  )
}
