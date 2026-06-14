import { Globe, Smartphone, Layers, Zap } from 'lucide-react'

const SERVICES = [
  {
    Icon: Globe,
    tier: 'Starter — Business',
    title: 'Website Design & Development',
    description:
      'Production-grade websites built with Next.js, TypeScript, and Tailwind CSS. Mobile-first, SEO-optimised, fast by default. No WordPress. No templates. No shortcuts.',
    features: [
      'Custom React / Next.js 15 codebase',
      'Mobile-first responsive layout',
      'On-page SEO and metadata',
      'Contact forms with email delivery',
      'Google Maps and WhatsApp integration',
      'Hosted on Vercel — 99.9% uptime',
    ],
    price: '₦200,000',
    priceSuffix: '— ₦500,000',
    tag: 'Most Popular',
  },
  {
    Icon: Smartphone,
    tier: 'Premium',
    title: 'Mobile App Development',
    description:
      'Cross-platform Android and iOS applications built with React Native and Expo. Submitted to Google Play and the App Store. One codebase. Two platforms.',
    features: [
      'React Native with Expo',
      'Android and iOS from one codebase',
      'Google Play and App Store submission',
      'Push notifications (Expo/FCM)',
      'Supabase backend with real-time sync',
      'Authentication and user profiles',
    ],
    price: '₦600,000',
    priceSuffix: '— ₦1,000,000',
    tag: null,
  },
  {
    Icon: Layers,
    tier: 'Platform',
    title: 'Web App & SaaS Development',
    description:
      'Full-stack web applications with dashboards, user portals, payment integration, and admin panels. Built for businesses that need software, not just a website.',
    features: [
      'Full-stack Next.js with App Router',
      'Supabase PostgreSQL with RLS policies',
      'Paystack payment integration',
      'Multi-role authentication system',
      'Admin and agent dashboards',
      'Realtime data with Supabase subscriptions',
    ],
    price: '₦1,500,000+',
    priceSuffix: 'quoted per project',
    tag: 'Enterprise',
  },
  {
    Icon: Zap,
    tier: 'Add-on / Standalone',
    title: 'n8n Automation & AI Agents',
    description:
      'Workflow automation that replaces repetitive manual tasks — lead pipelines, contract generation, CRM sync, AI-powered communication, and more. One-time setup fee.',
    features: [
      'n8n Cloud workflow architecture',
      'Telegram and WhatsApp bots',
      'Supabase database triggers',
      'AI integration (OpenAI / Claude)',
      'Google Sheets / Drive automation',
      'PDF generation and delivery',
    ],
    price: '₦150,000+',
    priceSuffix: 'per workflow',
    tag: null,
  },
] as const

export default function ServicesSection() {
  return (
    <section id="services" className="relative bg-orayn-darker py-28 lg:py-36">
      {/* Subtle top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Section header */}
        <div className="max-w-2xl mb-16 lg:mb-20">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-5 h-px bg-orayn-gold" aria-hidden="true" />
            <span className="section-eyebrow">What We Build</span>
          </div>
          <h2 className="font-sora text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
            Four Service Tiers.{' '}
            <span className="text-orayn-gold">One Standard.</span>
          </h2>
          <p className="font-inter text-base text-white/50 leading-relaxed">
            Every engagement uses production-grade tooling, clean code architecture,
            and real-world deployment. The tier changes. The standard does not.
          </p>
        </div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {SERVICES.map(({ Icon, tier, title, description, features, price, priceSuffix, tag }) => (
            <div
              key={title}
              className="relative group flex flex-col bg-white/[0.025] border border-white/[0.07] rounded-orayn-card p-8
                         hover:border-orayn-gold/30 hover:bg-white/[0.04]
                         transition-all duration-300"
            >
              {/* Tag */}
              {tag && (
                <span className="absolute top-6 right-6 tag text-[10px]">{tag}</span>
              )}

              {/* Icon + tier */}
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-11 h-11 rounded-sm bg-orayn-gold/10 border border-orayn-gold/20 flex items-center justify-center group-hover:bg-orayn-gold/15 transition-colors duration-300">
                  <Icon size={20} className="text-orayn-gold" aria-hidden="true" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-white/30 uppercase tracking-widest block mb-0.5">{tier}</span>
                  <h3 className="font-sora text-lg font-bold text-white leading-snug">{title}</h3>
                </div>
              </div>

              {/* Description */}
              <p className="font-inter text-sm text-white/50 leading-relaxed mb-7">{description}</p>

              {/* Feature list */}
              <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <span className="flex-shrink-0 mt-1 w-3.5 h-3.5 rounded-sm bg-orayn-gold/10 border border-orayn-gold/25 flex items-center justify-center">
                      <svg width="7" height="5" viewBox="0 0 7 5" fill="none" aria-hidden="true">
                        <path d="M1 2.5L2.8 4.3L6 1" stroke="#C49A28" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span className="font-inter text-xs text-white/55 leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>

              {/* Price footer */}
              <div className="flex items-end justify-between pt-6 border-t border-white/[0.07]">
                <div>
                  <span className="font-sora text-xl font-bold text-orayn-gold">{price}</span>
                  <span className="font-inter text-xs text-white/30 ml-2">{priceSuffix}</span>
                </div>
                <a href="#contact" className="inline-flex items-center gap-1.5 font-inter text-xs font-semibold text-white/50 hover:text-orayn-gold transition-colors duration-200">
                  Enquire
                  <svg width="12" height="10" viewBox="0 0 12 10" fill="none" aria-hidden="true">
                    <path d="M1 5h10M7 1l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="mt-10 font-inter text-xs text-white/25 text-center">
          All projects include hosting setup, source code handover, and a 30-day post-launch support window.
          Prices are indicative. Exact quotes are issued after a project brief.
        </p>
      </div>
    </section>
  )
}
