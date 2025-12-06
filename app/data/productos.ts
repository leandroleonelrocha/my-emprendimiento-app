export const productos = [
  {
    id: 1,
    nombre: "Estante Flotante",
    imagen: "/img/1.jpeg",
    basePrice: 15000,
    medidas: [
      { id: "30cm", etiqueta: "30 cm", extra: 0 },
      { id: "50cm", etiqueta: "50 cm", extra: 3000 },
      { id: "80cm", etiqueta: "80 cm", extra: 7000 },
    ],
    maderas: [
      { id: "pino", etiqueta: "Pino Natural", extra: 0 },
      { id: "roble", etiqueta: "Roble", extra: 4000 },
      { id: "nogal", etiqueta: "Nogal Oscuro", extra: 6000 },
    ],
    ganchos: [
      { id: 0, etiqueta: "0 ganchos", extra: 0 },
      { id: 3, etiqueta: "3 ganchos", extra: 1500 },
      { id: 5, etiqueta: "5 ganchos", extra: 2500 },
    ],
  },

  {
    id: 2,
    nombre: "Mesa Auxiliar",
    imagen: "/img/2.jpeg",
    basePrice: 25000,
    medidas: [
      { id: "50cm", etiqueta: "50 cm", extra: 0 },
      { id: "80cm", etiqueta: "80 cm", extra: 5000 },
    ],
    maderas: [
      { id: "pino", etiqueta: "Pino Natural", extra: 0 },
      { id: "roble", etiqueta: "Roble", extra: 6000 },
    ],
    ganchos: [{ id: 0, etiqueta: "Sin ganchos", extra: 0 }],
  },

  {
    id: 3,
    nombre: "Mueble para TV",
    imagen: "/img/3.jpeg",
    basePrice: 52000,
    medidas: [
      { id: "120cm", etiqueta: "120 cm", extra: 0 },
      { id: "150cm", etiqueta: "150 cm", extra: 8000 },
    ],
    maderas: [
      { id: "melamina", etiqueta: "Melamina", extra: 0 },
      { id: "mdf", etiqueta: "MDF Premium", extra: 9000 },
    ],
    ganchos: [{ id: 0, etiqueta: "Sin ganchos", extra: 0 }],
  },
];
