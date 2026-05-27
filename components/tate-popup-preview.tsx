"use client"

import { useState } from "react"
import Image from "next/image"
import { TriangleAlert } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"

type Locale = "en" | "tc"

interface LocalizedText {
  en: string
  tc: string
}

interface MockWarning {
  id: string
  name: LocalizedText
  actionLabel: LocalizedText
  timeAgo: LocalizedText
  severity: "critical" | "standard" | "advisory"
  type?: LocalizedText
  detail?: { en: string[]; tc: string[] }
  colorClass: string
  icon: string
}

const warnings: MockWarning[] = [
  {
    id: "tc",
    name: {
      en: "Tropical Cyclone Warning Signal",
      tc: "熱帶氣旋警告信號",
    },
    actionLabel: { en: "Issue", tc: "發出" },
    timeAgo: { en: "10 min ago", tc: "10 分鐘前" },
    severity: "critical",
    type: { en: "T3", tc: "三號" },
    colorClass: "bg-red-500",
    icon: "/icons/tc3_dark.png",
    detail: {
      en: [
        "The Tropical Cyclone Warning Signal No. 3 is now in force.",
        "Strong winds are expected or blowing over Hong Kong.",
      ],
      tc: [
        "三號強風信號現正生效。",
        "香港正或預料會受強風或間中強烈風速吹襲。",
      ],
    },
  },
  {
    id: "rain",
    name: {
      en: "Rainstorm Warning Signal",
      tc: "暴雨警告信號",
    },
    actionLabel: { en: "Issue", tc: "發出" },
    timeAgo: { en: "25 min ago", tc: "25 分鐘前" },
    severity: "standard",
    type: { en: "Amber", tc: "黃色" },
    colorClass: "bg-yellow-400",
    icon: "/icons/raina_dark.png",
  },
  {
    id: "ts",
    name: {
      en: "Thunderstorm Warning",
      tc: "雷暴警告",
    },
    actionLabel: { en: "Reissued", tc: "重新發出" },
    timeAgo: { en: "1h ago", tc: "1 小時前" },
    severity: "advisory",
    colorClass: "bg-blue-400",
    icon: "/icons/ts_dark.png",
  },
]

const severityLabels = {
  critical: { en: "Critical", tc: "危急" },
  standard: { en: "Standard", tc: "標準" },
  advisory: { en: "Advisory", tc: "建議" },
}

const uiText = {
  title: { en: "HK Warnings", tc: "香港警告" },
  hideFromDock: { en: "Hide from Dock", tc: "從 Dock 隱藏" },
}

function t(text: LocalizedText, locale: Locale) {
  return text[locale]
}

interface TatePopupPreviewProps {
  delay?: number
}

export function TatePopupPreview({ delay = 0.55 }: TatePopupPreviewProps) {
  const [locale, setLocale] = useState<Locale>("en")
  const [expanded, setExpanded] = useState<string | null>(null)
  const reducedMotion = useReducedMotion()

  const groups = {
    critical: warnings.filter((w) => w.severity === "critical"),
    standard: warnings.filter((w) => w.severity === "standard"),
    advisory: warnings.filter((w) => w.severity === "advisory"),
  }

  return (
    <motion.div
      className="relative -top-5"
      initial={reducedMotion ? false : { opacity: 0, y: -10, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.45,
        delay: reducedMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ transformOrigin: "top right" }}
    >
      <svg
        width={20}
        height={6}
        viewBox="0 0 50 15"
        className="absolute top-[-5px] right-[180px] z-10 shrink-0"
      >
        <polygon
          points="25 0 0 15 50 15 25 0"
          fill="#171717"
          stroke="#262626"
          strokeWidth={1}
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <div className="w-[380px] bg-neutral-900 text-white font-sans select-none rounded-xl border border-neutral-800 outline-none shadow-2xl shadow-black/60">
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/10">
          <div className="flex items-center gap-2">
            <TriangleAlert className="w-4 h-4 text-yellow-500" />
            <h1 className="text-sm font-bold">{t(uiText.title, locale)}</h1>
          </div>
        </div>

        <div className="overflow-y-auto max-h-[460px] p-3 space-y-3">
          {(["critical", "standard", "advisory"] as const).map((severity) => {
            const items = groups[severity]
            if (items.length === 0) return null
            return (
              <section key={severity}>
                <h2 className="text-[10px] uppercase tracking-widest text-white/40 mb-1.5 px-0.5">
                  {severityLabels[severity][locale]}
                </h2>
                <div className="space-y-1.5">
                  {items.map((w) => {
                    const isExpanded = expanded === w.id
                    return (
                      <div
                        key={w.id}
                        className="rounded-lg overflow-hidden border border-white/10 cursor-pointer hover:border-white/25 transition-colors"
                        onClick={() => setExpanded(isExpanded ? null : w.id)}
                      >
                        <div className={`h-1 ${w.colorClass}`} />
                        <div className="p-3">
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex items-center gap-2.5 flex-1 min-w-0">
                              <Image
                                src={w.icon}
                                alt={t(w.name, locale)}
                                width={24}
                                height={24}
                                className="w-6 h-6 shrink-0 object-contain"
                              />
                              <div className="min-w-0">
                                <h3 className="text-sm font-semibold text-white truncate">
                                  {t(w.name, locale)}
                                </h3>
                                {w.type && (
                                  <span className="inline-block mt-0.5 text-xs font-medium px-1.5 py-0.5 rounded bg-white/10 text-white/80">
                                    {t(w.type, locale)}
                                  </span>
                                )}
                              </div>
                            </div>
                            <div className="flex flex-col items-end gap-0.5 shrink-0">
                              <span className="text-[10px] border border-white/10 rounded-full px-2 py-0.5 uppercase tracking-wider text-white/50">
                                {t(w.actionLabel, locale)}
                              </span>
                              <span className="text-[10px] text-white/40">
                                {t(w.timeAgo, locale)}
                              </span>
                            </div>
                          </div>
                          {isExpanded && w.detail && w.detail[locale].length > 0 && (
                            <div className="mt-2 pt-2 border-t border-white/10 space-y-1">
                              {w.detail[locale].slice(0, 3).map((para, i) => (
                                <p key={i} className="text-xs text-white/60 leading-relaxed">
                                  {para}
                                </p>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </section>
            )
          })}
        </div>

        <div className="border-t border-white/10 px-4 py-2 flex items-center justify-between">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              defaultChecked
              className="rounded border-white/30 bg-neutral-800 text-primary outline-none"
            />
            <span className="text-[11px] text-white/50">
              {t(uiText.hideFromDock, locale)}
            </span>
          </label>
          <button
            type="button"
            onClick={() => setLocale((current) => (current === "en" ? "tc" : "en"))}
            className="text-[11px] font-medium px-2 py-0.5 rounded text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            aria-label={locale === "en" ? "Switch to Traditional Chinese" : "Switch to English"}
          >
            {locale === "en" ? "繁" : "EN"}
          </button>
        </div>
      </div>
    </motion.div>
  )
}
