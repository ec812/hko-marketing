"use client"

import { useSyncExternalStore } from "react"
import Image from "next/image"
import { Wifi, Battery, Volume2, Menu } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"
import { AppleIcon } from "@/components/apple"
import { sectionTransition, sequenceDelay } from "@/lib/page-motion"

const menuBarTransition = {
  ...sectionTransition,
  delay: 0,
}

const menuItems = ["Tate", "File", "Edit", "View", "Window", "Help"]

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

function formatClock(now: Date) {
  const hours = now.getHours()
  const minutes = String(now.getMinutes()).padStart(2, "0")
  const ampm = hours >= 12 ? "PM" : "AM"
  const h12 = hours % 12 || 12
  return `${days[now.getDay()]} ${months[now.getMonth()]} ${now.getDate()} ${h12}:${minutes} ${ampm}`
}

function getClockSnapshot() {
  return formatClock(new Date())
}

function getServerClockSnapshot() {
  return ""
}

function subscribeToClock(onStoreChange: () => void) {
  const id = setInterval(onStoreChange, 30_000)
  return () => clearInterval(id)
}

function MacOSClock() {
  const display = useSyncExternalStore(
    subscribeToClock,
    getClockSnapshot,
    getServerClockSnapshot,
  )

  if (!display) {
    return <span className="tabular-nums">&nbsp;</span>
  }

  return (
    <time suppressHydrationWarning className="tabular-nums">
      {display}
    </time>
  )
}

export function MacOSMenuBar() {
  const reducedMotion = useReducedMotion()
  const delay = sequenceDelay("menuBar", reducedMotion)

  return (
    <>
      <motion.div
        className="font-macos hidden md:flex h-10 items-center justify-between px-4 text-[13px] text-white/85 bg-black/30 backdrop-blur-xl border-b border-white/10"
        initial={reducedMotion ? false : { opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...menuBarTransition, delay }}
      >
        <div className="flex items-center gap-5">
          <AppleIcon className="w-4 h-4" />
          {menuItems.map((item) => (
            <span
              key={item}
              className={`tracking-tight ${item === "Tate" ? "font-bold" : "font-medium"}`}
            >
              {item}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <Image
            src="/icons/tc3_dark.png"
            alt="T3"
            width={18}
            height={18}
            className="w-6 h-6"
          />
          <Volume2 className="w-4.5 h-4.5" />
          <Wifi className="w-4.5 h-4.5" />
          <Battery className="w-4.5 h-4.5" />

          <MacOSClock />
        </div>
      </motion.div>

      <motion.div
        className="font-macos md:hidden h-12 flex items-center justify-between px-4 bg-black/80 backdrop-blur-xl border-b border-white/10"
        initial={reducedMotion ? false : { opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...menuBarTransition, delay }}
      >
        <span className="font-extrabold text-sm text-white">Tate</span>
        <Menu className="w-5 h-5 text-white/60" />
      </motion.div>
    </>
  )
}