import { useEffect } from "react";
import { SITE_URL } from "@/lib/seo";
import type { PageMeta } from "@/lib/pages";

function setTag(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

/**
 * No build estático (Hostnet) o `index.html` é único para todas as páginas,
 * por isso o título, a descrição e o canonical são ajustados aqui, no cliente.
 */
export function applyPageMeta(meta: PageMeta, jsonLd: object[] = []) {
  const url = `${SITE_URL}${meta.path}`;
  document.title = meta.title;
  setTag("name", "description", meta.description);
  setTag("property", "og:title", meta.title);
  setTag("property", "og:description", meta.description);
  setTag("property", "og:url", url);
  setTag("name", "twitter:title", meta.title);
  setTag("name", "twitter:description", meta.description);

  let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.rel = "canonical";
    document.head.appendChild(canonical);
  }
  canonical.href = url;

  document.head.querySelectorAll("script[data-page-ld]").forEach((n) => n.remove());
  for (const data of jsonLd) {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-page-ld", "");
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  }
}

export function usePageMeta(meta: PageMeta, jsonLd: object[] = []) {
  useEffect(() => {
    applyPageMeta(meta, jsonLd);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [meta.path]);
}
