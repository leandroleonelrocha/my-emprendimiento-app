export default function LandingMuebles() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="w-full py-6 shadow-sm bg-white">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold">MueblesLux</h1>
          <nav className="space-x-6">
            <a href="#productos" className="hover:underline">Productos</a>
            <a href="#destacados" className="hover:underline">Destacados</a>
            <a href="#contacto" className="hover:underline">Contacto</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="w-full bg-[url('https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c')] bg-cover bg-center py-32 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 drop-shadow-lg">Diseño y confort para tu hogar</h2>
          <p className="text-lg mb-6 drop-shadow-md">Muebles modernos, minimalistas y hechos a medida.</p>
          <a href="#productos" className="bg-white text-gray-900 font-semibold py-3 px-6 rounded-xl shadow-lg hover:bg-gray-200 transition">Ver catálogo</a>
        </div>
      </section>

      {/* Productos */}
      <section id="productos" className="container mx-auto px-4 py-16">
        <h3 className="text-3xl font-semibold mb-10 text-center">Nuestros productos</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1,2,3,4,5,6].map((n) => (
            <div key={n} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
              <img src={`https://source.unsplash.com/random/400x30${n}?furniture`} alt="Mueble" className="w-full h-56 object-cover" />
              <div className="p-4">
                <h4 className="font-semibold text-lg mb-2">Mueble {n}</h4>
                <p className="text-sm text-gray-600 mb-3">Descripción breve del producto, estilo y acabado.</p>
                <button className="bg-gray-900 text-white w-full py-2 rounded-lg hover:bg-gray-700 transition">Consultar</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Destacados */}
      <section id="destacados" className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-semibold mb-10 text-center">Destacados</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc" className="w-full h-64 object-cover" />
              <div className="p-6 bg-white">
                <h4 className="text-xl font-semibold mb-2">Living Moderno</h4>
                <p className="text-gray-600 mb-4">Combinamos comodidad y estilo para transformar tu espacio.</p>
                <button className="bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-gray-700">Saber más</button>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src="https://images.unsplash.com/photo-1505691723518-36a75f6f3c49" className="w-full h-64 object-cover" />
              <div className="p-6 bg-white">
                <h4 className="text-xl font-semibold mb-2">Dormitorio Premium</h4>
                <p className="text-gray-600 mb-4">Diseñamos ambientes únicos adaptados a tu estilo.</p>
                <button className="bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-gray-700">Saber más</button>
              </div>
            </div>
          </div>
        </div>
      </section>

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
