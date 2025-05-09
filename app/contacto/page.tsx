import Image from "next/image"
import { MapPin, Phone, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteLayout } from "@/components/site-layout"

export default function ContactPage() {
  return (
    <SiteLayout>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white/90 backdrop-blur-sm my-8 rounded-lg">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contacta con Nosotros</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Estamos aquí para ayudarte a encontrar la propiedad perfecta. Ponte en contacto con nuestro equipo.
              </p>
            </div>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-2 mt-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">Información de Contacto</h2>
                <p className="text-muted-foreground">
                  Puedes contactarnos por teléfono, email o visitando nuestra oficina.
                </p>
              </div>

              <div className="grid gap-4">
                <Card className="bg-white shadow-lg">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base font-medium flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      Teléfono
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>+34 912 345 678</p>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base font-medium flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Email
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>info@ndl.es</p>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base font-medium flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      Dirección
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Calle Principal 123, Córdoba, España</p>
                  </CardContent>
                </Card>
              </div>

              <div className="aspect-video overflow-hidden rounded-lg border">
                <Image
                  src="/images/logo.png"
                  alt="NDL Logo"
                  width={800}
                  height={450}
                  className="h-full w-full object-contain p-8 bg-blue-100"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">Envíanos un Mensaje</h2>
                <p className="text-muted-foreground">
                  Rellena el formulario y nos pondremos en contacto contigo lo antes posible.
                </p>
              </div>

              <form className="space-y-4">
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
                    htmlFor="subject"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Asunto
                  </label>
                  <input
                    id="subject"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Asunto del mensaje"
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
                    className="flex min-h-[150px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Tu mensaje..."
                  />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">Enviar mensaje</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
