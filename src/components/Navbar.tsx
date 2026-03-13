"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

const navLinks = [
  { href: "#empresas", label: "Empresas" },
  { href: "#particulares", label: "Particulares" },
  { href: "#blog", label: "Blog" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-[#0F0710]/90 backdrop-blur-md shadow-sm border-b border-gray-border dark:border-[#3A1F32]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1560px] px-4 sm:px-6 lg:px-6">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand text-white font-bold text-sm tracking-tight">
              AP
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight text-dark dark:text-white/90 leading-tight">
                Arana Postigo
              </span>
              <span className="text-[10px] font-medium uppercase tracking-widest text-dark-muted dark:text-white/40 leading-tight">
                Estudio Jurídico
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-dark-muted dark:text-white/60 transition-colors hover:text-brand dark:hover:text-brand-300"
              >
                {link.label}
              </a>
            ))}
            <ThemeToggle />
            <Button
              render={<a href="#contacto" />}
              nativeButton={false}
              className="rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-light hover:shadow-lg hover:shadow-brand/20"
            >
              Agendar consulta
            </Button>
          </div>

          {/* Mobile menu — shadcn Sheet */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <Sheet>
              <SheetTrigger
                render={
                  <Button variant="ghost" size="icon" aria-label="Abrir menú" />
                }
              >
                <Menu className="h-5 w-5" />
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] p-0 bg-white dark:bg-[#180D16] border-gray-border dark:border-[#3A1F32]">
                <SheetTitle className="sr-only">Menú de navegación</SheetTitle>
                <div className="flex flex-col gap-1 px-4 pt-16 pb-6">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="rounded-lg px-4 py-3 text-base font-medium text-dark-muted dark:text-white/60 transition-colors hover:bg-nude dark:hover:bg-[#1E0F1A] hover:text-brand dark:hover:text-brand-300"
                    >
                      {link.label}
                    </a>
                  ))}
                  <a
                    href="#contacto"
                    className="mt-4 rounded-full bg-brand px-5 py-3 text-center text-sm font-medium text-white transition-all hover:bg-brand-light"
                  >
                    Agendar consulta
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
