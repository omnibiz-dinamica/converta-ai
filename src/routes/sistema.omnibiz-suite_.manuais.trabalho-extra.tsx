import { createFileRoute } from "@tanstack/react-router";
import { MANUAL_EXTRA_META, pageHead } from "@/lib/pages";
import { ManualTrabalhoExtraPage } from "@/pages/ManualTrabalhoExtraPage";

export const Route = createFileRoute("/sistema/omnibiz-suite_/manuais/trabalho-extra")({
  component: ManualTrabalhoExtraPage,
  head: () => pageHead(MANUAL_EXTRA_META),
});
