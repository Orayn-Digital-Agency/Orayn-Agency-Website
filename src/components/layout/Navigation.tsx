'use client'

import { useState, useEffect, useCallback } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Pricing',  href: '#pricing' },
  { label: 'Our Work', href: '#work' },
  { label: 'Contact',  href: '#contact' },
] as const

export default function Navigation() {
  const [isScrolled,     setIsScrolled]     = useState(false)
  const [isMobileOpen,   setIsMobileOpen]   = useState(false)

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 24)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isMobileOpen])

  const closeMobile = () => setIsMobileOpen(false)

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-orayn-dark/95 backdrop-blur-sm shadow-orayn-nav'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a
              href="#"
              className="font-sora text-xl font-bold text-orayn-gold tracking-wide focus:outline-none focus:ring-2 focus:ring-orayn-gold focus:ring-offset-2 focus:ring-offset-orayn-dark rounded"
              aria-label="Orayn — Home"
            >
              ORAYN
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 font-inter text-sm font-medium text-white/80 hover:text-white rounded-orayn transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orayn-gold focus:ring-offset-1 focus:ring-offset-orayn-dark"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="ml-4 btn-primary text-sm py-2.5 px-5"
              >
                Get Started
              </a>
            </nav>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsMobileOpen((v) => !v)}
              className="md:hidden p-2 text-white rounded-orayn focus:outline-none focus:ring-2 focus:ring-orayn-gold"
              aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileOpen}
            >
              {isMobileOpen ? (
                <X size={24} aria-hidden="true" />
              ) : (
                <Menu size={24} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer backdrop */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 md:hidden"
          onClick={closeMobile}
          aria-hidden="true"
        />
      )}

      {/* Mobile drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-orayn-dark shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!isMobileOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="flex flex-col h-full">
          {/* Drawer header */}
          <div className="flex items-center justify-between px-6 h-16 border-b border-white/10">
            <span className="font-sora text-lg font-bold text-orayn-gold">ORAYN</span>
            <button
              onClick={closeMobile}
              className="p-2 text-white/70 hover:text-white rounded-orayn focus:outline-none focus:ring-2 focus:ring-orayn-gold"
              aria-label="Close menu"
            >
              <X size={20} aria-hidden="true" />
            </button>
          </div>

          {/* Drawer links */}
          <nav className="flex flex-col gap-1 px-4 py-6" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMobile}
                className="px-4 py-3 font-inter text-base font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-orayn transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orayn-gold"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA at bottom */}
          <div className="mt-auto px-6 pb-8">
            <a
              href="#contact"
              onClick={closeMobile}
              className="btn-primary w-full text-center text-sm"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
