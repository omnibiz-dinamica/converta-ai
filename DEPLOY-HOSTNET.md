# Deploy na Hostnet (FTP) — Passo a passo

Este projeto foi configurado para gerar um site **100% estático** que pode ser enviado por FTP para qualquer hospedagem compartilhada (Hostnet, Locaweb, etc).

## O que o build gera

Ao rodar `npm run build`, o Vite + TanStack Start + Nitro gera uma pasta `dist/` com:

```
dist/
├── index.html          ← página inicial pré-renderizada
├── _build/             ← JS, CSS e assets com hash
│   └── assets/
└── favicon.ico
```

É o conteúdo dessa pasta `dist/` que você envia para `/www/` da Hostnet.

## Opção A — Build manual no seu computador

Requer Node.js 20+ instalado (https://nodejs.org).

1. Baixe o código do GitHub (Code → Download ZIP, ou `git clone`).
2. Abra a pasta no terminal (VS Code, PowerShell, Terminal).
3. Instale as dependências (apenas na primeira vez):
   ```bash
   npm install
   ```
4. Gere os arquivos estáticos:
   ```bash
   npm run build
   ```
5. Abra a pasta `dist/` que foi criada.
6. Use um cliente FTP (FileZilla, WinSCP, Cyberduck) para conectar na Hostnet e **enviar todo o conteúdo de `dist/` para `/www/`**.
7. Acesse seu domínio — o site já está no ar.

## Opção B — Deploy automático via GitHub Actions

O arquivo `deploy.yml` já existe na raiz do projeto. Ele precisa ser movido para `.github/workflows/deploy.yml` no repositório e atualizado para rodar o build antes do upload.

Configure os secrets no GitHub (Settings → Secrets and variables → Actions):
- `FTP_SERVER` — ex: `ftp.seudominio.com.br`
- `FTP_USERNAME` — usuário FTP da Hostnet
- `FTP_PASSWORD` — senha FTP da Hostnet

Cada `git push` na branch `main` vai:
1. Instalar dependências (`npm install`)
2. Rodar o build (`npm run build`)
3. Enviar apenas `dist/` para `/www/` via FTP

## Onde estão os arquivos importantes (código-fonte)

| Onde | O quê |
|------|-------|
| `src/routes/index.tsx` | Página inicial (o que vira `dist/index.html`) |
| `src/routes/__root.tsx` | Shell HTML + `<head>` com metatags SEO |
| `src/components/sections/` | Cada seção da landing page (Hero, About, Services, etc.) |
| `src/components/layout/` | Navbar, Footer, WhatsApp float, background tech |
| `src/lib/contact.ts` | Número de WhatsApp, e-mail, LinkedIn |
| `src/styles.css` | Tema visual, cores, animações |
| `src/assets/` | Imagens (logo, etc.) |

## Observações

- **ChatWidget e ContactForm** funcionam 100% no cliente (o formulário abre o WhatsApp com a mensagem preenchida, o chat usa respostas locais). Não há backend, então nenhum ajuste é necessário para hospedagem estática.
- **Não edite `src/routeTree.gen.ts`** — é gerado automaticamente.
- **`.htaccess`**: se no futuro adicionar mais rotas (ex.: `/sobre`, `/contato`), coloque um `.htaccess` em `public/` com regra de fallback para SPA. Hoje, com apenas `/`, não é necessário.
