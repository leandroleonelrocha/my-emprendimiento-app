"use client";

import ProductCustomizer from "@/app/components/ProductCustomizer";
import ProductGallery from "@/app/components/ProductSlider";

export default function ProductPageClient({ producto }: any) {
  const url = `https://muebles-de-familia.vercel.app/producto/${producto.id}`;
  const message = encodeURIComponent(
    `Hola! Estoy interesado en el producto: ${producto.nombre}.\nLink del producto: ${url}`
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

        <div className="row g-4 mt-2 align-items-start">
          {/* GALERÍA */}
          <div className="col-lg-7">
            <ProductGallery imagenes={producto.imagenes} />
          </div>

          {/* INFO */}
          <div className="col-lg-5">
            <div
              className="p-4 bg-white shadow-sm rounded-4"
              style={{ position: "sticky", top: 90 }}
            >
              <h1 className="fw-bold fs-3 mb-2">{producto.nombre}</h1>

              <div className="d-flex flex-wrap gap-2 mb-3">
                <span className="badge text-bg-light border">Melamina 18mm</span>
                <span className="badge text-bg-light border">A medida</span>
              </div>

              <ProductCustomizer producto={producto} onColorChange={() => {}} />

              <div className="mt-3 small text-muted">
                Consultá por colores, medidas personalizadas y tiempo de entrega.
              </div>

              <a
                href={whatsapp}
                target="_blank"
                rel="noreferrer"
                className="btn btn-lg w-100 mt-4 d-flex align-items-center justify-content-center gap-2 text-white"
                style={{
                  backgroundColor: "#25D366",
                  borderRadius: "50px",
                }}
              >
                <i className="bi bi-whatsapp"></i>
                Consultar por WhatsApp
              </a>

              <button
                className="btn btn-outline-dark w-100 mt-2 rounded-pill"
                onClick={() => navigator.clipboard.writeText(url)}
              >
                Copiar link del producto
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
