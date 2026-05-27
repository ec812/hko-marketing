import Image from "next/image"
import { Download } from "lucide-react"
import { TateIcon } from "@/components/tate-icon"
import { GithubIcon } from "@/components/github-icon"
import { CopyButton } from "@/components/copy-button"
import { TatePopupPreview } from "@/components/tate-popup-preview"

const warningIcons = [
  { src: "/icons/tc3_dark.png", alt: "T3" },
  { src: "/icons/raina_dark.png", alt: "Amber Rain" },
  { src: "/icons/ts_dark.png", alt: "Thunderstorm" },
]

export function HeroSection() {
  return (
    <section className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-8 lg:pt-12 pb-20 lg:pb-28">
      <div className="max-w-xl space-y-6">
        <div className="flex items-center gap-2.5">
          <TateIcon className="w-7 h-7" />
          <span className="text-sm font-semibold tracking-tight text-white">Tate</span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] font-bold tracking-tight leading-[1.1] text-pretty text-white">
          Real-Time{" "}
          <span className="text-primary">HK Weather Warnings</span>{" "}
          In Your macOS Menu Bar
        </h1>

        <p className="text-sm sm:text-base leading-relaxed text-pretty text-muted-foreground max-w-md">
          Never miss a typhoon signal, rainstorm warning, or thunderstorm alert.
          Tate pulls live data from the Hong Kong Observatory — free and open source.
        </p>

        <div className="flex flex-wrap items-center gap-3 sm:gap-5">
          {warningIcons.map((icon) => (
            <Image
              key={icon.alt}
              src={icon.src}
              alt={icon.alt}
              width={24}
              height={24}
              className="w-6 h-6 opacity-60"
            />
          ))}
          <span className="text-xs text-white/30 font-mono">+ 20 more</span>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-1">
          <a
            href="https://github.com/ec812/hkwarnsum/releases/latest"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-primary text-primary-foreground hover:brightness-110 transition-all"
          >
            <Download className="w-4 h-4" />
            Download for macOS
          </a>
          <a
            href="https://github.com/ec812/hkwarnsum"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold border border-white/12 bg-white/5 backdrop-blur-xl text-white/80 hover:brightness-125 transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            Contribute
          </a>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <CopyButton text="brew install --cask tate" label="brew install --cask tate" />
          <span className="text-xs font-mono px-2 py-1 rounded text-white/50 bg-white/8">
            Free · Open Source · macOS
          </span>
        </div>
      </div>

      <div className="fixed top-17 right-[55px] max-lg:hidden pr-4">
        <TatePopupPreview />
      </div>

      <div className="lg:hidden mt-12 flex justify-center">
        <TatePopupPreview />
      </div>
    </section>
  )
}
