import React from "react";
import { Wrapper, Title, Grid, Story, CompanyCard } from "./style";

// ✅ como está no src, importa direto
import gueblyIcon from "assets/images/companies/guebly.png";
import studioIcon from "assets/images/companies/studio.png";
import payIcon from "assets/images/companies/pay.png";
import contabilIcon from "assets/images/companies/contabil.png";
import vendaiIcon from "assets/images/companies/vendai.png";
import trocaiIcon from "assets/images/companies/trocai.png";
import gamesIcon from "assets/images/companies/games.png";

const companies = [
  {
    key: "guebly",
    name: "Guebly (Holding)",
    role: "A casa-mãe",
    description:
      "Estrutura que organiza o ecossistema, define padrão de marca, tecnologia e operação.",
    highlights: [
      "Visão & governança",
      "Padrões de produto",
      "Integração entre frentes",
    ],
    icon: gueblyIcon,
    link: "https://guebly.com.br",
  },
  {
    key: "studio",
    name: "Guebly Studio",
    role: "Execução & entrega",
    description:
      "Frente de produção: branding, design, automação e desenvolvimento para negócios.",
    highlights: [
      "Branding & design",
      "Sites & sistemas",
      "Automação & performance",
    ],
    icon: studioIcon,
    link: "https://studio.guebly.com.br",
  },
  {
    key: "pay",
    name: "Guebly Pay",
    role: "Infra de pagamentos",
    description:
      "Checkout e base de pagamentos do ecossistema — simplifica cobrança e operação.",
    highlights: ["Checkout", "Pagamentos", "Base para produtos do grupo"],
    icon: payIcon,
    link: "#",
  },
  {
    key: "contabil",
    name: "Guebly Contábil",
    role: "Serviço + software",
    description:
      "Operação contábil e plataforma para simplificar rotinas e reduzir burocracia.",
    highlights: ["Processo", "Automação", "Experiência simples"],
    icon: contabilIcon,
    link: "#",
  },
  {
    key: "vendai",
    name: "Guebly Vendaí",
    role: "Loja oficial",
    description:
      "Frente de e-commerce com curadoria e foco em entrega garantida.",
    highlights: ["Curadoria", "Operação", "Entrega"],
    icon: vendaiIcon,
    link: "#",
  },
  {
    key: "trocai",
    name: "Guebly Trocaí",
    role: "Marketplace de usados",
    description:
      "Compra e venda de usados com pagamento seguro e taxas menores.",
    highlights: ["Marketplace", "Pagamento seguro", "Menor taxa"],
    icon: trocaiIcon,
    link: "#",
  },
  {
    key: "games",
    name: "Guebly Games",
    role: "Entretenimento",
    description:
      "Estúdio de jogos e experiências digitais com foco em inovação e narrativa.",
    highlights: ["Games", "Experiências", "Criatividade aplicada"],
    icon: gamesIcon,
    link: "#",
  },
];

const Companies = () => {
  return (
    <Wrapper id="Ecosystem">
      <Title>
        <div className="title_page">
          <h1 className="section-title-01">
            <i className="bx bx-buildings m-2"></i>EMPRESAS
          </h1>
          <h2 className="section-title-02">ECOSSISTEMA GUEBLY</h2>
        </div>
      </Title>

      <Story>
        <div className="box">
          <div className="kicker">HISTÓRIA (RESUMO)</div>
          <h3>Uma holding para transformar ideias em negócios reais.</h3>

          <p>
            A Guebly nasceu para unir <b>marca</b> e <b>tecnologia</b> na mesma
            mesa. O objetivo é construir um ecossistema: cada empresa resolve
            uma parte do jogo — execução, operação e produto.
          </p>

          <div className="timeline">
            <div className="step">
              <div className="dot" />
              <div className="content">
                <div className="title">1) Padrão</div>
                <div className="desc">
                  Definir identidade, processo e qualidade.
                </div>
              </div>
            </div>

            <div className="step">
              <div className="dot" />
              <div className="content">
                <div className="title">2) Execução</div>
                <div className="desc">Entregar rápido com consistência.</div>
              </div>
            </div>

            <div className="step">
              <div className="dot" />
              <div className="content">
                <div className="title">3) Produto</div>
                <div className="desc">Transformar entrega em recorrência.</div>
              </div>
            </div>

            <div className="step">
              <div className="dot" />
              <div className="content">
                <div className="title">4) Escala</div>
                <div className="desc">Operar com automação e integração.</div>
              </div>
            </div>
          </div>
        </div>
      </Story>

      <Grid>
        {companies.map((c) => (
          <CompanyCard key={c.key}>
            <div className="top">
              <img className="icon" src={c.icon} alt={c.name} />
              <div className="meta">
                <div className="name">{c.name}</div>
                <div className="role">{c.role}</div>
              </div>
            </div>

            <div className="desc">{c.description}</div>

            <div className="highlights">
              {c.highlights.map((h) => (
                <span className="pill" key={h}>
                  {h}
                </span>
              ))}
            </div>

            <div className="actions">
              <a
                className={`btn ${c.link === "#" ? "disabled" : ""}`}
                href={c.link}
                target={c.link.startsWith("http") ? "_blank" : undefined}
                rel={c.link.startsWith("http") ? "noreferrer" : undefined}
                onClick={(e) => {
                  if (c.link === "#") e.preventDefault();
                }}
              >
                Conhecer <i className="bx bx-right-arrow-alt"></i>
              </a>
            </div>
          </CompanyCard>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default Companies;
