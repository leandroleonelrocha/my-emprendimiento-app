import { productos } from "@/app/data/productos";

export default function LandingMuebles() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f9fafb", color: "#333" }}>
      {/* HERO */}
      <section
        className="w-100 text-white"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(0,0,0,.55), rgba(0,0,0,.35)), url('/img/tablero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          paddingTop: "120px",
          paddingBottom: "120px",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h1 className="fw-bold display-5 mb-3" style={{ textShadow: "0 2px 10px rgba(0,0,0,0.45)" }}>
                Muebles en melamina 18mm a medida
              </h1>
              <p className="lead mb-4" style={{ maxWidth: 720, textShadow: "0 2px 10px rgba(0,0,0,0.35)" }}>
                Diseños modernos, terminaciones prolijas y asesoramiento por WhatsApp.
              </p>

              <div className="d-flex flex-wrap gap-2">
                <a href="#productos" className="btn btn-light fw-semibold px-4 py-3 rounded-3 shadow">
                  Ver productos
                </a>
                <a
                  href="https://wa.me/5491162174495"
                  target="_blank"
                  className="btn btn-outline-light fw-semibold px-4 py-3 rounded-3"
                  rel="noreferrer"
                >
                  Pedir presupuesto
                </a>
              </div>

              <div className="d-flex flex-wrap gap-2 mt-4 small text-white-50">
                <span className="badge rounded-pill bg-light text-dark">Melamina 18mm</span>
                <span className="badge rounded-pill bg-light text-dark">A medida</span>
                <span className="badge rounded-pill bg-light text-dark">Entrega coordinada</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTOS */}
      <section id="productos" className="container py-5">
        <div className="d-flex align-items-end justify-content-between flex-wrap gap-2 mb-4">
          <div>
            <h3 className="fw-bold mb-1">Nuestros productos</h3>
            <div className="text-muted">Elegí uno y consultá directo por WhatsApp.</div>
          </div>
        </div>

        <div className="row g-4">
          {productos.map((item) => (
            <div key={item.id} className="col-12 col-sm-6 col-lg-4">
              <a href={`/producto/${item.id}`} className="text-decoration-none text-dark">
                <div className="card h-100 shadow-sm border-0 rounded-4 overflow-hidden">
                  {/* Imagen con proporción fija */}
                  <div style={{ height: 260, background: "#fff" }}>
                    <img
                      src={item.imagen}
                      alt={item.nombre}
                      className="w-100 h-100"
                      style={{ objectFit: "cover" }}
                      loading="lazy"
                    />
                  </div>

                  <div className="card-body d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="fw-bold fs-5">
                        ${item.basePrice.toLocaleString("es-AR")}
                      </div>
                      <span className="badge text-bg-light border">Melamina 18mm</span>
                    </div>

                    <h4 className="fw-semibold mt-2 mb-2" style={{ lineHeight: 1.2 }}>
                      {item.nombre}
                    </h4>

                    <div className="text-muted small mb-3" style={{ minHeight: 36 }}>
                      Consultá medidas, colores y entrega.
                    </div>

                    <div className="mt-auto d-grid gap-2">
                      <span className="btn btn-dark rounded-3">Ver detalle</span>
                      <span className="btn btn-outline-dark rounded-3">Consultar</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center py-4 text-muted small">
        © {new Date().getFullYear()} Muebles De Familia – Todos los derechos reservados
      </footer>
    </div>
  );
}
