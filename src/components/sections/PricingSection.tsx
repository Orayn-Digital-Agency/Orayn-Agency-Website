import { Check } from 'lucide-react'

const TIERS = [
  {
    name: 'Starter',
    priceRange: '₦200,000 – ₦300,000',
    tagline: 'For local businesses getting online for the first time.',
    features: [
      '5-page custom website',
      'Mobile-first responsive design',
      'Contact form with email delivery',
      'WhatsApp chat integration',
      'Google Maps embed',
      'Basic on-page SEO',
      'Vercel hosting setup',
      '30-day post-launch support',
    ],
    highlight: false,
    cta: 'Enquire — Starter',
  },
  {
    name: 'Business',
    priceRange: '₦350,000 – ₦500,000',
    tagline: 'For established SMEs that need a serious digital presence.',
    features: [
      'Up to 10-page website',
      'Gallery / portfolio section',
      'Booking or inquiry form',
      'Instagram / social feed integration',
      'Advanced SEO and Open Graph',
      'Google Analytics integration',
      'Custom animations and transitions',
      '30-day post-launch support',
    ],
    highlight: true,
    cta: 'Enquire — Business',
  },
  {
    name: 'Premium',
    priceRange: '₦600,000 – ₦1,000,000',
    tagline: 'For businesses that need a full platform with custom logic.',
    features: [
      'Unlimited pages',
      'Blog with CMS or markdown',
      'Booking or reservation system',
      'Admin management panel',
      'Multiple user roles',
      'Payment integration (Paystack)',
      'Custom API integrations',
      '60-day post-launch support',
    ],
    highlight: false,
    cta: 'Enquire — Premium',
  },
  {
    name: 'Platform',
    priceRange: '₦1,500,000+',
    tagline: 'Full SaaS, mobile app, or automation — quoted per project.',
    features: [
      'Full-stack SaaS application',
      'Mobile app (iOS + Android)',
      'Custom database architecture',
      'Role-based access control',
      'Paystack or Flutterwave integration',
      'Admin and user dashboards',
      'n8n automation pipelines',
      'Dedicated project manager',
    ],
    highlight: false,
    cta: 'Request a Quote',
  },
] as const

const PAYMENT_NOTES = [
  { label: '60% upfront', desc: 'Paid before build begins. Triggers the project start.' },
  { label: '40% on delivery', desc: 'Paid after you review and approve the final result.' },
  { label: '7 business days', desc: 'Standard delivery window from payment confirmation.' },
  { label: 'Source code included', desc: 'Full repository access. No lock-in. It is yours.' },
] as const

export default function PricingSection() {
  return (
    <section id="pricing" className="relative bg-orayn-darker py-28 lg:py-36">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-5 h-px bg-orayn-gold" aria-hidden="true" />
            <span className="section-eyebrow">Investment</span>
          </div>
          <h2 className="font-sora text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
            Transparent Pricing.{' '}
            <span className="text-orayn-gold">No Hidden Costs.</span>
          </h2>
          <p className="font-inter text-base text-white/50 leading-relaxed">
            Every tier is a fixed price range. You know what you are paying before
            work begins. No scope creep surprises. No hourly billing.
          </p>
        </div>

        {/* Pricing grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-14">
          {TIERS.map(({ name, priceRange, tagline, features, highlight, cta }) => (
            <div
              key={name}
              className={`relative flex flex-col rounded-orayn-card p-7 border transition-all duration-300
                ${highlight
                  ? 'bg-orayn-gold/[0.07] border-orayn-gold/40 shadow-gold-glow'
                  : 'bg-white/[0.025] border-white/[0.07] hover:border-white/[0.14]'
                }`}
            >
              {/* Popular badge */}
              {highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-block bg-orayn-gold text-orayn-dark font-inter text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-sm">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Tier name */}
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-[10px] text-orayn-gold/60 uppercase tracking-widest border-b border-orayn-gold/20">
                  {name}
                </span>
              </div>

              {/* Price */}
              <div className="mb-4">
                <p className="font-sora text-lg font-bold text-white leading-tight">{priceRange}</p>
                <p className="font-inter text-xs text-white/35 mt-1 leading-relaxed">{tagline}</p>
              </div>

              {/* Divider */}
              <div className={`h-px mb-6 ${highlight ? 'bg-orayn-gold/20' : 'bg-white/[0.07]'}`} aria-hidden="true" />

              {/* Features */}
              <ul className="flex flex-col gap-2.5 flex-1 mb-7">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check
                      size={13}
                      className={`flex-shrink-0 mt-0.5 ${highlight ? 'text-orayn-gold' : 'text-orayn-gold/60'}`}
                      aria-hidden="true"
                    />
                    <span className="font-inter text-xs text-white/55 leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className={`w-full text-center block py-3 px-4 rounded-sm font-inter text-xs font-bold uppercase tracking-wide transition-all duration-200 ${
                  highlight
                    ? 'bg-orayn-gold text-orayn-dark hover:bg-yellow-400'
                    : 'bg-white/[0.06] text-white/70 border border-white/10 hover:bg-white/[0.1] hover:text-white'
                }`}
              >
                {cta}
              </a>
            </div>
          ))}
        </div>

        {/* Payment terms strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {PAYMENT_NOTES.map(({ label, desc }) => (
            <div key={label} className="flex flex-col gap-1.5 p-5 bg-white/[0.02] border border-white/[0.06] rounded-orayn">
              <span className="font-sora text-sm font-bold text-orayn-gold">{label}</span>
              <span className="font-inter text-xs text-white/40 leading-relaxed">{desc}</span>
            </div>
          ))}
        </div>

        {/* Custom project note */}
        <p className="mt-8 font-inter text-xs text-white/25 text-center">
          Not sure which tier fits? Describe your project in the contact form and we will recommend the right scope.
          Custom quotes are issued free of charge within 24 hours.
        </p>
      </div>
    </section>
  )
}
