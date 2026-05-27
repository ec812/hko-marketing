import { MacOSMenuBar } from "@/components/macos-menu-bar"
import { TatePopupPreview } from "@/components/tate-popup-preview"
import { HeroSection } from "@/components/hero-section"
import { FeaturesGrid } from "@/components/features-grid"
import { OpenSourceSection } from "@/components/open-source-section"
import { FooterSection } from "@/components/footer-section"

export default function Home() {
  return (
    <>
      <MacOSMenuBar />
      <div className="pt-10 min-h-[420px] bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] flex justify-end pr-16 max-md:pr-4 max-md:justify-center max-md:min-h-0 max-md:py-8">
        <div className="hidden md:block">
          <TatePopupPreview />
        </div>
      </div>
      <HeroSection />
      <FeaturesGrid />
      <OpenSourceSection />
      <FooterSection />
    </>
  )
}
