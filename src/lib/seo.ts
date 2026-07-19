import { EMAIL, LINKEDIN, PHONE_DISPLAY, SITE } from "@/lib/contact";

export const SITE_URL = "https://www.dinamicasolucao.com";
export const BRAND_NAME = "Dinâmica Solução";

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: BRAND_NAME,
  url: SITE_URL,
  sameAs: [LINKEDIN, `https://${SITE}`],
  email: EMAIL,
  telephone: PHONE_DISPLAY,
  description:
    "Tecnologia inteligente: agentes de IA, automação de processos (RPA), desenvolvimento de sistemas, sites e consultoria.",
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: BRAND_NAME,
  url: SITE_URL,
};
