const servicios = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
      </svg>
    ),
    titulo: "Derecho Laboral",
    descripcion:
      "Despidos, indemnizaciones, accidentes laborales y conflictos con empleadores. Te acompañamos en cada paso del reclamo.",
    features: ["Despidos injustificados", "Indemnizaciones", "Accidentes laborales", "Trabajo no registrado"],
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
      </svg>
    ),
    titulo: "Sucesiones",
    descripcion:
      "Declaratoria de herederos, partición de bienes y gestión completa del trámite sucesorio. Resolución eficiente.",
    features: ["Declaratoria de herederos", "Partición de bienes", "Testamentos", "Planificación patrimonial"],
  },
];

export default function ServiciosParticulares() {
  return (
    <section id="particulares" className="relative bg-nude py-24 lg:py-32">
      {/* Top separator */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 shadow-sm">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              Para particulares
            </span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-dark sm:text-4xl lg:text-5xl">
            Defendemos tus{" "}
            <span className="text-primary">derechos</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-dark-muted">
            Situaciones difíciles merecen respuestas claras. Te brindamos
            asesoramiento cercano y efectivo cuando más lo necesitás.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {servicios.map((servicio) => (
            <div
              key={servicio.titulo}
              className="group relative overflow-hidden rounded-2xl border border-nude-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 lg:p-10"
            >
              {/* Icon */}
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary">
                {servicio.icon}
              </div>

              {/* Content */}
              <h3 className="mb-3 text-2xl font-bold text-dark">
                {servicio.titulo}
              </h3>
              <p className="mb-6 text-base leading-relaxed text-dark-muted">
                {servicio.descripcion}
              </p>

              {/* Feature list */}
              <ul className="space-y-3">
                {servicio.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-dark-muted">
                    <svg className="h-4 w-4 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA link */}
              <a
                href="#contacto"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-light"
              >
                Consultar ahora
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>

              {/* Corner accent */}
              <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-primary-50 opacity-0 transition-opacity group-hover:opacity-50" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
