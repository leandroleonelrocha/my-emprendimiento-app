"use client";

import { useState } from "react";

export default function ProductGallery({ imagenes }: { imagenes: string[] }) {
  const [selected, setSelected] = useState(imagenes?.[0]);

  if (!imagenes?.length) return null;

  return (
    <div>
      {/* IMAGEN PRINCIPAL */}
      <div
        className="border rounded-4 bg-white overflow-hidden mb-3 shadow-sm"
        style={{
          height: 520,
          position: "relative",
          cursor: "zoom-in",
        }}
        onMouseMove={(e) => {
          const container = e.currentTarget;
          const img = container.querySelector("img");
          if (!img) return;

          const rect = container.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          const moveX = (x / rect.width) * 100;
          const moveY = (y / rect.height) * 100;

          img.style.transformOrigin = `${moveX}% ${moveY}%`;
          img.style.transform = "scale(2.4)";
        }}
        onMouseLeave={(e) => {
          const img = e.currentTarget.querySelector("img");
          if (!img) return;
          img.style.transform = "scale(1)";
        }}
      >
        <img
          src={selected}
          alt="Producto"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover", // <-- cambia el look (más tipo catálogo)
            transition: "transform 0.2s ease-out",
          }}
        />
      </div>

      {/* MINIATURAS */}
      <div className="d-flex flex-wrap gap-2">
        {imagenes.map((img, i) => {
          const active = selected === img;
          return (
            <button
              key={i}
              type="button"
              onClick={() => setSelected(img)}
              className={`border bg-white p-0 rounded-3 overflow-hidden`}
              style={{
                width: 78,
                height: 78,
                outline: "none",
                borderWidth: active ? 2 : 1,
                borderColor: active ? "#0d6efd" : "#dee2e6",
              }}
              aria-label={`Imagen ${i + 1}`}
            >
              <img
                src={img}
                alt={`thumb-${i}`}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
