import type { ChatMessage, ChatService } from "@/types/chat";
import { PHONE_DISPLAY } from "@/lib/contact";

/**
 * Mock chat service — pronto para ser substituído por uma integração real autorizada
 * sem alterar a UI nem o store.
 *
 * Para ligar uma integração real:
 *   1. Criar src/routes/api/chat.ts (TanStack server route com streamText).
 *   2. Substituir mockChatService por um httpChatService que faz POST /api/chat.
 *   3. Atualizar useChat para consumir streaming (AI SDK useChat).
 */
const SCRIPT = [
  "Olá! 👋 Sou o assistente informativo da Dinâmica Solução. Em que posso ajudar?",
  "Posso falar-lhe sobre os nossos serviços: Agentes de IA, automação de processos (RPA), desenvolvimento de sistemas, sites e consultoria tech.",
  "Quer um diagnóstico gratuito? Posso encaminhá-lo para um especialista no WhatsApp.",
  `Excelente! Pode preencher o formulário ou falar connosco diretamente no WhatsApp ${PHONE_DISPLAY}.`,
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
        "Os valores dependem do âmbito. Posso pedir a um especialista para preparar uma proposta — quer deixar o seu contacto no formulário abaixo?";
    } else if (/whatsapp|telefone|contacto|falar/.test(last)) {
      content = `Claro! Fale connosco no WhatsApp ${PHONE_DISPLAY} ou use o botão verde no canto da página.`;
    } else if (/ia|agente|chatbot/.test(last)) {
      content =
        "Os nossos Agentes de IA podem atender no WhatsApp, Instagram e site — qualificam leads, recolhem dados e encaminham para a equipa. Quer ver uma demonstração?";
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
