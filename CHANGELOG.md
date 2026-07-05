# Changelog

## 2026-07-05 (atualização 4)

- Navbar: corrigido bug crítico no Android — `display` inline sobrescrevia classes Tailwind responsivas, deixando nav desktop, seletor de idioma e hamburger todos visíveis ao mesmo tempo
- Navbar mobile agora usa `hidden md:flex` / `flex md:hidden` sem nenhum `display` inline nos elementos responsivos

## 2026-07-05 (atualização 3)

- Corrigido Hero: `overflow: hidden` trocado por `overflowX: hidden` — no Android impedia crescimento além de 100dvh, fazendo Story sobrepor o Hero
- Adicionado `scrollMarginTop: 64` em todas as seções com anchor (#historia, #ventures, #projects, #contact) — corrige posicionamento atrás do header fixo
- Navbar: idiomas agora visíveis diretamente na barra mobile (sem precisar abrir o menu)
- SEO: metadata agora gerada por locale com título, descrição, idade dinâmica, OpenGraph e Twitter Card
- `metadataBase` configurado para me.degabrielofi.com.br

## 2026-07-05 (atualização 2)

- Corrigida responsividade: grids inline style sobrescrevendo classes Tailwind (Hero, Numbers, Ventures, Ecossistema)
- Hero: fonte do título reduzida no mínimo para telas < 400px; foto oculta em telas muito pequenas
- Contato: seção empilha verticalmente no mobile em vez de comprimir lado a lado
- Idade dinâmica no hero — calculada automaticamente a partir da data de nascimento (todos os idiomas)
- Removidos Trocaí e Ayon LTDA das listas de ventures e ecossistema
- Link do GitHub repo atualizado para https://me.degabrielofi.com.br/
- FooterStudioLink traduzido para os 4 idiomas (estava hardcoded em português)
- Labels "Email" e "Links" no Contato movidos para os arquivos de mensagens
- Título "Ventures." no componente movido para os arquivos de mensagens
- Descrição do Guebly LTDA em espanhol completada
- Descrições dos 5 projetos open-source melhoradas nos 4 idiomas
- Chaves mortas removidas dos arquivos de mensagens (hero.badge, story.title, story.subtitle, story.acts, story.readMore)
- Criado CHANGELOG.md
- README.md atualizado
