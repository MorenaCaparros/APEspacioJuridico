"use client";

import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";
import { FadeIn } from "@/components/motion";

const footerLinks = {
  empresa: [
    { label: "Sobre nosotros", href: "#" },
    { label: "Equipo", href: "#" },
    { label: "Blog", href: "#blog" },
    { label: "Contacto", href: "#contacto" },
  ],
  servicios: [
    { label: "Registro de Marcas", href: "#empresas" },
    { label: "Contratos IT", href: "#empresas" },
    { label: "Derecho Laboral", href: "#particulares" },
    { label: "Sucesiones", href: "#particulares" },
  ],
  legal: [
    { label: "Política de privacidad", href: "#" },
    { label: "Términos de uso", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer id="contacto" className="bg-dark dark:bg-[#180D16] text-white">
      <FadeIn className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20" y={30} duration={0.6}>
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-12">
          {/* Brand + Contact */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand text-white font-bold text-sm">
                AP
              </div>
              <div className="flex flex-col">
                <span className="text-base font-semibold tracking-tight leading-tight">
                  Arana Postigo
                </span>
                <span className="text-[10px] font-medium uppercase tracking-widest text-white/50 leading-tight">
                  Estudio Jurídico
                </span>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">
              Soluciones legales modernas para empresas tecnológicas y
              particulares. Combinamos experiencia jurídica con un enfoque ágil y
              orientado a resultados.
            </p>

            {/* Contact info */}
            <div className="mt-8 space-y-3">
              <a
                href="mailto:contacto@aranapostigo.com"
                className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4" strokeWidth={1.5} />
                contacto@aranapostigo.com
              </a>
              <a
                href="https://wa.me/5492235517294"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-white"
              >
                <Phone className="h-4 w-4" strokeWidth={1.5} />
                +54 9 223 551-7294
              </a>
              <div className="flex items-center gap-3 text-sm text-white/60">
                <MapPin className="h-4 w-4" strokeWidth={1.5} />
                Buenos Aires, Argentina
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            <div>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/40">
                Estudio
              </h4>
              <ul className="space-y-3">
                {footerLinks.empresa.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/40">
                Servicios
              </h4>
              <ul className="space-y-3">
                {footerLinks.servicios.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/40">
                Legal
              </h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:mt-16 sm:flex-row">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Arana Postigo Estudio Jurídico. Todos los
            derechos reservados.
          </p>
          <div className="flex gap-4">
            {/* LinkedIn */}
            <a
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white/40 transition-all hover:bg-brand hover:text-white"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/ap.espaciojuridico/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white/40 transition-all hover:bg-brand hover:text-white"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
      </FadeIn>
    </footer>
  );
}
