"use client"

import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion, useReducedMotion } from "motion/react"
import { GithubIcon } from "@/components/github-icon"
import {
  Tooltip,
  TooltipPopup,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { fadeUp, sectionTransition, sequenceDelay } from "@/lib/page-motion"

const badges = [
  { label: "Tauri 2", color: "bg-input border border-border text-input" },
  { label: "React 19", color: "bg-input border border-border text-input" },
  { label: "Rust", color: "bg-input border border-border text-input" },
]

const contributors = [
  { name: "Ernest", avatar: "https://avatars.githubusercontent.com/u/16773001?v=4", href: "https://github.com/ec812" },
  { name: "jargoti", avatar: "https://avatars.githubusercontent.com/u/197363797?v=4", href: "https://github.com/jargoti20" },
]

export function OpenSourceSection() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="py-16 lg:py-24 px-6 lg:px-12 text-left rounded-2xl max-w-7xl mx-auto">
      <motion.div
        className="border border-border rounded-2xl py-12 px-12 bg-card"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: reducedMotion ? 0 : 0.08,
              delayChildren: sequenceDelay("openSource", reducedMotion),
            },
          },
        }}
      >
        <div className="flex justify-between items-center">
          <motion.div
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: reducedMotion ? 0 : 0.08,
                },
              },
            }}
          >
            <motion.h2
              className="font-display text-3xl lg:text-4xl font-bold tracking-tight text-white text-pretty"
              variants={fadeUp}
              transition={sectionTransition}
            >
              Proudly Open Source
            </motion.h2>
            <motion.p
              className="text-sm lg:text-base text-white/50 mt-3 max-w-md text-balance"
              variants={fadeUp}
              transition={sectionTransition}
            >
              Built with Tauri 2, React 19, and Rust — jump in, fix a bug, add a
              warning type
            </motion.p>
            <motion.div
              className="flex items-center gap-2 mt-5 mb-8"
              variants={fadeUp}
              transition={sectionTransition}
            >
              {badges.map((b) => (
                <span
                  key={b.label}
                  className={`text-xs text-foreground font-medium px-2.5 py-1 rounded-full border border-muted-foreground`}
                >
                  {b.label}
                </span>
              ))}
            </motion.div>
            <motion.div
              className="flex items-center gap-2"
              variants={fadeUp}
              transition={sectionTransition}
            >
              {Array.from({ length: 2 }).map((_, i) => {
                const contributor = contributors[i]

                if (contributor) {
                  return (
                    <Tooltip key={contributor.name}>
                      <TooltipTrigger
                        render={
                          <Link
                            href={contributor.href}
                            target="_blank"
                            rel="noopener noreferrer"
                          />
                        }
                      >
                        <Image
                          src={contributor.avatar}
                          alt={contributor.name}
                          width={36}
                          height={36}
                          className="w-9 h-9 rounded-full"
                        />
                      </TooltipTrigger>
                      <TooltipPopup>{contributor.name}</TooltipPopup>
                    </Tooltip>
                  )
                }

                return (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full bg-white/5 border border-white/10"
                    aria-label={`Contributor ${i + 1}`}
                  />
                )
              })}
            </motion.div>
          </motion.div>
          <motion.div variants={fadeUp} transition={sectionTransition}>
            <a
              href="https://github.com/ec812/hkwarnsum"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold border border-white/12 bg-white/5 backdrop-blur-xl text-white/80 hover:brightness-125 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              Contribute
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
