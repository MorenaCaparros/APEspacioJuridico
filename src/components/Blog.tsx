import Image from "next/image";
import { getArticulos } from "@/lib/contentful";
import { ArrowRight, Newspaper } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";

export default async function Blog() {
  const articulos = await getArticulos(3);

  return (
    <section id="blog" className="bg-gradient-to-b from-white to-brand-50/40 dark:from-[#0F0710] dark:to-[#0F0710] py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn className="mb-16 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-50 dark:bg-[#1E0F1A] px-3 py-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand dark:text-brand-300">
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
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand dark:text-brand-300 transition-colors hover:text-brand-light"
          >
            Ver todos los artículos
            <ArrowRight className="h-4 w-4" />
          </a>
        </FadeIn>

        {/* Articles Grid */}
        <StaggerContainer className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.15}>
          {articulos.map((articulo) => (
            <StaggerItem key={articulo.id}>
              <article className="group cursor-pointer">
                {/* Image */}
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

                {/* Meta */}
                <div className="mb-3 flex items-center gap-2">
                  <span className="text-xs text-dark-muted dark:text-white/40">{articulo.fecha}</span>
                </div>

                {/* Title */}
                <h3 className="mb-2 text-lg font-bold leading-snug text-dark dark:text-white transition-colors group-hover:text-brand dark:group-hover:text-brand-300">
                  {articulo.titulo}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-dark-muted dark:text-white/50">
                  {articulo.resumen}
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
