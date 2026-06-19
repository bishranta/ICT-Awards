import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#F7B413',
          dark: '#CF7B0E',
          light: '#FDCE62',
        },
        ink: {
          DEFAULT: '#1B1233', // body text + darkest backgrounds
          light: '#2C1A52',   // raised dark surface (hero gradient top)
          accent: '#4C2D75',  // logo indigo = Spectrum A; cool accent on dark surfaces
        },
        // Signature Spectrum — 5 canonical stops (DESIGN.md §2). Same values as GROUP_COLOR.
        // E is unified to #C20F1A (AA-safe red) across gradients, live, and group color.
        spectrum: {
          a: '#4C2D75',
          b: '#6E2C68',
          c: '#9B2850',
          d: '#BD203A',
          e: '#C20F1A',
        },
        live: '#C20F1A',       // urgency / live accent (== spectrum.e)
        cream: '#FEF9EE',
        surface: {
          DEFAULT: '#FFFFFF',  // bg-surface (default page background)
          alt: '#F8F9FA',      // bg-surface-alt (class name unchanged)
          muted: '#F1F3F5',    // bg-surface-muted (class name unchanged)
        },
        // Border scale — flat keys to avoid colliding with the `border` width utility.
        // border-subtle == gray-100 so existing borders are NOT darkened.
        'border-subtle': '#F3F4F6', // gray-100 — pervasive card/divider border
        'border-light': '#E5E7EB',  // gray-200 — slightly stronger
        'border-strong': '#D1D5DB', // gray-300 — timeline dots, emphasis
        'text-muted': '#5A6472',    // retuned from #6B7280 for AA on small copy
      },
      fontFamily: {
        sans: ['"Nunito Sans"', 'Calibri', 'Arial', 'sans-serif'],
        display: ['"Nunito Sans"', 'Calibri', 'Georgia', 'serif'],
      },
      backgroundImage: {
        // Canonical Signature Spectrum — 5 stops built from the spectrum tokens.
        // 'gold-gradient' removed (only consumer GoldDivider is unmounted).
        'spectrum-gradient': 'linear-gradient(90deg, #4C2D75 0%, #6E2C68 25%, #9B2850 50%, #BD203A 75%, #C20F1A 100%)',
      },
      boxShadow: {
        gold: '0 4px 24px rgba(247,179,19,0.25)',
        'gold-sm': '0 2px 10px rgba(247,179,19,0.15)',
        ink: '0 10px 40px rgba(27,18,51,0.12)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
}

export default config
