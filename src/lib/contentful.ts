import { createClient } from "contentful";

export const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export interface ArticuloFields {
  titulo: string;
  slug: string;
  extractoOResumen: string;
  fecha: string;
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

export async function getArticulos(limit = 6): Promise<Articulo[]> {
  const response = await contentfulClient.getEntries<any>({
    content_type: "apEspacioJuridico",
    order: ["-fields.fecha"] as any,
    limit,
  });

  return response.items.map((item) => {
    const fields = item.fields as unknown as ArticuloFields;
    const asset = fields.imagenPrincipal;
    const rawUrl = asset?.fields?.file?.url ?? null;
    const imagenUrl = rawUrl ? (rawUrl.startsWith("//") ? `https:${rawUrl}` : rawUrl) : null;

    return {
      id: item.sys.id,
      titulo: fields.titulo,
      slug: fields.slug ?? item.sys.id,
      resumen: fields.extractoOResumen,
      fecha: new Date(fields.fecha).toLocaleDateString("es-AR", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
      imagenUrl,
      imagenAlt: asset?.fields?.title ?? fields.titulo,
    };
  });
}
