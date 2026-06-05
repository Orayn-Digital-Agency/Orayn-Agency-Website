# Orayn Agency Website

The public-facing marketing site for Orayn Digital Agency. Built with Next.js 14, TypeScript, Tailwind CSS, Framer Motion, and Supabase.

## Stack

- Next.js 14 (App Router)
- TypeScript (strict mode)
- Tailwind CSS (custom Orayn brand palette)
- Framer Motion (scroll animations)
- React Hook Form + Zod (contact form validation)
- Supabase (contact inquiry storage via Server Action)
- next/font (Sora + Inter)

## Sections

1. Hero — full-screen dark background, staggered Framer Motion entrance
2. Services — four service cards with Lucide icons
3. Pricing — four-tier pricing table (Starter / Business / Premium / Platform)
4. Our Work — five portfolio project cards
5. How It Works — three-step process (presell model)
6. Contact — validated form with Supabase Server Action submission

## Setup

See `/docs/SETUP.md` for full instructions.

```bash
cp .env.example .env.local
# Fill in Supabase credentials
pnpm install
pnpm dev
```

## Deploy

```bash
vercel --prod
```

Set all environment variables in the Vercel dashboard after first deploy.
