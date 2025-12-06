import { productos } from "@/app/data/productos";
import Image from "next/image";
import type { Metadata } from "next";

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { id } = await params; //  ←  FIX IMPORTANTE

  const producto = productos.find((p) => p.id == Number(id));

  if (!producto) {
    return {
      title: "Producto no encontrado",
      description: "El producto no existe.",
    };
  }

  return {
    title: producto.nombre,
    description: `Consulta por: ${producto.nombre}`,
    openGraph: {
      title: producto.nombre,
      description: `Consulta por: ${producto.nombre}`,
      type: "website",
      url: `https://muebles-de-familia.vercel.app/producto/${producto.id}`,
      images: [
        {
          url: producto.imagen,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}


export default async function ProductoPage({ params }: any) {
  const { id } = await params; //  ←  FIX

  const producto = productos.find((p) => p.id === Number(id));

  if (!producto) {
    return <div className="p-10">Producto no encontrado</div>;
  }

  const url = `https://muebles-de-familia.vercel.app/producto/${producto.id}`;
  const message = encodeURIComponent(
    `Hola! Estoy interesado en el producto: ${producto.nombre}.
Podrían darme más información?
Link del producto: ${url}`
  );

  const whatsapp = `https://wa.me/5491162174495?text=${message}`;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Image
        src={producto.imagen}
        width={800}
        height={500}
        alt={producto.nombre}
        className="rounded-xl shadow-md mb-6"
      />

      <h1 className="text-3xl font-bold mb-4">{producto.nombre}</h1>

      <p className="text-xl font-semibold mb-4">
        Precio base: ${producto.basePrice.toLocaleString("es-AR")}
      </p>

      <a
        href={whatsapp}
        target="_blank"
        className="bg-green-600 text-white py-3 px-6 rounded-lg text-lg font-medium hover:bg-green-700 inline-block"
      >
        Consultar por WhatsApp
      </a>
    </div>
  );
}

