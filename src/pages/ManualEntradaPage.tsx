import html from "@/content/manuals/entrada-por-pessoas.html?raw";
import { MANUAL_ENTRADA_META } from "@/lib/pages";
import { ManualPage } from "./ManualPage";

export function ManualEntradaPage() {
  return <ManualPage crumb="Entrada por nº de pessoas" meta={MANUAL_ENTRADA_META} html={html} />;
}
