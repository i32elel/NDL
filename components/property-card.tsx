import Link from "next/link"
import Image from "next/image"
import { Bath, Bed, MapPin, SquareIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import type { PropertyType } from "@/lib/data"

interface PropertyCardProps {
  property: PropertyType
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative">
        <Link href={`/propiedades/${property.id}`}>
          <Image
            src={property.image || "/placeholder.svg"}
            alt={property.title}
            width={400}
            height={225}
            className="h-48 w-full object-cover transition-all hover:scale-105"
          />
        </Link>
        <Badge className="absolute top-2 right-2">{property.type === "venta" ? "En venta" : "En alquiler"}</Badge>
      </div>
      <CardContent className="p-4">
        <div className="space-y-2">
          <div className="space-y-1">
            <h3 className="font-semibold">
              <Link href={`/propiedades/${property.id}`}>{property.title}</Link>
            </h3>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <MapPin className="h-3 w-3" />
              <span>{property.location}</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm">
              <div className="flex items-center gap-1">
                <Bed className="h-3 w-3" />
                <span>{property.bedrooms}</span>
              </div>
              <div className="flex items-center gap-1">
                <Bath className="h-3 w-3" />
                <span>{property.bathrooms}</span>
              </div>
              <div className="flex items-center gap-1">
                <SquareIcon className="h-3 w-3" />
                <span>{property.area} m²</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <div className="flex items-center justify-between w-full">
          <div className="font-semibold">
            {property.price.toLocaleString()} €
            {property.type === "alquiler" && <span className="text-sm font-normal text-muted-foreground">/mes</span>}
          </div>
          <Link
            href={`/propiedades/${property.id}`}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-3"
          >
            Ver detalles
          </Link>
        </div>
      </CardFooter>
    </Card>
  )
}
