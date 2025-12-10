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
    <section className="py-4 bg-light">

  <div className="container">

    {/* BREADCRUMB */}
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb small">
        <li className="breadcrumb-item"><a href="/">Inicio</a></li>
        <li className="breadcrumb-item"><a href="/#productos">Productos</a></li>
        <li className="breadcrumb-item active">{producto.nombre}</li>
      </ol>
    </nav>

    <div className="row g-5 mt-2">

      {/* GALERÍA */}
      <div className="col-md-7">
        <ProductGallery imagenes={producto.imagenes} />
      </div>

      {/* INFORMACIÓN DEL PRODUCTO */}
      <div className="col-md-5">
        <div className="p-4 bg-white shadow-sm rounded-3">

          <h1 className="fw-bold fs-3 mb-3">{producto.nombre}</h1>

          <ProductCustomizer
            producto={producto}
            onColorChange={(img: string) => {}}
          />


          {/* BOTÓN CTA */}
          {/* <a
            href={producto.whatsapp}
            target="_blank"
            className="btn btn-success btn-lg w-100 mt-4"
          >
            Consultar por WhatsApp
          </a> */}

          <a
  href={whatsapp}
  target="_blank"
  className="btn btn-lg w-100 mt-4 d-flex align-items-center justify-content-center gap-2 text-white"
  style={{
    backgroundColor: "#25D366",
    border: "2px solid white",
    borderRadius: "50px",
  }}
>
  <i className="bi bi-whatsapp"></i>
  Consultar por WhatsApp
</a>


        </div>
      </div>
    </div>

    {/* PRODUCTOS RELACIONADOS */}
    {/* <div className="mt-5">
      <h4 className="fw-bold mb-3">Productos relacionados</h4>

      <div className="row g-4">
        {productos.slice(0, 3).map((p) => (
          <div className="col-12 col-sm-4" key={p.id}>
            <a
              href={`/producto/${p.id}`}
              className="text-decoration-none text-dark"
            >
              <div className="card h-100 shadow-sm border-0">
                <img
                  src={p.imagen}
                  className="card-img-top"
                  style={{ height: "180px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="fw-semibold">{p.nombre}</h5>
                  <p className="text-success fw-bold">
                    ${p.basePrice.toLocaleString("es-AR")}
                  </p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div> */}

  </div>
</section>


  );
}

