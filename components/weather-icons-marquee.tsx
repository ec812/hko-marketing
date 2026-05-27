"use client"

import Marquee from "react-fast-marquee"
import Image from "next/image"
import { motion, useReducedMotion } from "motion/react"
import { fadeUp, sectionTransition, sequenceDelay } from "@/lib/page-motion"

const weatherIcons = [
  { src: "/icons/tc1_dark.png", alt: "T1" },
  { src: "/icons/tc3_dark.png", alt: "T3" },
  { src: "/icons/tc8ne_dark.png", alt: "T8 NE" },
  { src: "/icons/tc8nw_dark.png", alt: "T8 NW" },
  { src: "/icons/tc8se_dark.png", alt: "T8 SE" },
  { src: "/icons/tc8sw_dark.png", alt: "T8 SW" },
  { src: "/icons/tc9_dark.png", alt: "T9" },
  { src: "/icons/tc10_dark.png", alt: "T10" },
  { src: "/icons/raina_dark.png", alt: "Amber Rain" },
  { src: "/icons/rainr_dark.png", alt: "Red Rain" },
  { src: "/icons/rainb_dark.png", alt: "Black Rain" },
  { src: "/icons/ts_dark.png", alt: "Thunderstorm" },
  { src: "/icons/cold_dark.png", alt: "Cold Weather" },
  { src: "/icons/vhot_dark.png", alt: "Very Hot Weather" },
  { src: "/icons/frost_dark.png", alt: "Frost" },
  { src: "/icons/sms_dark.png", alt: "Strong Monsoon Signal" },
  { src: "/icons/ntfl_dark.png", alt: "New Territory Flooding" },
  { src: "/icons/landslip_dark.png", alt: "Landslip" },
  { src: "/icons/firer_dark.png", alt: "Fire Red" },
  { src: "/icons/firey_dark.png", alt: "Fire Yellow" },
  { src: "/icons/tsunami-warn_dark.png", alt: "Tsunami Warning" },
] as const

const marqueeMask =
  "[mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]"

const marqueeSpeed = 50

function MarqueeRow({
  direction,
  speed,
  icons,
  rowKey,
}: {
  direction: "left" | "right"
  speed?: number
  icons: readonly { src: string; alt: string }[]
  rowKey: string
}) {
  return (
    <div
      className={`relative mx-auto flex h-full w-full max-w-7xl flex-wrap justify-center gap-10 ${marqueeMask}`}
    >
      <Marquee pauseOnHover direction={direction} speed={speed}>
        {icons.map((icon, idx) => (
          <div  key={`${rowKey}-${icon.alt}-${idx}`} className="flex items-center gap-2 border border-border rounded-xl p-4 mx-2">
            <Image
              src={icon.src}
              alt={icon.alt}
              width={24}
              height={24}
              className="size-6 object-contain opacity-70 md:mx-2 md:size-6"
            />
            <span className="text-sm text-foreground">{icon.alt}</span>
          </div>
        ))}
      </Marquee>
    </div>
  )
}

export function WeatherIconsMarquee() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="px-6 py-16 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-10 text-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: reducedMotion ? 0 : 0.08,
                delayChildren: sequenceDelay("marquee", reducedMotion),
              },
            },
          }}
        >
          <motion.h2
            className="font-display text-3xl font-bold tracking-tight text-pretty text-white lg:text-4xl"
            variants={fadeUp}
            transition={sectionTransition}
          >
            Every Warning Type Covered
          </motion.h2>
          <motion.p
            className="mx-auto mt-3 max-w-lg text-sm text-balance text-white/50 lg:text-base"
            variants={fadeUp}
            transition={sectionTransition}
          >
            Typhoon signals, rainstorm alerts, thunderstorms, and more — all from
            the Hong Kong Observatory
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-col gap-4 md:gap-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: reducedMotion ? 0 : 0.12,
                delayChildren: reducedMotion ? 0 : sequenceDelay("marquee", reducedMotion) + 0.08,
              },
            },
          }}
        >
          <motion.div variants={fadeUp} transition={sectionTransition}>
            <MarqueeRow
              direction="right"
              speed={marqueeSpeed}
              icons={weatherIcons}
              rowKey="row-one"
            />
          </motion.div>
          <motion.div variants={fadeUp} transition={sectionTransition}>
            <MarqueeRow
              direction="left"
              speed={marqueeSpeed}
              icons={weatherIcons}
              rowKey="row-two"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
