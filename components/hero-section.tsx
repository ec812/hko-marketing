"use client"

import Image from "next/image"
import { Download } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"
import { TateIcon } from "@/components/tate-icon"
import { GithubIcon } from "@/components/github-icon"
import { CopyButton } from "@/components/copy-button"
import { TatePopupPreview } from "@/components/tate-popup-preview"
import { fadeUp, pageSequence, sequenceDelay } from "@/lib/page-motion"

const warningIcons = [
  { src: "/icons/tc3_dark.png", alt: "T3" },
  { src: "/icons/raina_dark.png", alt: "Amber Rain" },
  { src: "/icons/ts_dark.png", alt: "Thunderstorm" },
]

export function HeroSection() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="relative w-full px-6 lg:px-12 pt-12 lg:pt-24 pb-20 lg:pb-24">
      <div className="max-w-7xl mx-auto lg:px-12">
        <motion.div
          className="max-w-xl space-y-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: reducedMotion ? 0 : 0.08,
                delayChildren: sequenceDelay("hero", reducedMotion),
              },
            },
          }}
        >
          <motion.div className="flex items-center gap-2.5" variants={fadeUp}>
            <TateIcon className="w-7 h-7" />
            <span className="text-sm font-semibold tracking-tight text-white">Tate</span>
            <span className="text-xs font-mono px-3 py-1 rounded-full text-foreground bg-muted border border-border">
              Free · Open Source · macOS
            </span>
          </motion.div>

          <motion.h1
            className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] font-bold tracking-tight leading-[1.1] text-pretty text-white"
            variants={fadeUp}
          >
            Real-Time{" "}
            <span className="text-primary">HK Weather Warnings</span>{" "}
            In Your macOS Menu Bar
          </motion.h1>

          <motion.p
            className="text-sm sm:text-base leading-relaxed text-pretty text-muted-foreground max-w-md"
            variants={fadeUp}
          >
            Never miss a typhoon signal, rainstorm warning, or thunderstorm alert.
            Tate pulls live data from the Hong Kong Observatory — free and open source.
          </motion.p>

          <motion.div className="flex flex-wrap items-center gap-3 sm:gap-5" variants={fadeUp}>
            {warningIcons.map((icon) => (
              <Image
                key={icon.alt}
                src={icon.src}
                alt={icon.alt}
                width={24}
                height={24}
                className="w-6 h-6 opacity-80"
              />
            ))}
            <span className="text-xs text-white/30 font-mono">+ 20 more</span>
          </motion.div>

          <motion.div className="flex flex-wrap items-center gap-3 pt-1" variants={fadeUp}>
            <a
              href="https://github.com/ec812/hkwarnsum/releases/latest"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-primary text-primary-foreground hover:brightness-110 transition-all"
            >
              <Download className="w-4 h-4" />
              Download for macOS
            </a>
            <a
              href="https://github.com/ec812/hkwarnsum"
              className="inline-flex items-center font-mono justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold border border-white/12 bg-white/5 backdrop-blur-xl text-white/80 hover:brightness-125 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              Contribute
            </a>
          </motion.div>

          <motion.div className="flex flex-wrap items-center gap-3" variants={fadeUp}>
            <CopyButton
              text="brew install --cask tate"
              label="brew install --cask tate"
              className="font-mono font-light text-sm"
            />
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute top-7 right-[69px] max-lg:hidden pr-4">
        <TatePopupPreview delay={pageSequence.popup} />
      </div>

      <div className="lg:hidden mt-12 flex justify-center">
        <TatePopupPreview delay={pageSequence.popup} />
      </div>
    </section>
  )
}
