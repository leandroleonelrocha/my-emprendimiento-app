"use client";

import { useState } from "react";
import ProductCustomizer from "@/app/components/ProductCustomizer";
import ProductGallery from "@/app/components/ProductSlider";

export default function ProductPageClient({ producto }: any) {
  const [imagenActual, setImagenActual] = useState(producto.imagen);

  const url = `https://muebles-de-familia.vercel.app/producto/${producto.id}`;
  const message = encodeURIComponent(
    `Hola! Estoy interesado en el producto: ${producto.nombre}.
Link del producto: ${url}`
  );
  const whatsapp = `https://wa.me/5491162174495?text=${message}`;

  return (
    <section id="destacados" className="bg-light py-5">
      <div className="container-fluid">

        <h1 className="fw-bold fs-2 mb-4">{producto.nombre}</h1>

        <div className="row g-5">

          {/* Galería */}
          <div className="col-md-8">
            <ProductGallery imagenes={producto.imagenes} />
          </div>

          {/* Customizer + Botón */}
          <div className="col-md-4">
            <ProductCustomizer
              producto={producto}
              onColorChange={(img: string) => setImagenActual(img)}
            />

            <a
              href={whatsapp}
              target="_blank"
              className="btn btn-success btn-lg mt-4 w-100"
            >
              Consultar por WhatsApp
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

