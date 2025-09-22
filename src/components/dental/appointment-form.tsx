'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Calendar, Clock, User, Phone, Mail } from 'lucide-react'

interface AppointmentFormProps {
  variant?: 'compact' | 'full'
  className?: string
}

export function AppointmentForm({ variant = 'compact', className }: AppointmentFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    preferredDate: '',
    preferredTime: '',
    notes: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Appointment booked:', formData)
    // Handle form submission
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  if (variant === 'compact') {
    return (
      <Card className={`bg-white/95 backdrop-blur-sm border-0 shadow-lg ${className}`}>
        <CardHeader className="pb-4">
          <CardTitle className="font-heading text-lg text-primary">Schedule Your Visit</CardTitle>
          <CardDescription className="text-sm">Book your appointment online</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="border-gray-200"
              />
            </div>

            <div>
              <Input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="border-gray-200"
              />
            </div>

            <div>
              <Select onValueChange={(value) => handleInputChange('service', value)}>
                <SelectTrigger className="border-gray-200">
                  <SelectValue placeholder="Select Service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cleaning">General Cleaning</SelectItem>
                  <SelectItem value="checkup">Routine Checkup</SelectItem>
                  <SelectItem value="consultation">Consultation</SelectItem>
                  <SelectItem value="cosmetic">Cosmetic Dentistry</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <Input
                type="date"
                placeholder="Preferred Date"
                value={formData.preferredDate}
                onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                className="border-gray-200"
              />
              <Select onValueChange={(value) => handleInputChange('preferredTime', value)}>
                <SelectTrigger className="border-gray-200">
                  <SelectValue placeholder="Time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="9:00">9:00 AM</SelectItem>
                  <SelectItem value="11:00">11:00 AM</SelectItem>
                  <SelectItem value="14:00">2:00 PM</SelectItem>
                  <SelectItem value="16:00">4:00 PM</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
              Schedule Now
            </Button>
          </form>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className={`max-w-2xl mx-auto bg-white shadow-xl ${className}`}>
      <CardHeader className="text-center pb-6">
        <CardTitle className="font-heading text-2xl text-primary">Book Your Appointment</CardTitle>
        <CardDescription className="text-base">
          Schedule your dental visit at your convenience
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Full Name *
              </Label>
              <Input
                id="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Phone Number *
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label>Service Type *</Label>
            <Select onValueChange={(value) => handleInputChange('service', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select the service you need" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="general-cleaning">General Cleaning & Checkup</SelectItem>
                <SelectItem value="cosmetic-consultation">Cosmetic Consultation</SelectItem>
                <SelectItem value="teeth-whitening">Teeth Whitening</SelectItem>
                <SelectItem value="orthodontics">Orthodontics Consultation</SelectItem>
                <SelectItem value="emergency">Emergency Appointment</SelectItem>
                <SelectItem value="pediatric">Pediatric Dentistry</SelectItem>
                <SelectItem value="oral-surgery">Oral Surgery Consultation</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date" className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Preferred Date *
              </Label>
              <Input
                id="date"
                type="date"
                value={formData.preferredDate}
                onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                required
                min={new Date().toISOString().split('T')[0]}
              />
            </div>

            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Preferred Time *
              </Label>
              <Select onValueChange={(value) => handleInputChange('preferredTime', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select preferred time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="8:00">8:00 AM</SelectItem>
                  <SelectItem value="9:00">9:00 AM</SelectItem>
                  <SelectItem value="10:00">10:00 AM</SelectItem>
                  <SelectItem value="11:00">11:00 AM</SelectItem>
                  <SelectItem value="13:00">1:00 PM</SelectItem>
                  <SelectItem value="14:00">2:00 PM</SelectItem>
                  <SelectItem value="15:00">3:00 PM</SelectItem>
                  <SelectItem value="16:00">4:00 PM</SelectItem>
                  <SelectItem value="17:00">5:00 PM</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Additional Notes</Label>
            <Textarea
              id="notes"
              placeholder="Any special requirements or information we should know..."
              value={formData.notes}
              onChange={(e) => handleInputChange('notes', e.target.value)}
              rows={3}
            />
          </div>

          <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-lg py-3">
            Schedule My Appointment
          </Button>

          <p className="text-sm text-muted-foreground text-center">
            We will confirm your appointment within 24 hours
          </p>
        </form>
      </CardContent>
    </Card>
  )
}