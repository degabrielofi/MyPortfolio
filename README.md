# Gabriel Pereira — Portfólio Pessoal

> Site pessoal e portfólio de Gabriel Pereira, Founder & CEO da [Guebly Holding](https://guebly.com.br) — construído com Next.js 15, React 19, TypeScript e Tailwind CSS v4.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-EE55BB?style=flat-square&logo=framer&logoColor=white)
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
| [Framer Motion](https://www.framer.com/motion) | 11 | Animações declarativas |
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
│   └── globals.css             # Estilos globais
├── components/
│   ├── ui/                     # Componentes de UI reutilizáveis
│   ├── Navbar.tsx              # Barra de navegação
│   ├── Footer.tsx              # Rodapé
│   ├── Hero.tsx                # Seção hero
│   ├── Story.tsx               # Seção de história
│   ├── Numbers.tsx             # Cards de números/métricas
│   ├── Ventures.tsx            # Seção do ecossistema
│   ├── Projects.tsx            # Seção de projetos
│   ├── Contact.tsx             # Seção de contato
│   ├── Belief.tsx              # Seção de citação
│   ├── Effects.tsx             # Efeitos visuais de fundo
│   ├── FadeIn.tsx              # Componente de animação de entrada
│   └── ...
├── i18n/
│   ├── routing.ts              # Configuração de rotas i18n
│   └── request.ts              # Configuração de requisição i18n
├── messages/
│   ├── pt-BR.json              # Traduções em português
│   ├── en.json                 # Traduções em inglês
│   ├── es.json                 # Traduções em espanhol
│   └── it.json                 # Traduções em italiano
├── public/                     # Assets estáticos (imagens, favicon)
├── middleware.ts               # Middleware Next.js para roteamento i18n
├── next.config.ts              # Configuração do Next.js
├── tailwind.config.ts          # Configuração do Tailwind CSS
└── tsconfig.json               # Configuração do TypeScript
```

---

## Funcionalidades

- **Multidioma** — Suporte a pt-BR, en, es e it via `next-intl` com detecção automática de locale.
- **Tema escuro/claro** — Alternância manual com persistência, respeita `prefers-color-scheme` do sistema.
- **Animações** — Transições e animações de entrada com Framer Motion.
- **SEO** — Metadata completa com Open Graph e Twitter Card por locale.
- **Fontes otimizadas** — Outfit, Newsreader e IBM Plex Mono via `next/font`.
- **Imagens remotas** — Configuração segura para domínios `*.guebly.com.br` e `*.sentrion.com.br`.

---

## Deploy

O site é hospedado na **Vercel** com deploy automático a cada push na branch principal.

---

## Autor

**Gabriel Pereira** — Founder & CEO da Guebly Holding · São Paulo, Brasil  
GitHub: [@degabrielofi](https://github.com/degabrielofi)
