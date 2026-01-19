import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CheckCircle2, Award, Users, Target } from 'lucide-react'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <section className="bg-secondary text-secondary-foreground py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg opacity-90">Shri Virbhadra Constructions - Building Trust & Excellence</p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-foreground mb-4 leading-relaxed">
                Shri Virbhadra Constructions has been serving the construction industry across Maharashtra for over 15 years. Founded with a vision to deliver excellence in civil engineering and construction, we have successfully completed over 50 major projects with a combined value exceeding ₹1000 crores.
              </p>
              <p className="text-foreground mb-4 leading-relaxed">
                We specialize in infrastructure development, bridge construction, commercial projects, and material supply. Our commitment to quality, timely delivery, and client satisfaction has made us a trusted partner for government agencies, municipalities, and private enterprises.
              </p>
              <p className="text-foreground leading-relaxed">
                With a team of experienced engineers, project managers, and skilled workers, we ensure every project meets the highest standards of safety, quality, and efficiency.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/construction-3.jpg"
                alt="Company overview"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Information */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Company Profile</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border border-border">
              <h3 className="font-bold text-lg mb-4">Basic Information</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Nature of Business</p>
                  <p className="font-semibold">Service Provider and Others - Works Contract Service Provision</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Company CEO</p>
                  <p className="font-semibold">Milind Kedarling Walwadkar</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Legal Status</p>
                  <p className="font-semibold">Proprietorship</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg border border-border">
              <h3 className="font-bold text-lg mb-4">Statutory Profile</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">GST Registration Date</p>
                  <p className="font-semibold">01-07-2017</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">GST Number</p>
                  <p className="font-semibold">27AABPW5964C1ZH</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Annual Turnover</p>
                  <p className="font-semibold">₹1.5 - 5 Crores</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Our Mission</h3>
              <p className="text-muted-foreground">
                To deliver world-class construction services that exceed client expectations and contribute to India's infrastructure development.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the most trusted and innovative construction company known for quality, integrity, and excellence in project execution.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Our Values</h3>
              <p className="text-muted-foreground">
                Integrity, Quality, Safety, Innovation, and Client Focus drive everything we do in our construction operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Stand Out */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Choose Shri Virbhadra</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="text-accent" size={24} />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Proven Track Record</h3>
                <p className="text-muted-foreground">
                  Over 50 successful projects delivered on time and within budget across diverse sectors.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="text-accent" size={24} />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Expert Team</h3>
                <p className="text-muted-foreground">
                  Experienced engineers, architects, and project managers with decades of combined experience.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="text-accent" size={24} />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Quality Assurance</h3>
                <p className="text-muted-foreground">
                  Rigorous quality control and adherence to international construction standards and safety norms.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="text-accent" size={24} />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Modern Equipment</h3>
                <p className="text-muted-foreground">
                  State-of-the-art machinery and technology for efficient and safe project execution.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="text-accent" size={24} />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Client-Centric Approach</h3>
                <p className="text-muted-foreground">
                  Transparent communication, regular updates, and responsiveness to client needs throughout the project.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="text-accent" size={24} />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Competitive Pricing</h3>
                <p className="text-muted-foreground">
                  Best value for money without compromising on quality or safety standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project Gallery */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Company Album</h2>
            <p className="text-lg text-muted-foreground">Visual showcase of our completed projects</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {['/construction-1.jpg', '/construction-2.jpg', '/construction-3.jpg', '/construction-4.jpg'].map(
              (src, idx) => (
                <div key={idx} className="relative h-72 rounded-lg overflow-hidden group">
                  <Image
                    src={src || "/placeholder.svg"}
                    alt={`Project gallery ${idx + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition flex items-center justify-center">
                    <span className="text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition">
                      Project {idx + 1}
                    </span>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
