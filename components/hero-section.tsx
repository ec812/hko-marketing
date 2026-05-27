import { ArrowUpRight, Download } from "lucide-react"
import { TateIcon } from "@/components/tate-icon"
import { CopyButton } from "@/components/copy-button"

export function HeroSection() {
  return (
    <section className="flex flex-col items-center text-center pt-24 pb-16 px-4">
      <h1>Real-time Hong Kong weather warnings in your menu bar</h1>
      <div className="inline-flex items-center gap-3 mb-4 p-3 rounded-2xl bg-white/[0.03] border border-white/5">
        <TateIcon className="w-16 h-16" />
        <div className="text-left">
          <h1 className="text-2xl font-bold text-white">Tate</h1>
          <p className="text-sm text-white/40">HK WarnSum</p>
        </div>
      </div>
     
      <div className="flex flex-wrap items-center justify-center gap-3">
        <a
          href="https://github.com/ec812/hkwarnsum/releases/latest"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          <Download className="w-4 h-4" />
          Download for macOS
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
        <CopyButton text="brew install --cask tate" />
        <a
          href="https://github.com/ec812/hkwarnsum"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-white/5 hover:bg-white/10 text-white/80 hover:text-white border border-white/10 transition-colors"
        >
          GitHub
        </a>
      </div>
    </section>
  )
}
