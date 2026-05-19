import type { ChatMessage, ChatService } from "@/types/chat";

/**
 * Mock chat service — pronto para ser substituído por uma integração real
 * (Lovable AI Gateway, OpenAI, CRM webhook) sem alterar a UI nem o store.
 *
 * Para ligar IA real:
 *   1. Criar src/routes/api/chat.ts (TanStack server route com streamText).
 *   2. Substituir mockChatService por um httpChatService que faz POST /api/chat.
 *   3. Atualizar useChat para consumir streaming (AI SDK useChat).
 */
const SCRIPT = [
  "Olá! 👋 Sou o assistente da Dinâmica Solução. Em que posso ajudar?",
  "Posso falar-lhe sobre os nossos serviços: Agentes de IA, automação de processos (RPA), desenvolvimento de sistemas, sites e consultoria tech.",
  "Quer um diagnóstico gratuito? Posso encaminhá-lo para um especialista no WhatsApp.",
  "Excelente! Vou registar o seu interesse — entretanto pode preencher o formulário ou falar connosco direto no +351 914 185 760.",
];

let step = 0;

export const mockChatService: ChatService = {
  async send(messages, options) {
    await new Promise((r) => setTimeout(r, 650));
    if (options?.signal?.aborted) throw new Error("aborted");

    const last = messages[messages.length - 1]?.content.toLowerCase() ?? "";
    let content: string;

    if (/preço|orçamento|custo|valor/.test(last)) {
      content =
        "Os valores dependem do escopo. Posso pedir a um especialista para preparar uma proposta — quer deixar o seu contacto no formulário abaixo?";
    } else if (/whatsapp|telefone|contacto|falar/.test(last)) {
      content =
        "Claro! Fale connosco no WhatsApp: +351 914 185 760 ou use o botão verde no canto da página.";
    } else if (/ia|agente|chatbot/.test(last)) {
      content =
        "Os nossos Agentes de IA atendem 24/7 no WhatsApp, Instagram e site — qualificam leads, agendam reuniões e integram com o seu CRM. Quer ver um demo?";
    } else {
      content = SCRIPT[step % SCRIPT.length];
      step++;
    }

    return {
      reply: {
        id: crypto.randomUUID(),
        role: "assistant",
        content,
        createdAt: Date.now(),
      } satisfies ChatMessage,
    };
  },
};
