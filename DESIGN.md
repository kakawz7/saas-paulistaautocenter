# DESIGN.md — Paulista Auto Center

## Por que este visual
- Tom: sério, preciso, automotivo. Rápido sem parecer barato.
- Base: referência `ferrari` (getdesign.md) — fundo quase preto, vermelho raro, cantos retos, ritmo editorial — adaptada à logo da Paulista e com mais seções claras.
- Posicionamento: oficina de bairro com cara de empresa organizada. Nada de luxo, nada de "promoção".

## Cores (papel → token em styles.css)
- Escuro principal `--canvas #1B1819`; preto da logo `--canvas-2 #231F20`.
- Claros: `--paper #FFF`, faixas alternadas `--paper-2 #F5F3F1`.
- Texto: `--ink`, corpo `--text #4A4445`, apoio `--muted #6B6566` (≥4.5:1 em branco).
- Vermelho: detalhes `--red #ED1C24`; botões `--red-cta #D7141C` (5.2:1 com branco). Só em CTA, marcadores e detalhes.
- Amarelo `--yellow #FFF200`: só em fundo escuro (marcador do eyebrow, filete do hero, numeração). Nunca texto em fundo claro.
- Regra: ~90% da página neutra.

## Tipografia
- Uma família: Archivo (variável), auto-hospedada.
- Títulos: largura 72% (condensada), peso 700–750, MAIÚSCULAS, entrelinha .92–1.
- Corpo: largura 100%, 400, 16–17px, entrelinha 1.6, máx. ~56ch.
- Rótulos (eyebrow, botões, menu): 11–14px, 600–700, maiúsculas, tracking .08–.16em.

## Layout
- Container 1280px, grid de 12 colunas, gutter 16–40px.
- Seções com `--section` (72–128px). Alternar escuro/claro/claro-tingido.
- Composições assimétricas (texto 5 col + mídia 6–7 col). Nada de tudo centralizado.

## Componentes
- Botões: cantos 0, 52px de altura (42 pequeno / 58 grande). Primário vermelho; outline escuro; ghost no escuro.
- Eyebrow: barrinha inclinada (−30°) + rótulo. Vermelho no claro, amarelo no escuro.
- Lista de serviços: linhas com filete, ícone Lucide, nome condensado + descrição; hover com barra vermelha.
- Cartões de destaque: foto inteira + gradiente + texto embaixo. Sem sombra.
- Motivo de marca: a inclinação do raio/itálico da logo (corte diagonal do hero, barrinhas).

## Movimento
- Entrada: fade + 26px, 850ms, escalonado 90ms. Hero entra no carregamento.
- Faixa de peças: 55s por volta, pausa no hover.
- `prefers-reduced-motion`: tudo parado, faixa vira rolagem manual.

## Não fazer
- Inventar números, avaliações, tempo de mercado, horários.
- Bordas arredondadas, sombras fortes, gradientes coloridos, neon.
- Amarelo em grandes áreas ou como texto em fundo claro.
- Alterar a logo (só o fundo foi removido).
