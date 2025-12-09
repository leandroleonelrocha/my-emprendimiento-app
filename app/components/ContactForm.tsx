"use client";
import { useState } from "react";

export default function ContactForm() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  const enviarWhatsApp = () => {
    const texto = `Hola! Soy ${nombre}.
      Email: ${email}
      Mensaje: ${mensaje}`;

      const url = `https://wa.me/5491163009079?text=${encodeURIComponent(texto)}`;
      window.open(url, "_blank");
    };

  return (
    <section id="contacto" className="container-fluid mx-auto px-4 py-16">
      <h3 className="text-3xl font-semibold mb-6 text-center">Contacto</h3>
      <div className="max-w-lg mx-auto bg-white shadow-lg rounded-2xl p-6">
        <div className="space-y-4">
          <input type="text" placeholder="Nombre" className="w-full border p-3 rounded-lg"
            onChange={(e) => setNombre(e.target.value)}
          />

          <input type="email" placeholder="Email" className="w-full border p-3 rounded-lg"
            onChange={(e) => setEmail(e.target.value)}
          />

          <textarea placeholder="Mensaje" className="w-full border p-3 rounded-lg h-32"
            onChange={(e) => setMensaje(e.target.value)}
          />

          <button
            onClick={enviarWhatsApp}
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
          >
            Enviar por WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}