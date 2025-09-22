import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Star } from 'lucide-react'

interface TestimonialCardProps {
  name: string
  review: string
  rating: number
  image?: string
  location?: string
  className?: string
}

export function TestimonialCard({
  name,
  review,
  rating,
  image,
  location,
  className
}: TestimonialCardProps) {
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase()

  return (
    <Card className={`h-full bg-white border-gray-200 transition-all duration-300 hover:shadow-lg ${className}`}>
      <CardContent className="p-6">
        <div className="flex items-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < rating
                  ? 'text-yellow-400 fill-yellow-400'
                  : 'text-gray-300'
              }`}
            />
          ))}
        </div>

        <blockquote className="text-gray-700 leading-relaxed mb-6">
          "{review}"
        </blockquote>

        <div className="flex items-center gap-3">
          <Avatar className="w-10 h-10">
            {image ? (
              <AvatarImage src={image} alt={name} />
            ) : (
              <AvatarFallback className="bg-accent text-primary font-semibold">
                {initials}
              </AvatarFallback>
            )}
          </Avatar>
          <div>
            <p className="font-semibold text-foreground">{name}</p>
            {location && (
              <p className="text-sm text-muted-foreground">{location}</p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

interface TestimonialCompactProps {
  name: string
  review: string
  rating: number
  image?: string
  className?: string
}

export function TestimonialCompact({
  name,
  review,
  rating,
  image,
  className
}: TestimonialCompactProps) {
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase()

  return (
    <div className={`p-4 bg-white rounded-lg border border-gray-200 ${className}`}>
      <div className="flex items-center gap-1 mb-2">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-3 h-3 ${
              i < rating
                ? 'text-yellow-400 fill-yellow-400'
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>

      <p className="text-sm text-gray-700 leading-relaxed mb-3">
        "{review}"
      </p>

      <div className="flex items-center gap-2">
        <Avatar className="w-6 h-6">
          {image ? (
            <AvatarImage src={image} alt={name} />
          ) : (
            <AvatarFallback className="bg-accent text-primary text-xs font-semibold">
              {initials}
            </AvatarFallback>
          )}
        </Avatar>
        <p className="text-xs font-semibold text-foreground">{name}</p>
      </div>
    </div>
  )
}