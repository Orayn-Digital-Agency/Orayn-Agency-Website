import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // ── Production domain ──────────────────────────────────────
  // Defines the canonical URL used for metadata, sitemaps, and OG tags.
  // Keep this as orayn.studio in production.
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://orayn.studio',
  },

  // ── Image optimization ─────────────────────────────────────
  images: {
    // Allow Google Maps images pulled from Maps listings
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.googleapis.com',
      },
      {
        protocol: 'https',
        hostname: '**.googleusercontent.com',
      },
      // Vercel image optimization CDN (used in production)
      {
        protocol: 'https',
        hostname: '**.vercel.app',
      },
    ],
    // Optimize image formats
    formats: ['image/avif', 'image/webp'],
  },

  // ── Security headers ───────────────────────────────────────
  // Core headers are in vercel.json. These add CSP in Next.js middleware.
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
        ],
      },
    ]
  },

  // ── Build output ───────────────────────────────────────────
  // 'standalone' mode reduces cold start time on Vercel.
  output: 'standalone',

  // ── TypeScript ─────────────────────────────────────────────
  typescript: {
    // Hard fail on TypeScript errors during production build.
    // Never set to true to suppress — fix the errors instead.
    ignoreBuildErrors: false,
  },

  // ── ESLint ─────────────────────────────────────────────────
  eslint: {
    // Hard fail on ESLint errors during production build.
    ignoreDuringBuilds: false,
  },

  // ── Compression ────────────────────────────────────────────
  compress: true,

  // ── Power features ─────────────────────────────────────────
  experimental: {
    // Reduce bundle size by optimising package imports
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
}

export default nextConfig
