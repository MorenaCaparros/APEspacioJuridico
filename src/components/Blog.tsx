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
    <section id="blog" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-50 px-3 py-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                Blog
              </span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-dark sm:text-4xl">
              Novedades & recursos
            </h2>
            <p className="mt-3 text-lg text-dark-muted">
              Artículos prácticos para empresas y particulares.
            </p>
          </div>
          <a
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-light"
          >
            Ver todos los artículos
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Articles Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {articulos.map((articulo) => (
            <article
              key={articulo.slug}
              className="group cursor-pointer"
            >
              {/* Image placeholder */}
              <div className="mb-5 aspect-[16/10] overflow-hidden rounded-2xl bg-gradient-to-br from-primary-50 to-nude transition-transform group-hover:scale-[1.02]">
                <div className="flex h-full w-full items-center justify-center">
                  <svg className="h-10 w-10 text-primary-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                  </svg>
                </div>
              </div>

              {/* Meta */}
              <div className="mb-3 flex items-center gap-3">
                <span className="rounded-full bg-primary-50 px-2.5 py-0.5 text-xs font-semibold text-primary">
                  {articulo.categoria}
                </span>
                <span className="text-xs text-dark-muted">{articulo.fecha}</span>
                <span className="text-xs text-dark-muted">· {articulo.tiempoLectura}</span>
              </div>

              {/* Title */}
              <h3 className="mb-2 text-lg font-bold leading-snug text-dark transition-colors group-hover:text-primary">
                {articulo.titulo}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-dark-muted">
                {articulo.descripcion}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
