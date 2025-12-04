export const calculatePrice = (producto: any, config: any) => {
  const medida = producto.medidas.find(m => m.id === config.medida);
  const madera = producto.maderas.find(m => m.id === config.madera);
  const ganchos = producto.ganchos.find(g => g.id === config.ganchos);

  return (
    producto.basePrice +
    medida.extra +
    madera.extra +
    ganchos.extra
  );
};