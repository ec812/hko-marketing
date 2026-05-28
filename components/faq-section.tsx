"use client"

import { motion, useReducedMotion } from "motion/react"
import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { fadeUp, sectionTransition, sequenceDelay } from "@/lib/page-motion"

const faqs = [
  {
    value: "why-tate",
    question: "How is Tate different from the HKO app or website?",
    answer:
      "Unlike the HKO website or mobile app, Tate lives in your menu bar — always visible, never needs a tap. It pulls the same official data from the Hong Kong Observatory but presents it as a live, glanceable warning screen that updates every 60 seconds.",
  },
  {
    value: "data-source",
    question: "Is the data reliable?",
    answer:
      "Yes. Tate uses the official Hong Kong Observatory Open Data API — the same source that powers the HKO's own website and mobile apps. Warnings are refreshed automatically every 60 seconds so your menu bar always reflects the latest HKO status.",
  },
  {
    value: "free",
    question: "Will Tate always be free?",
    answer:
      "Yes. Tate is and will remain free, open source software under the MIT License. No ads, no tracking, no paid tiers. You can download it, inspect every line of code, and contribute on GitHub.",
  },
  {
    value: "offline",
    question: "What happens when I'm offline?",
    answer:
      "If you lose connectivity, Tate keeps showing the last warnings it received — so you won't lose visibility mid-commute or during a blackout. Once you're back online, it resumes live updates automatically.",
  },
  {
    value: "languages",
    question: "Can I use it in Chinese?",
    answer:
      "Yes. Tate is fully bilingual — switch between English and Traditional Chinese from the app menu at any time. All warning names, details, and UI text update instantly.",
  },
  {
    value: "install",
    question: "How do I install Tate?",
    answer:
      "Download the latest release for macOS from GitHub, or install via Homebrew with brew install --cask tate. Tate runs quietly in your menu bar and can be hidden from the Dock.",
  },
]

export function FaqSection() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="py-16 lg:py-24 px-6 lg:px-12 max-w-7xl mx-auto">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: reducedMotion ? 0 : 0.08,
              delayChildren: sequenceDelay("faq", reducedMotion),
            },
          },
        }}
      >
        <motion.div className="mb-10 max-w-xl" variants={fadeUp} transition={sectionTransition}>
          <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight text-white text-pretty">
            Questions? We've Got Answers.
          </h2>
          <p className="text-sm lg:text-base text-white/50 mt-3 text-pretty">
            Straight answers about how Tate works, where the data comes from, and what you can expect.
          </p>
        </motion.div>

        <motion.div variants={fadeUp} transition={sectionTransition}>
          <Accordion className="rounded-2xl border border-border bg-card px-6 lg:px-8">
            {faqs.map((faq) => (
              <AccordionItem key={faq.value} value={faq.value}>
                <AccordionTrigger className="text-white hover:text-white/90">
                  {faq.question}
                </AccordionTrigger>
                <AccordionPanel className="text-white/50 leading-relaxed">
                  {faq.answer}
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </motion.div>
    </section>
  )
}
