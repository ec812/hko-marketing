"use client"

import Marquee from "react-fast-marquee"

const weatherIcons = [
  { src: "/icons/tc1_dark.png", alt: "T1" },
  { src: "/icons/tc3_dark.png", alt: "T3" },
  { src: "/icons/tc8ne_dark.png", alt: "T8 NE" },
  { src: "/icons/tc8nw_dark.png", alt: "T8 NW" },
  { src: "/icons/tc8se_dark.png", alt: "T8 SE" },
  { src: "/icons/tc8sw_dark.png", alt: "T8 SW" },
  { src: "/icons/tc9_dark.png", alt: "T9" },
  { src: "/icons/tc10_dark.png", alt: "T10" },
  { src: "/icons/raina_dark.png", alt: "Amber Rain" },
  { src: "/icons/rainr_dark.png", alt: "Red Rain" },
  { src: "/icons/rainb_dark.png", alt: "Black Rain" },
  { src: "/icons/ts_dark.png", alt: "Thunderstorm" },
  { src: "/icons/cold_dark.png", alt: "Cold Weather" },
  { src: "/icons/vhot_dark.png", alt: "Very Hot Weather" },
  { src: "/icons/frost_dark.png", alt: "Frost" },
  { src: "/icons/sms_dark.png", alt: "Strong Monsoon Signal" },
  { src: "/icons/ntfl_dark.png", alt: "New Territory Flooding" },
  { src: "/icons/landslip_dark.png", alt: "Landslip" },
  { src: "/icons/firer_dark.png", alt: "Fire Red" },
  { src: "/icons/firey_dark.png", alt: "Fire Yellow" },
  { src: "/icons/tsunami-warn_dark.png", alt: "Tsunami Warning" },
] as const

const marqueeMask =
  "[mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]"

function MarqueeRow({
  direction,
  speed,
  icons,
  rowKey,
}: {
  direction: "left" | "right"
  speed?: number
  icons: readonly { src: string; alt: string }[]
  rowKey: string
}) {
  return (
    <div
      className={`relative mx-auto flex h-full w-full max-w-7xl flex-wrap justify-center gap-10 ${marqueeMask}`}
    >
      <Marquee pauseOnHover direction={direction} speed={speed}>
        {icons.map((icon, idx) => (
          <img
            key={`${rowKey}-${icon.alt}-${idx}`}
            src={icon.src}
            alt={icon.alt}
            width={48}
            height={48}
            className="mx-4 size-10 object-contain opacity-70 md:mx-8 md:size-12"
          />
        ))}
      </Marquee>
    </div>
  )
}

export function WeatherIconsMarquee() {
  return (
    <section className="px-6 py-16 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-pretty text-white lg:text-4xl">
            Every Warning Type Covered
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-pretty text-white/50 lg:text-base">
            Typhoon signals, rainstorm alerts, thunderstorms, and more — all from
            the Hong Kong Observatory
          </p>
        </div>

        <div className="flex flex-col gap-4 md:gap-8">
          <MarqueeRow direction="right" icons={weatherIcons} rowKey="row-one" />
          <MarqueeRow
            direction="left"
            speed={30}
            icons={weatherIcons}
            rowKey="row-two"
          />
        </div>
      </div>
    </section>
  )
}
