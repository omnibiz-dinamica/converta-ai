// Contactos reais Dinâmica Solução
export const PHONE_NUMBER = "351914185760"; // formato wa.me (sem +)
export const PHONE_DISPLAY = "+351 914 185 760";
export const EMAIL = "contato@dinamicasolucao.com.br";
export const LINKEDIN = "https://linkedin.com/company/dinamicasolucao";
export const SITE = "dinamicasolucao.com";

export const wa = (text: string) =>
  `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(text)}`;
