export const productos = [
  {
    id: 1,
    nombre: "Perchero (27 x 15 cm)",
    imagen: "/img/llaveros/1.jpeg",
    basePrice: 14000,
    colores: [
      { id: "verde", etiqueta: "Verde", hex: "#7ED957" },
      { id: "rojo", etiqueta: "Rojo", hex: "#FF3131" },
      { id: "amarillo", etiqueta: "Amarillo", hex: "#F7D84A" },
      { id: "rosa", etiqueta: "Rosa", hex: "#FF7EB9" },
    ],
    medidas: [
      { id: "30cm", etiqueta: "27", extra: 0 },
      { id: "50cm", etiqueta: "15", extra: 3000 },
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
      "/img/llaveros/1.jpeg",
      "/img/llaveros/2.jpeg",
      "/img/llaveros/3.jpeg"
    ],
    descripcion: ["Realizado en MDF de 18 milimetros con tapacanto color azul", "Incluye kit de colocacion ( va atornillado )"],
    incluye: "Incluye kit de colocacion ( va atornillado )",
    venta: true,
    permiteImagenPersonalizada: true
  },
  {
    id: 2,
    nombre: "Estante recibidor (45 x 20 cm)",
    imagen: "/img/estantes-recibidor/1.jpeg",
    basePrice: 28000,
    colores: [
      { id: "verde", etiqueta: "Verde", hex: "#7ED957" },
      { id: "rojo", etiqueta: "Rojo", hex: "#FF3131" },
      { id: "amarillo", etiqueta: "Amarillo", hex: "#F7D84A" },
      { id: "rosa", etiqueta: "Rosa", hex: "#FF7EB9" },
    ],
    medidas: [
      { id: "30cm", etiqueta: "27", extra: 0 },
      { id: "50cm", etiqueta: "15", extra: 3000 },
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
      "/img/estantes-recibidor/1.jpeg",
      "/img/estantes-recibidor/medidas.jpeg",
    ],
    descripcion:[ "Material MDF de 18 milimetros de espesor", "Fondo color negro 45cm x 20cm", '2 Estantes de 40cm x 20cm', "Altura entre estantes 20 cm" ],
    //incluye: "Incluye kit de colocacion ( va atornillado )",
    venta: true,
    permiteImagenPersonalizada: true
  },
  // {
  //   id: 2,
  //   nombre: "Estantes",
  //   imagen: "/img/estantes/1.png",
  //   basePrice: 15000,
  //   colores: [
  //     { id: "negro", etiqueta: "Negro", hex: "#000000", imagen: "/img/estantes/2.png" },
  //     { id: "blanco", etiqueta: "Blanco", hex: "#ffffff", imagen: "/img/estantes/1.png" },
  //   ],
  //   medidas: [
  //     { id: "30cm", etiqueta: "30 cm", extra: 0 },
  //     { id: "50cm", etiqueta: "50 cm", extra: 3000 },
  //     { id: "80cm", etiqueta: "80 cm", extra: 7000 },
  //   ],
  //   maderas: [
  //     { id: "pino", etiqueta: "Pino Natural", extra: 0 },
  //     { id: "roble", etiqueta: "Roble", extra: 4000 },
  //     { id: "nogal", etiqueta: "Nogal Oscuro", extra: 6000 },
  //   ],
  //   ganchos: [
  //     { id: 0, etiqueta: "0 ganchos", extra: 0 },
  //     { id: 3, etiqueta: "3 ganchos", extra: 1500 },
  //     { id: 5, etiqueta: "5 ganchos", extra: 2500 },
  //   ],
  //   imagenes: [
  //     "/img/estantes/1.png",
  //     "/img/estantes/2.png",
  //     "/img/estantes/3.png",
     
  //   ],
  //   venta: true,
  //   permiteImagenPersonalizada: true
  // },
  // {
  //   id: 3,
  //   nombre: "Flotantes",
  //   imagen: "/img/flotante/1.png",
  //   basePrice: 15000,
  //   colores: [
  //     { id: "negro", etiqueta: "Negro", hex: "#000000", imagen: "/img/flotante/1.png" },
  //     { id: "blanco", etiqueta: "Blanco", hex: "#ffffff", imagen: "/img/flotante/3.png" },
  //   ],
  //   medidas: [
  //     { id: "30cm", etiqueta: "30 cm", extra: 0 },
  //     { id: "50cm", etiqueta: "50 cm", extra: 3000 },
  //     { id: "80cm", etiqueta: "80 cm", extra: 7000 },
  //   ],
  //   maderas: [
  //     { id: "pino", etiqueta: "Pino Natural", extra: 0 },
  //     { id: "roble", etiqueta: "Roble", extra: 4000 },
  //     { id: "nogal", etiqueta: "Nogal Oscuro", extra: 6000 },
  //   ],
  //   ganchos: [
  //     { id: 0, etiqueta: "0 ganchos", extra: 0 },
  //     { id: 3, etiqueta: "3 ganchos", extra: 1500 },
  //     { id: 5, etiqueta: "5 ganchos", extra: 2500 },
  //   ],
  //   imagenes: [
  //     "/img/flotante/1.jpeg",
  //     "/img/flotante/2.jpeg",
     
  //   ],
  //   descripcion: "Realizado en MDF de 18 milimetros con tapacanto color azul",
  //   incluye: "Incluye kit de colocacion ( va atornillado )",
  //   venta: true,
  //   permiteImagenPersonalizada: true
  // },
  //  {
  //   id: 4,
  //   nombre: "Flotantes",
  //   imagen: "/img/estantes2/1.png",
  //   basePrice: 15000,
  //    colores: [
  //     { id: "negro", etiqueta: "Negro", hex: "#000000", imagen: "/img/estantes2/2.png" },
  //     { id: "blanco", etiqueta: "Blanco", hex: "#ffffff", imagen: "/img/estantes2/1.png" },
  //   ],
  //   medidas: [
  //     { id: "30cm", etiqueta: "30 cm", extra: 0 },
  //     { id: "50cm", etiqueta: "50 cm", extra: 3000 },
  //     { id: "80cm", etiqueta: "80 cm", extra: 7000 },
  //   ],
  //   maderas: [
  //     { id: "pino", etiqueta: "Pino Natural", extra: 0 },
  //     { id: "roble", etiqueta: "Roble", extra: 4000 },
  //     { id: "nogal", etiqueta: "Nogal Oscuro", extra: 6000 },
  //   ],
  //   ganchos: [
  //     { id: 0, etiqueta: "0 ganchos", extra: 0 },
  //     { id: 3, etiqueta: "3 ganchos", extra: 1500 },
  //     { id: 5, etiqueta: "5 ganchos", extra: 2500 },
  //   ],
  //   imagenes: [
  //     "/img/estantes2/1.png",
  //     "/img/estantes2/2.png",
     
  //   ],
  //   venta: true,
  //   permiteImagenPersonalizada: true
  // },
  // {
  //   id: 5,
  //   nombre: "Flotantes",
  //   imagen: "/img/estantes3/1.png",
  //   basePrice: 15000,
  //   colores: [
  //     { id: "negro", etiqueta: "Negro", hex: "#000000", imagen: "/img/estantes3/1.png" },
  //     { id: "blanco", etiqueta: "Blanco", hex: "#ffffff", imagen: "/img/estantes3/2.png" },
  //   ],
  //   medidas: [
  //     { id: "30cm", etiqueta: "30 cm", extra: 0 },
  //     { id: "50cm", etiqueta: "50 cm", extra: 3000 },
  //     { id: "80cm", etiqueta: "80 cm", extra: 7000 },
  //   ],
  //   maderas: [
  //     { id: "pino", etiqueta: "Pino Natural", extra: 0 },
  //     { id: "roble", etiqueta: "Roble", extra: 4000 },
  //     { id: "nogal", etiqueta: "Nogal Oscuro", extra: 6000 },
  //   ],
  //   ganchos: [
  //     { id: 0, etiqueta: "0 ganchos", extra: 0 },
  //     { id: 3, etiqueta: "3 ganchos", extra: 1500 },
  //     { id: 5, etiqueta: "5 ganchos", extra: 2500 },
  //   ],
  //   imagenes: [
  //     "/img/estantes3/1.png",
  //     "/img/estantes3/2.png",
     
  //   ],
  //   venta: true,
  //   permiteImagenPersonalizada: true
  // },
  // {
  //   id: 6,
  //   nombre: "LLaveros",
  //   imagen: "/img/realizados/1.jpeg",
  //   basePrice: 1000,
  //   colores: [
  //     { id: "verde", etiqueta: "Verde", hex: "#7ED957" },
  //     { id: "rojo", etiqueta: "Rojo", hex: "#FF3131" },
  //     { id: "amarillo", etiqueta: "Amarillo", hex: "#F7D84A" },
  //     { id: "rosa", etiqueta: "Rosa", hex: "#FF7EB9" },
  //   ],
  //   medidas: [
  //     { id: "30cm", etiqueta: "30 cm", extra: 0 },
  //     { id: "50cm", etiqueta: "50 cm", extra: 3000 },
  //     { id: "80cm", etiqueta: "80 cm", extra: 7000 },
  //   ],
  //   maderas: [
  //     { id: "pino", etiqueta: "Pino Natural", extra: 0 },
  //     { id: "roble", etiqueta: "Roble", extra: 4000 },
  //     { id: "nogal", etiqueta: "Nogal Oscuro", extra: 6000 },
  //   ],
  //   ganchos: [
  //     { id: 0, etiqueta: "0 ganchos", extra: 0 },
  //     { id: 3, etiqueta: "3 ganchos", extra: 1500 },
  //     { id: 5, etiqueta: "5 ganchos", extra: 2500 },
  //   ],
  //   imagenes: [
  //     "/img/realizados/1.jpeg",
  //     "/img/estantes/2.jpeg",
     
  //   ],
  //   descripcion: "Realizado en MDF de 18 milimetros con tapacanto color azul",
  //   incluye: "Incluye kit de colocacion ( va atornillado )",
  //   venta: true,
  //   permiteImagenPersonalizada: true
  // },

];
