"use client";

import { Briefcase, Landmark, Check, ArrowRight } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem, motion } from "@/components/motion";
import type { LucideIcon } from "lucide-react";

interface Servicio {
  icon: LucideIcon;
  titulo: string;
  descripcion: string;
  features: string[];
}

const servicios: Servicio[] = [
  {
    icon: Briefcase,
    titulo: "Derecho Laboral",
    descripcion:
      "Despidos, indemnizaciones, accidentes laborales y conflictos con empleadores. Te acompañamos en cada paso del reclamo.",
    features: ["Despidos injustificados", "Indemnizaciones", "Accidentes laborales", "Trabajo no registrado"],
  },
  {
    icon: Landmark,
    titulo: "Sucesiones",
    descripcion:
      "Declaratoria de herederos, partición de bienes y gestión completa del trámite sucesorio. Resolución eficiente.",
    features: ["Declaratoria de herederos", "Partición de bienes", "Testamentos", "Planificación patrimonial"],
  },
];

export default function ServiciosParticulares() {
  return (
    <section id="particulares" className="relative overflow-hidden bg-gradient-to-br from-white via-brand-50/30 to-nude dark:from-[#0F0710] dark:via-[#0F0710] dark:to-[#0F0710] py-16 sm:py-20 lg:py-28">
      {/* Top separator */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent" />
      {/* Decorative blobs — light mode only */}
      <div className="pointer-events-none absolute inset-0 dark:hidden">
        <div className="absolute -bottom-20 -right-20 h-[320px] w-[320px] rounded-full bg-brand-200/40 blur-3xl" />
        <div className="absolute top-10 left-1/3 h-[220px] w-[220px] rounded-full bg-nude-dark/50 blur-3xl" />
        <div className="absolute -top-16 left-10 h-[180px] w-[180px] rounded-full bg-brand-100/50 blur-3xl" />
      </div>

      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-6">
        {/* Header */}
        <FadeIn className="mb-16 max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white dark:bg-[#1E0F1A] px-3 py-1 shadow-sm">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand">
              Para particulares
            </span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-dark dark:text-white sm:text-4xl lg:text-5xl">
            Defendemos tus{" "}
            <span className="text-brand">derechos</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-dark-muted dark:text-white/60">
            Situaciones difíciles merecen respuestas claras. Te brindamos
            asesoramiento cercano y efectivo cuando más lo necesitás.
          </p>
        </FadeIn>

        {/* Cards */}
        <StaggerContainer className="grid gap-5 sm:gap-6 sm:grid-cols-2" staggerDelay={0.18}>
          {servicios.map((servicio) => {
            const Icon = servicio.icon;
            return (
              <StaggerItem key={servicio.titulo}>
                <motion.div
                  whileHover={{ y: -6, boxShadow: "0 20px 40px -12px rgba(114, 47, 87, 0.10)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group relative h-full overflow-hidden rounded-2xl border border-nude-200 dark:border-[#3A1F32] bg-white dark:bg-[#180D16] p-6 sm:p-8 shadow-sm hover:border-brand/30 hover:shadow-md hover:shadow-brand/10 lg:p-10"
                >
                  {/* Icon */}
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 dark:bg-[#1E0F1A] text-brand dark:text-brand-300">
                    <Icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <h3 className="mb-3 text-2xl font-bold text-dark dark:text-white">
                    {servicio.titulo}
                  </h3>
                  <p className="mb-6 text-base leading-relaxed text-dark-muted dark:text-white/60">
                    {servicio.descripcion}
                  </p>

                  {/* Feature list */}
                  <ul className="space-y-3">
                    {servicio.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm text-dark-muted dark:text-white/60">
                        <Check className="h-4 w-4 shrink-0 text-brand" strokeWidth={2} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA link */}
                  <a
                    href="#contacto"
                    className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-brand-light"
                  >
                    Consultar ahora
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>

                  {/* Corner accent */}
                  <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-brand-50 opacity-0 transition-opacity group-hover:opacity-50" />
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
