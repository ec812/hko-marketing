"use client"

import { useRef } from "react"
import { Copy } from "lucide-react"
import { cn } from "@/lib/utils"
import { anchoredToastManager } from "@/components/ui/toast"

interface CopyButtonProps {
  text: string
  label?: string
  className?: string
}

async function copyText(text: string): Promise<boolean> {
  if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text)
      return true
    } catch {
      // Fall through to legacy copy when the Clipboard API is blocked.
    }
  }

  if (typeof document === "undefined") {
    return false
  }

  const textarea = document.createElement("textarea")
  textarea.value = text
  textarea.setAttribute("readonly", "")
  textarea.style.position = "fixed"
  textarea.style.opacity = "0"
  textarea.style.pointerEvents = "none"
  document.body.appendChild(textarea)
  textarea.select()

  try {
    return document.execCommand("copy")
  } finally {
    document.body.removeChild(textarea)
  }
}

export function CopyButton({ text, label, className }: CopyButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null)

  const handleCopy = async () => {
    const copied = await copyText(text)
    if (!copied) return

    anchoredToastManager.add({
      title: "Copied!",
      type: "success",
      timeout: 2000,
      positionerProps: {
        anchor: buttonRef.current,
        sideOffset: 8,
      },
      data: {
        tooltipStyle: true,
      },
    })
  }

  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={handleCopy}
      className={cn(
        "inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors",
        "bg-white/5 hover:bg-white/10 text-white/80 hover:text-white border border-border backdrop-blur-xl",
        className,
      )}
    >
      <Copy className="w-4 h-4" />
      {label || text}
    </button>
  )
}
