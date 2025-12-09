import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muebles de familia",
  description: "Muebles personalizados en melamina.",

  openGraph: {
    title: "Muebles de familia",
    description: "Muebles personalizados en melamina.",
    url: "https://muebles-de-familia.vercel.app/",
    siteName: "Muebles de familia",
    images: [
      {
        url: "https://muebles-de-familia.vercel.app/sin-fondo.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <head>
        <title>Muebles de familia</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css"
        />

      </head>

      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        
        {/* HEADER */}
        <header className="bg-white shadow-sm py-3">
          <div className="container d-flex align-items-center justify-content-between">

            {/* Logo + Título */}
            <div className="d-flex align-items-center gap-3">
              <img src="/logo.jpeg" alt="Logo Muebles De Familia" className="me-2" style={{ height: "45px" }} />
              <h1 className="m-0 fs-3 fw-bold">Muebles De Familia</h1>
            </div>

            {/* Navegación */}
            <nav className="d-flex gap-4">
              <a href="#productos" className="text-decoration-none">Productos</a>
              {/* <a href="#destacados" className="text-decoration-none">Destacados</a>
              <a href="#realizados" className="text-decoration-none">Trabajos realizados</a>
              <a href="#contacto" className="text-decoration-none">Contacto</a> */}
            </nav>

          </div>
        </header>

        {/* CONTENIDO */}
        <main className="container-fluid">
          {children}
        </main>

      </body>
    </html>
  );
}

