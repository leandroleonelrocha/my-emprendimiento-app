import type { Metadata } from "next";
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
    url: "https://my-emprendimiento-app.vercel.app",
    siteName: "Muebles de familia",
    images: [
      {
        url: "/sin-fondo.jpg", // poné tu propia imagen
        width: 1200,
        height: 630,
      }
    ],
    type: "website",
  },

  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  }
};


export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <title>Muebles de familia</title>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
