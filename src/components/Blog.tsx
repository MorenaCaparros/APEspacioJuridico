"use client";

import { Newspaper, ArrowRight } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";

// Placeholder data — ready to connect with a Headless CMS (Sanity, Strapi, Contentful, etc.)
const articulos = [
  {
    slug: "registro-marca-argentina-2026",
    titulo: "Cómo registrar tu marca en Argentina en 2026: guía paso a paso",
    descripcion:
      "Todo lo que necesitás saber sobre el proceso ante INPI, tiempos, costos y errores comunes.",
    categoria: "Marcas",
    fecha: "12 Mar 2026",
    imagen: null, // Replace with CMS image URL
    tiempoLectura: "5 min",
  },
  {
    slug: "contratos-saas-clausulas-clave",
    titulo: "5 cláusulas que no pueden faltar en tu contrato SaaS",
    descripcion:
      "Protegé tu producto y a tus usuarios con contratos sólidos. Analizamos las cláusulas esenciales.",
    categoria: "Contratos IT",
    fecha: "8 Mar 2026",
    imagen: null,
    tiempoLectura: "4 min",
  },
  {
    slug: "derechos-despido-injustificado",
    titulo: "Despido injustificado: conocé tus derechos y plazos para reclamar",
    descripcion:
      "Guía completa sobre indemnización, preaviso y los pasos a seguir si te despidieron sin causa.",
    categoria: "Laboral",
    fecha: "3 Mar 2026",
    imagen: null,
    tiempoLectura: "6 min",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="bg-white dark:bg-[#0F0710] py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn className="mb-16 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand">
                Blog
              </span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-dark dark:text-white sm:text-4xl">
              Novedades & recursos
            </h2>
            <p className="mt-3 text-lg text-dark-muted dark:text-white/60">
              Artículos prácticos para empresas y particulares.
            </p>
          </div>
          <a
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-brand-light"
          >
            Ver todos los artículos
            <ArrowRight className="h-4 w-4" />
          </a>
        </FadeIn>

        {/* Articles Grid */}
        <StaggerContainer className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.15}>
          {articulos.map((articulo) => (
            <StaggerItem key={articulo.slug}>
              <article className="group cursor-pointer">
                {/* Image placeholder */}
                <div className="mb-5 aspect-[16/10] overflow-hidden rounded-2xl bg-gradient-to-br from-brand-50 to-nude dark:from-[#1E0F1A] dark:to-[#180D16] transition-transform group-hover:scale-[1.02]">
                  <div className="flex h-full w-full items-center justify-center">
                    <Newspaper className="h-10 w-10 text-brand-200" strokeWidth={1} />
                  </div>
                </div>

                {/* Meta */}
                <div className="mb-3 flex items-center gap-3">
                  <span className="rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-semibold text-brand">
                    {articulo.categoria}
                  </span>
                  <span className="text-xs text-dark-muted dark:text-white/40">{articulo.fecha}</span>
                  <span className="text-xs text-dark-muted dark:text-white/40">· {articulo.tiempoLectura}</span>
                </div>

                {/* Title */}
                <h3 className="mb-2 text-lg font-bold leading-snug text-dark dark:text-white transition-colors group-hover:text-brand dark:group-hover:text-brand-300">
                  {articulo.titulo}
                </h3>
                {/* Description */}
                <p className="text-sm leading-relaxed text-dark-muted dark:text-white/50">
                  {articulo.descripcion}
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
