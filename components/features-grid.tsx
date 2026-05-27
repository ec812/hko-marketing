import {
  Layers,
  RefreshCw,
  Languages,
  AlertTriangle,
  WifiOff,
  Bell,
} from "lucide-react"

const features = [
  {
    icon: Layers,
    title: "Smart Tray Icons",
    desc: "Composite icons that display active warnings at a glance",
    span: "md:col-span-2",
  },
  {
    icon: Languages,
    title: "Bilingual by Default",
    desc: "Full English and Traditional Chinese language support",
    span: "md:col-span-1",
  },
  {
    icon: RefreshCw,
    title: "Real-time Updates",
    desc: "Auto-refreshes every 60 seconds to keep you informed",
    span: "md:col-span-1 md:row-span-2",
  },
  {
    icon: AlertTriangle,
    title: "Severity at a Glance",
    desc: "Warnings grouped by severity — Critical, Standard, Advisory",
    span: "md:col-span-2",
  },
  {
    icon: WifiOff,
    title: "Works Offline",
    desc: "Shows last known warnings when disconnected",
    span: "md:col-span-1",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    desc: "Get notified when warnings are issued, extended, or escalated",
    span: "md:col-span-1",
  },
]

export function FeaturesGrid() {
  return (
    <section className="py-16 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-xl font-bold text-white">Never Miss a Warning</h2>
        <p className="text-sm text-white/40 mt-1">
          Tate keeps you informed without lifting a finger
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {features.map((f) => (
          <div
            key={f.title}
            className={`${f.span} rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 hover:bg-white/[0.04] transition-colors`}
          >
            <f.icon className="w-5 h-5 text-primary mb-3" />
            <h3 className="text-sm font-semibold text-white mb-1">{f.title}</h3>
            <p className="text-xs text-white/40 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
