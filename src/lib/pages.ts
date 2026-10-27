import { BRAND_NAME, SITE_URL } from "@/lib/seo";

/** Caminhos das páginas do sistema OmniBiz Suite. */
export const SUITE_PATH = "/sistema/omnibiz-suite";
export const MANUAL_EXTRA_PATH = `${SUITE_PATH}/manuais/trabalho-extra`;
export const MANUAL_CLIENTES_PATH = `${SUITE_PATH}/manuais/cadastro-de-clientes`;

export const MANUAL_ENTRADA_PATH = `${SUITE_PATH}/manuais/entrada-por-pessoas`;

export type PageMeta = {
  path: string;
  title: string;
  description: string;
};

export const SUITE_META: PageMeta = {
  path: SUITE_PATH,
  title: `OmniBiz Suite | Sistema de gestão para equipas e operações | ${BRAND_NAME}`,
  description:
    "OmniBiz Suite: tarefas, clientes, folha de ponto, RH e suporte num só sistema, com manuais passo a passo para as equipas começarem a usar.",
};

export const MANUAL_EXTRA_META: PageMeta = {
  path: MANUAL_EXTRA_PATH,
  title: `Manual Trabalho Extra | OmniBiz Suite | ${BRAND_NAME}`,
  description:
    "Passo a passo para gestores: escolher a equipa de extras, registar o trabalho, enviar convites e acompanhar as respostas no OmniBiz Suite.",
};

export const MANUAL_CLIENTES_META: PageMeta = {
  path: MANUAL_CLIENTES_PATH,
  title: `Manual Cadastro de Clientes | OmniBiz Suite | ${BRAND_NAME}`,
  description:
    "Passo a passo para gestores: preencher a ficha do cliente com contactos, morada, horários, cobrança e equipa responsável no OmniBiz Suite.",
};

export const MANUAL_ENTRADA_META: PageMeta = {
  path: MANUAL_ENTRADA_PATH,
  title: `Manual Entrada por Nº de Pessoas | OmniBiz Suite | ${BRAND_NAME}`,
  description:
    "Passo a passo para gestores: configurar no cliente um horário de entrada diferente conforme o número de pessoas que vão ao serviço, sem alterar a carga horária.",
};

export const suiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "OmniBiz Suite",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: `${SITE_URL}${SUITE_PATH}`,
  description: SUITE_META.description,
  publisher: { "@type": "Organization", name: BRAND_NAME, url: SITE_URL },
};

/** Cabeçalho (meta + canonical + JSON-LD) para as rotas do TanStack. */
export function pageHead(meta: PageMeta, jsonLd: object[] = []) {
  const url = `${SITE_URL}${meta.path}`;
  return {
    meta: [
      { title: meta.title },
      { name: "description", content: meta.description },
      { property: "og:title", content: meta.title },
      { property: "og:description", content: meta.description },
      { property: "og:url", content: url },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: jsonLd.map((data) => ({
      type: "application/ld+json",
      children: JSON.stringify(data),
    })),
  };
}
