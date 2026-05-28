# Plan: Tate Landing Page — Copy Rewrite

## Goal

Transform the Tate marketing landing page from a functional README-style description into a persuasive, emotionally resonant brand experience that drives downloads and builds audience trust — without changing any layout, UI design, or component structure.

## Current State Summary

The page is well-designed visually (dark theme, macOS parody, motion, shadcn/ui) but the copy is **informational, not persuasive**. It reads like a GitHub README rendered as a webpage. Key gaps:

- **Emotional emptiness** — No sense of what's at stake in Hong Kong weather. No urgency. No relief.
- **Features > benefits** — Every section describes *what Tate does*, not *why the user should care*.
- **No social proof** — Zero testimonials, download counts, or credibility signals (besides MIT license).
- **Flat CTAs** — "Download for macOS" and "Contribute" are correct but not compelling.
- **Generic headings** — "Frequently Asked Questions," "Never Miss a Warning" — these don't differentiate.
- **Missing Hong Kong identity** — This app is *for Hong Kongers*. The copy should be culturally specific.
- **No narrative arc** — The page goes hero → icons → features → open source → FAQ → footer. No story about *who this is for* and *why it changes their life*.

## Proposed Approach

**Rewrite all copy strings only** — hero headline/subhead, feature titles/descriptions, section headings/subheads, FAQ questions/answers, CTA labels, open-source section text, footer, and HTML `<title>`/`<meta>` tags. Zero component restructuring, zero CSS changes, zero new sections.

The tone: **warmly authoritative, subtly urgent, Hong Kong-native**. Not hypey. Think: a knowledgeable friend telling you about the one app you should have during typhoon season.

## Step-by-Step Plan

### Step 1: Hero Section — Rewrite headline, subhead, badge, CTAs

**File:** `components/hero-section.tsx`

**Problems:**
- H1 is descriptive ("Real-Time HK Weather Warnings In Your macOS Menu Bar") — no emotion, no hook, no Hong Kong texture
- Subhead is functional ("Never miss a typhoon signal…") — starts with a negative framing, doesn't paint a scene
- CTAs are generic — "Download for macOS" and "Contribute" do nothing to persuade

**Proposed rewrite direction:**
- **H1:** Should carry the emotional weight of *knowing* before everyone else. Play with the idea that in HK, weather warnings change your entire day. Something like: *"Know Before the Sky Turns"* as the hook, then *"Hong Kong weather warnings, live in your macOS menu bar"* as the clarifier.
- **Subhead:** Paint a specific HK scene — a parent checking before school drop-off, a commuter checking before leaving the office in a T3. Replace "Never miss" with benefit-forward language.
- **CTA primary:** "Get Tate for macOS" instead of "Download for macOS". CTA secondary: "See how it works" (or keep "Contribute" but move it below the fold).
- **Badge:** "Free · Open Source · macOS" is good but could add "Uses HKO Open Data" for credibility.

### Step 2: Weather Icons Marquee Section — Rewrite heading and subhead

**File:** `components/weather-icons-marquee.tsx`

**Problems:**
- "Every Warning Type Covered" — generic, could apply to any insurance product
- Subhead lists types but doesn't sell the comprehensiveness

**Proposed rewrite direction:**
- **H2:** The marquee is visually impressive. Lean into the completeness + authority angle. Something like: *"Every Signal the Observatory Issues"* (implies authority, completeness).
- **Subhead:** Add texture about *why* this matters — typhoon season runs May–Nov, there are 21 warning types — educate while you sell.

### Step 3: Features Grid — Rewrite all 6 feature titles and descriptions

**File:** `components/features-grid.tsx`

**Problems:**
- "Smart Tray Icons" — describes the feature, not the benefit. What does "smart" mean here?
- "Real-time Updates" — every app claims this. No differentiation.
- "Works Offline" — benefit is there but framed defensively.

**Proposed rewrite for each card:**
| Current Title | Current Desc | Proposed Direction |
|---|---|---|
| Smart Tray Icons | "Composite icons that display active warnings at a glance" | **"At-a-Glance Warnings"** — *See every active HK warning right from your menu bar. No clicking, no refreshing.* |
| Bilingual by Default | "Full English and Traditional Chinese language support" | **"English + 中文"** — *Switch between English and Traditional Chinese from the menu. For expats and locals alike.* |
| Real-time Updates | "Auto-refreshes every 60 seconds to keep you informed" | **"Live from the Observatory"** — *Pulls straight from the HKO API every 60 seconds. As current as the government's own app.* |
| Severity at a Glance | "Warnings grouped by severity — Critical, Standard, Advisory" | **"Know What Matters"** — *Warnings grouped by severity. A T10 stands out from a frost advisory.* |
| Works Offline | "Shows last known warnings when disconnected" | **"Offline-Ready"** — *Your last snapshot stays visible even without internet. Always have the latest you knew.* |
| Smart Notifications | "Get notified when warnings are issued, extended, or escalated" | **"Noise-Free Alerts"** — *Get pinged only when something changes — issued, extended, or escalated. No spam.* |

**H2:** "Never Miss a Warning" → *"Stay Ahead of the Storm"* or similar emotionally resonant phrase.
**Subhead:** "Tate keeps you informed without lifting a finger" → reframe as a promise, not a description.

### Step 4: Open Source Section — Rewrite heading, subhead, CTA

**File:** `components/open-source-section.tsx`

**Problems:**
- "Proudly Open Source" is fine but static
- Subhead lists tech stack — developer-centric for a page that should appeal to end users first
- CTA "Contribute" is developer-oriented

**Proposed rewrite direction:**
- **H2:** *"Built for Hong Kong, Open for Everyone"* — reinforces the HK identity and the community aspect.
- **Subhead:** Separate the user-facing message from the dev pitch. Primary: *"MIT licensed. Free forever. No ads, no tracking, no catch."* Secondary/tech-badge layer stays.
- **CTA:** Keep "Contribute" for the primary CTA (this section already targets devs), but add a second sentence that bridges: *"Browse the code, report a bug, or add a warning type."*

### Step 5: FAQ Section — Rewrite questions and answers

**File:** `components/faq-section.tsx`

**Problems:**
- "Frequently Asked Questions" is the most generic section heading possible
- Questions are correct but lack personality and foresight about what really worries users
- Answers are technically correct but dry

**Proposed rewrite direction:**
- **H2:** *"Questions? We've Got Answers."* or *"Everything You Should Know Before Installing"*
- **Subhead:** Drop "Everything you need to know about Tate" — it's a tautology after "Frequently Asked Questions"
- Rewrite each Q&A to be more conversational, more specific, and more reassuring:

| Current Question | Current Issue | Proposed |
|---|---|---|
| "What is Tate?" | Too basic — anyone on the page already knows | **"How is Tate different from the HKO app or website?"** — addresses the real objection: "Why install another app?" |
| "Where does the weather data come from?" | Fine, but passive | **"Is the data reliable?"** — answers the trust objection head-on |
| "Is Tate free?" | Answered in hero already | **"Will Tate always be free?"** — addresses future concerns about monetisation |
| "Does Tate work without an internet connection?" | Fine | **"What happens when I'm offline?"** — same info, more natural phrasing |
| "Does Tate support Traditional Chinese?" | Already covered in features | **"Can I use it in Chinese?"** — broadens to all language concerns |
| "How do I install Tate?" | Fine | Keep, add Homebrew note inline |

### Step 6: SEO Metadata — Rewrite `<title>` and `<meta>` tags

**File:** `app/layout.tsx`

**Problems:**
- Title and description both lead with "Open Source" — wastes prime SEO real estate on a trust signal that matters more below the fold
- OG title is abbreviated to "HK Weather Warnings" — loses the "menu bar" differentiator

**Proposed rewrite direction:**
- **Title:** *"Tate — Hong Kong Weather Warnings for Your macOS Menu Bar"* — front-loads the unique value prop
- **Meta description:** *"Live typhoon signals, rainstorm warnings, and thunderstorm alerts from the Hong Kong Observatory — right in your menu bar. Free & open source."*
- **OG title:** Keep it punchy: *"Tate — Weather Warnings, Your Menu Bar"*
- **OG description:** *"Real-time Hong Kong weather warnings from the HKO in your macOS menu bar. Free, open source, bilingual."*

### Step 7: Footer — Minor copy tweak

**File:** `components/footer-section.tsx`

**Problem:** The attribution line is busy — "Weather data provided by the Hong Kong Observatory Open Data API · Tate · MIT License · v0.1.1"
**Proposal:** Clean up: *"Weather data © Hong Kong Observatory · Tate · MIT License · v0.1.1"*

### Step 8: Optional — Add a social proof micro-element

**Note:** This would require a small component addition, but depending on your tolerance for structural changes:
- Add download count or "X stars on GitHub" to the hero or open source section
- Can be a simple `<span>` with a repo badge image — no new component needed
- **Keep this as an optional footnote in the plan** — implement only if the user wants it

## Files Likely to Change

| File | What Changes |
|---|---|
| `components/hero-section.tsx` | H1 text, subhead text, CTA label on line 83, potentially secondary CTA label |
| `components/weather-icons-marquee.tsx` | H2 text (line 95), subhead text (lines 98-104) |
| `components/features-grid.tsx` | H2 (line 72), subhead (line 79), all 6 feature titles + descriptions (lines 14-44) |
| `components/open-source-section.tsx` | H2 (line 104), subhead (lines 106-113) |
| `components/faq-section.tsx` | H2 (line 72), subhead (line 75), all 6 questions + answers (lines 12-49) |
| `app/layout.tsx` | HTML title (line 12), meta description (lines 16-17), OG title (line 19), OG description (lines 20-21) |
| `components/footer-section.tsx` | Attribution text (line 34) |

## Verification

1. **Visual:** Run `pnpm dev`, visually confirm no layout shifts or broken elements — copy changes should not affect layout at all (same content length constraints)
2. **Spellcheck:** Review every changed string for typos (English + emoji/list consistency)
3. **Tone audit:** Read the entire page top-to-bottom in one pass — confirm the voice is consistent across all sections
4. **Mobile:** Check hero heading fits on mobile viewports (longer copy could wrap awkwardly)
5. **SEO preview:** Inspect `<title>` and `<meta>` in DevTools

## Risks & Tradeoffs

| Risk | Mitigation |
|---|---|
| Longer H1 could wrap badly on mobile | Keep within ~80 chars; test in sm/ viewport |
| Tone shift too dramatic from current minimal style | Review as a full page — if it feels off, dial back to a middle ground |
| Open source section losing dev audience | Keep tech badges visible; the section is still on the page for devs who scroll |
| Weakening SEO by changing well-ranked copy | Changes are additive (more specific terms like "typhoon signal", "HKO", "menu bar") — should improve, not degrade |
| User may dislike specific phrasing | Plan is directional — exact copy gets decided during implementation review |

## Open Questions

1. What's the primary target audience for this page? (End users downloading the app? Developers checking the repo? Both equally?)
2. Are there any download/usage/social stats to pull in as social proof?
3. Is there budget for a single user testimonial quote?
