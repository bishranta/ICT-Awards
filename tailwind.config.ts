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
          accent: '#4C2D75',  // logo indigo = category A
        },
        spectrum: {
          a: '#4C2D75',
          b: '#6E2C68',
          c: '#9B2850',
          d: '#BD203A',
          e: '#E0121E', // vivid logo red (gradient / large fills); GROUP_COLOR.E (#C20F1A) is the AA-safe variant for small group-E text
        },
        live: '#E0121E', // urgency / live accent
        cream: '#FEF9EE',
        surface: '#FFFFFF',
        'surface-alt': '#F8F9FA',
        'surface-muted': '#F1F3F5',
        'border-light': '#E5E7EB',
        'text-muted': '#6B7280',
      },
      fontFamily: {
        sans: ['"Nunito Sans"', 'Calibri', 'Arial', 'sans-serif'],
        display: ['"Nunito Sans"', 'Calibri', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #FDCE62 0%, #F7B413 50%, #CF7B0F 100%)',
        'spectrum-gradient': 'linear-gradient(90deg, #4C2D75 0%, #822B5E 42%, #BD203A 74%, #DC0E1D 100%)',
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
