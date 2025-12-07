"use client";

import { useState } from "react";
import ProductCustomizer from "@/app/components/ProductCustomizer";
import ProductSlider from "@/app/components/ProductSlider";

export default function ProductPageClient({ producto }: any) {

  const [imagenActual, setImagenActual] = useState(producto.imagen);

  const url = `https://muebles-de-familia.vercel.app/producto/${producto.id}`;
  const message = encodeURIComponent(
    `Hola! Estoy interesado en el producto: ${producto.nombre}.
Link del producto: ${url}`
  );

  const whatsapp = `https://wa.me/5491162174495?text=${message}`;

  return (
    <section id="destacados" className="bg-gray-100 py-16">
      <div className="max-w-4xl mx-auto p-6">

        <h1 className="text-3xl font-bold mb-4">{producto.nombre}</h1>

        <div className="flex flex-col md:flex-row gap-8">

          <div className="md:w-1/2">
            <ProductSlider imagenes={[imagenActual]} />
          </div>

          <div className="md:w-1/2">
            <ProductCustomizer
              producto={producto}
              onColorChange={(img: string) => setImagenActual(img)}
            />

            <a
              href={whatsapp}
              target="_blank"
              className="bg-green-600 text-white py-3 px-6 rounded-lg text-lg font-medium hover:bg-green-700 inline-block mt-6"
            >
              Consultar por WhatsApp
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

