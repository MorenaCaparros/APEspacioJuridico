import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AP Arana Postigo | Estudio Jurídico — Empresas & Particulares",
  description:
    "Soluciones legales ágiles para empresas tecnológicas, startups y particulares. Registro de marcas, contratos IT, derecho laboral y sucesiones en Buenos Aires.",
  keywords: [
    "estudio jurídico",
    "abogados Buenos Aires",
    "registro de marcas",
    "contratos IT",
    "derecho laboral",
    "sucesiones",
    "startups",
    "asesoría legal empresas",
  ],
  openGraph: {
    title: "AP Arana Postigo | Estudio Jurídico",
    description:
      "Soluciones legales ágiles para empresas tecnológicas y particulares.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={cn("font-sans", geist.variable)}>
      <body className={`${inter.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
