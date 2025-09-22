import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { LucideIcon } from 'lucide-react'
import Link from 'next/link'

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  price?: string
  duration?: string
  features?: string[]
  popular?: boolean
  className?: string
  onBookNow?: () => void
}

export function ServiceCard({
  title,
  description,
  icon: Icon,
  price,
  duration,
  features,
  popular = false,
  className,
  onBookNow
}: ServiceCardProps) {
  return (
    <Card className={`relative transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
      popular ? 'ring-2 ring-primary border-primary' : 'border-gray-200'
    } ${className}`}>
      {popular && (
        <Badge className="absolute -top-2 left-1/2 -translate-x-1/2 bg-primary text-white">
          Most Popular
        </Badge>
      )}

      <CardHeader className="text-center pb-4">
        <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${
          popular ? 'bg-primary text-white' : 'bg-accent text-primary'
        }`}>
          <Icon className="w-8 h-8" />
        </div>

        <CardTitle className="font-heading text-xl text-foreground">{title}</CardTitle>

        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          {price && (
            <>
              <span className="font-semibold text-primary">{price}</span>
              {duration && <span>•</span>}
            </>
          )}
          {duration && <span>{duration}</span>}
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <CardDescription className="text-center text-base leading-relaxed">
          {description}
        </CardDescription>

        {features && features.length > 0 && (
          <ul className="space-y-2 text-sm text-muted-foreground">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        )}

        <Button
          asChild
          variant={popular ? "default" : "outline"}
          className={`w-full mt-6 ${popular ? 'bg-primary hover:bg-primary/90' : 'border-primary text-primary hover:bg-primary hover:text-white'}`}
        >
          <Link href="/appointment">Book Appointment</Link>
        </Button>
      </CardContent>
    </Card>
  )
}

interface ServiceIconCardProps {
  title: string
  description: string
  icon: LucideIcon
  className?: string
}

export function ServiceIconCard({ title, description, icon: Icon, className }: ServiceIconCardProps) {
  return (
    <div className={`text-center group ${className}`}>
      <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-accent flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
        <Icon className="w-10 h-10 text-primary group-hover:text-white" />
      </div>
      <h3 className="font-heading text-lg text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  )
}