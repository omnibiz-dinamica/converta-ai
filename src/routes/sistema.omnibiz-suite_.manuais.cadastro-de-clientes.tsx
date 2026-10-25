import { createFileRoute } from "@tanstack/react-router";
import { MANUAL_CLIENTES_META, pageHead } from "@/lib/pages";
import { ManualClientesPage } from "@/pages/ManualClientesPage";

export const Route = createFileRoute("/sistema/omnibiz-suite_/manuais/cadastro-de-clientes")({
  component: ManualClientesPage,
  head: () => pageHead(MANUAL_CLIENTES_META),
});
