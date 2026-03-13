import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays } from "lucide-react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";
import { getArticuloBySlug, getAllSlugs } from "@/lib/contentful";

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const articulo = await getArticuloBySlug(slug);
  if (!articulo) return {};
  return {
    title: articulo.titulo,
    description: articulo.resumen,
    openGraph: {
      title: articulo.titulo,
      description: articulo.resumen,
      ...(articulo.imagenUrl && {
        images: [{ url: articulo.imagenUrl, width: 1200, height: 630 }],
      }),
    },
  };
}

// Rich Text render options
const renderOptions = {
  renderMark: {
    [MARKS.BOLD]: (text: React.ReactNode) => (
      <strong className="font-semibold text-dark dark:text-white">{text}</strong>
    ),
    [MARKS.ITALIC]: (text: React.ReactNode) => <em className="italic">{text}</em>,
    [MARKS.CODE]: (text: React.ReactNode) => (
      <code className="rounded bg-brand-50 dark:bg-[#1E0F1A] px-1.5 py-0.5 font-mono text-sm text-brand dark:text-brand-300">
        {text}
      </code>
    ),
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_: any, children: React.ReactNode) => (
      <p className="mb-5 leading-relaxed text-dark-muted dark:text-white/70">{children}</p>
    ),
    [BLOCKS.HEADING_1]: (_: any, children: React.ReactNode) => (
      <h1 className="mb-6 mt-10 text-3xl font-bold text-dark dark:text-white">{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (_: any, children: React.ReactNode) => (
      <h2 className="mb-4 mt-8 text-2xl font-bold text-dark dark:text-white">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (_: any, children: React.ReactNode) => (
      <h3 className="mb-3 mt-6 text-xl font-semibold text-dark dark:text-white">{children}</h3>
    ),
    [BLOCKS.UL_LIST]: (_: any, children: React.ReactNode) => (
      <ul className="mb-5 ml-5 list-disc space-y-2 text-dark-muted dark:text-white/70">{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (_: any, children: React.ReactNode) => (
      <ol className="mb-5 ml-5 list-decimal space-y-2 text-dark-muted dark:text-white/70">{children}</ol>
    ),
    [BLOCKS.LIST_ITEM]: (_: any, children: React.ReactNode) => (
      <li className="pl-1">{children}</li>
    ),
    [BLOCKS.QUOTE]: (_: any, children: React.ReactNode) => (
      <blockquote className="my-6 border-l-4 border-brand pl-5 text-dark-muted dark:text-white/60 italic">
        {children}
      </blockquote>
    ),
    [BLOCKS.HR]: () => (
      <hr className="my-8 border-gray-border dark:border-[#3A1F32]" />
    ),
    [INLINES.HYPERLINK]: (node: any, children: React.ReactNode) => (
      <a
        href={node.data.uri}
        target="_blank"
        rel="noopener noreferrer"
        className="text-brand dark:text-brand-300 underline underline-offset-2 hover:text-brand-light"
      >
        {children}
      </a>
    ),
  },
};

export default async function ArticuloPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const articulo = await getArticuloBySlug(slug);
  if (!articulo) notFound();

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-brand-50/30 dark:from-[#0F0710] dark:to-[#0F0710]">
      {/* Back link */}
      <div className="mx-auto max-w-3xl px-4 pt-32 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-dark-muted dark:text-white/50 transition-colors hover:text-brand dark:hover:text-brand-300"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver al blog
        </Link>
      </div>

      {/* Article */}
      <article className="mx-auto max-w-3xl px-4 pb-24 pt-8 sm:px-6 lg:px-8">
        {/* Meta */}
        <div className="mb-4 flex items-center gap-2 text-sm text-dark-muted dark:text-white/40">
          <CalendarDays className="h-4 w-4" />
          <span>{articulo.fecha}</span>
        </div>

        {/* Title */}
        <h1 className="mb-6 text-3xl font-bold leading-tight tracking-tight text-dark dark:text-white sm:text-4xl">
          {articulo.titulo}
        </h1>

        {/* Resumen / lead */}
        <p className="mb-8 text-lg leading-relaxed text-dark-muted dark:text-white/60 border-l-4 border-brand pl-5">
          {articulo.resumen}
        </p>

        {/* Featured image */}
        {articulo.imagenUrl && (
          <div className="mb-10 overflow-hidden rounded-2xl">
            <Image
              src={articulo.imagenUrl}
              alt={articulo.imagenAlt}
              width={800}
              height={500}
              className="w-full object-cover"
              priority
            />
          </div>
        )}

        {/* Rich text content */}
        <div className="prose-base">
          {articulo.contenido
            ? documentToReactComponents(articulo.contenido, renderOptions)
            : null}
        </div>

        {/* CTA footer */}
        <div className="mt-16 rounded-2xl bg-brand-50 dark:bg-[#180D16] border border-brand-100 dark:border-[#3A1F32] p-8 text-center">
          <p className="mb-2 text-lg font-semibold text-dark dark:text-white">
            ¿Necesitás asesoramiento personalizado?
          </p>
          <p className="mb-6 text-sm text-dark-muted dark:text-white/60">
            Contactanos y te respondemos en menos de 24 horas.
          </p>
          <a
            href="https://wa.me/5492235517294?text=Hola%2C%20leí%20un%20artículo%20en%20su%20web%20y%20quisiera%20consultar."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-light hover:shadow-lg hover:shadow-brand/25"
          >
            Consultar por WhatsApp
          </a>
        </div>
      </article>
    </main>
  );
}
