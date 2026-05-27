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
    value: "what-is-tate",
    question: "What is Tate?",
    answer:
      "Tate is a free, open-source macOS menu bar app that shows real-time Hong Kong weather warnings — typhoon signals, rainstorm alerts, thunderstorms, and more — pulled directly from the Hong Kong Observatory.",
  },
  {
    value: "data-source",
    question: "Where does the weather data come from?",
    answer:
      "Tate uses the official Hong Kong Observatory Open Data API. Warnings are refreshed automatically every 60 seconds so your menu bar always reflects the latest HKO status.",
  },
  {
    value: "free",
    question: "Is Tate free?",
    answer:
      "Yes. Tate is completely free and open source under the MIT License. You can download it, inspect the code, and contribute on GitHub.",
  },
  {
    value: "offline",
    question: "Does Tate work without an internet connection?",
    answer:
      "If you lose connectivity, Tate keeps showing the last warnings it received. Once you're back online, it resumes live updates automatically.",
  },
  {
    value: "languages",
    question: "Does Tate support Traditional Chinese?",
    answer:
      "Yes. Tate is bilingual by default — switch between English and Traditional Chinese from the app menu at any time.",
  },
  {
    value: "install",
    question: "How do I install Tate?",
    answer:
      "Download the latest release for macOS from GitHub, or install via Homebrew with brew install --cask tate. Tate lives in your menu bar and can be hidden from the Dock.",
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
            Frequently Asked Questions
          </h2>
          <p className="text-sm lg:text-base text-white/50 mt-3 text-pretty">
            Everything you need to know about Tate
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
