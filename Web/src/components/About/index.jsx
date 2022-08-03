import React from 'react'
import { Introduction } from './style'

const About = () => {

    return (
        <>

            <Introduction id='sobre'>

                <section className="home-about-us" id="about">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-4">
                                <div className="quote">
                                    <div className="label">CITAÇÃO:</div>
                                    <div className="p-2"></div>
                                    <div className="content">
                                        <i>"Existem duas maneiras de construir um projeto de software. Uma é fazê-lo tão simples que obviamente não há falhas. A outra é fazê-lo tão complicado que não existem falhas óbvias."</i>
                                    </div>
                                    <div className="p-3"></div>
                                    <div className="author">- C.A.R. HOAR</div>
                                    <div className="p-3"></div>
                                    <div className="label">OCUPAÇÕES ATUAIS:</div>
                                    <div className="p-1"></div>
                                    <i> Developer Front-End</i>
                                </div>
                            </div>
                            <div className="col-xl-4 text-center">
                                <div className="profile">
                                    <div className="thumb">
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4">
                                <h2>Olá,</h2>
                                <p>sou Gabriel Silva,  Desenvolvedor Front-End e entusiasta em UX. Tenho experiência com o desenvolvimento de BOTS para o Discord há mais de 2 anos. Possuo experiência com trabalhos em equipes. Atualmente tenho 15 anos, e sou mais que apaixonado pela área da tecnologia.</p>
                                <p> Me considero ágil e consistente em aprender uma nova tecnologia e me adaptar a qualquer mudança, e sempre estou pronto para superar qualquer desafio. Se eu pudesse me definir em 3 palavras, certamente seriam: comprometido, esforçado e determinado! :)
                                </p>
                                <p></p>
                                <div className="p-2"></div>
                            </div>
                        </div>
                    </div>
                </section>

            </Introduction>


        </>
    )
}

export default About