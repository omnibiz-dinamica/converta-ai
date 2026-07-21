export type ChatRole = "user" | "assistant" | "system";

export interface ChatMessage {
  id: string;
  role: ChatRole;
  content: string;
  createdAt: number;
}

export interface ChatSendOptions {
  signal?: AbortSignal;
}

export interface ChatService {
  send(messages: ChatMessage[], options?: ChatSendOptions): Promise<{ reply: ChatMessage }>;
}
