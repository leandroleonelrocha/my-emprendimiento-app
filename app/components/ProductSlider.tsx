"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProductGallery({ imagenes }: { imagenes: string[] }) {
  const [selected, setSelected] = useState(imagenes[0]);

  return (
    <div className="flex gap-4">

      {/* MINIATURAS */}
      <div className="flex-1 bg-gray-100 rounded-xl p-4 flex items-center justify-center">
        {imagenes.map((img, i) => (
          <div
            key={i}
            onClick={() => setSelected(img)}
            className={`border rounded-lg cursor-pointer overflow-hidden 
              ${selected === img ? "ring-2 ring-blue-500" : "opacity-80 hover:opacity-100"}
            `}
          >
            <Image
              src={img}
              width={600}
          height={600}
              alt={`thumb-${i}`}
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* IMAGEN PRINCIPAL */}
      {/* <div className="flex-1 bg-gray-100 rounded-xl p-4 flex items-center justify-center">
        <Image
          src={selected}
          width={600}
          height={600}
          alt="main"
          className="object-contain max-h-[500px]"
        />
      </div> */}

    </div>
  );
}
