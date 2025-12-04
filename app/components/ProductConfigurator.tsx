"use client";

import { useState, useEffect } from "react";
import { calculatePrice } from "@/app/lib/calculatePrice";
import { producto } from "@/app/data/producto";

export default function ProductConfigurator() {
  const [config, setConfig] = useState({
    medida: "30cm",
    madera: "pino",
    ganchos: 0,
  });

  const [precio, setPrecio] = useState(producto.basePrice);

  useEffect(() => {
    setPrecio(calculatePrice(producto, config));
  }, [config]);

  return (
    <div className="space-y-6 p-4 border rounded-lg max-w-md shadow">
      <h2 className="text-2xl font-semibold">{producto.nombre}</h2>

      {/* Medidas */}
      <div>
        <label className="font-medium">Medida:</label>
        <select
          className="border p-2 rounded w-full"
          value={config.medida}
          onChange={(e) => setConfig({ ...config, medida: e.target.value })}
        >
          {producto.medidas.map((m) => (
            <option key={m.id} value={m.id}>{m.etiqueta}</option>
          ))}
        </select>
      </div>

      {/* Madera */}
      <div>
        <label className="font-medium">Tipo de madera:</label>
        <select
          className="border p-2 rounded w-full"
          value={config.madera}
          onChange={(e) => setConfig({ ...config, madera: e.target.value })}
        >
          {producto.maderas.map((m) => (
            <option key={m.id} value={m.id}>{m.etiqueta}</option>
          ))}
        </select>
      </div>

      {/* Ganchos */}
      <div>
        <label className="font-medium">Ganchos:</label>
        <select
          className="border p-2 rounded w-full"
          value={config.ganchos}
          onChange={(e) =>
            setConfig({ ...config, ganchos: Number(e.target.value) })
          }
        >
          {producto.ganchos.map((g) => (
            <option key={g.id} value={g.id}>{g.etiqueta}</option>
          ))}
        </select>
      </div>

      {/* Precio */}
      <div className="text-xl font-bold">
        Precio final: ${precio.toLocaleString("es-AR")}
      </div>

      <button className="w-full bg-blue-600  py-3 rounded-lg hover:bg-blue-700">
        Agregar al carrito
      </button>
    </div>
  );
}