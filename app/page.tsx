import { productos } from "@/app/data/productos";

export default function LandingMuebles() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f9fafb", color: "#333" }}>

      {/* HERO */}
      <section
        className="w-100 text-white text-center py-5"
        style={{
          backgroundImage: "url('/img/tablero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          paddingTop: "130px",
          paddingBottom: "130px",
        }}
      >
        <div className="container">
          <h2 className="fw-bold display-5 mb-4" style={{ textShadow: "0 2px 6px rgba(0,0,0,0.5)" }}>
            Trabajos con melamina en MDF.
          </h2>

          <a
            href="#productos"
            className="btn btn-light fw-semibold px-4 py-3 rounded-3 shadow"
          >
            Ver catálogo
          </a>
        </div>
      </section>


      {/* PRODUCTOS */}
      <section id="productos" className="container-fluid py-5">
        <h3 className="fw-semibold text-center mb-5 display-6">Nuestros productos</h3>

        <div className="row g-4">
          {productos.map((item) => (
            <div key={item.id} className="col-12 col-sm-6 col-lg-4">
              <a
                href={`/producto/${item.id}`}
                className="text-decoration-none text-dark"
              >
                <div className="card h-100 shadow-sm border-0 rounded-4 overflow-hidden">
                  
                  {/* Imagen */}
                  <img
                    src={item.imagen}
                    alt={item.nombre}
                    className="card-img-top"
                    style={{ height: "260px", objectFit: "cover" }}
                  />

                  <div className="card-body">
                    <h4 className="fw-bold mb-2">{item.nombre}</h4>

                    {/* Precio */}
                    <span className="badge bg-success bg-opacity-25 text-success fw-semibold mb-3 p-2">
                      ${item.basePrice.toLocaleString("es-AR")}
                    </span>

                    {/* Descripción */}
                    {Array.isArray(item.descripcion) ? (
                      <ul className="text-muted mb-3">
                        {item.descripcion.map((desc, index) => (
                          <li key={index}>{desc}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-muted mb-3">{item.descripcion}</p>
                    )}

                    <button className="btn btn-dark w-100 rounded-3">
                      Saber más
                    </button>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

      </section>

      {/* FOOTER */}
      <footer className="text-center py-4 text-muted small">
        © {new Date().getFullYear()} Muebles De Familia – Todos los derechos reservados
      </footer>
    </div>
  );
}
