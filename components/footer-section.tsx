"use client"


import { motion, useReducedMotion } from "motion/react"
import { XTwitter } from "@/components/social-media/social-media-icons"
import { GithubIcon } from "@/components/github-icon"
import { sectionTransition, sequenceDelay } from "@/lib/page-motion"
import Link from "next/link"
export function FooterSection() {
  const reducedMotion = useReducedMotion()

  return (
    <motion.footer
      className="py-6 px-4 text-center text-sm text-muted-foreground border-t border-white/5"
      initial={reducedMotion ? false : { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ...sectionTransition,
        delay: sequenceDelay("footer", reducedMotion),
      }}
    >
      <div className="max-w-7xl mx-auto px-12">
        <div className="flex justify-between items-center">
          <p>
            Weather data provided by the{" "}
            <a
              href="https://www.hko.gov.hk/en/aab/opendata.html"
              className="underline hover:text-white/40 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hong Kong Observatory Open Data API
            </a>
            {" · "}Tate · MIT License · v0.1.1
          </p>
          <div className="flex items-center gap-4">
            <Link href="https://x.com/jargoti20">
              <XTwitter className="w-4 h-4" />
            </Link>
            <Link href="https://github.com/ec812/hkwarnsum">
              <GithubIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
