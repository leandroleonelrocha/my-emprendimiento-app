import { productos } from "@/app/data/productos";
import ProductPageClient from "@/app/components/ProductPageClient";

export default async function ProductoPage({ params }: any) {
  // 🔥 ESTE ES EL PASO QUE FALTABA 🔥
  const resolvedParams = await params;

  const producto = productos.find(
    (p) => p.id === Number(resolvedParams.id)
  );

  if (!producto) {
    return <div className="p-10">Producto no encontrado</div>;
  }

  return <ProductPageClient producto={producto} />;
}
