import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ArrowRight, Building2, Hammer, Zap, Users, CheckCircle2 } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-secondary text-secondary-foreground overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/construction-1.jpg"
            alt="Construction project"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 md:py-32">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Building Excellence in Civil Engineering
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Shri Virbhadra Constructions specializes in large-scale infrastructure projects, bridges, commercial complexes, and civil engineering solutions with proven track record across Maharashtra.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/products"
                className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition inline-flex items-center justify-center gap-2"
              >
                Explore Services <ArrowRight size={20} />
              </Link>
              <Link
                href="/contact"
                className="border-2 border-accent-foreground px-8 py-3 rounded-lg font-semibold hover:bg-accent-foreground hover:text-secondary transition"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">₹1000Cr+</div>
              <p className="text-muted-foreground">Project Value</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">15+</div>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100%</div>
              <p className="text-muted-foreground">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We deliver comprehensive construction solutions across multiple sectors with cutting-edge technology and experienced teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white border border-border rounded-lg p-8 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Building2 className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Bridge Construction</h3>
              <p className="text-muted-foreground mb-4">
                Expert design and construction of concrete and steel bridges for various road networks.
              </p>
              <Link href="/products" className="text-primary font-semibold hover:gap-2 inline-flex items-center gap-1">
                Learn More <ArrowRight size={16} />
              </Link>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white border border-border rounded-lg p-8 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Hammer className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Infrastructure Development</h3>
              <p className="text-muted-foreground mb-4">
                Comprehensive road construction, drainage systems, and municipal infrastructure projects.
              </p>
              <Link href="/products" className="text-primary font-semibold hover:gap-2 inline-flex items-center gap-1">
                Learn More <ArrowRight size={16} />
              </Link>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white border border-border rounded-lg p-8 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Commercial Projects</h3>
              <p className="text-muted-foreground mb-4">
                Building institutional structures, schools, health centers, and commercial establishments.
              </p>
              <Link href="/products" className="text-primary font-semibold hover:gap-2 inline-flex items-center gap-1">
                Learn More <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Projects</h2>
            <p className="text-lg text-muted-foreground">Showcasing our latest construction achievements</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {['/construction-1.jpg', '/construction-2.jpg', '/construction-3.jpg', '/construction-4.jpg'].map(
              (src, idx) => (
                <div key={idx} className="relative h-64 md:h-80 rounded-lg overflow-hidden group cursor-pointer">
                  <Image
                    src={src || "/placeholder.svg"}
                    alt={`Project ${idx + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition flex items-end p-6">
                    <h3 className="text-white font-bold text-lg">Project {idx + 1}</h3>
                  </div>
                </div>
              )
            )}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition"
            >
              View All Projects <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Us</h2>
              <div className="space-y-4">
                {[
                  'GST Registered & Certified Construction Company',
                  'Experienced Team of Engineers & Professionals',
                  'State-of-the-Art Equipment & Machinery',
                  'Timely Project Completion Record',
                  'Quality Assurance & Safety Standards',
                  'Client-Focused Approach'
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <CheckCircle2 className="text-accent flex-shrink-0 mt-1" size={20} />
                    <p className="text-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/construction-2.jpg"
                alt="Why choose us"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-lg mb-8 opacity-90">
            Get in touch with our team today to discuss your construction requirements and receive a detailed proposal.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition text-lg"
          >
            Contact Us Now <ArrowRight size={24} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
