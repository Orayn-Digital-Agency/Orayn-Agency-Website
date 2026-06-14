const STEPS = [
  {
    number: '01',
    title: 'You Submit a Brief',
    description:
      'Fill in the contact form or email us directly. Tell us your business type, what you need, and your budget range. No technical knowledge required — describe it in plain language.',
    note: 'We respond within 24 hours on business days.',
  },
  {
    number: '02',
    title: 'We Send a Quote',
    description:
      'Based on your brief, we send a fixed-price quote with a scope summary, timeline, and payment schedule. No hourly rates. No ambiguity. You know the total cost before committing.',
    note: 'Quotes are issued free of charge.',
  },
  {
    number: '03',
    title: 'You Pay 60% Upfront',
    description:
      'Once you approve the quote, a 60% deposit via Paystack activates the project. Build begins within one business day of payment confirmation.',
    note: 'Secure card, bank transfer, or USSD.',
  },
  {
    number: '04',
    title: 'We Build and Keep You Updated',
    description:
      'You receive a staging link at the midpoint. Review, give feedback, and we refine. All communication is through WhatsApp or email — whichever you prefer.',
    note: 'Standard build window: 7 business days.',
  },
  {
    number: '05',
    title: 'You Review and Approve',
    description:
      'We present the final build for your approval. You test everything on your phone and desktop. Request any final adjustments before sign-off.',
    note: 'Two rounds of revision are included.',
  },
  {
    number: '06',
    title: 'Launch and Handover',
    description:
      'You pay the remaining 40%, we point your domain, push to production, and hand over the full source code repository. Your site is live. You own everything.',
    note: '30-day post-launch support included.',
  },
] as const

const WHY_US = [
  {
    title: 'No Templates',
    description: 'Every project is hand-coded from scratch. Your website looks like your business, not a theme marketplace.',
  },
  {
    title: 'No Lock-In',
    description: 'You receive the full source code. Host anywhere, modify anytime. You are not paying us a monthly fee to keep your site alive.',
  },
  {
    title: 'Production-Grade Stack',
    description: 'Next.js 15, React 19, TypeScript, Supabase, Vercel. The same stack used by companies that serve millions of users.',
  },
  {
    title: 'Nigerian Market Fluency',
    description: 'We know Paystack, NGN currency handling, Lagos infrastructure, and what Nigerian business owners actually need. No translation required.',
  },
  {
    title: 'Fixed Price, Fixed Timeline',
    description: 'We quote before we start. We deliver within the agreed window. If we miss the deadline for reasons on our side, we extend support at no charge.',
  },
  {
    title: 'One Point of Contact',
    description: 'You speak directly to the people building your product. No account managers. No offshore handoffs. Direct line from brief to launch.',
  },
] as const

export default function HowItWorksSection() {
  return (
    <section id="process" className="relative bg-orayn-dark py-28 lg:py-36">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="max-w-2xl mb-16 lg:mb-20">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-5 h-px bg-orayn-gold" aria-hidden="true" />
            <span className="section-eyebrow">How It Works</span>
          </div>
          <h2 className="font-sora text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
            Brief to Launch{' '}
            <span className="text-orayn-gold">in Six Steps.</span>
          </h2>
          <p className="font-inter text-base text-white/50 leading-relaxed">
            A clear, predictable process with no hidden steps and no surprises.
            You know exactly where your project is at every moment.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical connector line — desktop only */}
          <div
            className="absolute left-[27px] top-8 bottom-8 w-px bg-gradient-to-b from-orayn-gold/40 via-orayn-gold/15 to-transparent hidden lg:block"
            aria-hidden="true"
          />

          <ol className="flex flex-col gap-0" role="list">
            {STEPS.map(({ number, title, description, note }, i) => (
              <li
                key={number}
                className="relative flex flex-col lg:flex-row gap-6 lg:gap-10 pb-10 lg:pb-12"
              >
                {/* Step number circle */}
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-14 h-14 rounded-sm bg-orayn-darker border border-orayn-gold/30 flex flex-col items-center justify-center gap-0">
                    <span className="font-mono text-[10px] text-orayn-gold/50 leading-none">STEP</span>
                    <span className="font-sora text-lg font-bold text-orayn-gold leading-none">{number}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-1 pb-0">
                  <h3 className="font-sora text-lg font-bold text-white mb-2.5 leading-snug">{title}</h3>
                  <p className="font-inter text-sm text-white/50 leading-relaxed mb-3 max-w-xl">{description}</p>
                  <div className="inline-flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-orayn-gold/60" aria-hidden="true" />
                    <span className="font-inter text-xs text-orayn-gold/70 italic">{note}</span>
                  </div>
                </div>

                {/* Step index for screen readers */}
                <span className="sr-only">Step {i + 1} of {STEPS.length}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Why us */}
        <div className="mt-16 pt-16 border-t border-white/[0.07]">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-5 h-px bg-orayn-gold" aria-hidden="true" />
            <span className="section-eyebrow">Why Orayn</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_US.map(({ title, description }) => (
              <div
                key={title}
                className="flex flex-col gap-3 p-6 bg-white/[0.02] border border-white/[0.06] rounded-orayn hover:border-orayn-gold/20 transition-colors duration-300"
              >
                {/* Gold line accent */}
                <div className="w-8 h-px bg-orayn-gold/60" aria-hidden="true" />
                <h4 className="font-sora text-base font-bold text-white leading-snug">{title}</h4>
                <p className="font-inter text-sm text-white/45 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
