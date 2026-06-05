'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const TIERS = [
  {
    name:        'Starter',
    price:       '200,000 – 300,000',
    currency:    'NGN',
    description: 'Professional web presence for independent tradespeople and small shops.',
    inclusions: [
      '5-page custom website',
      'Mobile-first responsive design',
      'Contact form with WhatsApp button',
      'Basic on-page SEO setup',
      'Google Maps embed',
      'Vercel deployment included',
    ],
    bestFor:     'Plumbers, artisans, electricians, small shops',
    featured:    false,
    cta:         'Get Started',
  },
  {
    name:        'Business',
    price:       '350,000 – 500,000',
    currency:    'NGN',
    description: 'A complete digital presence for established businesses with real online needs.',
    inclusions: [
      'Up to 10 pages',
      'Photo gallery & media showcase',
      'Booking or inquiry form',
      'WhatsApp chat integration',
      'Google Maps embed',
      'Mobile-first responsive design',
      'Basic on-page SEO setup',
    ],
    bestFor:     'Restaurants, salons, hotels, clinics',
    featured:    true,
    cta:         'Get Started',
  },
  {
    name:        'Premium',
    price:       '600,000 – 1,000,000',
    currency:    'NGN',
    description: 'Advanced functionality for multi-branch businesses and complex operations.',
    inclusions: [
      'Blog or news section',
      'Product or service listings',
      'Booking or reservation system',
      'Admin inquiry panel',
      'Custom third-party integrations',
      'Everything in Business tier',
    ],
    bestFor:     'Real estate agencies, schools, multi-branch businesses',
    featured:    false,
    cta:         'Get Started',
  },
  {
    name:        'Platform',
    price:       '1,500,000+',
    currency:    'NGN',
    description: 'Full-scale digital systems — portals, dashboards, payment flows, and databases.',
    inclusions: [
      'Full backend architecture',
      'Database design & setup',
      'User authentication & portals',
      'Payment gateway integration',
      'Custom admin dashboards',
      'Milestone-based delivery',
      'Scoped and quoted per project',
    ],
    bestFor:     'Universities, restaurant platforms, delivery systems, fintech',
    featured:    false,
    cta:         'Request a Quote',
  },
] as const

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-orayn-light" aria-label="Pricing">
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
            Transparent Pricing
          </span>
          <h2 className="mt-3 section-heading">
            No Hidden Fees. No Surprises.
          </h2>
          <p className="mt-4 section-subheading mx-auto">
            All prices are in Nigerian Naira. You pay 60% upfront to begin and 40% on delivery. You review the demo for free before committing to anything.
          </p>
        </motion.div>

        {/* Tier cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {TIERS.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.09 }}
              className={`relative flex flex-col rounded-orayn-card p-6 shadow-orayn-card transition-shadow duration-300 hover:shadow-lg ${
                tier.featured
                  ? 'bg-orayn-navy border-2 border-orayn-gold'
                  : 'bg-white border border-orayn-mid'
              }`}
            >
              {/* Most Popular badge */}
              {tier.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 bg-orayn-gold rounded-full font-inter text-xs font-bold text-orayn-dark uppercase tracking-widest whitespace-nowrap">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Tier name */}
              <div className={`font-inter text-xs font-bold uppercase tracking-widest ${tier.featured ? 'text-orayn-gold' : 'text-orayn-gold'}`}>
                {tier.name}
              </div>

              {/* Price */}
              <div className="mt-2">
                <span className={`font-inter text-xs font-semibold ${tier.featured ? 'text-white/60' : 'text-orayn-gray'}`}>
                  {tier.currency}&nbsp;
                </span>
                <span className={`font-sora text-2xl font-bold ${tier.featured ? 'text-white' : 'text-orayn-navy'}`}>
                  {tier.price}
                </span>
              </div>

              {/* Description */}
              <p className={`mt-3 font-inter text-sm leading-relaxed ${tier.featured ? 'text-white/70' : 'text-orayn-gray'}`}>
                {tier.description}
              </p>

              {/* Divider */}
              <div className={`my-5 h-px ${tier.featured ? 'bg-white/10' : 'bg-orayn-mid'}`} />

              {/* Inclusions */}
              <ul className="flex flex-col gap-2.5 flex-1">
                {tier.inclusions.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check
                      size={14}
                      className={`mt-0.5 flex-shrink-0 ${tier.featured ? 'text-orayn-gold' : 'text-orayn-green'}`}
                      aria-hidden="true"
                    />
                    <span className={`font-inter text-sm ${tier.featured ? 'text-white/80' : 'text-orayn-text'}`}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Best for */}
              <div className={`mt-5 pt-4 border-t ${tier.featured ? 'border-white/10' : 'border-orayn-mid'}`}>
                <span className={`font-inter text-xs ${tier.featured ? 'text-white/40' : 'text-orayn-gray'}`}>
                  Best for:&nbsp;
                </span>
                <span className={`font-inter text-xs font-semibold ${tier.featured ? 'text-white/70' : 'text-orayn-navy'}`}>
                  {tier.bestFor}
                </span>
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className={`mt-5 block text-center py-3 px-6 rounded-orayn font-inter text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  tier.featured
                    ? 'bg-orayn-gold text-orayn-dark hover:bg-yellow-400 focus:ring-orayn-gold'
                    : 'bg-orayn-navy text-white hover:bg-orayn-dark focus:ring-orayn-navy'
                }`}
              >
                {tier.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Payment note */}
        <motion.p
          className="mt-10 text-center font-inter text-sm text-orayn-gray"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          All projects follow a 60% upfront / 40% on delivery payment model. Annual maintenance plans available at 20–25% of your project price per year.
        </motion.p>
      </div>
    </section>
  )
}
