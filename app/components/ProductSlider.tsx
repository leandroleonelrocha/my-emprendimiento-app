"use client";

import { useState } from "react";

export default function ProductGallery({ imagenes }) {
  const [selected, setSelected] = useState(imagenes[0]);

  return (
    <div>

      {/* IMAGEN PRINCIPAL CON ZOOM */}
    <div
      className="border rounded bg-white p-2 mb-3"
      style={{
        height: "450px",
        overflow: "hidden",
        position: "relative",
        cursor: "zoom-in",
      }}
      onMouseMove={(e) => {
        const container = e.currentTarget;
        const img = container.querySelector("img");

        if (!img) return;

        const rect = container.getBoundingClientRect();

        // Posición del mouse dentro del contenedor
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Movimiento relativo al tamaño
        const moveX = (x / rect.width) * 100;
        const moveY = (y / rect.height) * 100;

        img.style.transformOrigin = `${moveX}% ${moveY}%`;
        img.style.transform = "scale(2.8)"; // <--- Cambia este valor para más zoom
      }}
      onMouseLeave={(e) => {
        const img = e.currentTarget.querySelector("img");
        if (!img) return;
        img.style.transform = "scale(1)";
      }}
    >
      <img
        src={selected}
        alt="main-img"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          transition: "transform 0.2s ease-out",
        }}
      />
    </div>


      {/* MINIATURAS */}
      <div className="row g-2">
        {imagenes.map((img, i) => (
          <div className="col-3 col-sm-2" key={i}>
            <div
              onClick={() => setSelected(img)}
              className={`p-1 border rounded cursor-pointer ${
                selected === img ? "border-primary border-2" : ""
              }`}
            >
              <img
                src={img}
                className="w-100 object-fit-contain"
                style={{ height: "70px" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


