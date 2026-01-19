'use client'

import Link from 'next/link'
import { MapPin, Phone, Mail, Linkedin, Facebook, Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Shri Virbhadra Constructions</h3>
            <p className="text-sm opacity-90 mb-4">
              Professional construction and civil engineering solutions with proven expertise in infrastructure development.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-accent transition">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-accent transition">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-accent transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-accent transition">
                  Products & Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Reach Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex gap-3">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                <p>Flat No 17, Jijai Plaza, Behind Eklavya College, Kothrud, Pune-411038, Maharashtra, India</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="flex-shrink-0" />
                <p>+91 9168912661</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="flex-shrink-0" />
                <p>info@shrivirbhadra.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground border-opacity-20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm opacity-75">
            <p>&copy; 2024 Shri Virbhadra Constructions. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-accent transition">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-accent transition">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
