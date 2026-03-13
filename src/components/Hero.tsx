"use client";

import { ShieldCheck, Building2, Clock, ArrowRight } from "lucide-react";
import { StaggerContainer, StaggerItem, motion } from "@/components/motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white">
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-brand-50 blur-3xl"
        />
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.8 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full bg-nude blur-3xl"
        />
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-brand) 1px, transparent 1px), linear-gradient(90deg, var(--color-brand) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pt-28 pb-16 sm:px-6 sm:pt-32 sm:pb-20 lg:px-8 lg:pt-40 lg:pb-28">
        <div className="max-w-4xl">
          <StaggerContainer staggerDelay={0.1} delayChildren={0.15}>
            {/* Badge */}
            <StaggerItem>
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-4 py-1.5">
                <span className="h-2 w-2 rounded-full bg-brand animate-pulse" />
                <span className="text-xs font-semibold uppercase tracking-wider text-brand">
                  Estudio jurídico moderno
                </span>
              </div>
            </StaggerItem>

            {/* Heading */}
            <StaggerItem>
              <h1 className="text-3xl font-bold leading-[1.1] tracking-tight text-dark sm:text-5xl lg:text-6xl xl:text-7xl">
                Soluciones legales{" "}
                <span className="text-brand">ágiles</span>{" "}
                para empresas y particulares
              </h1>
            </StaggerItem>

            {/* Subheading */}
            <StaggerItem>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-dark-muted sm:text-xl">
                Combinamos la solidez del derecho tradicional con un enfoque tech-first.
                Asesoría legal pensada para quienes construyen el futuro.
              </p>
            </StaggerItem>

            {/* Dual CTA Buttons */}
            <StaggerItem>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button
                  render={<a href="#empresas" />}
                  size="lg"
                  className="group rounded-full bg-brand px-8 py-4 text-base font-semibold text-white shadow-lg shadow-brand/25 hover:bg-brand-light hover:shadow-xl hover:shadow-brand/30"
                >
                  Servicios Corporativos
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  render={<a href="#particulares" />}
                  variant="outline"
                  size="lg"
                  className="group rounded-full border-2 border-brand/20 bg-white px-8 py-4 text-base font-semibold text-brand hover:border-brand/40 hover:bg-brand-50"
                >
                  Asesoría a Particulares
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </StaggerItem>

            {/* Trust indicators */}
            <StaggerItem>
              <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-gray-border pt-8 sm:mt-16 sm:gap-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50">
                    <ShieldCheck className="h-5 w-5 text-brand" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-dark">+10 años</p>
                    <p className="text-xs text-dark-muted">de experiencia</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50">
                    <Building2 className="h-5 w-5 text-brand" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-dark">Startups & Tech</p>
                    <p className="text-xs text-dark-muted">foco corporativo</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50">
                    <Clock className="h-5 w-5 text-brand" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-dark">Respuesta 24h</p>
                    <p className="text-xs text-dark-muted">consultas urgentes</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
