"use client"

import { useState } from "react"
import { TriangleAlert } from "lucide-react"

interface MockWarning {
  name: string
  actionLabel: string
  timeAgo: string
  severity: "critical" | "standard" | "advisory"
  type?: string
  detail?: string[]
  colorClass: string
}

const warnings: MockWarning[] = [
  {
    name: "Tropical Cyclone Warning Signal",
    actionLabel: "Issue",
    timeAgo: "10 min ago",
    severity: "critical",
    type: "T3",
    colorClass: "bg-red-500",
    detail: [
      "The Tropical Cyclone Warning Signal No. 3 is now in force.",
      "Strong winds are expected or blowing over Hong Kong.",
    ],
  },
  {
    name: "Rainstorm Warning Signal",
    actionLabel: "Issue",
    timeAgo: "25 min ago",
    severity: "standard",
    type: "Amber",
    colorClass: "bg-yellow-400",
  },
  {
    name: "Thunderstorm Warning",
    actionLabel: "Issue",
    timeAgo: "1h ago",
    severity: "advisory",
    colorClass: "bg-blue-400",
  },
]

const severityLabels = {
  critical: { en: "Critical", tc: "危急" },
  standard: { en: "Standard", tc: "標準" },
  advisory: { en: "Advisory", tc: "建議" },
}

export function TatePopupPreview() {
  const [expanded, setExpanded] = useState<string | null>(null)

  const groups = {
    critical: warnings.filter((w) => w.severity === "critical"),
    standard: warnings.filter((w) => w.severity === "standard"),
    advisory: warnings.filter((w) => w.severity === "advisory"),
  }

  return (
    <div className="relative">
      <svg
        width={20}
        height={6}
        viewBox="0 0 50 15"
        fill="none"
        className="absolute -top-[5px] right-12 z-10"
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
            <TriangleAlert className="w-4 h-4 text-yellow-400" />
            <h1 className="text-sm font-bold">HK Warnings</h1>
          </div>
        </div>

        <div className="overflow-y-auto max-h-[460px] p-3 space-y-3">
          {(["critical", "standard", "advisory"] as const).map((severity) => {
            const items = groups[severity]
            if (items.length === 0) return null
            return (
              <section key={severity}>
                <h2 className="text-[10px] uppercase tracking-widest text-white/40 mb-1.5 px-0.5">
                  {severityLabels[severity].en}
                </h2>
                <div className="space-y-1.5">
                  {items.map((w) => {
                    const isExpanded = expanded === w.name
                    return (
                      <div
                        key={w.name}
                        className="rounded-lg overflow-hidden border border-white/10 cursor-pointer hover:border-white/25 transition-colors"
                        onClick={() => setExpanded(isExpanded ? null : w.name)}
                      >
                        <div className={`h-1 ${w.colorClass}`} />
                        <div className="p-3">
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex items-center gap-2.5 flex-1 min-w-0">
                              <div className="w-6 h-6 shrink-0 rounded bg-white/10 flex items-center justify-center text-[10px]">
                                ⚠
                              </div>
                              <div className="min-w-0">
                                <h3 className="text-sm font-semibold text-white truncate">
                                  {w.name}
                                </h3>
                                {w.type && (
                                  <span className="inline-block mt-0.5 text-xs font-medium px-1.5 py-0.5 rounded bg-white/10 text-white/80">
                                    {w.type}
                                  </span>
                                )}
                              </div>
                            </div>
                            <div className="flex flex-col items-end gap-0.5 shrink-0">
                              <span className="text-[10px] border border-white/10 rounded-full px-2 py-0.5 uppercase tracking-wider text-white/50">
                                {w.actionLabel}
                              </span>
                              <span className="text-[10px] text-white/40">{w.timeAgo}</span>
                            </div>
                          </div>
                          {isExpanded && w.detail && w.detail.length > 0 && (
                            <div className="mt-2 pt-2 border-t border-white/10 space-y-1">
                              {w.detail.slice(0, 3).map((para, i) => (
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
              className="rounded border-white/30 bg-neutral-800 text-yellow-400 outline-none"
            />
            <span className="text-[11px] text-white/50">Hide from Dock</span>
          </label>
          <span className="text-[11px] font-medium px-2 py-0.5 text-white/70 cursor-pointer">
            繁
          </span>
        </div>
      </div>
    </div>
  )
}
