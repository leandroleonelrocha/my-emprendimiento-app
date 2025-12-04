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
    <div style={{ padding: 20, maxWidth: 400 }}>
      <h2>{producto.nombre}</h2>

      {/* MEDIDAS */}
      <label>Medida</label>
      <select
        className="form-select mb-3"
        value={config.medida}
        onChange={(e) =>
          setConfig({ ...config, medida: e.target.value })
        }
      >
        {producto.medidas.map((m) => (
          <option key={m.id} value={m.id}>
            {m.etiqueta} (+${m.extra})
          </option>
        ))}
      </select>

      {/* MADERA */}
      <label>Madera</label>
      <select
        className="form-select mb-3"
        value={config.madera}
        onChange={(e) =>
          setConfig({ ...config, madera: e.target.value })
        }
      >
        {producto.maderas.map((m) => (
          <option key={m.id} value={m.id}>
            {m.etiqueta} (+${m.extra})
          </option>
        ))}
      </select>

      {/* GANCHOS */}
      <label>Ganchos</label>
      <select
        className="form-select mb-3"
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

      <hr />

      <h3>Precio final: ${precio}</h3>
    </div>
  );
}
