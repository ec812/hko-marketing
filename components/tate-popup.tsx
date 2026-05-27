"use client"

import { useState } from "react"

interface TatePopupProps {
  src?: string
  alt?: string
}

export function TatePopup({ src, alt = "Tate warning popup" }: TatePopupProps) {
  const [error, setError] = useState(false)

  return (
    <div className="relative">
      <div className="absolute -top-1.5 right-12 w-3 h-3 rotate-45 bg-neutral-900 border-l border-t border-white/10" />
      <div className="w-[380px] rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60 bg-neutral-900">
        {src && !error ? (
          <img
            src={src}
            alt={alt}
            className="w-full h-auto"
            onError={() => setError(true)}
          />
        ) : (
          <div className="flex items-center justify-center h-[320px] text-white/20 text-sm">
            [Popup Preview]
          </div>
        )}
      </div>
    </div>
  )
}
