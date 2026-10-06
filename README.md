# Paulista Auto Center — site institucional

Site de uma página em HTML, CSS e JavaScript puro. Não precisa instalar nada nem rodar build: abra o `index.html` no navegador ou suba a pasta inteira para a hospedagem.

## Estrutura

```
index.html              → todo o conteúdo (textos, links, seções)
assets/css/styles.css   → visual. Cores e fontes ficam no topo, em :root
assets/js/main.js       → menu mobile, header ao rolar, animações de entrada
assets/img/             → logo (com fundo removido), imagem de compartilhamento
assets/fonts/           → fonte Archivo (licença OFL, uso comercial liberado)
favicon.*, apple-touch-icon.png, site.webmanifest
sitemap.xml, robots.txt
DESIGN.md               → regras do visual, para manter o padrão em mudanças futuras
```

## Antes de publicar (obrigatório)

1. **Domínio:** procure `https://www.seudominio.com.br` em `index.html`, `sitemap.xml` e `robots.txt` e troque pelo domínio real.
2. **Fotos:** as fotos atuais são do Unsplash e do Pexels (gratuitas para uso comercial, sem obrigação de crédito) e carregam direto desses sites. O ideal é trocar por fotos reais da oficina. Cada foto está marcada no HTML com o comentário `<!-- FOTO -->`. Para trocar, coloque o arquivo em `assets/img/` e mude o `src` (e apague o `srcset`).
3. **Mapa:** o mapa usa o endereço da avenida. Para o pino exato, abra a oficina no Google Maps → Compartilhar → Incorporar um mapa, copie só o endereço do `src` e cole no `<iframe>` da seção Contato.

## Como editar o mais comum

Use "Localizar e substituir" (Ctrl+H no VS Code) em `index.html`:

| O que mudar | Procure por |
|---|---|
| WhatsApp principal | `5565981151311` (aparece em todos os botões) |
| Mensagem do WhatsApp | `Ol%C3%A1%2C%20Amauri` — a mensagem fica codificada na URL; gere a nova em qualquer "gerador de link WhatsApp" |
| Outros telefones | `93681-5409` e `99273-4110` (texto) e `5565936815409` / `5565992734110` (links `tel:`) |
| E-mail | `paulistaautocenter.vendas@gmail.com` |
| Endereço | `Filinto Müller` |
| Serviços | seção `SERVIÇOS`: cada serviço é um `<li>` com nome e descrição |
| Cores | `assets/css/styles.css`, bloco `:root` no topo |

Se mudar telefone, e-mail ou endereço, atualize também o bloco `application/ld+json` no `<head>` (dados para o Google).

## O que não foi incluído (faltou informação)

- **Horário de funcionamento** e **CEP**: não foram informados, então não aparecem no site nem nos dados para o Google. Vale pedir ao cliente e adicionar.
- Nenhum número, avaliação ou tempo de mercado foi inventado.

## Como publicar

Qualquer hospedagem de site estático serve. O jeito mais rápido: arraste a pasta inteira em <https://app.netlify.com/drop>. Em hospedagens tradicionais (Hostinger, Locaweb etc.), envie o conteúdo da pasta para `public_html`.
