'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Phone, MapPin, CheckCircle } from 'lucide-react'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      {/* Top Info Bar */}
      <div className="bg-secondary text-secondary-foreground py-2 text-sm">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>Pune, Maharashtra</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} />
              <span>GST - 27AABPW5964C1ZH</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <button className="font-semibold hover:underline">View Mobile Number</button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-primary">
            Shri Virbhadra
            <span className="block text-sm text-secondary font-normal">Constructions</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-primary font-medium transition">
              Home
            </Link>
            <Link href="/products" className="text-foreground hover:text-primary font-medium transition">
              Products & Services
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary font-medium transition">
              About Us
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary font-medium transition">
              Contact Us
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="bg-accent text-accent-foreground px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition"
            >
              Contact Supplier
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4 flex flex-col gap-3">
            <Link href="/" className="text-foreground hover:text-primary font-medium py-2">
              Home
            </Link>
            <Link href="/products" className="text-foreground hover:text-primary font-medium py-2">
              Products & Services
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary font-medium py-2">
              About Us
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary font-medium py-2">
              Contact Us
            </Link>
            <Link
              href="/contact"
              className="bg-accent text-accent-foreground px-6 py-2 rounded-lg font-semibold text-center hover:bg-opacity-90 transition w-full"
            >
              Contact Supplier
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
