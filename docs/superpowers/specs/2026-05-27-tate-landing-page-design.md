# Tate Landing Page Design

**Date:** 2026-05-27
**Status:** Approved
**Project:** hkowarnsum-marketing

## Overview

Single-page marketing landing page for **Tate** (formerly HK WarnSum), a macOS menu bar app that displays real-time Hong Kong weather warnings from the HKO Open Data API. The page simulates the macOS experience at the top, then transitions into a dark-themed landing page with features, open-source info, and download CTAs.

## Tech Stack

- **Framework:** Next.js (App Router)
- **UI Library:** shadcn/ui (preset `b1zBuS`)
- **Package Manager:** pnpm
- **Styling:** Tailwind CSS (via shadcn preset)
- **Deployment:** TBD (Vercel preferred)

## Visual Direction

- **Theme:** Dark throughout
- **macOS Simulation:** Full-width, no-margin macOS menu bar strip at the very top of the page. Right side of the menu bar contains the Tate tray icon with the app popup mockup appearing below it (positioned near-right, like the real macOS dropdown).
- **Background below menu bar:** Dark gradient/pattern (like macOS Sonoma dark wallpaper) transitioning into the solid dark page background.
- **Design inspiration:** openusage.ai — same category of macOS menu bar app landing page

## Page Sections (top to bottom)

### 1. macOS Simulation

Full-width macOS menu bar strip rendered at the top of the page:
- **Left:** Apple logo, "Tate", File, Edit, View, Window, Help
- **Right:** Volume, battery, wifi icons, date/time

Below the menu bar, on the "desktop" area:
- **Tate tray icon** visible in the menu bar right side
- **Popup mockup** (the actual app PNG) positioned below the tray icon with a small upward arrow, simulating the real dropdown behavior. Placed near the right of the viewport.

The popup PNG will be added at implementation time — the user will provide the file path.

### 2. Hero

Centered, below the macOS desktop area:
- **App icon** (rounded square, 64×64, placeholder until final asset)
- **Name:** "Tate" (large, bold)
- **Subtitle:** "HK WarnSum" (muted, smaller)
- **Tagline:** "Real-time Hong Kong weather warnings in your menu bar"
- **CTA row:** Three buttons:
  - **Download for macOS →** (primary, amber/yellow accent) — links to GitHub Releases latest
  - **brew install --cask tate** (secondary, glass style) — copies command to clipboard with feedback
  - **GitHub** (secondary, glass style) — links to repository

### 3. Features (Bento Grid)

Section heading: "Never Miss a Warning" / "Tate keeps you informed without lifting a finger"

Bento grid layout — custom arrangement with varying cell sizes for visual rhythm:

| Feature | Description |
|---------|------------|
| Smart Tray Icons | Composite tray icons that display active warnings at a glance |
| Real-time Updates | Auto-refreshes every 60 seconds to keep you informed |
| Bilingual by Default | Full English and Traditional Chinese language support |
| Severity at a Glance | Warnings grouped by severity — Critical, Standard, Advisory |
| Works Offline | Shows last known warnings when you're disconnected |
| Smart Notifications | Get notified when warnings are issued, extended, or escalated |

Each card: subtle border, rounded corners, small SVG icon, feature name, one-line description. The bento layout renders the 6 cards with varied spans to create a staggered, masonry-like visual rhythm (e.g., a wide hero card spanning 2 columns, then smaller cards filling the grid).

### 4. Open Source

Centered section:
- Heading: "Proudly Open Source"
- Subtext: "Built with Tauri 2, React 19, and Rust — jump in, fix a bug, add a warning type"
- Contributor avatar row (static placeholders, 8–12 avatars)
- Button: "View on GitHub →"

### 5. Footer

Minimal footer, centered:
"Weather data provided by the Hong Kong Observatory Open Data API · Tate · MIT License · v0.1.1"

## Edge Cases & States

- **Loading:** The popup PNG is static (not live), so no loading state needed for the mockup. The page itself is a static site — no dynamic data loading.
- **Error:** If the PNG fails to load, show a styled placeholder frame ("[Popup Preview]").
- **Empty:** Not applicable — all content is static.
- **Responsive:** The macOS simulation should be hidden or simplified on mobile (menu bar becomes hamburger-style, popup mockup removed or stacked). Hero and features stack vertically on smaller screens.
- **Clipboard:** The brew install button shows a short "Copied!" tooltip before reverting.

## Download Links

- **Direct .dmg:** GitHub Releases latest asset (URL to be confirmed at implementation)
- **Homebrew:** `brew install --cask tate`
- **GitHub:** Repository URL (to be confirmed at implementation)

## Testing

- Visual regression on mobile/tablet/desktop viewports
- Link verification (all download URLs resolve)
- Clipboard copy functionality
- Lighthouse audit for performance/accessibility

## Out of Scope

- No blog, docs, changelog, or privacy policy pages
- No analytics or tracking
- No interactive demo of the app (static mockup only)
