import { createFileRoute } from "@tanstack/react-router";
import { MANUAL_ENTRADA_META, pageHead } from "@/lib/pages";
import { ManualEntradaPage } from "@/pages/ManualEntradaPage";

export const Route = createFileRoute("/sistema/omnibiz-suite_/manuais/entrada-por-pessoas")({
  component: ManualEntradaPage,
  head: () => pageHead(MANUAL_ENTRADA_META),
});
