import { Link } from 'react-router-dom'

export default function CtaBanner() {
  return (
    <section className="bg-ink relative overflow-hidden">
      {/* Spectrum gradient top rule */}
      <div className="h-1 w-full bg-spectrum-gradient" />

      {/* Decorative gradient blob */}
      <div className="absolute inset-0 bg-gradient-to-br from-ink-accent/30 via-transparent to-transparent pointer-events-none" />

      <div className="container-max section-padding relative text-center">
        <p className="text-white/50 text-sm font-bold uppercase tracking-widest mb-3">
          Nepal's Biggest Tech Award
        </p>
        <h2 className="text-gradient-spectrum text-5xl md:text-7xl font-black mb-4 leading-none">
          ICT AWARD 2026
        </h2>
        <p className="text-white/60 mb-8 max-w-md mx-auto">
          Nominate your innovation, startup, or organization. Entry is free and open until July 17, 2026.
        </p>
        <Link
          to="/apply"
          className="inline-block bg-gold text-ink font-black px-8 py-4 rounded-full text-base hover:bg-gold-light transition-colors"
        >
          Apply Now
        </Link>
      </div>
    </section>
  )
}
