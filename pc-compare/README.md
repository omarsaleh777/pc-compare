# PC Compare

A full-stack web application for browsing, comparing, and purchasing PC components. Products link to Amazon via affiliate URLs.

## Tech Stack

- **Framework**: Next.js 16 (App Router, TypeScript)
- **Styling**: Tailwind CSS v3
- **Database**: SQLite (dev) → PostgreSQL (prod)
- **ORM**: Prisma v7 (with better-sqlite3 adapter)
- **Deployment**: Vercel

## Quick Start

```bash
# Install dependencies
npm install

# Set up environment
cp .env.example .env
# Edit .env with your values

# Set up database
npx prisma generate
npx prisma migrate dev --name init

# Seed products (80 products across 8 categories)
npx tsx scripts/seed.ts

# Start dev server
npm run dev
# → http://localhost:3000
```

## Categories

| Category | Slug | Products |
|---|---|---|
| RAM | `ram` | 10 |
| CPU | `cpu` | 10 |
| GPU | `gpu` | 10 |
| Motherboard | `motherboard` | 10 |
| Storage | `storage` | 10 |
| PC Case | `case` | 10 |
| Cooling | `cooling` | 10 |
| Power Supply | `psu` | 10 |

## Features

- **Browse** products by category with sort and price filters
- **Compare** up to 4 products side-by-side
- **Best Value** and **Cheapest** badges on qualifying products
- **Affiliate links** to Amazon with configurable tag
- **Search** across all products

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `DATABASE_URL` | Yes | SQLite path or PostgreSQL URL |
| `AFFILIATE_TAG` | No | Amazon affiliate tag (default: `yourstore-20`) |

## API Routes

- `GET /api/products?category=gpu&sort=best_value&minPrice=100&maxPrice=800&search=rtx`
- `GET /api/products/[id]`
- `GET /api/compare?ids=id1,id2,id3`

## Deployment

1. Switch `DATABASE_URL` to PostgreSQL (Railway or Supabase)
2. Run `npx prisma migrate deploy`
3. Run seed script against production DB
4. Set env vars in Vercel dashboard
5. Deploy: `vercel --prod`
