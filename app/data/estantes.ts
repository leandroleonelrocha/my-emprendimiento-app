export const estantes = [
  {
    id: 1,
    nombre: "LLaveros",
    imagen: "/img/estantes/1.png",
    basePrice: 15000,
    colores: [
      { id: "verde", etiqueta: "Verde", hex: "#7ED957" },
      { id: "rojo", etiqueta: "Rojo", hex: "#FF3131" },
      { id: "amarillo", etiqueta: "Amarillo", hex: "#F7D84A" },
      { id: "rosa", etiqueta: "Rosa", hex: "#FF7EB9" },
    ],
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
    imagenes: [
      "/img/estantes/1.png",
      "/img/estantes/2.png",
     
    ],
    permiteImagenPersonalizada: true
  },
];