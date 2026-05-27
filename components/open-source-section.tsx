import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { GithubIcon } from "@/components/github-icon"

const badges = [
  { label: "Tauri 2", color: "bg-input border border-border text-input" },
  { label: "React 19", color: "bg-input border border-border text-input" },
  { label: "Rust", color: "bg-input border border-border text-input" },
]

const contributors = [
  { name: "Ernest", avatar: "https://avatars.githubusercontent.com/u/16773001?v=4", href: "https://github.com/ec812" },
]
export function OpenSourceSection() {
  return (
    <section className="py-16 lg:py-24 px-6 lg:px-12 text-left rounded-2xl max-w-7xl mx-auto">
      <div className="border border-border rounded-2xl py-12 px-12 bg-card">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight text-white text-pretty">
              Proudly Open Source
            </h2>
            <p className="text-sm lg:text-base text-white/50 mt-3 max-w-md text-balance">
              Built with Tauri 2, React 19, and Rust — jump in, fix a bug, add a
              warning type
            </p>
            <div className="flex items-center gap-2 mt-5 mb-8">
              {badges.map((b) => (
                <span
                  key={b.label}
                  className={`text-xs text-foreground font-medium px-2.5 py-1 rounded-full border border-muted-foreground`}
                >
                  {b.label}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-2">
              {Array.from({ length: 1 }).map((_, i) => {
                const contributor = contributors[i]

                if (contributor) {
                  return (
                    <Link
                      key={i}
                      href={contributor.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={contributor.avatar}
                        alt={contributor.name}
                        width={36}
                        height={36}
                        className="w-9 h-9 rounded-full"
                      />
                    </Link>
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
            </div>
          </div>
          <div>
            <a
              href="https://github.com/ec812/hkwarnsum"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold border border-white/12 bg-white/5 backdrop-blur-xl text-white/80 hover:brightness-125 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              Contribute
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
