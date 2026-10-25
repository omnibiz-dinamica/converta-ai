import { createFileRoute } from "@tanstack/react-router";
import { SUITE_META, pageHead, suiteJsonLd } from "@/lib/pages";
import { OmniBizSuitePage } from "@/pages/OmniBizSuitePage";

export const Route = createFileRoute("/sistema/omnibiz-suite")({
  component: OmniBizSuitePage,
  head: () => pageHead(SUITE_META, [suiteJsonLd]),
});
