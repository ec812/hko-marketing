import { ArrowUpRight } from "lucide-react"

const badges = [
  { label: "Tauri 2", color: "bg-orange-500/10 text-orange-400 border-orange-500/20" },
  { label: "React 19", color: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
  { label: "Rust", color: "bg-purple-500/10 text-purple-400 border-purple-500/20" },
]

export function OpenSourceSection() {
  return (
    <section className="py-16 px-4 text-center border-t border-white/5">
      <h2 className="text-xl font-bold text-white">Proudly Open Source</h2>
      <p className="text-sm text-white/40 mt-1 max-w-md mx-auto">
        Built with Tauri 2, React 19, and Rust — jump in, fix a bug, add a
        warning type
      </p>
      <div className="flex items-center justify-center gap-2 mt-4 mb-8">
        {badges.map((b) => (
          <span
            key={b.label}
            className={`text-[11px] font-medium px-2.5 py-1 rounded-full border ${b.color}`}
          >
            {b.label}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-center gap-2 mb-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="w-9 h-9 rounded-full bg-white/5 border border-white/10"
            aria-label={`Contributor ${i + 1}`}
          />
        ))}
      </div>
      <a
        href="https://github.com/ernest/hkowarnsum"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium bg-white/5 hover:bg-white/10 text-white/80 hover:text-white border border-white/10 transition-colors"
      >
        View on GitHub
        <ArrowUpRight className="w-3.5 h-3.5" />
      </a>
    </section>
  )
}
