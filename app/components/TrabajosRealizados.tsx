"use client";

import { realizados } from "@/app/data/realizados";

export default function TrabajosRealizados() {

  return (
    <section id="realizados" className="container mx-auto px-4 py-16">
        <h3 className="text-3xl font-semibold mb-10 text-center">Trabajos realizados</h3>

        {/* GRID DINÁMICO */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {realizados.map((item) => {
            return (
            <a
                key={item.id}
                href={`/producto/${item.id}`}
                className="block bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition cursor-pointer"
            >
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

                <button className="bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-gray-700">
                    Saber más
                </button>
                </div>
            </a>
            );
        })}
        </div>
    </section>
  );
}