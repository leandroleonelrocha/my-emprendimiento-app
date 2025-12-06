export function generarLinkWhatsApp(nombreProducto: string) {
  const phoneNumber = "5491162174495"; 
  //const phoneNumber = "5491163009079";
  const websiteURL = "https://my-emprendimiento-app.vercel.app?v=3";

  const message = `
    Hola, estoy interesado en el producto: ${nombreProducto}.
    ¿Podrían darme más información?
    Consulta realizada desde: ${websiteURL}
  `;

  const whatsappMessage = encodeURIComponent(message);

  return `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
}