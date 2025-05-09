import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { SiteLayout } from "@/components/site-layout"

export default function RecoverPasswordPage() {
  return (
    <SiteLayout>
      <div className="container flex items-center justify-center min-h-[calc(100vh-200px)] py-12">
        <Card className="mx-auto max-w-md w-full bg-white/90 backdrop-blur-sm shadow-lg">
          <CardHeader className="space-y-1 text-center">
            <div className="flex justify-center mb-4">
              <Image src="/images/logo.png" alt="NDL Logo" width={80} height={80} className="h-16 w-auto" />
            </div>
            <CardTitle className="text-2xl font-bold">Recuperar contraseña</CardTitle>
            <CardDescription>Ingresa tu correo electrónico para recibir instrucciones de recuperación</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Correo electrónico</Label>
              <Input id="email" type="email" placeholder="tu@email.com" />
            </div>
            <Button className="w-full bg-primary hover:bg-primary/90">Enviar instrucciones</Button>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div className="text-center text-sm">
              ¿Recordaste tu contraseña?{" "}
              <Link href="/login" className="text-primary hover:underline">
                Volver al inicio de sesión
              </Link>
            </div>
            <Button variant="outline" asChild className="w-full">
              <Link href="/" className="flex items-center justify-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Volver al inicio
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </SiteLayout>
  )
}
