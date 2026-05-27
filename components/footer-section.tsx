export function FooterSection() {
  return (
    <footer className="py-6 px-4 text-center text-[10px] text-white/25 border-t border-white/5">
      <p>
        Weather data provided by the{" "}
        <a
          href="https://www.hko.gov.hk/en/aab/opendata.html"
          className="underline hover:text-white/40 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hong Kong Observatory Open Data API
        </a>
        {" · "}Tate · MIT License · v0.1.1
      </p>
    </footer>
  )
}
