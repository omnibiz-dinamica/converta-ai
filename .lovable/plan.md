# Plano: Converter o site em HTML estático para hospedagem FTP (Hostnet)

## Objetivo
Gerar uma pasta com arquivos estáticos (`index.html`, CSS, JS, imagens) que você possa arrastar para `/www/` da Hostnet via FTP e o site funcionar normalmente — sem precisar de Node.js no servidor.

## O que vai mudar

### 1. Habilitar prerender estático no TanStack Start
Ativar o modo de prerender/SPA no `vite.config.ts` para que o build gere HTML pronto de cada rota (no seu caso, só a rota `/`).

Isso faz o build produzir uma pasta com:
```
dist/
├── index.html          ← a página inicial já renderizada
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── [imagens, fontes, logos]
└── favicon.ico
```

### 2. Ajustar componentes server-side
Verificar rapidamente se há alguma função server-side sendo usada (ex.: `createServerFn` no ChatWidget/ContactForm). Se houver, ela precisa ser desativada ou movida para uma API externa, já que hospedagem estática não roda código no servidor.

Pelo que já sei do projeto:
- ✅ Landing page pura (Hero, About, Services, etc.) — funciona 100% estática
- ⚠️ `ChatWidget` e `ContactForm` — preciso verificar se usam server function. Se sim, opções: (a) desabilitar temporariamente, (b) apontar para um webhook externo (ex.: Formspree para o formulário, ou remover o chat).

### 3. Documentar o processo de deploy
Depois de rodar o build, você vai:
1. Baixar/exportar o projeto (via GitHub ou download ZIP do Lovable)
2. Rodar localmente:
   ```
   npm install
   npm run build
   ```
3. Abrir a pasta `dist/` gerada
4. Enviar o conteúdo de `dist/` via FTP para `/www/` da Hostnet
5. O `index.html` fica na raiz de `/www/` — a Hostnet serve automaticamente ao acessar seu domínio

### 4. (Opcional) Automação via GitHub Actions
Ajustar o `deploy.yml` existente para:
- Rodar `npm install` + `npm run build`
- Enviar apenas a pasta `dist/` (não o projeto todo) via FTP para `/www/`

Assim, todo `push` na branch `main` publica automaticamente na Hostnet.

## Onde está o "index" hoje (para referência)

- **Página inicial (código-fonte React)**: `src/routes/index.tsx` — é ela que vai virar o `index.html` estático depois do build.
- **Layout raiz (HTML shell)**: `src/routes/__root.tsx` — define `<html>`, `<head>`, metatags SEO.
- **Após o build**: `dist/index.html` (o arquivo real que a Hostnet serve).

## Detalhes técnicos

- **Modo estático**: usar `prerender: { enabled: true, routes: ['/'] }` na config do TanStack Start, ou configurar como SPA (`ssr: false` no root + fallback `index.html`).
- **Roteamento**: como só há uma rota (`/`), não há complicação de fallback 404.
- **Assets**: imagens em `src/assets/` são incluídas automaticamente pelo Vite no `dist/assets/`.
- **`.htaccess`**: pode ser útil adicionar um `.htaccess` na pasta `public/` com rewrite para SPA, caso no futuro adicionar mais rotas.

## Perguntas antes de eu implementar

1. O **ChatWidget** e **ContactForm** precisam continuar funcionando? Se sim, pode indicar um serviço externo (Formspree, EmailJS, webhook do n8n, etc.)? Ou posso desabilitar temporariamente?
2. Quer que eu **atualize o `deploy.yml`** para fazer o build e enviar automaticamente pelo GitHub Actions, ou você prefere rodar o build manualmente no seu computador?
