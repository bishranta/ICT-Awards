import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { ArrowUp } from '@phosphor-icons/react'
import Navbar from './Navbar'
import Footer from './Footer'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-gold text-ink flex items-center justify-center hover:bg-gold-light active:bg-gold-dark transition-colors"
    >
      <ArrowUp size={20} weight="bold" className="icon-spectrum" />
    </button>
  )
}

export default function PageWrapper() {
  return (
    <div className="min-h-screen flex flex-col">
      <svg width="0" height="0" style={{ position: 'absolute', overflow: 'hidden' }} aria-hidden="true">
        <defs>
          <linearGradient id="spectrum-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4C2D75" />
            <stop offset="25%" stopColor="#6E2C68" />
            <stop offset="50%" stopColor="#9B2850" />
            <stop offset="75%" stopColor="#BD203A" />
            <stop offset="100%" stopColor="#C20F1A" />
          </linearGradient>
        </defs>
      </svg>
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  )
}
