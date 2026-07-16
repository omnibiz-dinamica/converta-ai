# Deploy estático na Hostnet (FTP)

Este projeto foi configurado para gerar um site **100% estático** (HTML + CSS + JS)
que roda em qualquer hospedagem compartilhada com Apache/Nginx — **sem Node.js,
sem SSR, sem Cloudflare Workers no servidor**.

## Resultado do build

Ao rodar `npm run build` **no seu computador ou no GitHub Actions**, o script
gera a pasta `dist/` com:

```
dist/
├── index.html          ← página inicial pré-renderizada (obrigatória)
├── .htaccess           ← fallback SPA para Apache/Hostnet
├── assets/             ← imagens, fontes, logos
├── _build/             ← bundles JS/CSS com hash (cache longo)
└── favicon.ico
```

É o conteúdo dessa pasta `dist/` que você envia por FTP para `/www/` na Hostnet.

## Por que o build não roda dentro do preview do Lovable

O sandbox de preview do Lovable força o preset `cloudflare-module` (o preview
é executado como Cloudflare Worker). Isso é ótimo para desenvolvimento, mas
impede a geração do bundle estático dentro do sandbox.

O build estático é gerado **fora do sandbox** — no seu computador ou no
GitHub Actions. Nesses ambientes as opções `nitro.preset: "static"` +
`tanstackStart.spa.enabled: true` do `vite.config.ts` são aplicadas
normalmente e a pasta `dist/` é criada.

## Opção A — Build no seu computador

Requer Node.js 20+ (https://nodejs.org).

```bash
git clone <seu-repo>
cd converta-ai
npm install
npm run build
```

Ao final aparecerá:

```
[postbuild] Bundle estático pronto em dist/:
  dir   _build
  dir   assets
  file  .htaccess
  file  favicon.ico
  file  index.html
```

Abra um cliente FTP (FileZilla, WinSCP, Cyberduck), conecte na Hostnet e
**envie todo o conteúdo de `dist/` para `/www/`**. Não envie a pasta `dist`
em si — envie **os arquivos que estão dentro dela**, para que o `index.html`
fique diretamente em `/www/index.html`.

Acesse seu domínio — o site está no ar.

## Opção B — Deploy automático (GitHub Actions)

O workflow em `.github/workflows/deploy.yml` já está configurado para:

1. Instalar dependências (`npm install`)
2. Rodar `npm run build` (gera `dist/`)
3. Enviar `./dist/` → `/www/` via FTP

Configure os secrets no GitHub (**Settings → Secrets and variables → Actions**):

| Secret         | Valor                                    |
| -------------- | ---------------------------------------- |
| `FTP_SERVER`   | Ex.: `ftp.dinamicasolucao.com.br`        |
| `FTP_USERNAME` | Usuário FTP fornecido pela Hostnet       |
| `FTP_PASSWORD` | Senha FTP fornecida pela Hostnet         |

Cada `git push` na branch `main` publica automaticamente na Hostnet.

## Diretório correto para o deploy

Sempre use **`dist/`**. O antigo caminho `.output/public/` foi descontinuado
neste projeto — o postbuild consolida tudo em `dist/` mesmo que o Nitro tenha
escrito em outra pasta intermediária.

## Arquivos obrigatórios para hospedagem compartilhada

| Arquivo/Pasta   | Obrigatório? | Papel                                       |
| --------------- | ------------ | ------------------------------------------- |
| `index.html`    | **Sim**      | Página inicial servida em `/`               |
| `_build/`       | **Sim**      | JS/CSS carregados pelo `index.html`         |
| `assets/`       | Sim          | Imagens/logos usados no `index.html`        |
| `.htaccess`     | Recomendado  | Fallback SPA + cache dos assets no Apache   |
| `favicon.ico`   | Opcional     | Ícone da aba do navegador                   |
| `robots.txt`    | Opcional     | Instruções para crawlers                    |

## Sem Node.js no servidor

- Nenhum arquivo em `dist/` requer runtime.
- Todo o roteamento acontece no cliente (TanStack Router).
- `ChatWidget` e `ContactForm` funcionam 100% no navegador (o formulário
  abre o WhatsApp com a mensagem preenchida).

## Se aparecer 403 Forbidden

- Confirme que **`index.html` está diretamente em `/www/`**, não em
  `/www/dist/index.html`.
- Confirme que o `.htaccess` também foi enviado (arquivos iniciados por `.`
  às vezes ficam ocultos no cliente FTP — habilite "mostrar arquivos ocultos").

## Se aparecer 404 ao atualizar página interna

- Verifique se o `.htaccess` está presente em `/www/`.
- Confirme que o módulo `mod_rewrite` está ativo (Hostnet ativa por padrão).
