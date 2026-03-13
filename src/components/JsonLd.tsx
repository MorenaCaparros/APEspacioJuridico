/**
 * Structured data (JSON-LD) for local SEO.
 * Schema: LegalService + LocalBusiness
 * Docs: https://schema.org/LegalService
 */
export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LegalService", "LocalBusiness"],
    name: "Arana Postigo Estudio Jurídico",
    description:
      "Estudio jurídico en Buenos Aires especializado en registro de marcas, contratos IT para startups, derecho laboral y sucesiones.",
    url: "https://www.aranapostigo.com",
    telephone: "+54-9-223-551-7294",
    email: "contacto@aranapostigo.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Buenos Aires",
      addressRegion: "Buenos Aires",
      addressCountry: "AR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -34.6037,
      longitude: -58.3816,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    sameAs: [
      "https://www.linkedin.com/company/arana-postigo",
      "https://www.instagram.com/aranapostigo",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios Jurídicos",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Registro de Marcas",
            description:
              "Protección de marcas en Argentina y LATAM ante el INPI. Búsquedas, registros y oposiciones.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Contratos IT & SaaS",
            description:
              "Contratos a medida para empresas tech: SaaS, licencias, NDAs, términos de servicio y privacy policies.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Asesoría Integral para Startups",
            description:
              "Outsourcing legal para startups: societario, compliance, due diligence y acompañamiento en rondas de inversión.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Derecho Laboral",
            description:
              "Despidos injustificados, indemnizaciones, accidentes laborales y conflictos con empleadores.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Sucesiones",
            description:
              "Declaratoria de herederos, partición de bienes, testamentos y planificación patrimonial.",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
