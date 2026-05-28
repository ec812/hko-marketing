"use client"

import {
  Layers,
  RefreshCw,
  Languages,
  AlertTriangle,
  WifiOff,
  Bell,
} from "lucide-react"
import { motion, useReducedMotion } from "motion/react"
import { fadeUp, sectionTransition, sequenceDelay } from "@/lib/page-motion"

const features = [
  {
    icon: Layers,
    title: "At-a-Glance Warnings",
    desc: "See every active HK warning right from your menu bar. No clicking, no refreshing.",
  },
  {
    icon: Languages,
    title: "English + 中文",
    desc: "Switch between English and Traditional Chinese from the menu. For expats and locals alike.",
  },
  {
    icon: RefreshCw,
    title: "Live from the Observatory",
    desc: "Pulls straight from the HKO API every 60 seconds. As current as the government's own app.",
  },
  {
    icon: AlertTriangle,
    title: "Know What Matters",
    desc: "Warnings grouped by severity. A T10 stands out from a frost advisory.",
  },
  {
    icon: WifiOff,
    title: "Offline-Ready",
    desc: "Your last snapshot stays visible even without internet. Always have the latest you knew.",
  },
  {
    icon: Bell,
    title: "Noise-Free Alerts",
    desc: "Get pinged only when something changes — issued, extended, or escalated. No spam.",
  },
]

export function FeaturesGrid() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="py-16 lg:py-24 px-6 lg:px-12 max-w-7xl mx-auto">
      <motion.div
        className="mb-10"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: reducedMotion ? 0 : 0.08,
              delayChildren: sequenceDelay("features", reducedMotion),
            },
          },
        }}
      >
        <motion.h2
          className="font-display text-3xl lg:text-4xl font-bold tracking-tight text-white text-pretty"
          variants={fadeUp}
          transition={sectionTransition}
        >
          Stay Ahead of the Storm
        </motion.h2>
        <motion.p
          className="text-sm lg:text-base text-white/50 mt-3 max-w-lg text-pretty"
          variants={fadeUp}
          transition={sectionTransition}
        >
          Tate does the watching. You just glance at your menu bar.
        </motion.p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: reducedMotion ? 0 : 0.06,
              delayChildren: reducedMotion ? 0 : sequenceDelay("features", reducedMotion) + 0.12,
            },
          },
        }}
      >
        {features.map((feature) => (
          <motion.div
            key={feature.title}
            className="rounded-xl border border-white/10 bg-black/20 p-5 hover:bg-black/30 transition-all duration-200"
            variants={fadeUp}
            transition={sectionTransition}
          >
            <feature.icon className="w-5 h-5 text-primary mb-3" />
            <h3 className="text-sm font-semibold text-white mb-1">{feature.title}</h3>
            <p className="text-xs text-white/40 leading-relaxed">{feature.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
