"use client";

import { Tag, FileText, BarChart3, ArrowRight, ArrowUpRight } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem, motion } from "@/components/motion";
import type { LucideIcon } from "lucide-react";

interface Servicio {
  icon: LucideIcon;
  titulo: string;
  descripcion: string;
  tags: string[];
}

const servicios: Servicio[] = [
  {
    icon: Tag,
    titulo: "Registro de Marcas",
    descripcion:
      "Protegé tu marca en Argentina y LATAM. Gestionamos búsquedas, registros y oposiciones con seguimiento en tiempo real.",
    tags: ["INPI", "Marcas internacionales", "Oposiciones"],
  },
  {
    icon: FileText,
    titulo: "Contratos IT & SaaS",
    descripcion:
      "Contratos a medida para el mundo tech: SaaS, licencias, NDAs, términos de servicio, privacy policies y más.",
    tags: ["SaaS", "Términos de uso", "NDAs"],
  },
  {
    icon: BarChart3,
    titulo: "Asesoría Integral",
    descripcion:
      "Outsourcing legal para tu startup. Societario, compliance, due diligence y acompañamiento en rondas de inversión.",
    tags: ["Compliance", "Due diligence", "Inversiones"],
  },
];

export default function ServiciosCorporativos() {
  return (
    <section id="empresas" className="relative overflow-hidden bg-gradient-to-b from-nude to-white dark:from-[#0F0710] dark:to-[#0F0710] py-16 sm:py-20 lg:py-28">
      {/* Decorative blobs — light mode only */}
      <div className="pointer-events-none absolute inset-0 dark:hidden">
        <div className="absolute -top-24 -right-24 h-[300px] w-[300px] rounded-full bg-brand-200/40 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-[250px] w-[250px] rounded-full bg-nude-dark/60 blur-3xl" />
        <div className="absolute top-1/3 -left-16 h-[200px] w-[200px] rounded-full bg-brand-100/50 blur-3xl" />
      </div>
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-6 relative">
        {/* Header */}
        <FadeIn className="mb-16 max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand">
              Para empresas
            </span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-dark dark:text-white sm:text-4xl lg:text-5xl">
            Legal ops para empresas que{" "}
            <span className="text-brand">escalan</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-dark-muted dark:text-white/60">
            Entendemos tu negocio, tu stack y tus tiempos. Asesoría legal sin
            burocracia, diseñada para equipos que se mueven rápido.
          </p>
        </FadeIn>

        {/* Cards Grid */}
        <StaggerContainer className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.15}>
          {servicios.map((servicio) => {
            const Icon = servicio.icon;
            return (
              <StaggerItem key={servicio.titulo}>
                <motion.div
                  whileHover={{ y: -6, boxShadow: "0 20px 40px -12px rgba(114, 47, 87, 0.12)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group relative h-full rounded-2xl border border-gray-border dark:border-[#3A1F32] bg-white dark:bg-[#180D16] p-8 transition-colors duration-300 hover:border-brand/30 dark:hover:border-brand/40 hover:shadow-md hover:shadow-brand/10"
                >
                  {/* Icon */}
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 dark:bg-[#1E0F1A] text-brand dark:text-brand-300 transition-colors group-hover:bg-brand group-hover:text-white">
                    <Icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <h3 className="mb-3 text-xl font-bold text-dark dark:text-white">
                    {servicio.titulo}
                  </h3>
                  <p className="mb-6 text-sm leading-relaxed text-dark-muted dark:text-white/60">
                    {servicio.descripcion}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {servicio.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-nude dark:bg-[#1E0F1A] px-3 py-1 text-xs font-medium text-dark-muted dark:text-white/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Hover arrow */}
                  <div className="absolute top-8 right-8 opacity-0 transition-all group-hover:opacity-100">
                    <ArrowUpRight className="h-5 w-5 text-brand" />
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* CTA */}
        <FadeIn className="mt-12 text-center" delay={0.3}>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-brand-light"
          >
            Hablemos sobre tu empresa
            <ArrowRight className="h-4 w-4" />
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
