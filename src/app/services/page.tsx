import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ServiceCard, ServiceIconCard } from '@/components/dental/service-card'
import { Header } from '@/components/dental/header'
import {
  Shield,
  Sparkles,
  Smile,
  Baby,
  Scissors,
  Zap,
  Heart,
  Clock,
  CheckCircle,
  Star,
  Phone,
  MapPin,
  Mail
} from 'lucide-react'
import Link from 'next/link'

export default function ServicesPage() {
  const mainServices = [
    {
      title: 'General Cleaning & Checkup',
      description: 'Comprehensive oral examination, professional cleaning, and preventive care to maintain optimal dental health.',
      icon: Shield,
      price: 'From $89',
      duration: '60 min',
      features: [
        'Complete oral examination',
        'Professional teeth cleaning',
        'Plaque and tartar removal',
        'Fluoride treatment',
        'Oral health assessment',
        'Personalized care plan'
      ],
      popular: true
    },
    {
      title: 'Cosmetic Consultation',
      description: 'Personalized assessment and treatment planning for smile enhancement and aesthetic improvements.',
      icon: Sparkles,
      price: 'From $129',
      duration: '45 min',
      features: [
        'Smile analysis and assessment',
        'Digital smile preview',
        'Treatment options review',
        'Cost estimation',
        'Before/after comparisons',
        'Customized treatment plan'
      ]
    },
    {
      title: 'Teeth Whitening',
      description: 'Professional-grade whitening treatment to brighten your smile safely and effectively.',
      icon: Star,
      price: 'From $299',
      duration: '90 min',
      features: [
        'Professional whitening gel',
        'LED light activation',
        'Up to 8 shades lighter',
        'Immediate results',
        'Take-home maintenance kit',
        '1-year touch-up warranty'
      ]
    },
    {
      title: 'Orthodontics Consultation',
      description: 'Expert evaluation for teeth straightening options including traditional braces and clear aligners.',
      icon: Smile,
      price: 'Free Consultation',
      duration: '30 min',
      features: [
        'Comprehensive bite analysis',
        'Digital imaging and X-rays',
        'Treatment timeline discussion',
        'Braces vs aligners comparison',
        'Payment plan options',
        'No-obligation consultation'
      ]
    },
    {
      title: 'Emergency Appointment',
      description: 'Immediate dental care for urgent situations including pain relief and emergency treatments.',
      icon: Zap,
      price: 'From $149',
      duration: '30-60 min',
      features: [
        'Same-day appointments available',
        'Pain management and relief',
        'Urgent dental repairs',
        'Infection treatment',
        '24/7 emergency hotline',
        'Insurance accepted'
      ]
    },
    {
      title: 'Pediatric Dentistry',
      description: 'Specialized dental care designed specifically for children in a fun, comfortable environment.',
      icon: Baby,
      price: 'From $69',
      duration: '45 min',
      features: [
        'Child-friendly environment',
        'Gentle examination techniques',
        'Preventive treatments',
        'Education and oral hygiene tips',
        'Fluoride applications',
        'Parent consultation included'
      ]
    }
  ]

  const additionalServices = [
    {
      title: 'Root Canal Therapy',
      description: 'Advanced endodontic treatment to save infected teeth with modern pain-free techniques.',
      icon: Heart
    },
    {
      title: 'Dental Implants',
      description: 'Permanent tooth replacement solutions for missing teeth with natural-looking results.',
      icon: CheckCircle
    },
    {
      title: 'Oral Surgery',
      description: 'Specialized surgical procedures including wisdom teeth removal and advanced treatments.',
      icon: Scissors
    },
    {
      title: 'Periodontal Care',
      description: 'Comprehensive gum disease treatment and prevention for optimal gum health.',
      icon: Shield
    }
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-accent/20 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Comprehensive Dental Services
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              From routine cleanings to advanced cosmetic procedures, we offer complete dental care
              tailored to your unique needs in a comfortable, modern environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                <Link href="/appointment">Schedule Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white text-lg px-8">
                <Link href="tel:5551234567">Call (555) 123-4567</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Featured Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional dental treatments designed to keep your smile healthy, beautiful, and confident.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {mainServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                price={service.price}
                duration={service.duration}
                features={service.features}
                popular={service.popular}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Additional Specialized Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Advanced dental treatments for complex cases requiring specialized care and expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <ServiceIconCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Interested in learning more about our specialized services?
            </p>
            <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
              <Link href="/appointment">Request Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Harmony Dental?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">Flexible Scheduling</h3>
              <p className="text-muted-foreground">
                Morning, evening, and weekend appointments available to fit your busy lifestyle.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">Advanced Technology</h3>
              <p className="text-muted-foreground">
                State-of-the-art equipment and modern techniques for comfortable, effective treatment.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">Gentle Care</h3>
              <p className="text-muted-foreground">
                Patient comfort is our priority with pain-free procedures and anxiety management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance & Payment */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Insurance & Payment Options
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              We work with most insurance plans and offer flexible payment options to make quality dental care accessible.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <CheckCircle className="w-12 h-12 mx-auto mb-4 opacity-90" />
              <h3 className="text-xl font-semibold mb-2">Insurance Accepted</h3>
              <p className="opacity-80">We work with most major insurance providers</p>
            </div>
            <div>
              <Clock className="w-12 h-12 mx-auto mb-4 opacity-90" />
              <h3 className="text-xl font-semibold mb-2">Flexible Payment Plans</h3>
              <p className="opacity-80">Interest-free financing options available</p>
            </div>
            <div>
              <Star className="w-12 h-12 mx-auto mb-4 opacity-90" />
              <h3 className="text-xl font-semibold mb-2">Transparent Pricing</h3>
              <p className="opacity-80">No hidden fees, upfront cost estimates</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto bg-white shadow-xl border-0">
            <CardContent className="p-12 text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Transform Your Smile?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Schedule your consultation today and let our experienced team create a personalized treatment plan just for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                  <Link href="/appointment">Book Your Appointment</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white text-lg px-8">
                  <Link href="/contact">Ask a Question</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="font-heading text-lg font-bold">Harmony Dental</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Creating healthy, beautiful smiles with personalized care in Health City for over 15 years.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
                <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
                <li><Link href="/appointment" className="text-gray-300 hover:text-white transition-colors">Appointments</Link></li>
                <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Services</h4>
              <ul className="space-y-2 text-sm">
                <li className="text-gray-300">General Dentistry</li>
                <li className="text-gray-300">Cosmetic Dentistry</li>
                <li className="text-gray-300">Orthodontics</li>
                <li className="text-gray-300">Emergency Care</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Contact Info</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5" />
                  <span>123 Dental Street<br />Health City, HC 12345</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>info@harmonydental.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-sm text-gray-400">
              © 2025 Harmony Dental. All rights reserved. | Privacy Policy | Terms of Service
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}