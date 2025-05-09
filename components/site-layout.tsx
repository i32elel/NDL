import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SiteLayoutProps {
  children: React.ReactNode
}

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Fondo con overlay */}
      <div className="fixed inset-0 z-0">
        <Image src="/images/background.jpg" alt="Fondo de edificios modernos" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Contenido */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-md">
          <div className="container flex items-center justify-between h-16 px-4 md:px-6">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/images/logo.png" alt="NDL Logo" width={40} height={40} className="h-8 w-auto" />
              <span className="text-xl font-bold">NDL</span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link href="/" className="font-medium text-white hover:text-primary transition-colors">
                Inicio
              </Link>
              <Link href="/propiedades" className="font-medium text-white hover:text-primary transition-colors">
                Propiedades
              </Link>
              <Link href="/contacto" className="font-medium text-white hover:text-primary transition-colors">
                Contacto
              </Link>
              <Link href="/sobre-nosotros" className="font-medium text-white hover:text-primary transition-colors">
                ¿Quiénes somos?
              </Link>
            </nav>
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link href="/login">Iniciar Sesión</Link>
            </Button>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t bg-background/80 backdrop-blur-md mt-auto">
          <div className="container flex flex-col gap-6 py-8 md:py-12 px-4 md:px-6">
            <div className="flex flex-col gap-6 md:flex-row md:justify-between">
              <div className="space-y-4">
                <Link href="/" className="flex items-center gap-2">
                  <Image src="/images/logo.png" alt="NDL Logo" width={40} height={40} className="h-8 w-auto" />
                  <span className="text-xl font-bold text-white">NDL</span>
                </Link>
                <p className="max-w-[350px] text-white/80">
                  NEW DREAM LOCAL - Tu inmobiliaria de confianza para encontrar el hogar o local de tus sueños.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
                <div className="space-y-3">
                  <h3 className="text-sm font-medium text-white">Navegación</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/" className="text-sm text-white/70 hover:text-white transition-colors">
                        Inicio
                      </Link>
                    </li>
                    <li>
                      <Link href="/propiedades" className="text-sm text-white/70 hover:text-white transition-colors">
                        Propiedades
                      </Link>
                    </li>
                    <li>
                      <Link href="/contacto" className="text-sm text-white/70 hover:text-white transition-colors">
                        Contacto
                      </Link>
                    </li>
                    <li>
                      <Link href="/sobre-nosotros" className="text-sm text-white/70 hover:text-white transition-colors">
                        ¿Quiénes somos?
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="text-sm font-medium text-white">Propiedades</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/propiedades?tipo=venta"
                        className="text-sm text-white/70 hover:text-white transition-colors"
                      >
                        En venta
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/propiedades?tipo=alquiler"
                        className="text-sm text-white/70 hover:text-white transition-colors"
                      >
                        En alquiler
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="text-sm font-medium text-white">Contacto</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-white/70">
                      <Phone className="h-4 w-4" />
                      <span>+34 912 345 678</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-white/70">
                      <Mail className="h-4 w-4" />
                      <span>info@ndl.es</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-white/70">
                      <MapPin className="h-4 w-4" />
                      <span>Córdoba, España</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="border-t border-white/20 pt-6">
              <p className="text-center text-sm text-white/70">
                © {new Date().getFullYear()} NEW DREAM LOCAL. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
