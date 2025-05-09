import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PropertyCard } from "@/components/property-card"
import { SiteLayout } from "@/components/site-layout"
import { properties } from "@/lib/data"

export default function HomePage() {
  const featuredProperties = properties.slice(0, 3)

  return (
    <SiteLayout>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                  NEW DREAM LOCAL
                </h1>
                <p className="max-w-[600px] text-white/80 md:text-xl">
                  Encuentra tu hogar ideal o local comercial con NDL. Ofrecemos las mejores propiedades para venta y
                  alquiler.
                </p>
              </div>

              <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg border">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="operation-type" className="text-sm font-medium">
                        Operación
                      </label>
                      <select
                        id="operation-type"
                        className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                      >
                        <option value="">Comprar o Alquilar</option>
                        <option value="venta">Comprar</option>
                        <option value="alquiler">Alquilar</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="property-type" className="text-sm font-medium">
                        Tipo de inmueble
                      </label>
                      <select
                        id="property-type"
                        className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                      >
                        <option value="">Todos los tipos</option>
                        <option value="vivienda">Vivienda</option>
                        <option value="trastero">Trastero</option>
                        <option value="local">Local comercial</option>
                        <option value="oficina">Oficina</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="price-range" className="text-sm font-medium">
                        Precio máximo
                      </label>
                      <select
                        id="price-range"
                        className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                      >
                        <option value="">Cualquier precio</option>
                        <option value="100000">Hasta 100.000 €</option>
                        <option value="200000">Hasta 200.000 €</option>
                        <option value="300000">Hasta 300.000 €</option>
                        <option value="500000">Hasta 500.000 €</option>
                        <option value="1000000">Hasta 1.000.000 €</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button type="submit" className="w-full md:w-auto">
                      Buscar propiedades
                    </Button>
                  </div>
                </form>
              </div>

              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/propiedades?tipo=venta">Propiedades en Venta</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-white border-white hover:bg-white/20">
                  <Link href="/propiedades?tipo=alquiler">Propiedades en Alquiler</Link>
                </Button>
              </div>
            </div>
            <div className="mx-auto aspect-video overflow-hidden rounded-xl sm:w-full lg:order-last bg-white/10 backdrop-blur-sm p-8 flex items-center justify-center">
              <Image
                src="/images/logo.png"
                alt="NDL Inmobiliaria"
                width={400}
                height={250}
                className="w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-white/90 backdrop-blur-sm">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Propiedades Destacadas</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Descubre nuestras mejores propiedades disponibles para venta y alquiler.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Button asChild variant="outline" size="lg">
              <Link href="/propiedades">Ver todas las propiedades</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-black/50 backdrop-blur-sm">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary/20 text-primary px-3 py-1 text-sm">
                ¿Por qué elegirnos?
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white">
                Expertos en el mercado inmobiliario
              </h2>
              <p className="max-w-[600px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                En NDL nos especializamos en encontrar la propiedad perfecta para cada cliente. Nuestro equipo de
                profesionales está comprometido con ofrecer un servicio de calidad.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contacto">Contactar ahora</Link>
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <Card className="bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Amplia selección</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Ofrecemos una variedad de propiedades para venta y alquiler en las mejores ubicaciones.</p>
                </CardContent>
              </Card>
              <Card className="bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Asesoramiento personalizado</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Nuestros agentes te guiarán en todo el proceso de compra o alquiler.</p>
                </CardContent>
              </Card>
              <Card className="bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Transparencia</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Información clara y detallada sobre cada propiedad y sus condiciones.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
