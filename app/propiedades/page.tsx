"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { Filter } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PropertyCard } from "@/components/property-card"
import { SiteLayout } from "@/components/site-layout"
import { properties } from "@/lib/data"

export default function PropertiesPage() {
  const searchParams = useSearchParams()
  const initialTab = searchParams.get("tipo") === "alquiler" ? "alquiler" : "todos"
  const [activeTab, setActiveTab] = useState(initialTab)

  const filteredProperties =
    activeTab === "todos"
      ? properties
      : activeTab === "venta"
        ? properties.filter((p) => p.type === "venta")
        : properties.filter((p) => p.type === "alquiler")

  return (
    <SiteLayout>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white/90 backdrop-blur-sm">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nuestras Propiedades</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explora nuestra selección de propiedades disponibles para venta y alquiler.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
              <div className="flex items-center justify-between mb-4">
                <TabsList>
                  <TabsTrigger value="todos">Todos</TabsTrigger>
                  <TabsTrigger value="venta">En Venta</TabsTrigger>
                  <TabsTrigger value="alquiler">En Alquiler</TabsTrigger>
                </TabsList>
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  <span className="text-sm font-medium">Filtros</span>
                </div>
              </div>

              <TabsContent value="todos" className="mt-0">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {properties.map((property) => (
                    <PropertyCard key={property.id} property={property} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="venta" className="mt-0">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {properties
                    .filter((property) => property.type === "venta")
                    .map((property) => (
                      <PropertyCard key={property.id} property={property} />
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="alquiler" className="mt-0">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {properties
                    .filter((property) => property.type === "alquiler")
                    .map((property) => (
                      <PropertyCard key={property.id} property={property} />
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
