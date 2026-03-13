"use client";

import Image from "next/image";
import { Building2, Clock, ArrowRight } from "lucide-react";
import { StaggerContainer, StaggerItem, motion } from "@/components/motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-white via-brand-50/40 to-nude dark:from-[#0F0710] dark:via-[#0F0710] dark:to-[#0F0710]">
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute -top-32 -right-32 h-[260px] w-[260px] rounded-full bg-brand-200/50 blur-3xl dark:bg-brand-800 sm:h-[520px] sm:w-[520px]"
        />
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.45 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="absolute -bottom-16 -left-16 h-[180px] w-[180px] rounded-full bg-nude blur-3xl dark:bg-[#1E0F1A] sm:h-[380px] sm:w-[380px]"
        />
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 1.4, delay: 0.4, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-brand-100/60 blur-3xl dark:bg-[#2E1124] sm:h-[500px] sm:w-[500px]"
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

      <div className="relative mx-auto max-w-screen-2xl w-full px-4 pt-28 pb-16 sm:px-6 sm:pt-32 sm:pb-20 lg:px-6 lg:pt-36 lg:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Left — Text */}
          <StaggerContainer staggerDelay={0.1} delayChildren={0.15}>
            {/* Badge */}
            <StaggerItem>
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-brand-100 dark:border-brand-900 bg-brand-50 dark:bg-[#1E0F1A] px-4 py-1.5">
                <span className="h-2 w-2 rounded-full bg-brand animate-pulse" />
                <span className="text-xs font-semibold uppercase tracking-wider text-brand">
                  Estudio jurídico moderno
                </span>
              </div>
            </StaggerItem>

            {/* Heading */}
            <StaggerItem>
              <h1 className="text-3xl font-bold leading-[1.1] tracking-tight text-dark dark:text-white sm:text-4xl lg:text-5xl xl:text-6xl">
                Soluciones legales{" "}
                <span className="text-brand">ágiles</span>{" "}
                para empresas y particulares
              </h1>
            </StaggerItem>

            {/* Subheading */}
            <StaggerItem>
              <p className="mt-6 text-base leading-relaxed text-dark-muted dark:text-white/60 sm:text-lg">
                Combinamos la solidez del derecho tradicional con un enfoque tech-first.
                Asesoría legal pensada para quienes construyen el futuro.
              </p>
            </StaggerItem>

            {/* Dual CTA Buttons */}
            <StaggerItem>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  render={<a href="#empresas" />}
                  nativeButton={false}
                  size="lg"
                  className="group rounded-full bg-brand px-7 py-4 text-base font-semibold text-white shadow-lg shadow-brand/25 hover:bg-brand-light hover:shadow-xl hover:shadow-brand/30"
                >
                  Servicios Corporativos
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  render={<a href="#particulares" />}
                  nativeButton={false}
                  variant="outline"
                  size="lg"
                  className="group rounded-full border-2 border-brand/20 dark:border-brand/30 bg-white dark:bg-transparent px-7 py-4 text-base font-semibold text-brand dark:text-brand-300 hover:border-brand/40 hover:bg-brand-50 dark:hover:bg-brand-900/30"
                >
                  Asesoría a Particulares
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </StaggerItem>

            {/* Trust indicators */}
            <StaggerItem>
              <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-[#8A3D6B]/40 dark:border-[#3A1F32] pt-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 dark:bg-[#1E0F1A]">
                    <Building2 className="h-5 w-5 text-brand dark:text-brand-300" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-dark dark:text-white/90">Startups & Tech</p>
                    <p className="text-xs text-dark-muted dark:text-white/40">foco corporativo</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 dark:bg-[#1E0F1A]">
                    <Clock className="h-5 w-5 text-brand dark:text-brand-300" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-dark dark:text-white/90">Respuesta 24h</p>
                    <p className="text-xs text-dark-muted dark:text-white/40">consultas urgentes</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>

          {/* Right — Photo */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-sm lg:max-w-none"
          >
            {/* Decorative background blob behind photo */}
            <div className="absolute inset-0 -m-4 rounded-3xl bg-[#C98FBA]/30 dark:bg-brand-900/50" />
            <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-brand/10">
              <Image
                src="/hero-image.png"
                alt="Arana Postigo — Equipo del estudio jurídico"
                width={600}
                height={720}
                className="h-auto w-full object-cover object-top"
                priority
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
