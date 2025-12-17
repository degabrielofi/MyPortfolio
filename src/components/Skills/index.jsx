import React from "react";
import { Title, Item, Skill, Sliders } from "./style";
import Carousel from "react-elastic-carousel";
import Slider from "infinite-react-carousel";
import images from "assets/data/images.json";

import studioIcon from "assets/images/companies/studio.png";
import gamesIcon from "assets/images/companies/games.png";
import contabilIcon from "assets/images/companies/contabil.png";
import trocaiIcon from "assets/images/companies/trocai.png";
import payIcon from "assets/images/companies/pay.png";
import gueblyIcon from "assets/images/companies/guebly.png";
import vendaiIcon from "assets/images/companies/vendai.png";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 350, itemsToShow: 2 },
  { width: 500, itemsToShow: 3 },
  { width: 768, itemsToShow: 4 },
  { width: 900, itemsToShow: 5 },
  { width: 1200, itemsToShow: 6 },
];

const settings = {
  duration: 10,
  autoplaySpeed: 4000,
  dots: true,
  arrows: false,
  autoplay: true,
  slidesPerRow: 1,
  infinite: true,
};

const companies = [
  {
    key: "guebly",
    name: "Guebly",
    icon: gueblyIcon,
    description: "Holding e ecossistema de produtos digitais integrados.",
    href: "#Companies",
  },
  {
    key: "studio",
    name: "Guebly Studio",
    icon: studioIcon,
    description: "Branding, design, automação e desenvolvimento para negócios.",
    href: "#Companies",
  },
  {
    key: "pay",
    name: "Guebly Pay",
    icon: payIcon,
    description:
      "Pagamentos, checkout e infraestrutura financeira do ecossistema.",
    href: "#Companies",
  },
  {
    key: "contabil",
    name: "Guebly Contábil",
    icon: contabilIcon,
    description: "Contabilidade + software com operação simplificada.",
    href: "#Companies",
  },
  {
    key: "vendai",
    name: "Guebly Vendaí",
    icon: vendaiIcon,
    description: "Loja oficial com curadoria e foco em entrega garantida.",
    href: "#Companies",
  },
  {
    key: "trocai",
    name: "Guebly Trocaí",
    icon: trocaiIcon,
    description:
      "Marketplace de usados com pagamentos seguros e taxas menores.",
    href: "#Companies",
  },
  {
    key: "games",
    name: "Guebly Games",
    icon: gamesIcon,
    description:
      "Estúdio de games e experiências digitais com foco em inovação.",
    href: "#Companies",
  },
];

const Skills = () => {
  return (
    <>
      <Title>
        <div className="title_page">
          <h1 className="section-title-01">
            <i className="fas fa-file-code m-2"></i>CAPACIDADES
          </h1>
          <h2 className="section-title-02">
            O QUE EU USO PRA CONSTRUIR PRODUTOS
          </h2>
        </div>
      </Title>

      <Skill id="Technologies">
        <section className="skills">
          <Carousel
            enableAutoPlay
            autoPlaySpeed={5000}
            showArrows={false}
            breakPoints={breakPoints}
          >
            <Item>
              <div className="content">
                <img src={images.IconHTML.link} alt="HTML" />
                HTML
              </div>
            </Item>
            <Item>
              <div className="content">
                <img src={images.IconJavascript.link} alt="JavaScript" />
                Javascript
              </div>
            </Item>
            <Item>
              <div className="content">
                <img src={images.IconCSS.link} alt="CSS" />
                CSS
              </div>
            </Item>
            <Item>
              <div className="content">
                <img src={images.IconReact.link} alt="React.js" />
                React.js
              </div>
            </Item>
            <Item>
              <div className="content">
                <img src={images.IconPhotoshop.link} alt="Photoshop" />
                Photoshop
              </div>
            </Item>
            <Item>
              <div className="content">
                <img src={images.IconStyled.link} alt="Styled" />
                Styled
              </div>
            </Item>
            <Item>
              <div className="content">
                <img src={images.IconNode.link} alt="Node.js" />
                Node.js
              </div>
            </Item>
            <Item>
              <div className="content">
                <img src={images.IconGit.link} alt="Git" />
                GIT
              </div>
            </Item>
            <Item>
              <div className="content">
                <img src={images.IconFigma.link} alt="Figma" />
                Figma
              </div>
            </Item>
            <Item>
              <div className="content">
                <img src={images.IconBootstrap.link} alt="Bootstrap" />
                Bootstrap
              </div>
            </Item>
            <Item>
              <div className="content">
                <img src={images.IconDiscordjs.link} alt="Discord.js" />
                Discord.js
              </div>
            </Item>
          </Carousel>
        </section>

        <Sliders>
          <section className="qualifications">
            <div className="differences">
              <span>PRINCÍPIOS DE EXECUÇÃO</span>

              <Slider {...settings}>
                <div className="expertise">
                  <img src={images.CleanCode.link} alt="Clean Code" />
                  <div className="title">Clareza & Manutenção</div>
                  <p>
                    Decisões simples, padrão consistente e código que dá pra
                    evoluir sem dor.
                  </p>
                  <div className="cert">
                    <button className="actionBtn" type="button">
                      Ver como trabalho <i className="fas fa-arrow-right"></i>
                    </button>
                  </div>
                </div>

                <div className="expertise">
                  <img src={images.Responsive.link} alt="Responsivo" />
                  <div className="title">Entrega multi-dispositivo</div>
                  <p>
                    Experiência sólida no mobile e desktop, com foco em fluxo e
                    resultado.
                  </p>
                  <div className="cert">
                    <button className="actionBtn" type="button">
                      Ver como trabalho <i className="fas fa-arrow-right"></i>
                    </button>
                  </div>
                </div>

                <div className="expertise">
                  <img src={images.Semantic.link} alt="Semântica" />
                  <div className="title">Acessibilidade & Semântica</div>
                  <p>
                    Estrutura correta pra acessibilidade, SEO e clareza do
                    conteúdo.
                  </p>
                  <div className="cert">
                    <button className="actionBtn" type="button">
                      Ver como trabalho <i className="fas fa-arrow-right"></i>
                    </button>
                  </div>
                </div>

                <div className="expertise">
                  <img src={images.Seo.link} alt="SEO" />
                  <div className="title">Performance & descoberta</div>
                  <p>
                    Base técnica pra reduzir atrito, acelerar carregamento e
                    aumentar alcance.
                  </p>
                  <div className="cert">
                    <button className="actionBtn" type="button">
                      Ver como trabalho <i className="fas fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </Slider>
            </div>
          </section>

          <section className="qualifications">
            <div className="differences">
              <span>EMPRESAS</span>

              <Slider {...settings}>
                {companies.map((c) => (
                  <div className="expertise company" key={c.key}>
                    <img className="companyIcon" src={c.icon} alt={c.name} />
                    <div className="title">{c.name}</div>
                    <p>{c.description}</p>

                    <div className="cert">
                      <a className="actionLink" href={c.href}>
                        Conhecer <i className="fas fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </section>
        </Sliders>
      </Skill>
    </>
  );
};

export default Skills;
