"use client";

import { useState, useEffect } from "react";

export default function ProductGallery({ imagenes }: { imagenes: string[] }) {
  const [selected, setSelected] = useState(imagenes[0]);

  useEffect(() => {
    setSelected(imagenes[0]);
  }, [imagenes]);

  return (
    <div className="w-100">

      {/* Imagen principal */}
      <div className="ratio ratio-16x9 mb-4 border rounded">
        <img
          src={selected}
          alt="featured"
          className="w-100 h-100 object-fit-cover rounded"
        />
      </div>

      {/* Miniaturas */}
      <div className="row g-3">
        {imagenes.map((img, i) => (
          <div className="col-4 col-sm-2" key={i}>
            <div
              className={`border rounded overflow-hidden cursor-pointer ${
                selected === img ? "border-primary border-2" : ""
              }`}
              onClick={() => setSelected(img)}
              style={{ height: "80px" }}
            >
              <img
                src={img}
                alt={`thumb-${i}`}
                className="w-100 h-100 object-fit-cover"
              />
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
