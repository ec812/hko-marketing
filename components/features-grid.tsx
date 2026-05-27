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
    title: "Smart Tray Icons",
    desc: "Composite icons that display active warnings at a glance",
  },
  {
    icon: Languages,
    title: "Bilingual by Default",
    desc: "Full English and Traditional Chinese language support",
  },
  {
    icon: RefreshCw,
    title: "Real-time Updates",
    desc: "Auto-refreshes every 60 seconds to keep you informed",
  },
  {
    icon: AlertTriangle,
    title: "Severity at a Glance",
    desc: "Warnings grouped by severity — Critical, Standard, Advisory",
  },
  {
    icon: WifiOff,
    title: "Works Offline",
    desc: "Shows last known warnings when disconnected",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    desc: "Get notified when warnings are issued, extended, or escalated",
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
          Never Miss a Warning
        </motion.h2>
        <motion.p
          className="text-sm lg:text-base text-white/50 mt-3 max-w-lg text-pretty"
          variants={fadeUp}
          transition={sectionTransition}
        >
          Tate keeps you informed without lifting a finger
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
