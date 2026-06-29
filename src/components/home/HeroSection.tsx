import { Link } from 'react-router-dom'
import { useCountdown } from '@/hooks/useCountdown'

const GRAND_FINALE = new Date('2026-12-18T00:00:00')

function CountdownBox({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-white/5 border border-white/10 rounded-xl w-16 md:w-20 h-16 md:h-20 flex items-center justify-center backdrop-blur-sm">
        <span className="text-2xl md:text-3xl font-black text-gold tabular-nums">
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <span className="mt-2 text-xs text-white/50 uppercase tracking-widest font-semibold">{label}</span>
    </div>
  )
}

export default function HeroSection() {
  const { days, hours, minutes, seconds, expired } = useCountdown(GRAND_FINALE)

  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center bg-ink overflow-hidden">
      {/* Logo-indigo glow top (ink.accent #4C2D75) + warm gold glow bottom (gold #F7B413) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% -10%, rgba(76,45,117,0.22) 0%, transparent 55%), radial-gradient(ellipse at 50% 110%, rgba(247,180,19,0.10) 0%, transparent 55%)',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center mt-24 mb-12">
        {/* Badge */}

        {/* Logo (dark-background variant) */}
        <div className="flex justify-center mb-4">
          <img
            src="/logos/ICT-AWARD-Logo-Dark-Bg.png"
            alt="ICT Award"
            className="h-20 md:h-28 w-auto"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/logos/ICT-AWARD-Logo.png'
            }}
          />
        </div>

        <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-1.5 text-sm text-gold font-semibold mb-8">
          <span className="w-2 h-2 bg-gold rounded-full" />
          11th Edition · 2026
        </div>

        {/* Spectrum accent line */}
        <div className="w-16 h-1 bg-spectrum-gradient rounded-full mx-auto mb-6" />

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-balance text-white">
          Introducing The Biggest
          <br />
          <span className="text-gold">TECH AWARD</span>
          <span> OF Nepal</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-white/60 max-w-lg mx-auto leading-relaxed">
          Honoring Excellence in the Technology Sector of Nepal and Beyond.
          Recognizing outstanding achievements in ICT since 2016.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/apply"
            className="bg-gold text-ink font-black px-8 py-4 rounded-full text-lg hover:bg-gold-light transition-all hover:scale-105 active:scale-100"
          >
            Apply Now
          </Link>
          <Link
            to="/categories"
            className="border-2 border-gold text-gold font-bold px-8 py-4 rounded-full text-lg hover:bg-gold hover:text-ink transition-all"
          >
            Explore Categories
          </Link>
        </div>

        {/* Countdown
        {!expired && (
          <div className="mt-14">
            <p className="text-white/50 text-sm uppercase tracking-widest font-semibold mb-4">
              Grand Finale — December 18, 2026
            </p>
            <div className="flex items-start justify-center gap-3 md:gap-5">
              <CountdownBox value={days} label="Days" />
              <span className="text-gold text-3xl font-black mt-4">:</span>
              <CountdownBox value={hours} label="Hours" />
              <span className="text-gold text-3xl font-black mt-4">:</span>
              <CountdownBox value={minutes} label="Minutes" />
              <span className="text-gold text-3xl font-black mt-4">:</span>
              <CountdownBox value={seconds} label="Seconds" />
            </div>
          </div>
        )} */}
      </div>
    </section>
  )
}
