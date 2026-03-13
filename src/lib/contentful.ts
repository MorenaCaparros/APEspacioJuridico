import { createClient } from "contentful";
import type { Document } from "@contentful/rich-text-types";

export const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export interface ArticuloFields {
  titulo: string;
  slug: string;
  extractoOResumen: string;
  fecha: string;
  contenido: Document;
  imagenPrincipal?: {
    fields: {
      file: {
        url: string;
        details: { image: { width: number; height: number } };
      };
      title: string;
    };
  };
}

export interface Articulo {
  id: string;
  titulo: string;
  slug: string;
  resumen: string;
  fecha: string;
  imagenUrl: string | null;
  imagenAlt: string;
}

export interface ArticuloDetalle extends Articulo {
  contenido: Document;
}

function mapItem(item: any): ArticuloDetalle {
  const fields = item.fields as unknown as ArticuloFields;
  const asset = fields.imagenPrincipal;
  const rawUrl = asset?.fields?.file?.url ?? null;
  const imagenUrl = rawUrl
    ? rawUrl.startsWith("//")
      ? `https:${rawUrl}`
      : rawUrl
    : null;

  return {
    id: item.sys.id,
    titulo: fields.titulo,
    slug: fields.slug ?? item.sys.id,
    resumen: fields.extractoOResumen,
    fecha: new Date(fields.fecha).toLocaleDateString("es-AR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }),
    imagenUrl,
    imagenAlt: asset?.fields?.title ?? fields.titulo,
    contenido: fields.contenido,
  };
}

export async function getArticulos(limit = 6): Promise<Articulo[]> {
  const response = await contentfulClient.getEntries<any>({
    content_type: "apEspacioJuridico",
    order: ["-fields.fecha"] as any,
    limit,
    include: 1,
  });
  return response.items.map(mapItem);
}

export async function getArticuloBySlug(
  slug: string
): Promise<ArticuloDetalle | null> {
  const response = await contentfulClient.getEntries<any>({
    content_type: "apEspacioJuridico",
    "fields.slug": slug,
    limit: 1,
    include: 2,
  });
  if (!response.items.length) return null;
  return mapItem(response.items[0]);
}

export async function getAllSlugs(): Promise<string[]> {
  const response = await contentfulClient.getEntries<any>({
    content_type: "apEspacioJuridico",
    select: ["fields.slug"] as any,
  });
  return response.items.map(
    (item: any) => (item.fields as unknown as ArticuloFields).slug
  );
}
