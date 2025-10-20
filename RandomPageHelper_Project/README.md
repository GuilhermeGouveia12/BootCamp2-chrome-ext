# Random Page Helper

Extensão para Chrome (Manifest V3) — abre uma página aleatória de sites educativos ou de curiosidades.

## Instalação

1. Clone ou baixe o repositório.
2. Acesse `chrome://extensions`.
3. Ative Developer mode.
4. Clique em Load unpacked e selecione a pasta da extensão.

## Estrutura

- `src/popup` → interface popup
- `src/background` → service worker
- `src/content` → content scripts
- `icons/` → ícones da extensão
- `docs/` → página GitHub Pages

## Testes E2E

Configuração de Playwright disponível em `tests/` e script de build em `scripts/build-extension.mjs`.

## Licença

MIT
