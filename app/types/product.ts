export type ProductoConfigItem = {
  id: string | number;
  etiqueta: string;
  extra: number;
};

export type Producto = {
  nombre: string;
  basePrice: number;
  medidas: ProductoConfigItem[];
  maderas: ProductoConfigItem[];
  ganchos: ProductoConfigItem[];
};