import Link from "next/link"
import Image from "next/image"
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Home,
  Building,
  FileText,
  Camera,
  FileCheck,
  MessageSquare,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { SiteLayout } from "@/components/site-layout"

export default function AboutPage() {
  return (
    <SiteLayout>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black/50 backdrop-blur-sm">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                <Building className="inline-block mr-2 h-10 w-10" /> ¿Quiénes somos? — NDL: New Dream Local
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-white/90 backdrop-blur-sm my-8 rounded-lg">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 items-start">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground">
                NDL (New Dream Local) es una empresa inmobiliaria dedicada a ayudarte a encontrar el hogar o la
                inversión perfecta. Nuestro objetivo es conectar sueños con realidades a través de un servicio
                profesional, cercano y eficiente. Ya sea que busques comprar una vivienda, invertir en propiedades, o
                informarte sobre el mercado inmobiliario, en NDL te acompañamos en cada paso del camino.
              </p>
              <p className="text-lg text-muted-foreground">
                Con una sólida experiencia en el sector y un equipo comprometido, ofrecemos una atención 100%
                personalizada para garantizar decisiones seguras y satisfactorias.
              </p>
              <div className="rounded-lg border bg-card p-6 text-center">
                <blockquote className="text-xl italic font-semibold">
                  "Transformamos lugares en hogares y oportunidades en logros."
                </blockquote>
              </div>
            </div>
            <div className="aspect-video overflow-hidden rounded-xl">
              <Image
                src="/images/logo.png"
                alt="NDL Inmobiliaria"
                width={600}
                height={400}
                className="h-full w-full object-cover bg-blue-100 p-8"
              />
            </div>
          </div>
        </div>
      </section>

      <Separator className="bg-white/20" />

      <section className="w-full py-12 md:py-24 bg-black/50 backdrop-blur-sm">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
                <MessageSquare className="inline-block mr-2 h-8 w-8" /> Servicios que ofrecemos
              </h2>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Home className="h-5 w-5" />
                  Compra y venta de propiedades
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Te ayudamos a vender o encontrar pisos, casas, chalets o terrenos con una estrategia profesional de
                  valoración, marketing y asesoramiento legal.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  Asesoramiento inmobiliario personalizado
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Brindamos atención individualizada según tu perfil, presupuesto y objetivos. Nuestro equipo te orienta
                  en cada paso del proceso.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="h-5 w-5" />
                  Valoración de inmuebles
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  ¿Quieres saber cuánto vale tu propiedad? Realizamos valoraciones gratuitas y realistas según el
                  mercado actual.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Camera className="h-5 w-5" />
                  Fotografía y promoción profesional
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Creamos fichas visuales atractivas con fotos, descripciones detalladas y presencia en los principales
                  portales.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileCheck className="h-5 w-5" />
                  Gestión documental y jurídica
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Nos encargamos de trámites, contratos, certificados energéticos, escrituras, impuestos y todo lo
                  necesario.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Atención al cliente multicanal
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Atendemos vía web, teléfono, email, WhatsApp y redes sociales. Siempre a tu alcance.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="bg-white/20" />

      <section className="w-full py-12 md:py-24 bg-white/90 backdrop-blur-sm my-8 rounded-lg">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                <Phone className="inline-block mr-2 h-8 w-8" /> Contacto
              </h2>
            </div>
          </div>

          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="text-lg font-semibold">Dirección:</h3>
                  <p className="text-muted-foreground">
                    Calle del Sueño Nº7, Local B<br />
                    28080, Madrid, España
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="text-lg font-semibold">Teléfono:</h3>
                  <p className="text-muted-foreground">+34 912 345 678</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="text-lg font-semibold">WhatsApp:</h3>
                  <p className="text-muted-foreground">+34 655 123 456</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="text-lg font-semibold">Correo electrónico:</h3>
                  <p className="text-muted-foreground">info@ndl-inmobiliaria.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FileText className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="text-lg font-semibold">Sitio web:</h3>
                  <p className="text-muted-foreground">www.ndl-inmobiliaria.com</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Redes sociales:</h3>
              <div className="flex flex-col gap-4">
                <Link
                  href="https://facebook.com/NDLInmobiliaria"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Facebook className="h-6 w-6 text-primary" />
                  <span>Facebook: NDLInmobiliaria</span>
                </Link>
                <Link
                  href="https://instagram.com/ndl_inmo"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Instagram className="h-6 w-6 text-primary" />
                  <span>Instagram: @ndl_inmo</span>
                </Link>
                <Link
                  href="https://linkedin.com/company/ndl-new-dream-local"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin className="h-6 w-6 text-primary" />
                  <span>LinkedIn: NDL - New Dream Local</span>
                </Link>
              </div>
              <div className="mt-8">
                <Button asChild size="lg" className="w-full bg-primary hover:bg-primary/90">
                  <Link href="/contacto">Contactar ahora</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
