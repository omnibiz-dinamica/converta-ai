/**
 * i18n scaffold — pronto para evoluir para react-i18next ou similar.
 * Hoje funciona como dicionário central; amanhã, basta envolver com Provider.
 */
export type Locale = "pt-PT" | "pt-BR" | "en";

export const DEFAULT_LOCALE: Locale = "pt-PT";

type Dict = Record<string, string>;

const dictionaries: Record<Locale, Dict> = {
  "pt-PT": {
    "cta.diagnostic": "Quero o meu diagnóstico gratuito",
    "cta.specialist": "Falar com especialista",
    "chat.title": "Assistente Dinâmica",
    "chat.placeholder": "Escreva a sua mensagem…",
    "chat.send": "Enviar",
  },
  "pt-BR": {
    "cta.diagnostic": "Quero meu diagnóstico gratuito",
    "cta.specialist": "Falar com especialista",
    "chat.title": "Assistente Dinâmica",
    "chat.placeholder": "Escreva sua mensagem…",
    "chat.send": "Enviar",
  },
  en: {
    "cta.diagnostic": "Get my free diagnostic",
    "cta.specialist": "Talk to a specialist",
    "chat.title": "Dinâmica Assistant",
    "chat.placeholder": "Type your message…",
    "chat.send": "Send",
  },
};

export const t = (key: string, locale: Locale = DEFAULT_LOCALE) =>
  dictionaries[locale][key] ?? key;
