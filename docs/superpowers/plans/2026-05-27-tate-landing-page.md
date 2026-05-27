# Tate Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a single-page marketing landing page for Tate, a macOS menu bar app for Hong Kong weather warnings.

**Architecture:** Next.js App Router with shadcn/ui, dark theme, static site. The page simulates a macOS desktop at the top (menu bar + app popup mockup), then transitions into a standard landing page with hero, bento feature grid, open source section, and footer.

**Tech Stack:** Next.js, shadcn/ui (preset b1zBuS), Tailwind CSS, pnpm

---

### Task 1: Initialize Project

**Files:**
- Create: `hkowarnsum-marketing/` (project root)

- [ ] **Step 1: Scaffold Next.js project with shadcn preset**

```bash
pnpm dlx shadcn@latest init --preset b1zBuS --base base --template next --pointer
```

This creates a Next.js project with Tailwind, shadcn/ui, and the preset theme configured.

- [ ] **Step 2: Verify setup**

```bash
pnpm dev
```

Visit `http://localhost:3000` — should see the default starter page.

- [ ] **Step 3: Git init and first commit**

```bash
git init
git add .
git commit -m "chore: scaffold Next.js project with shadcn/ui"
```

---

### Task 2: Configure Dark Theme and Global Styles

**Files:**
- Modify: `app/globals.css`

- [ ] **Step 1: Update globals.css for dark theme**

```css
@import "tailwindcss";

@custom-variant dark (&:is(.dark *));

@theme inline {
  --color-background: #0a0a0a;
  --color-foreground: #ededed;
  --color-card: #111111;
  --color-card-foreground: #ededed;
  --color-popover: #111111;
  --color-popover-foreground: #ededed;
  --color-primary: #facc15;
  --color-primary-foreground: #000000;
  --color-secondary: #1a1a1a;
  --color-secondary-foreground: #ededed;
  --color-muted: #262626;
  --color-muted-foreground: #a1a1aa;
  --color-accent: #facc15;
  --color-accent-foreground: #000000;
  --color-destructive: #7f1d1d;
  --color-destructive-foreground: #fca5a5;
  --color-border: rgba(255, 255, 255, 0.08);
  --color-ring: #facc15;
  --radius: 0.625rem;
  --font-sans: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", sans-serif;
  --font-mono: "SF Mono", "Fira Code", monospace;
}

:root {
  --color-background: #0a0a0a;
  --color-foreground: #ededed;
  background-color: var(--color-background);
  color: var(--color-foreground);
}

body {
  font-family: var(--font-sans);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

- [ ] **Step 2: Commit**

```bash
git add .
git commit -m "feat: configure dark theme and global styles"
```

---

### Task 3: Create macOS Menu Bar Component

**Files:**
- Create: `components/macos-menu-bar.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Create the MacOSMenuBar component**

`components/macos-menu-bar.tsx`:

```tsx
import { Clock, Wifi, BatteryFull, SpeakerHigh } from "lucide-react";

const menuItems = ["Tate", "File", "Edit", "View", "Window", "Help"];

function MacOSClock() {
  const now = new Date();
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const day = days[now.getDay()];
  const month = months[now.getMonth()];
  const date = now.getDate();
  const hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  const h12 = hours % 12 || 12;
  return (
    <time dateTime={now.toISOString()} className="tabular-nums">
      {day} {month} {date} {h12}:{minutes} {ampm}
    </time>
  );
}

export function MacOSMenuBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-10">
      <div className="h-full flex items-center justify-between px-4 text-[13px] text-white/85 bg-black/30 backdrop-blur-xl border-b border-white/10">
        <div className="flex items-center gap-5">
          <span className="text-[17px] leading-none"></span>
          {menuItems.map((item) => (
            <span key={item} className="font-medium tracking-tight">
              {item}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <SpeakerHigh className="w-4 h-4" />
          <Wifi className="w-4 h-4" />
          <BatteryFull className="w-4 h-4" />
          <MacOSClock />
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add .
git commit -m "feat: add macOS menu bar component"
```

---

### Task 4: Create Popup Mockup Component

**Files:**
- Create: `components/tate-popup.tsx`
- Create: `components/tate-icon.tsx`

- [ ] **Step 1: Create TateIcon component**

`components/tate-icon.tsx`:

```tsx
export function TateIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-label="Tate app icon"
    >
      <rect width="64" height="64" rx="14" fill="#171717" />
      <rect width="64" height="64" rx="14" fill="url(#g)" />
      <path
        d="M20 44V20l10 12 10-12v24"
        stroke="#facc15"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="64" y2="64">
          <stop stopColor="#facc15" stopOpacity="0.15" />
          <stop offset="1" stopColor="#facc15" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
```

- [ ] **Step 2: Create TatePopup component**

`components/tate-popup.tsx`:

```tsx
"use client";

import { useRef, useState } from "react";

interface TatePopupProps {
  src?: string;
  alt?: string;
}

export function TatePopup({ src, alt = "Tate warning popup" }: TatePopupProps) {
  const imgRef = useRef<HTMLImageElement>(null);
  const [error, setError] = useState(false);

  return (
    <div className="relative">
      {/* Arrow pointing up to tray icon */}
      <div className="absolute -top-1.5 right-12 w-3 h-3 rotate-45 bg-neutral-900 border-l border-t border-white/10" />
      {/* Popup container */}
      <div className="w-[380px] rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60 bg-neutral-900">
        {src && !error ? (
          <img
            ref={imgRef}
            src={src}
            alt={alt}
            className="w-full h-auto"
            onError={() => setError(true)}
          />
        ) : (
          <div className="flex items-center justify-center h-[320px] text-white/20 text-sm">
            [Popup Preview]
          </div>
        )}
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add .
git commit -m "feat: add Tate icon and popup mockup components"
```

---

### Task 5: Create Hero Section

**Files:**
- Create: `components/hero-section.tsx`
- Create: `components/copy-button.tsx`

- [ ] **Step 1: Create CopyButton component**

`components/copy-button.tsx`:

```tsx
"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface CopyButtonProps {
  text: string;
  label?: string;
  className?: string;
}

export function CopyButton({ text, label, className }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={cn(
        "inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors",
        "bg-white/5 hover:bg-white/10 text-white/80 hover:text-white border border-white/10",
        className,
      )}
    >
      {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
      {copied ? "Copied!" : label || text}
    </button>
  );
}
```

- [ ] **Step 2: Create HeroSection component**

`components/hero-section.tsx`:

```tsx
import { ArrowUpRight, Download } from "lucide-react";
import { TateIcon } from "@/components/tate-icon";
import { CopyButton } from "@/components/copy-button";

export function HeroSection() {
  return (
    <section className="flex flex-col items-center text-center pt-24 pb-16 px-4">
      <div className="inline-flex items-center gap-3 mb-4 p-3 rounded-2xl bg-white/[0.03] border border-white/5">
        <TateIcon className="w-16 h-16" />
        <div className="text-left">
          <h1 className="text-2xl font-bold text-white">Tate</h1>
          <p className="text-sm text-white/40">HK WarnSum</p>
        </div>
      </div>
      <p className="text-lg text-white/60 max-w-md mx-auto mb-8">
        Real-time Hong Kong weather warnings in your menu bar
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <a
          href="https://github.com/ernest/hkowarnsum/releases/latest"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          <Download className="w-4 h-4" />
          Download for macOS
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
        <CopyButton text="brew install --cask tate" label="brew install --cask tate" />
        <a
          href="https://github.com/ernest/hkowarnsum"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-white/5 hover:bg-white/10 text-white/80 hover:text-white border border-white/10 transition-colors"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add .
git commit -m "feat: add hero section with download buttons"
```

---

### Task 6: Create Features Bento Grid

**Files:**
- Create: `components/features-grid.tsx`

- [ ] **Step 1: Create FeaturesGrid component**

`components/features-grid.tsx`:

```tsx
import {
  Layers,
  RefreshCw,
  Languages,
  AlertTriangle,
  WifiOff,
  Bell,
} from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "Smart Tray Icons",
    desc: "Composite icons that display active warnings at a glance",
    span: "md:col-span-2",
  },
  {
    icon: Languages,
    title: "Bilingual by Default",
    desc: "Full English and Traditional Chinese language support",
    span: "md:col-span-1",
  },
  {
    icon: RefreshCw,
    title: "Real-time Updates",
    desc: "Auto-refreshes every 60 seconds to keep you informed",
    span: "md:col-span-1 md:row-span-2",
  },
  {
    icon: AlertTriangle,
    title: "Severity at a Glance",
    desc: "Warnings grouped by severity — Critical, Standard, Advisory",
    span: "md:col-span-2",
  },
  {
    icon: WifiOff,
    title: "Works Offline",
    desc: "Shows last known warnings when disconnected",
    span: "md:col-span-1",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    desc: "Get notified when warnings are issued, extended, or escalated",
    span: "md:col-span-1",
  },
];

export function FeaturesGrid() {
  return (
    <section className="py-16 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-xl font-bold text-white">Never Miss a Warning</h2>
        <p className="text-sm text-white/40 mt-1">
          Tate keeps you informed without lifting a finger
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {features.map((f) => (
          <div
            key={f.title}
            className={`${f.span} rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 hover:bg-white/[0.04] transition-colors`}
          >
            <f.icon className="w-5 h-5 text-primary mb-3" />
            <h3 className="text-sm font-semibold text-white mb-1">{f.title}</h3>
            <p className="text-xs text-white/40 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add .
git commit -m "feat: add features bento grid"
```

---

### Task 7: Create Open Source Section and Footer

**Files:**
- Create: `components/open-source-section.tsx`
- Create: `components/footer-section.tsx`

- [ ] **Step 1: Create OpenSourceSection component**

`components/open-source-section.tsx`:

```tsx
import { ArrowUpRight } from "lucide-react";

const badges = [
  { label: "Tauri 2", color: "bg-orange-500/10 text-orange-400 border-orange-500/20" },
  { label: "React 19", color: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
  { label: "Rust", color: "bg-purple-500/10 text-purple-400 border-purple-500/20" },
];

export function OpenSourceSection() {
  return (
    <section className="py-16 px-4 text-center border-t border-white/5">
      <h2 className="text-xl font-bold text-white">Proudly Open Source</h2>
      <p className="text-sm text-white/40 mt-1 max-w-md mx-auto">
        Built with Tauri 2, React 19, and Rust — jump in, fix a bug, add a
        warning type
      </p>
      <div className="flex items-center justify-center gap-2 mt-4 mb-8">
        {badges.map((b) => (
          <span
            key={b.label}
            className={`text-[11px] font-medium px-2.5 py-1 rounded-full border ${b.color}`}
          >
            {b.label}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-center gap-2 mb-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="w-9 h-9 rounded-full bg-white/5 border border-white/10"
            aria-label={`Contributor ${i + 1}`}
          />
        ))}
      </div>
      <a
        href="https://github.com/ernest/hkowarnsum"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium bg-white/5 hover:bg-white/10 text-white/80 hover:text-white border border-white/10 transition-colors"
      >
        View on GitHub
        <ArrowUpRight className="w-3.5 h-3.5" />
      </a>
    </section>
  );
}
```

- [ ] **Step 2: Create FooterSection component**

`components/footer-section.tsx`:

```tsx
export function FooterSection() {
  return (
    <footer className="py-6 px-4 text-center text-[10px] text-white/25 border-t border-white/5">
      <p>
        Weather data provided by the{" "}
        <a
          href="https://www.hko.gov.hk/en/aab/opendata.html"
          className="underline hover:text-white/40 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hong Kong Observatory Open Data API
        </a>
        {" · "}Tate · MIT License · v0.1.1
      </p>
    </footer>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add .
git commit -m "feat: add open source section and footer"
```

---

### Task 8: Compose the Landing Page

**Files:**
- Modify: `app/page.tsx`
- Modify: `app/layout.tsx`

- [ ] **Step 1: Update app/layout.tsx with metadata**

`app/layout.tsx`:

```tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tate — Hong Kong Weather Warnings in Your Menu Bar",
  description:
    "Real-time Hong Kong weather warnings from the HKO Open Data API, right in your macOS menu bar.",
  openGraph: {
    title: "Tate — HK Weather Warnings",
    description:
      "Real-time Hong Kong weather warnings in your macOS menu bar.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
```

- [ ] **Step 2: Compose the page in app/page.tsx**

`app/page.tsx`:

```tsx
import { MacOSMenuBar } from "@/components/macos-menu-bar";
import { TatePopup } from "@/components/tate-popup";
import { HeroSection } from "@/components/hero-section";
import { FeaturesGrid } from "@/components/features-grid";
import { OpenSourceSection } from "@/components/open-source-section";
import { FooterSection } from "@/components/footer-section";

export default function Home() {
  return (
    <>
      <MacOSMenuBar />
      {/* macOS desktop area */}
      <div className="pt-10 min-h-[420px] bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] flex justify-end pr-16">
        <TatePopup />
      </div>
      <HeroSection />
      <FeaturesGrid />
      <OpenSourceSection />
      <FooterSection />
    </>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add .
git commit -m "feat: compose landing page with all sections"
```

---

### Task 9: Responsive Polish

**Files:**
- Modify: `components/macos-menu-bar.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Make menu bar responsive (hide on mobile)**

Update `components/macos-menu-bar.tsx` to wrap the bar in a `hidden md:block` container, and show a simplified mobile header instead:

```tsx
"use client";

import { useState } from "react";
import { Clock, Wifi, BatteryFull, SpeakerHigh, Menu } from "lucide-react";

const menuItems = ["Tate", "File", "Edit", "View", "Window", "Help"];

function MacOSClock() {
  const now = new Date();
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const day = days[now.getDay()];
  const month = months[now.getMonth()];
  const date = now.getDate();
  const hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  const h12 = hours % 12 || 12;
  return (
    <time dateTime={now.toISOString()} className="tabular-nums">
      {day} {month} {date} {h12}:{minutes} {ampm}
    </time>
  );
}

export function MacOSMenuBar() {
  return (
    <>
      {/* Desktop macOS menu bar */}
      <div className="hidden md:flex fixed top-0 left-0 right-0 z-50 h-10 items-center justify-between px-4 text-[13px] text-white/85 bg-black/30 backdrop-blur-xl border-b border-white/10">
        <div className="flex items-center gap-5">
          <span className="text-[17px] leading-none"></span>
          {menuItems.map((item) => (
            <span key={item} className="font-medium tracking-tight">{item}</span>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <SpeakerHigh className="w-4 h-4" />
          <Wifi className="w-4 h-4" />
          <BatteryFull className="w-4 h-4" />
          <MacOSClock />
        </div>
      </div>

      {/* Mobile header */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 h-12 flex items-center justify-between px-4 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <span className="font-bold text-sm text-white">Tate</span>
        <Menu className="w-5 h-5 text-white/60" />
      </div>
    </>
  );
}
```

- [ ] **Step 2: Hide popup mockup on mobile**

Update `app/page.tsx` to wrap the popup area:

```tsx
{/* macOS desktop area */}
<div className="pt-10 min-h-[420px] bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] flex justify-end pr-16 max-md:pr-4 max-md:justify-center max-md:min-h-0 max-md:py-8">
  <div className="hidden md:block">
    <TatePopup />
  </div>
</div>
```

- [ ] **Step 3: Commit**

```bash
git add .
git commit -m "feat: add responsive layout for mobile"
```

---

### Task 10: Final Verification

- [ ] **Step 1: Verify build**

```bash
pnpm build
```

Expected: Build succeeds with no errors.

- [ ] **Step 2: Run lint**

```bash
pnpm lint
```

Expected: No lint errors.

- [ ] **Step 3: Final commit**

```bash
git add .
git commit -m "chore: final polish and cleanup"
```
