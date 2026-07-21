import { create } from "zustand";
import type { ChatMessage } from "@/types/chat";

interface ChatState {
  open: boolean;
  messages: ChatMessage[];
  isSending: boolean;
  toggle: () => void;
  setOpen: (v: boolean) => void;
  append: (m: ChatMessage) => void;
  setSending: (v: boolean) => void;
  reset: () => void;
}

const seed: ChatMessage[] = [
  {
    id: "welcome",
    role: "assistant",
    content:
      "👋 Olá! Sou o assistente informativo da Dinâmica Solução. Posso explicar serviços, preços ou encaminhar para contacto humano. Como posso ajudar?",
    createdAt: Date.now(),
  },
];

export const useChatStore = create<ChatState>((set) => ({
  open: false,
  messages: seed,
  isSending: false,
  toggle: () => set((s) => ({ open: !s.open })),
  setOpen: (v) => set({ open: v }),
  append: (m) => set((s) => ({ messages: [...s.messages, m] })),
  setSending: (v) => set({ isSending: v }),
  reset: () => set({ messages: seed, isSending: false }),
}));
