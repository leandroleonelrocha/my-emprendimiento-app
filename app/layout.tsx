import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
      }
    ],
    type: "website",
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  }
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <head>
        <title>Muebles de familia</title>
      </head>
      
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="w-full py-6 shadow-sm bg-white">
          <div className="container mx-auto flex items-center justify-between px-4">

            {/* Logo + Título */}
            <div className="flex items-center gap-3">
              <img src="/logo.jpeg" alt="MueblesLux Logo" className="h-10" />
              <h1 className="text-2xl font-bold">Muebles De Familia</h1>
            </div>

            {/* Navegación */}
            <nav className="space-x-6">
              <a href="#productos" className="hover:underline">Productos</a>
              <a href="#destacados" className="hover:underline">Destacados</a>
              <a href="#contacto" className="hover:underline">Contacto</a>
            </nav>

          </div>
        </header>

        {children}
      </body>
    </html>
  );
}
