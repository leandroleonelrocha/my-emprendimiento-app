"use client";

import { useState, useEffect } from "react";
import { Producto } from "../types/product";
import { calculatePrice } from "../lib/calculatePrice";

interface Props {
  producto: Producto;
}

export default function ProductConfigurator({ producto }: Props) {
  const [config, setConfig] = useState({
    medida: producto.medidas[0].id,
    madera: producto.maderas[0].id,
    ganchos: producto.ganchos[0].id,
  });

  const [precio, setPrecio] = useState(producto.basePrice);

  // recalc price on every change
  useEffect(() => {
    setPrecio(calculatePrice(producto, config));
  }, [config, producto]);

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-lg rounded-3xl border border-gray-100">
    <h2 className="text-2xl font-bold text-gray-800 mb-5 text-center">
        {producto.nombre}
    </h2>

    {/* MEDIDAS */}
    {/* <div className="mb-4">
        <label className="block font-medium mb-1 text-gray-700">Medida</label>
        <select
        className="form-select rounded-2 p-2 border border-gray-300"
        value={config.medida}
        onChange={(e) => setConfig({ ...config, medida: e.target.value })}
        >
        {producto.medidas.map((m) => (
            <option key={m.id} value={m.id}>
            {m.etiqueta} (+${m.extra})
            </option>
        ))}
        </select>
    </div> */}

    {/* MADERA */}
    {/* <div className="mb-4">
        <label className="block font-medium mb-1 text-gray-700">Madera</label>
        <select
        className="form-select rounded-2 p-2 border border-gray-300"
        value={config.madera}
        onChange={(e) => setConfig({ ...config, madera: e.target.value })}
        >
        {producto.maderas.map((m) => (
            <option key={m.id} value={m.id}>
            {m.etiqueta} (+${m.extra})
            </option>
        ))}
        </select>
    </div> */}

    {/* GANCHOS */}
    <div className="mb-4">
        <label className="block font-medium mb-1 text-gray-700">Ganchos</label>
        <select
        className="form-select rounded-2 p-2 border border-gray-300"
        value={config.ganchos}
        onChange={(e) =>
            setConfig({ ...config, ganchos: Number(e.target.value) })
        }
        >
        {producto.ganchos.map((g) => (
            <option key={g.id} value={g.id}>
            {g.etiqueta} (+${g.extra})
            </option>
        ))}
        </select>
    </div>

    <hr className="my-4" />

    <div className="text-center">
        <h3 className="text-xl font-semibold text-gray-900">
        Precio final:
        </h3>
        <p className="text-3xl font-bold text-green-600 mt-1">
        ${precio}
        </p>
    </div>
    </div>

  );
}
