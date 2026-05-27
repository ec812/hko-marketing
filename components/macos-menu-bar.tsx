"use client"

import { useEffect, useState } from "react"
import { Wifi, Battery, Volume2, Menu } from "lucide-react"

const menuItems = ["Tate", "File", "Edit", "View", "Window", "Help"]

function MacOSClock() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])
  if (!mounted) return <span className="tabular-nums">Loading...</span>

  const now = new Date()
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  const day = days[now.getDay()]
  const month = months[now.getMonth()]
  const date = now.getDate()
  const hours = now.getHours()
  const minutes = String(now.getMinutes()).padStart(2, "0")
  const ampm = hours >= 12 ? "PM" : "AM"
  const h12 = hours % 12 || 12
  return (
    <time dateTime={now.toISOString()} className="tabular-nums">
      {day} {month} {date} {h12}:{minutes} {ampm}
    </time>
  )
}

export function MacOSMenuBar() {
  return (
    <>
      <div className="hidden md:flex h-10 items-center justify-between px-4 text-[13px] text-white/85 bg-black/30 backdrop-blur-xl border-b border-white/10">
        <div className="flex items-center gap-5">
          <span className="text-[17px] leading-none"></span>
          {menuItems.map((item) => (
            <span key={item} className="font-medium tracking-tight">{item}</span>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <Volume2 className="w-4 h-4" />
          <Wifi className="w-4 h-4" />
          <Battery className="w-4 h-4" />
          <img
            src="/app-icon.png"
            alt="Tate"
            className="w-4 h-4 rounded"
          />
          <MacOSClock />
        </div>
      </div>

      <div className="md:hidden h-12 flex items-center justify-between px-4 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <span className="font-bold text-sm text-white">Tate</span>
        <Menu className="w-5 h-5 text-white/60" />
      </div>
    </>
  )
}
