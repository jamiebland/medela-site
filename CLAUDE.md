# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (Next.js on :3000 + Decap CMS proxy, run concurrently)
npm run build    # Production build
npm run lint     # ESLint
```

No test suite is configured.

## Environment Variables

Required in `.env.local`:

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon key |
| `ADMIN_PASSWORD` | Blog admin panel password (plain text, hashed server-side) |
| `MAILERLITE_API_KEY` | Newsletter signup integration |

## Architecture

**Next.js 16 App Router** site using TypeScript and Tailwind CSS v4.

### Key Architectural Patterns

**Dual blog data source** (`src/lib/blog.ts`): Blog posts are fetched from Supabase when env vars are present (`hasSupabase` flag in `src/lib/supabase.ts`), falling back to markdown files in `content/blog/`. The `getAllPosts` and `getPostBySlug` functions are React `cache()`-wrapped. Supabase column names use snake_case (`read_time`, `featured_image`) which are mapped to camelCase in the `BlogPost` interface.

**Admin authentication** (`src/middleware.ts`): Cookie-based auth (`admin_token` = SHA-256 hash of `ADMIN_PASSWORD`) protects `/admin/*` routes (redirect to login) and `/api/blog/*` routes (401). The `/api/admin/auth` endpoint handles login/logout.

**Site-wide constants** (`src/lib/config.ts`): Centralises `SITE_URL`, `SITE_EMAIL`, `CALENDLY_URL`, and `LOGO_URL`/`ASSET_BASE` (images hosted on `assets.ycodeapp.com`). Import from here rather than hardcoding.

### Routes

| Path | File |
|---|---|
| `/` | `src/app/page.tsx` |
| `/about` | `src/app/about/page.tsx` |
| `/blog` | `src/app/blog/page.tsx` |
| `/blog/[slug]` | `src/app/blog/[slug]/page.tsx` |
| `/contact` | `src/app/contact/page.tsx` |
| `/aldeia` | `src/app/aldeia/page.tsx` |
| `/learning-resources` | `src/app/learning-resources/page.tsx` |
| `/admin` | `src/app/admin/page.tsx` (post list) |
| `/admin/login` | `src/app/admin/login/page.tsx` |
| `/admin/new` | `src/app/admin/new/page.tsx` |
| `/admin/edit/[slug]` | `src/app/admin/edit/[slug]/page.tsx` |

### Shared Components

- `Nav`, `Footer` — included in root layout for all pages
- `CtaBand` — call-to-action banner reused across pages
- `Newsletter` — MailerLite signup form (`/api/newsletter`)
- `RevealOnScroll` — scroll animation wrapper
- `FaqAccordion` — expandable FAQ component

### Blog Admin

The admin panel (`/admin`) is a custom-built CMS backed by Supabase. It uses Tiptap as the rich text editor (`src/app/admin/RichEditor.tsx`) and supports converting HTML to Markdown via Turndown for storage.

### Deployment

Hosted on Vercel. Pushing to `main` triggers automatic deployment. The `next.config.ts` whitelists `assets.ycodeapp.com` as an external image hostname.
