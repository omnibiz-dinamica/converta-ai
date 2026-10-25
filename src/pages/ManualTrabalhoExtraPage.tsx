import html from "@/content/manuals/trabalho-extra.html?raw";
import { MANUAL_EXTRA_META } from "@/lib/pages";
import { ManualPage } from "./ManualPage";

export function ManualTrabalhoExtraPage() {
  return <ManualPage crumb="Trabalho Extra" meta={MANUAL_EXTRA_META} html={html} />;
}
