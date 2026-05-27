import { MacOSMenuBar } from "@/components/macos-menu-bar"
import { HeroSection } from "@/components/hero-section"
import { WeatherIconsMarquee } from "@/components/weather-icons-marquee"
import { FeaturesGrid } from "@/components/features-grid"
import { OpenSourceSection } from "@/components/open-source-section"
import { FaqSection } from "@/components/faq-section"
import { FooterSection } from "@/components/footer-section"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 page-glow" />
        <div className="absolute inset-0 page-grain" />
      </div>

      <div className="relative">
        <MacOSMenuBar />
        <HeroSection />
        <WeatherIconsMarquee />
        <FeaturesGrid />
        <FaqSection />
        <OpenSourceSection />
        <FooterSection />
      </div>
    </div>
  )
}
