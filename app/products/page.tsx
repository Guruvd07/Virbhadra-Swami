import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CheckCircle2, ArrowRight } from 'lucide-react'

const products = [
  {
    id: 1,
    name: 'Steel Bridges',
    description: 'High-quality steel bridge construction for highways and urban road networks',
    details: [
      'Modern design with earthquake resistance',
      'Heavy load capacity structures',
      'Corrosion-resistant steel materials',
      'Complete engineering support'
    ],
    available: true
  },
  {
    id: 2,
    name: 'Iron Doors & Gates',
    description: 'Durable iron doors and security gates for residential and commercial use',
    details: [
      'Powder-coated finish',
      'Anti-corrosion treatment',
      'Customizable designs',
      'Weather-resistant quality'
    ],
    available: true
  },
  {
    id: 3,
    name: 'Iron Rods & Steel Structures',
    description: 'Premium quality iron rods and structural steel for construction projects',
    details: [
      'ISI certified materials',
      'Various grades available',
      'Bulk quantity discounts',
      'Same-day delivery options'
    ],
    available: true
  },
  {
    id: 4,
    name: 'Steel Doors & Shutters',
    description: 'Heavy-duty steel doors designed for security and durability',
    details: [
      'Fire-resistant options',
      'Enhanced security features',
      'Customizable specifications',
      'Professional installation support'
    ],
    available: true
  },
  {
    id: 5,
    name: 'Concrete & Road Construction',
    description: 'Complete road construction services with high-grade concrete solutions',
    details: [
      'Quality concrete mixtures',
      'Modern paving techniques',
      'Drainage system integration',
      'Project management expertise'
    ],
    available: true
  },
  {
    id: 6,
    name: 'Commercial Building Solutions',
    description: 'Full-service construction for commercial and institutional projects',
    details: [
      'Architectural design support',
      'Timeline management',
      'Budget-efficient solutions',
      'Quality workmanship guarantee'
    ],
    available: true
  }
]

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <section className="bg-secondary text-secondary-foreground py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Products & Services</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            Comprehensive construction solutions tailored to meet your project requirements
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-border rounded-lg overflow-hidden hover:shadow-lg transition"
              >
                <div className="relative h-48 bg-muted">
                  <Image
                    src={`/construction-${(product.id % 4) + 1}.jpg`}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-muted-foreground mb-4">{product.description}</p>

                  <div className="space-y-2 mb-6">
                    {product.details.map((detail, idx) => (
                      <div key={idx} className="flex gap-2 items-start">
                        <CheckCircle2 size={16} className="text-accent flex-shrink-0 mt-1" />
                        <span className="text-sm text-foreground">{detail}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-accent">
                      {product.available ? '1 product available' : 'Unavailable'}
                    </span>
                    <Link
                      href="/contact"
                      className="text-primary hover:text-primary/80 font-semibold text-sm flex items-center gap-1"
                    >
                      Inquire <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Service Categories</h2>
            <p className="text-lg text-muted-foreground">We specialize in multiple construction sectors</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Civil Engineering',
                items: ['Road Construction', 'Bridge Projects', 'Drainage Systems', 'Utility Infrastructure']
              },
              {
                title: 'Commercial Construction',
                items: ['Office Buildings', 'Retail Spaces', 'Educational Institutions', 'Healthcare Facilities']
              },
              {
                title: 'Material Supply',
                items: ['Steel Structures', 'Iron Rods & Doors', 'Concrete Solutions', 'Construction Materials']
              },
              {
                title: 'Project Management',
                items: ['Design Consultation', 'Timeline Management', 'Quality Assurance', 'Safety Compliance']
              }
            ].map((category, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                <ul className="space-y-3">
                  {category.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-center gap-2 text-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Custom Solutions?</h2>
          <p className="mb-6 opacity-90">Contact our team to discuss your specific requirements</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition"
          >
            Request Quote <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
