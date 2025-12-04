// app/producto/page.tsx

import ProductConfigurator from "../app/components/ProductConfigurator";
import { productoMock } from "../app/lib/productMock";

export default function Page() {
  return (
    <div className="flex justify-center py-10">
      <ProductConfigurator producto={productoMock} />
    </div>
  );
}
