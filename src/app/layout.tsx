import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import JsonLd from "@/components/JsonLd";
import { ThemeProvider } from "@/components/ThemeProvider";
import { cn } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://www.aranapostigo.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Arana Postigo | Estudio Jurídico — Buenos Aires",
    template: "%s | Arana Postigo Estudio Jurídico",
  },
  description:
    "Estudio jurídico en Buenos Aires especializado en registro de marcas, contratos IT para startups, derecho laboral y sucesiones. Asesoría legal ágil para empresas y particulares.",
  keywords: [
    "estudio jurídico Buenos Aires",
    "abogados startups Argentina",
    "registro de marcas INPI",
    "contratos IT SaaS",
    "derecho laboral Buenos Aires",
    "sucesiones abogado",
    "asesoría legal empresas",
    "abogado marcas",
    "outsourcing legal startup",
  ],
  authors: [{ name: "Arana Postigo Estudio Jurídico", url: siteUrl }],
  creator: "Arana Postigo Estudio Jurídico",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1 },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: siteUrl,
    siteName: "Arana Postigo Estudio Jurídico",
    title: "Arana Postigo | Estudio Jurídico — Buenos Aires",
    description:
      "Registro de marcas, contratos IT, derecho laboral y sucesiones en Buenos Aires. Asesoría legal moderna para empresas y particulares.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arana Postigo | Estudio Jurídico — Buenos Aires",
    description:
      "Registro de marcas, contratos IT, derecho laboral y sucesiones. Asesoría legal ágil en Buenos Aires.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={cn(geistSans.variable, geistMono.variable)} suppressHydrationWarning>
      <body className="font-sans antialiased overflow-x-hidden">
        <ThemeProvider>
          <JsonLd />
          <Navbar />
          {children}
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
