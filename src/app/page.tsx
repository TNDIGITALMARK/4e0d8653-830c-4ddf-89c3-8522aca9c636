import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { AppointmentForm } from '@/components/dental/appointment-form'
import { ServiceIconCard } from '@/components/dental/service-card'
import { TestimonialCard } from '@/components/dental/testimonial-card'
import { Header } from '@/components/dental/header'
import { Shield, Smile, Sparkles, Clock, Award, Users, Phone, MapPin, Mail } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  const services = [
    {
      title: 'General Dentistry',
      description: 'Complete oral health care including cleanings, checkups, and preventive treatments.',
      icon: Shield
    },
    {
      title: 'Cosmetic Dentistry',
      description: 'Transform your smile with whitening, veneers, and aesthetic dental procedures.',
      icon: Sparkles
    },
    {
      title: 'Orthodontics',
      description: 'Straighten your teeth with traditional braces or modern clear aligners.',
      icon: Smile
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      review: 'Dr. Smith and the team at Harmony Dental made my experience comfortable and stress-free. The results exceeded my expectations!',
      rating: 5,
      location: 'Health City, HC'
    },
    {
      name: 'Mike Chen',
      review: 'Professional, friendly staff and state-of-the-art facilities. I finally found a dental practice I can trust with my family.',
      rating: 5,
      location: 'Health City, HC'
    },
    {
      name: 'Emily Davis',
      review: 'The cosmetic work they did on my teeth was amazing. I cannot stop smiling! Highly recommend Harmony Dental.',
      rating: 5,
      location: 'Health City, HC'
    }
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/generated/dental-office-hero.png"
            alt="Modern dental office interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40"></div>
        </div>

        <div className="relative py-24 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Experience Gentle,
                  <span className="text-accent"> Advanced</span><br />
                  Dental Care
                </h1>
                <p className="text-lg text-white/90 leading-relaxed max-w-lg">
                  Creating healthy, beautiful smiles with personalized care in a comfortable, modern environment. Your oral health is our priority.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-primary text-lg px-8">
                  <Link href="/appointment">Book Your Visit</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8">
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>

              <div className="flex items-center gap-8 text-sm text-white/80">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-accent" />
                  <span>500+ Happy Patients</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-accent" />
                  <span>15+ Years Experience</span>
                </div>
              </div>
            </div>

            <div className="lg:pl-8">
              <AppointmentForm variant="compact" />
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Commitment to Your Smile
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide comprehensive dental services with the latest technology and gentle care approaches.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <ServiceIconCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
              <Link href="/services">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
              <div className="text-sm opacity-90">Happy Patients</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">15+</div>
              <div className="text-sm opacity-90">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">98%</div>
              <div className="text-sm opacity-90">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
              <div className="text-sm opacity-90">Emergency Care</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Patients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real experiences from real patients who trust us with their smiles.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                review={testimonial.review}
                rating={testimonial.rating}
                location={testimonial.location}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary to-accent text-white border-0">
            <CardContent className="p-12 text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Ready for Your Best Smile Yet?
              </h2>
              <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                Schedule your consultation today and discover why families throughout Health City choose Harmony Dental for their oral health needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100 text-lg px-8">
                  <Link href="/appointment">Schedule Consultation</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8">
                  <Link href="tel:5551234567">Call (555) 123-4567</Link>
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