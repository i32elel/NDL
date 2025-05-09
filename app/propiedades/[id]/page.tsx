"use client"

import { useParams, notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Bath, Bed, Euro, MapPin, Phone, Mail, SquareIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { SiteLayout } from "@/components/site-layout"
import { properties } from "@/lib/data"

export default function PropertyDetailPage() {
  const params = useParams()
  const property = properties.find((p) => p.id === params.id)

  if (!property) {
    notFound()
  }

  return (
    <SiteLayout>
      <div className="container px-4 py-8 md:px-6 md:py-12 bg-white/90 backdrop-blur-sm my-8 rounded-lg">
        <Button variant="ghost" asChild className="mb-6">
          <Link href="/propiedades" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Volver a propiedades
          </Link>
        </Button>

        <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
          <div className="lg:col-span-2">
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-sm font-semibold">
                  {property.type === "venta" ? "En venta" : "En alquiler"}
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{property.title}</h1>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{property.location}</span>
                </div>
              </div>

              <div className="aspect-video overflow-hidden rounded-lg">
                <Image
                  src={property.image || "/placeholder.svg"}
                  alt={property.title}
                  width={800}
                  height={450}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="grid grid-cols-3 gap-4 sm:grid-cols-4">
                <div className="flex flex-col items-center justify-center rounded-lg border p-4">
                  <Bed className="h-5 w-5 mb-2" />
                  <span className="text-sm font-medium">{property.bedrooms} Habitaciones</span>
                </div>
                <div className="flex flex-col items-center justify-center rounded-lg border p-4">
                  <Bath className="h-5 w-5 mb-2" />
                  <span className="text-sm font-medium">{property.bathrooms} Baños</span>
                </div>
                <div className="flex flex-col items-center justify-center rounded-lg border p-4">
                  <SquareIcon className="h-5 w-5 mb-2" />
                  <span className="text-sm font-medium">{property.area} m²</span>
                </div>
                <div className="flex flex-col items-center justify-center rounded-lg border p-4">
                  <Euro className="h-5 w-5 mb-2" />
                  <span className="text-sm font-medium">{property.price.toLocaleString()} €</span>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Descripción</h2>
                <p className="text-muted-foreground">{property.description}</p>
              </div>

              <Separator />

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Características</h2>
                <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {property.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div>
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Contactar con el agente</h3>
                    <p className="text-sm text-muted-foreground">
                      Rellena el formulario y nos pondremos en contacto contigo lo antes posible.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="grid gap-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Nombre
                      </label>
                      <input
                        id="name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div className="grid gap-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="tu@email.com"
                      />
                    </div>
                    <div className="grid gap-2">
                      <label
                        htmlFor="phone"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Teléfono
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Tu teléfono"
                      />
                    </div>
                    <div className="grid gap-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Mensaje
                      </label>
                      <textarea
                        id="message"
                        className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Me interesa esta propiedad..."
                      />
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary/90">Enviar mensaje</Button>
                  </div>
                  <Separator />
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      <span>+34 912 345 678</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      <span>info@ndl.es</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </SiteLayout>
  )
}
