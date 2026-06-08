// Contactos reais Dinâmica Solução
export const PHONE_NUMBER = "5567991292414"; // formato wa.me (sem +)
export const PHONE_DISPLAY = "+55 67 99129-2414";

export const EMAIL = "contato@dinamicasolucao.com.br";
export const LINKEDIN = "https://linkedin.com/company/dinamicasolucao";
export const SITE = "dinamicasolucao.com";

export const wa = (text: string) =>
  `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(text)}`;
