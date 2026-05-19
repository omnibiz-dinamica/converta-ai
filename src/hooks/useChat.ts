import { useCallback } from "react";
import { useChatStore } from "@/store/chatStore";
import { mockChatService } from "@/services/chatService";
import type { ChatMessage, ChatService } from "@/types/chat";

/**
 * Hook desacoplado da UI e do transporte.
 * Trocar `service` pelo cliente real de IA mantém a UI intacta.
 */
export function useChat(service: ChatService = mockChatService) {
  const { messages, isSending, append, setSending } = useChatStore();

  const send = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || isSending) return;

      const userMsg: ChatMessage = {
        id: crypto.randomUUID(),
        role: "user",
        content: trimmed,
        createdAt: Date.now(),
      };
      append(userMsg);
      setSending(true);

      try {
        const { reply } = await service.send([...messages, userMsg]);
        append(reply);
      } catch {
        append({
          id: crypto.randomUUID(),
          role: "assistant",
          content:
            "Tive um problema a responder. Tente de novo ou fale connosco no WhatsApp: +351 914 185 760.",
          createdAt: Date.now(),
        });
      } finally {
        setSending(false);
      }
    },
    [append, isSending, messages, service, setSending],
  );

  return { messages, isSending, send };
}
