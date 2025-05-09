export interface PropertyType {
  id: string
  title: string
  description: string
  type: "venta" | "alquiler"
  price: number
  location: string
  area: number
  bedrooms: number
  bathrooms: number
  image: string
  features: string[]
}

export const properties: PropertyType[] = [
  {
    id: "VIV-001",
    title: "Piso 2H Ciudad Jardín",
    description:
      "Hermoso piso de 2 habitaciones ubicado en la tranquila zona de Ciudad Jardín. Perfecto para parejas o pequeñas familias que buscan un hogar acogedor en una zona residencial.",
    type: "venta",
    price: 168181,
    location: "Ciudad Jardín, Córdoba",
    area: 66,
    bedrooms: 2,
    bathrooms: 1,
    image: "/images/VIV-001.png",
    features: [
      "Cocina equipada",
      "Armarios empotrados",
      "Balcón",
      "Aire acondicionado",
      "Calefacción",
      "Ascensor",
      "Plaza de garaje",
    ],
  },
  {
    id: "VIV-002",
    title: "PISO 3H Gran Capital",
    description:
      "Amplio piso de 3 habitaciones en la zona de Gran Capital. Ideal para familias que buscan espacio y comodidad en una de las mejores zonas de Córdoba, con todos los servicios cerca.",
    type: "venta",
    price: 190384,
    location: "Gran Capital, Córdoba",
    area: 88,
    bedrooms: 3,
    bathrooms: 2,
    image: "/images/VIV-002.png",
    features: [
      "Cocina equipada",
      "Armarios empotrados",
      "Terraza",
      "Aire acondicionado",
      "Calefacción",
      "Ascensor",
      "Plaza de garaje",
      "Trastero",
    ],
  },
  {
    id: "VIV-003",
    title: "Piso 2H Ciudad Jardín",
    description:
      "Acogedor piso de 2 habitaciones en alquiler en Ciudad Jardín. Perfecto para estudiantes o jóvenes profesionales que buscan un lugar tranquilo y bien comunicado.",
    type: "alquiler",
    price: 600,
    location: "Ciudad Jardín, Córdoba",
    area: 70,
    bedrooms: 2,
    bathrooms: 1,
    image: "/images/VIV-003.png",
    features: ["Cocina equipada", "Armarios empotrados", "Balcón", "Aire acondicionado", "Calefacción", "Ascensor"],
  },
  {
    id: "CUOTA-MAX-001",
    title: "Supermercado en Cuota Madrid",
    description:
      "Local comercial ideal para supermercado ubicado en la zona de Cuota Madrid. Gran afluencia de público y excelente ubicación para negocios.",
    type: "alquiler",
    price: 743.8,
    location: "Cuota Madrid, Madrid",
    area: 120,
    bedrooms: 0,
    bathrooms: 1,
    image: "/images/CUOTA_MAX_Super.png",
    features: [
      "Amplio escaparate",
      "Zona de carga y descarga",
      "Aire acondicionado",
      "Persiana metálica",
      "Suelo de gres",
      "Salida de humos",
    ],
  },
  {
    id: "ALQ002",
    title: "Piso en Gran Capital",
    description:
      "Moderno piso en alquiler en la zona de Gran Capital. Completamente amueblado y equipado, listo para entrar a vivir. Ideal para ejecutivos o familias.",
    type: "alquiler",
    price: 826,
    location: "Gran Capital, Córdoba",
    area: 95,
    bedrooms: 3,
    bathrooms: 2,
    image: "/images/ALQ002.jpg",
    features: [
      "Totalmente amueblado",
      "Cocina equipada",
      "Armarios empotrados",
      "Terraza",
      "Aire acondicionado",
      "Calefacción",
      "Ascensor",
      "Plaza de garaje",
    ],
  },
]
