"use client";

import { useState } from "react";
import Image from "next/image";

type TamañoType = {
  id: string;
  etiqueta: string;
  extra: number;
};

type ColorType = {
  id: string;
  etiqueta: string;
  hex: string;
  imagen?: string;
};

export default function ProductCustomizer({ producto, onColorChange }: any) {

  const [color, setColor] = useState<ColorType | null>(null);
  const [tamaño, setTamaño] = useState<TamañoType | null>(null);
  const [imagenPersonal, setImagenPersonal] = useState<string | null>(null);

  const precioFinal =
    producto.basePrice +
    (tamaño?.extra || 0);

  const handleUpload = (e: any) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setImagenPersonal(url);
  };

 
    const handleColorSelect = (c: any) => {
      setColor(c);
      if (c.imagen) onColorChange(c.imagen);
    };

  return (
    <div className="mt-8">

      {/* COLORES */}
      <p className="font-medium mb-1">Color del Lateral:</p>
      <div className="flex gap-3 mb-4">
        {producto.colores?.map((c: any) => (
          <div
            key={c.id}
            onClick={() => handleColorSelect(c)}
            style={{
              width: 30,
              height: 30,
              borderRadius: "50%",
              background: c.hex,
              border: color?.id === c.id ? "3px solid black" : "1px solid #ccc",
              cursor: "pointer",
            }}
          />
        ))}
      </div>

      {/* TAMAÑO */}
      <label className="font-medium">Tamaño:</label>
      <select
        className="border p-2 rounded w-full mb-4"
        onChange={(e) =>
          setTamaño(producto.tamaños.find((t: any) => t.id === e.target.value))
        }
      >
        <option value="">Seleccionar</option>
        {producto.tamaños?.map((t: any) => (
          <option key={t.id} value={t.id}>
            {t.etiqueta} (+${t.extra})
          </option>
        ))}
      </select>

      {/* SUBIR IMAGEN */}
      {/* {producto.permiteImagenPersonalizada && (
        <>
          <label className="font-medium">Subir Diseño Personalizado:</label>
          <input
            type="file"
            accept="image/*"
            className="block border p-2 rounded mb-4"
            onChange={handleUpload}
          />

          {imagenPersonal && (
            <div className="mb-4">
              <p className="font-medium">Vista previa:</p>
              <Image
                src={imagenPersonal}
                width={300}
                height={200}
                alt="preview"
                className="rounded shadow"
              />
            </div>
          )}
        </>
      )} */}

      {/* PRECIO */}
      <p className="text-xl font-bold mt-4">
        Precio final: ${precioFinal.toLocaleString("es-AR")}
      </p>
    </div>
  );
}
