import html from "@/content/manuals/cadastro-de-clientes.html?raw";
import { MANUAL_CLIENTES_META } from "@/lib/pages";
import { ManualPage } from "./ManualPage";

export function ManualClientesPage() {
  return <ManualPage crumb="Cadastro de clientes" meta={MANUAL_CLIENTES_META} html={html} />;
}
