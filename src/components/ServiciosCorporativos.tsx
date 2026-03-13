const servicios = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
      </svg>
    ),
    titulo: "Registro de Marcas",
    descripcion:
      "Protegé tu marca en Argentina y LATAM. Gestionamos búsquedas, registros y oposiciones con seguimiento en tiempo real.",
    tags: ["INPI", "Marcas internacionales", "Oposiciones"],
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    titulo: "Contratos IT & SaaS",
    descripcion:
      "Contratos a medida para el mundo tech: SaaS, licencias, NDAs, términos de servicio, privacy policies y más.",
    tags: ["SaaS", "Términos de uso", "NDAs"],
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
    titulo: "Asesoría Integral",
    descripcion:
      "Outsourcing legal para tu startup. Societario, compliance, due diligence y acompañamiento en rondas de inversión.",
    tags: ["Compliance", "Due diligence", "Inversiones"],
  },
];

export default function ServiciosCorporativos() {
  return (
    <section id="empresas" className="relative bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-50 px-3 py-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              Para empresas
            </span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-dark sm:text-4xl lg:text-5xl">
            Legal ops para empresas que{" "}
            <span className="text-primary">escalan</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-dark-muted">
            Entendemos tu negocio, tu stack y tus tiempos. Asesoría legal sin
            burocracia, diseñada para equipos que se mueven rápido.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {servicios.map((servicio) => (
            <div
              key={servicio.titulo}
              className="group relative rounded-2xl border border-gray-border bg-white p-8 transition-all duration-300 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                {servicio.icon}
              </div>

              {/* Content */}
              <h3 className="mb-3 text-xl font-bold text-dark">
                {servicio.titulo}
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-dark-muted">
                {servicio.descripcion}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {servicio.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-nude px-3 py-1 text-xs font-medium text-dark-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Hover arrow */}
              <div className="absolute top-8 right-8 opacity-0 transition-all group-hover:opacity-100">
                <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-light"
          >
            Hablemos sobre tu empresa
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
