'use client'

import React from "react"

import { useState } from 'react'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))

    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', phone: '', company: '', projectType: '', message: '' })

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000)
    setLoading(false)
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <section className="bg-secondary text-secondary-foreground py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg opacity-90">Get in touch with our team for project inquiries and support</p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Contact Info Cards */}
            <div className="bg-white border border-border rounded-lg p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="text-primary" size={28} />
              </div>
              <h3 className="font-bold text-lg mb-2">Address</h3>
              <p className="text-muted-foreground leading-relaxed">
                Flat No 17, Jijai Plaza, Behind Eklavya College, Kothrud, Pune-411038, Maharashtra, India
              </p>
            </div>

            <div className="bg-white border border-border rounded-lg p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Phone className="text-primary" size={28} />
              </div>
              <h3 className="font-bold text-lg mb-2">Phone</h3>
              <p className="text-muted-foreground">
                <a href="tel:+919876543210" className="hover:text-primary transition">
                  +91 98765 43210
                </a>
              </p>
              <p className="text-sm text-muted-foreground mt-2">Mon - Sat, 9:00 AM - 6:00 PM</p>
            </div>

            <div className="bg-white border border-border rounded-lg p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Mail className="text-primary" size={28} />
              </div>
              <h3 className="font-bold text-lg mb-2">Email</h3>
              <p className="text-muted-foreground">
                <a href="mailto:info@shrivirbhadra.com" className="hover:text-primary transition">
                  info@shrivirbhadra.com
                </a>
              </p>
              <p className="text-muted-foreground mt-4">
                <a href="mailto:projects@shrivirbhadra.com" className="hover:text-primary transition">
                  projects@shrivirbhadra.com
                </a>
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto bg-white border border-border rounded-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Send us a Message</h2>
            <p className="text-muted-foreground mb-8">
              Fill out the form below and our team will get back to you within 24 hours
            </p>

            {submitted && (
              <div className="mb-6 p-4 bg-accent/10 border border-accent text-accent rounded-lg flex items-center gap-3">
                <CheckCircle size={20} className="flex-shrink-0" />
                <div>
                  <p className="font-semibold">Message Received!</p>
                  <p className="text-sm">Thank you for reaching out. We'll contact you shortly.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your company name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Project Type *</label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                >
                  <option value="">Select project type</option>
                  <option value="bridge">Bridge Construction</option>
                  <option value="road">Road Construction</option>
                  <option value="commercial">Commercial Building</option>
                  <option value="infrastructure">Infrastructure Development</option>
                  <option value="material">Material Supply</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Describe your project requirements..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {loading ? 'Sending...' : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </button>
            </form>

            <p className="text-xs text-muted-foreground mt-4 text-center">
              We respect your privacy. Your information will only be used to respond to your inquiry.
            </p>
          </div>
        </div>
      </section>

      {/* Working Hours */}
      <section className="bg-muted/30 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg border border-border">
            <div className="flex items-start gap-4">
              <Clock className="text-primary flex-shrink-0 mt-1" size={28} />
              <div>
                <h3 className="font-bold text-lg mb-4">Business Hours</h3>
                <div className="space-y-2 text-foreground">
                  <p><span className="font-semibold">Monday - Friday:</span> 9:00 AM - 6:00 PM</p>
                  <p><span className="font-semibold">Saturday:</span> 10:00 AM - 4:00 PM</p>
                  <p><span className="font-semibold">Sunday:</span> Closed</p>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Emergency projects can be discussed anytime. Please call us for urgent matters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
