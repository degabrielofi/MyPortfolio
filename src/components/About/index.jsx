import React from "react";
import { Introduction } from "./style";

const About = () => {
  return (
    <Introduction id="About">
      <section className="home-about-us" id="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-4">
              <div className="quote">
                <div className="label">CITAÇÃO:</div>
                <div className="p-2"></div>

                <div className="content">
                  <i>
                    "Existem duas maneiras de construir um projeto de software.
                    Uma é fazê-lo tão simples que obviamente não há falhas. A
                    outra é fazê-lo tão complicado que não existem falhas
                    óbvias."
                  </i>
                </div>

                <div className="p-3"></div>
                <div className="author">- C.A.R. HOAR</div>
                <div className="p-3"></div>

                <div className="label">ATUAÇÃO ATUAL:</div>
                <div className="p-1"></div>
                <i>Founder & CEO • Guebly</i>

                <div className="p-3"></div>
                <div className="label">FOCO:</div>
                <div className="p-1"></div>
                <i>Produto, marca e execução</i>
              </div>
            </div>

            <div className="col-xl-4 text-center">
              <div className="profile">
                <div className="thumb"></div>
              </div>
            </div>

            <div className="col-xl-4">
              <h2>Olá,</h2>

              <p>
                sou Gabriel Pereira — fundador da Guebly. Eu construo produtos
                digitais do zero: da estratégia e posicionamento até
                arquitetura, implementação e operação.
              </p>

              <p>
                Gosto de criar coisas simples por fora e robustas por dentro.
                Minha prioridade é transformar ideias em negócios reais, com
                clareza, velocidade e padrão de qualidade.
              </p>

              <p>
                Se eu tivesse que me definir em três palavras: direto,
                consistente e obcecado por execução.
              </p>

              <div className="p-2"></div>
            </div>
          </div>
        </div>
      </section>
    </Introduction>
  );
};

export default About;
