# Tate — Landing Page

Marketing website for **Tate**, a macOS menu bar app that displays real-time Hong Kong weather warnings from the HKO Open Data API.

Built with [Next.js](https://nextjs.org) and [shadcn/ui](https://ui.shadcn.com).

## Development

```bash
pnpm dev
```

Visit `http://localhost:3000`.

## Build

```bash
pnpm build
```

Static output in `.next/`.

## Project Structure

```
app/
├── page.tsx          # Landing page composition
├── layout.tsx        # Root layout with metadata
└── globals.css       # Dark theme + Tailwind config

components/
├── macos-menu-bar.tsx       # macOS menu bar simulation
├── tate-popup-preview.tsx   # Live app popup mockup
├── tate-icon.tsx            # App icon SVG
├── hero-section.tsx         # Hero with download CTAs
├── features-grid.tsx        # Bento grid of 6 features
├── open-source-section.tsx  # Open source / GitHub
├── footer-section.tsx       # HKO attribution footer
├── copy-button.tsx          # Clipboard copy button
└── theme-provider.tsx       # Dark mode provider

public/
└── icons/            # HKO warning type icons
```

## Tech Stack

- **Next.js 16** — App Router, static generation
- **shadcn/ui** — Component primitives
- **Tailwind CSS 4** — Styling
- **lucide-react** — Icons
