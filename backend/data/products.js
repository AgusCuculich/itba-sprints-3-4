const products = [
  {
    id: "aparador-uspallata",
    nombre: "Aparador Uspallata",
    descripcion: "Aparador de seis puertas fabricado en nogal sostenible con tiradores metálicos en acabado latón. Su silueta minimalista realza el veteado natural de la madera, creando una pieza que combina funcionalidad y elegancia atemporal para espacios contemporáneos.",
    imagen: "aparador-uspallata.png",
    precio: 380000,
    sustentable: true,
    especificaciones: {
      medidas: "180 x 45 x 75cm",
      materiales: "Nogal macizo FSC®, herrajes de latón",
      acabado: "Aceite natural ecológico",
      peso: "68kg",
      capacidad: "6 compartimentos interiores"
    }
  },
  {
    id: "biblioteca-recoleta",
    nombre: "Biblioteca Recoleta",
    descripcion: "Sistema modular de estantes abierto que combina estructura de acero Sage Green y repisas en roble claro. Perfecta para colecciones y objetos de diseño, su diseño versátil se adapta a cualquier espacio contemporáneo con elegancia funcional.",
    imagen: "biblioteca-recoleta.png",
    precio: 310000,
    sustentable: true,
    especificaciones: {
      medidas: "100 x 35 x 200cm",
      materiales: "Estructura de acero, estantes de roble",
      acabado: "Laca mate ecológica",
      capacidad: "45kg por estante",
      modulares: "5 estantes ajustables"
    }
  }
];

module.exports = products;