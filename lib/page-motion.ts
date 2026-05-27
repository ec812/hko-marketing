export const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
} as const

export const motionEase = [0.22, 1, 0.36, 1] as const

export const sectionTransition = {
  duration: 0.5,
  ease: motionEase,
} as const

/** Page load entrance order: menu bar → popup → hero → marquee → features → open source → faq → footer */
export const pageSequence = {
  menuBar: 0,
  popup: 0.45,
  hero: 0.95,
  marquee: 1.9,
  features: 3.05,
  openSource: 3.85,
  faq: 4.15,
  footer: 4.75,
} as const

export function sequenceDelay(
  key: keyof typeof pageSequence,
  reducedMotion: boolean | null,
) {
  return reducedMotion ? 0 : pageSequence[key]
}
