import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { AppointmentForm } from '@/components/dental/appointment-form'
import { Header } from '@/components/dental/header'
import {
  Clock,
  Calendar,
  Phone,
  MapPin,
  Mail,
  CheckCircle,
  Users,
  Shield,
  Heart
} from 'lucide-react'
import Link from 'next/link'

export default function AppointmentPage() {
  const officeHours = [
    { day: 'Monday - Friday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 3:00 PM' },
    { day: 'Sunday', hours: 'Emergency Only' }
  ]

  const appointmentBenefits = [
    {
      icon: Clock,
      title: 'Quick & Easy Booking',
      description: 'Schedule your appointment in just a few minutes online or by phone'
    },
    {
      icon: Calendar,
      title: 'Flexible Scheduling',
      description: 'Morning, afternoon, evening, and weekend appointments available'
    },
    {
      icon: Shield,
      title: 'Comprehensive Care',
      description: 'Complete dental examination and personalized treatment planning'
    },
    {
      icon: Heart,
      title: 'Gentle Approach',
      description: 'Patient comfort and anxiety management are our top priorities'
    }
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-accent/20 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Schedule Your Dental Appointment
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Take the first step towards a healthier, more beautiful smile. Our team is ready to provide
              you with exceptional dental care in a comfortable, welcoming environment.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Appointment Form */}
            <div className="lg:col-span-2">
              <AppointmentForm variant="full" />
            </div>

            {/* Sidebar Information */}
            <div className="space-y-6">
              {/* Contact Info */}
              <Card className="bg-white shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="font-heading text-xl text-primary">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3 text-sm">
                    <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-semibold">(555) 123-4567</p>
                      <p className="text-muted-foreground">Call us directly</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-sm">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">123 Dental Street</p>
                      <p className="text-muted-foreground">Health City, HC 12345</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-semibold">info@harmonydental.com</p>
                      <p className="text-muted-foreground">Email us anytime</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Office Hours */}
              <Card className="bg-white shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="font-heading text-xl text-primary">Office Hours</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center text-sm">
                      <span className="font-medium">{schedule.day}</span>
                      <span className="text-muted-foreground">{schedule.hours}</span>
                    </div>
                  ))}
                  <div className="pt-3 border-t border-gray-200">
                    <p className="text-xs text-muted-foreground">
                      Emergency appointments available 24/7. Call our emergency line for urgent care.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card className="bg-red-50 border-red-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="font-heading text-xl text-red-700">Emergency Care</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-red-600 mb-3">
                    Experiencing dental pain or emergency? We're here to help 24/7.
                  </p>
                  <Button asChild variant="destructive" size="sm" className="w-full">
                    <Link href="tel:5551234567">Call Emergency Line</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Book With Harmony Dental?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the difference that personalized, professional dental care can make for your oral health.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {appointmentBenefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                What to Expect at Your Visit
              </h2>
              <p className="text-lg text-muted-foreground">
                Your comfort and understanding are important to us. Here's what happens during your appointment.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm mb-4">
                  1
                </div>
                <h3 className="font-heading text-lg font-semibold mb-3">Welcome & Check-in</h3>
                <p className="text-muted-foreground text-sm">
                  Arrive 15 minutes early to complete paperwork. Our friendly staff will greet you and ensure you're comfortable.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm mb-4">
                  2
                </div>
                <h3 className="font-heading text-lg font-semibold mb-3">Comprehensive Examination</h3>
                <p className="text-muted-foreground text-sm">
                  Dr. Smith will perform a thorough examination, including digital X-rays if needed, to assess your oral health.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm mb-4">
                  3
                </div>
                <h3 className="font-heading text-lg font-semibold mb-3">Treatment Discussion</h3>
                <p className="text-muted-foreground text-sm">
                  We'll discuss our findings, answer your questions, and create a personalized treatment plan if needed.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Card className="bg-accent/10 border-accent/20 max-w-2xl mx-auto">
                <CardContent className="p-8">
                  <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-heading text-xl font-semibold mb-3">First Visit Special</h3>
                  <p className="text-muted-foreground mb-4">
                    New patients receive a comprehensive exam, professional cleaning, and consultation for just $89
                    (regularly $159). Insurance accepted.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Valid for new patients only. Cannot be combined with other offers.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Preparation Tips */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Preparing for Your Visit
              </h2>
              <p className="text-lg text-muted-foreground">
                A few simple steps to ensure your appointment goes smoothly.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="font-heading text-xl text-primary">What to Bring</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">Valid photo ID</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">Insurance cards</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">List of current medications</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">Previous dental records (if available)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">Payment method for any co-pays</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-accent/5 border-accent/20">
                <CardHeader>
                  <CardTitle className="font-heading text-xl text-accent-foreground">Before Your Visit</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Brush and floss your teeth normally</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Arrive 15 minutes early for check-in</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Eat a light meal beforehand if needed</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Prepare questions you'd like to ask</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Inform us of any anxiety or concerns</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
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