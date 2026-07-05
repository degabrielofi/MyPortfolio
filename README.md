# Gabriel Pereira — Portfólio Pessoal

> Site pessoal e portfólio de Gabriel Pereira, Founder & CEO da [Guebly Holding](https://guebly.com.br) — construído com Next.js 15, React 19, TypeScript e Tailwind CSS v4.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?style=flat-square&logo=vercel)

---

## Descrição

Portfólio pessoal multidioma que apresenta a trajetória, o ecossistema de empresas (Guebly Holding), os projetos open-source e os contatos de Gabriel Pereira. O site é totalmente responsivo, suporta tema escuro/claro e está disponível em quatro idiomas: **pt-BR**, **en**, **es** e **it**.

---

## Tecnologias

| Tecnologia | Versão | Uso |
|---|---|---|
| [Next.js](https://nextjs.org) | 15 | Framework React com App Router e Turbopack |
| [React](https://react.dev) | 19 | Biblioteca de UI |
| [TypeScript](https://typescriptlang.org) | 5.7 | Tipagem estática |
| [Tailwind CSS](https://tailwindcss.com) | 4.0 | Estilização utilitária |
| [next-intl](https://next-intl-docs.vercel.app) | 3 | Internacionalização (i18n) |
| [next-themes](https://github.com/pacocoursey/next-themes) | 0.4 | Gerenciamento de tema claro/escuro |

---

## Como instalar e rodar localmente

**Pré-requisitos:** Node.js 18+ e npm (ou pnpm/yarn).

```bash
# 1. Clone o repositório
git clone https://github.com/degabrielofi/MyPortfolio.git
cd MyPortfolio

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento (com Turbopack)
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

### Scripts disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento com Turbopack |
| `npm run build` | Gera o build de produção |
| `npm run start` | Inicia o servidor em modo produção |

---

## Estrutura de pastas

```
MyPortfolio/
├── app/
│   ├── [locale]/               # Rotas internacionalizadas (pt-BR, en, es, it)
│   │   ├── layout.tsx          # Layout principal com ThemeProvider e NextIntl
│   │   ├── page.tsx            # Página inicial
│   │   ├── contato/            # Página de contato
│   │   ├── ecossistema/        # Página do ecossistema Guebly
│   │   ├── historia/           # Página da história completa
│   │   └── projetos/           # Página de projetos
│   ├── layout.tsx              # Root layout
│   └── globals.css             # Estilos globais e variáveis CSS
├── components/
│   ├── Navbar.tsx              # Barra de navegação com menu mobile
│   ├── Footer.tsx              # Rodapé
│   ├── FooterStudioLink.tsx    # Link Guebly Studio no rodapé
│   ├── Hero.tsx                # Seção hero com animação de digitação
│   ├── Story.tsx               # Seção de história com capítulos
│   ├── Numbers.tsx             # Cards de métricas com contador animado
│   ├── Ventures.tsx            # Cards do ecossistema de empresas
│   ├── Projects.tsx            # Lista de projetos open-source
│   ├── Quote.tsx               # Seção de citação
│   ├── Contact.tsx             # Seção de contato
│   ├── Container.tsx           # Wrapper com max-width responsivo
│   ├── Effects.tsx             # Efeitos visuais de fundo
│   └── FadeIn.tsx              # Componente de animação de entrada
├── i18n/
│   ├── routing.ts              # Configuração de rotas i18n
│   └── request.ts              # Configuração de requisição i18n
├── messages/
│   ├── pt-BR.json              # Traduções em português
│   ├── en.json                 # Traduções em inglês
│   ├── es.json                 # Traduções em espanhol
│   └── it.json                 # Traduções em italiano
├── public/                     # Assets estáticos
├── middleware.ts               # Middleware Next.js para roteamento i18n
├── next.config.ts              # Configuração do Next.js
├── tailwind.config.ts          # Configuração do Tailwind CSS
└── tsconfig.json               # Configuração do TypeScript
```

---

## Funcionalidades

- **Multidioma** — Suporte a pt-BR, en, es e it via `next-intl` com detecção automática de locale.
- **Tema escuro/claro** — Alternância manual com persistência.
- **Responsivo** — Layout adaptado para mobile, tablet e desktop.
- **Animações** — Fade-in, digitação e contadores animados com CSS nativo.
- **Idade dinâmica** — Calculada automaticamente a partir da data de nascimento.
- **SEO** — Metadata completa por locale.
- **Fontes otimizadas** — Outfit, Newsreader e IBM Plex Mono via `next/font`.

---

## Ecossistema

Ventures ativos no portfólio:

| Empresa | Setor | Status |
|---|---|---|
| Guebly Studio | Automação | Operando |
| Guebly Pay | Pagamentos | Operando |
| Guebly Contábil | Contabilidade | Operando |
| Guebly Games | Jogos | Em desenvolvimento |
| Sentrion | Segurança | Em desenvolvimento |

---

## Deploy

O site é hospedado na **Vercel** com deploy automático a cada push na branch principal.

---

## Autor

**Gabriel Pereira** — Founder & CEO da Guebly Holding · São Paulo, Brasil  
Site: [me.degabrielofi.com.br](https://me.degabrielofi.com.br/)  
GitHub: [@degabrielofi](https://github.com/degabrielofi)
