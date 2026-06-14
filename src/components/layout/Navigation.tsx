'use client'

import { useState, useEffect, useCallback } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Services',   href: '#services'  },
  { label: 'Work',       href: '#work'       },
  { label: 'Pricing',    href: '#pricing'    },
  { label: 'Process',    href: '#process'    },
  { label: 'Contact',    href: '#contact'    },
] as const

export default function Navigation() {
  const [scrolled,    setScrolled]    = useState(false)
  const [mobileOpen,  setMobileOpen]  = useState(false)

  const onScroll = useCallback(() => setScrolled(window.scrollY > 32), [])

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [onScroll])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const close = () => setMobileOpen(false)

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-orayn-darker/96 backdrop-blur-md border-b border-white/[0.06]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between h-[68px] md:h-20">

            {/* Logotype */}
            <a
              href="#"
              className="flex items-center gap-3 group focus:outline-none"
              aria-label="Orayn — Home"
            >
              {/* O mark */}
              <div className="w-7 h-7 border-2 border-orayn-gold rounded-sm flex items-center justify-center flex-shrink-0 group-hover:bg-orayn-gold transition-colors duration-200">
                <span className="font-sora text-xs font-bold text-orayn-gold group-hover:text-orayn-dark transition-colors duration-200">O</span>
              </div>
              <span className="font-sora text-sm font-bold text-white tracking-[0.18em] uppercase">
                ORAYN
              </span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-0.5" aria-label="Main navigation">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 font-inter text-sm font-medium text-white/55 hover:text-white transition-colors duration-200 focus:outline-none focus:text-orayn-gold"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA + mobile toggle */}
            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="hidden md:inline-flex btn-primary text-xs py-2.5 px-5"
              >
                Start a Project
              </a>
              <button
                onClick={() => setMobileOpen((v) => !v)}
                className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm md:hidden"
          onClick={close}
          aria-hidden="true"
        />
      )}

      {/* Mobile drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-80 bg-orayn-dark border-l border-white/[0.07] transform transition-transform duration-300 ease-out md:hidden ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!mobileOpen}
        aria-label="Mobile navigation"
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-6 h-[68px] border-b border-white/[0.07]">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 border-2 border-orayn-gold rounded-sm flex items-center justify-center">
                <span className="font-sora text-[10px] font-bold text-orayn-gold">O</span>
              </div>
              <span className="font-sora text-sm font-bold text-white tracking-[0.18em] uppercase">ORAYN</span>
            </div>
            <button
              onClick={close}
              className="p-1.5 text-white/50 hover:text-white transition-colors"
              aria-label="Close menu"
            >
              <X size={20} aria-hidden="true" />
            </button>
          </div>

          <nav className="flex flex-col px-4 py-8 gap-1" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={close}
                className="px-4 py-3.5 font-inter text-base font-medium text-white/70 hover:text-white hover:bg-white/[0.04] rounded-sm transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-auto px-6 pb-10 flex flex-col gap-3">
            <a href="mailto:temidaniel124@gmail.com" onClick={close} className="font-inter text-xs text-white/35 hover:text-orayn-gold transition-colors text-center">
              temidaniel124@gmail.com
            </a>
            <a href="#contact" onClick={close} className="btn-primary w-full text-center text-xs">
              Start a Project
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
