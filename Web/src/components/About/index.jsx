import React from "react";
import { Introduction } from "./style";

const About = () => {
  return (
    <>
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
                      "Existem duas maneiras de construir um projeto de
                      software. Uma é fazê-lo tão simples que obviamente não há
                      falhas. A outra é fazê-lo tão complicado que não existem
                      falhas óbvias."
                    </i>
                  </div>
                  <div className="p-3"></div>
                  <div className="author">- C.A.R. HOAR</div>
                  <div className="p-3"></div>
                  <div className="label">OCUPAÇÕES ATUAIS:</div>
                  <div className="p-1"></div>
                  <i>Full-Stack Developer</i>
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
                  sou Gabriel Pereira, um Desenvolvedor Full-Stack apaixonado
                  por criar experiências de usuário excepcionais. Atualmente
                  tenho 18 anos, e possuo uma paixão fervorosa pela área da
                  tecnologia.
                </p>
                <p>
                  Se eu tivesse que me definir em três palavras, seriam:
                  comprometido, esforçado e determinado. Estas qualidades me
                  impulsionam a alcançar excelência em tudo o que faço. Estou
                  ansioso para continuar a minha jornada na área da tecnologia,
                  buscando sempre aprimorar minhas habilidades e criar
                  experiências incríveis para os usuários.
                </p>
                <p></p>
                <div className="p-2"></div>
              </div>
            </div>
          </div>
        </section>
      </Introduction>
    </>
  );
};

export default About;
