import { Producto } from "../types/product";

export const productoMock: Producto = {
  nombre: "Estante organizador",
  basePrice: 10000,
  medidas: [
    { id: "30", etiqueta: "30 cm", extra: 0 },
    { id: "40", etiqueta: "40 cm", extra: 1500 },
    { id: "50", etiqueta: "50 cm", extra: 2500 },
  ],
  maderas: [
    { id: "pino", etiqueta: "Pino", extra: 0 },
    { id: "mdf", etiqueta: "MDF Laqueado", extra: 3000 },
    { id: "cedro", etiqueta: "Cedro", extra: 6000 },
  ],
  ganchos: [
    { id: 0, etiqueta: "Sin ganchos", extra: 0 },
    { id: 2, etiqueta: "2 ganchos", extra: 800 },
    { id: 4, etiqueta: "4 ganchos", extra: 1500 },
  ],
};