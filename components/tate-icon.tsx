export function TateIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-label="Tate app icon"
    >
      <rect width="64" height="64" rx="14" fill="#171717" />
      <rect width="64" height="64" rx="14" fill="url(#g)" />
      <path
        d="M20 44V20l10 12 10-12v24"
        stroke="#facc15"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="64" y2="64">
          <stop stopColor="#facc15" stopOpacity="0.15" />
          <stop offset="1" stopColor="#facc15" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  )
}
