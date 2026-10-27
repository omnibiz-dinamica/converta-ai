import { MANUAL_CLIENTES_PATH, MANUAL_ENTRADA_PATH, MANUAL_EXTRA_PATH } from "@/lib/pages";

export type ManualLink = { label: string; href: string };
export type ManualGroup = { label: string; items: ManualLink[] };

/** Árvore "Tutoriais OmniBiz": pasta → manuais. Usada no menu e na landing. */
export const MANUAL_GROUPS: ManualGroup[] = [
  {
    label: "Clientes",
    items: [
      { label: "Cadastro de clientes", href: MANUAL_CLIENTES_PATH },
      { label: "Entrada por nº de pessoas", href: MANUAL_ENTRADA_PATH },
    ],
  },
  {
    label: "Trabalho Extra",
    items: [{ label: "Trabalho Extra", href: MANUAL_EXTRA_PATH }],
  },
];
