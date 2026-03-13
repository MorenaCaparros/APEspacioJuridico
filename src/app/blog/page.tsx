import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Newspaper } from "lucide-react";
import { getArticulos } from "@/lib/contentful";

export const metadata: Metadata = {
  title: "Blog — Recursos jurídicos",
  description:
    "Artículos y guías prácticas sobre derecho laboral, registro de marcas, contratos IT y sucesiones en Argentina.",
};

export const revalidate = 60; // ISR: revalida cada 60s

export default async function BlogPage() {
  const articulos = await getArticulos(50);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-brand-50/40 dark:from-[#0F0710] dark:to-[#0F0710]">
      {/* Header */}
      <section className="mx-auto max-w-screen-2xl px-4 pb-12 pt-32 sm:px-6 lg:px-6 lg:pt-40">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-50 dark:bg-[#1E0F1A] px-3 py-1">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand dark:text-brand-300">
            Blog
          </span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-dark dark:text-white sm:text-5xl">
          Novedades & recursos
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-dark-muted dark:text-white/60">
          Artículos prácticos sobre derecho laboral, marcas, contratos tech y más.
        </p>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-screen-2xl px-4 pb-24 sm:px-6 lg:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {articulos.map((articulo) => (
            <Link
              key={articulo.id}
              href={`/blog/${articulo.slug}`}
              className="group cursor-pointer"
            >
              <article>
                <div className="mb-5 aspect-[16/10] overflow-hidden rounded-2xl bg-gradient-to-br from-brand-50 to-nude dark:from-[#1E0F1A] dark:to-[#180D16] transition-transform duration-300 group-hover:scale-[1.02]">
                  {articulo.imagenUrl ? (
                    <Image
                      src={articulo.imagenUrl}
                      alt={articulo.imagenAlt}
                      width={600}
                      height={375}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <Newspaper className="h-10 w-10 text-brand-200" strokeWidth={1} />
                    </div>
                  )}
                </div>
                <div className="mb-3 flex items-center gap-2">
                  <span className="text-xs text-dark-muted dark:text-white/40">{articulo.fecha}</span>
                </div>
                <h2 className="mb-2 text-lg font-bold leading-snug text-dark dark:text-white transition-colors group-hover:text-brand dark:group-hover:text-brand-300">
                  {articulo.titulo}
                </h2>
                <p className="text-sm leading-relaxed text-dark-muted dark:text-white/50">
                  {articulo.resumen}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-brand dark:text-brand-300 transition-colors group-hover:text-brand-light">
                  Leer más <ArrowRight className="h-3 w-3" />
                </span>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
