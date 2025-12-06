import { productos } from "@/app/data/productos";
import { generarLinkWhatsApp } from "@/app/utils/whatsapp";


function Destacados() {
  const whatsappLiving = generarLinkWhatsApp("Living Moderno");
  const whatsappDormitorio = generarLinkWhatsApp("Dormitorio Premium");

  return (
    <section id="destacados" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-semibold mb-10 text-center">Destacados</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* CARD 1 */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img src="/img/14.jpeg" className="w-full" />
            <div className="p-6 bg-white">
              <h4 className="text-xl font-semibold mb-2">Living Moderno</h4>
              <p className="text-gray-600 mb-4">
                Combinamos comodidad y estilo para transformar tu espacio.
              </p>

              <a href={`/producto/1`}>
  <button className="bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-gray-700">
    Saber más
  </button>
</a>

                         {/* <a
                    href={whatsappLiving}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white w-full py-2 rounded-lg hover:bg-green-700 transition flex items-center justify-center"
                  >
                    Consultar por WhatsApp
                  </a> */}
            </div>
          </div>

          {/* CARD 2 */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img src="/img/9.jpeg" className="w-full" />
            <div className="p-6 bg-white">
              <h4 className="text-xl font-semibold mb-2">Dormitorio Premium</h4>
              <p className="text-gray-600 mb-4">
                Diseñamos ambientes únicos adaptados a tu estilo.
              </p>

                                    
              <a href={`/producto/2`}>
              <button className="bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-gray-700">
                Saber más
              </button>
            </a>

              {/* <a
                    href={whatsappDormitorio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white w-full py-2 rounded-lg hover:bg-green-700 transition flex items-center justify-center"
                  >
                    Consultar por WhatsApp
                  </a> */}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default function LandingMuebles() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
     

      {/* Hero */}
      <section className="w-full bg-[url('/img/tablero.jpg')] bg-cover bg-center py-32 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 drop-shadow-lg">
            Trabajos con melamina en MDF.
          </h2>

          <a
            href="#productos"
            className="bg-white text-gray-900 font-semibold py-3 px-6 rounded-xl shadow-lg hover:bg-gray-200 transition"
          >
            Ver catálogo
          </a>
        </div>
      </section>


      <section id="productos" className="container mx-auto px-4 py-16">
        <h3 className="text-3xl font-semibold mb-10 text-center">Nuestros productos</h3>

        {/* GRID DINÁMICO */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {productos.map((item) => {
                
                
            const whatsappURL = generarLinkWhatsApp(item.nombre);


            return (
              <div key={item.id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
                <img
                  src={item.imagen}
                  alt={item.nombre}
                  className="w-full h-56 object-cover"
                />

                <div className="p-4">
                  <h4 className="font-semibold text-lg mb-2">{item.nombre}</h4>

                  <p className="text-sm text-gray-600 mb-3">
                    Precio base: ${item.basePrice.toLocaleString("es-AR")}
                  </p>

                  <a
                    href={whatsappURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white w-full py-2 rounded-lg hover:bg-green-700 transition flex items-center justify-center"
                  >
                    Consultar por WhatsApp
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>


      {/* Destacados */}
      <Destacados />
      {/* Contacto */}
      <section id="contacto" className="container mx-auto px-4 py-16">
        <h3 className="text-3xl font-semibold mb-6 text-center">Contacto</h3>
        <div className="max-w-lg mx-auto bg-white shadow-lg rounded-2xl p-6">
          <form className="space-y-4">
            <input type="text" placeholder="Nombre" className="w-full border p-3 rounded-lg" />
            <input type="email" placeholder="Email" className="w-full border p-3 rounded-lg" />
            <textarea placeholder="Mensaje" className="w-full border p-3 rounded-lg h-32" />
            <button className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-700">Enviar consulta</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-600">
        © {new Date().getFullYear()} MueblesLux - Todos los derechos reservados
      </footer>
    </div>
  );
}
