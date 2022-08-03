import React from 'react'
import { Item, Skill, Sliders } from './style'
import Carousel from "react-elastic-carousel";
import Slider from "infinite-react-carousel";
import images from '../../Data/images.json'

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
    infinite: true
};

const Skills = () => {
    return (
        <>

            <Skill id='skills'>

                <div className='title_page'>
                    <h1 className="section-title-01" ><i className="fas fa-file-code m-2"></i>SKILLS</h1>
                    <h2 className="section-title-02">MINHAS SKILLS E POWER UP’S</h2>
                </div>


                <section className='skills'>
                    <Carousel enableAutoPlay autoPlaySpeed={5000} showArrows={false} breakPoints={breakPoints}>
                        <Item><i className='content'><img src={images.IconHTML.link} alt="Icon" />HTML</i>
                        </Item>
                        <Item><i className='content'><img src={images.IconJavascript.link} alt="Icon" />Javascript</i>
                        </Item>
                        <Item><i className='content'><img src={images.IconCSS.link} alt="Icon" />CSS</i>
                        </Item>
                        <Item><i className='content'><img src={images.IconReact.link} alt="Icon" />React.js</i>
                        </Item>
                        <Item><i className='content'><img src={images.IconWordpress.link} alt="Icon" />Wordpress</i>
                        </Item>
                        <Item><i className='content'><img src={images.IconTypescript.link} alt="Icon" />Typescript</i>
                        </Item>
                        <Item><i className='content'><img src={images.IconPhotoshop.link} alt="Icon" />Photoshop</i>
                        </Item>
                        <Item><i className='content'><img src={images.IconStyled.link} alt="Icon" />Styled</i>
                        </Item>
                        <Item><i className='content'><img src={images.IconNode.link} alt="Icon" />Node.js</i>
                        </Item>
                        <Item><i className='content'><img src={images.IconGit.link} alt="Icon" />GIT</i>
                        </Item>
                        <Item><i className='content'><img src={images.IconFigma.link} alt="Icon" />Figma</i>
                        </Item>
                        <Item><i className='content'><img src={images.IconBootstrap.link} alt="Icon" />Bootstrap</i>
                        </Item>
                        <Item><i className='content'><img src={images.IconIllustrator.link} alt="Icon" />Illustrator</i>
                        </Item>
                      {/*   <Item><i className='content'><img src={images.IconSass.link} alt="Icon" />Sass</i>
                        </Item> */}
                        <Item><i className='content'><img src={images.IconDiscordjs.link} alt="Icon" />Discord.js</i>
                        </Item>
                    </Carousel>
                </section>



                <Sliders>

                    <section className='qualifications'>
                        <div className='differences'>

                            <span>DIFERENCIAIS</span>

                            <Slider {...settings}>

                                <div className='expertise'>
                                    <img src={images.CleanCode.link} alt="icon" />
                                    <div className='title'>Clean Code</div>
                                    <p> Tenho como minha principal diretriz durante o desenvolvimento a qualidade do código seguindo as melhores práticas do mercado.</p>
                                </div>

                                <div className='expertise'>
                                    <img src={images.Responsive.link} alt="icon" />
                                    <div className='title'>Design Responsivo</div>
                                    <p>Criação de Sites com adaptação a todos os dispositivos.</p>
                                </div>

                                <div className='expertise'>
                                    <img src={images.Semantic.link} alt="icon" />
                                    <div className='title'>Código Semântico</div>
                                    <p>Deixe seu site com uma performance e acessibilidade maior.</p>
                                </div>

                                <div className='expertise'>
                                    <img src={images.Seo.link} alt="icon" />
                                    <div className='title'>SEO</div>
                                    <p>Alavanque seus sites com um ótimo posicionamento nas pesquisas.</p>
                                </div>

                            </Slider>

                        </div>
                    </section>


                    <section className='qualifications'>
                        <div className='differences'>

                            <span>CERTIFICADOS</span>

                            <Slider {...settings}>

                                <div className='expertise'>
                                    <img src={images.IconProgBR.link} alt="icon" />
                                    <div className='title'>Certificado De Conclusão</div>
                                    <p>Certificado obtido após a realização de todo o módulo das tecnologias de HTML, CSS e Javascript.</p>
                                    <a target="--blank" href="https://programadorbr.com/certificado/DVWBGS13HT266118">Acessar Certificado <i className='fas fa-certificate'></i></a>
                                </div>

                                <div className='expertise'>
                                    <img src={images.IconDIO.link} alt="icon" />
                                    <div className='title'>Certificado De Conclusão</div>
                                    <p>Obtido após a realização do curso de introdução prática ao Figma, na DIO.</p>
                                    <a target="--blank" href="https://hermes.digitalinnovation.one/certificates/A966F90B.pdf">Acessar Certificado <i className='fas fa-certificate'></i></a>
                                </div>

                                <div className='expertise'>
                                    <img src={images.IconProgBR.link} alt="icon" />
                                    <div className='title'>Certificado De Conclusão</div>
                                    <p>Certificado obtido após a realização de todo o módulo das tecnologias de Firebase, jQuery e Bootstrap.</p>
                                    <a target="--blank" href="https://programadorbr.com/certificado/DVWBGS13FI266118">Acessar Certificado <i className='fas fa-certificate'></i></a>
                                </div>

                                <div className='expertise'>
                                    <img src={images.IconDIO.link} alt="icon" />
                                    <div className='title'>Certificado De Conclusão</div>
                                    <p>Obtido após a realização do curso de introdução ao Git e Github, na DIO.</p>
                                    <a target="--blank" href="https://hermes.digitalinnovation.one/certificates/5D641E7F.pdf">Acessar Certificado <i className='fas fa-certificate'></i></a>
                                </div>

                                <div className='expertise'>
                                    <img src={images.IconProgBR.link} alt="icon" />
                                    <div className='title'>Certificado De Conclusão</div>
                                    <p>Certificado obtido após a realização de todo o módulo das tecnologias de NodeJS e MongoDB.</p>
                                    <a target="--blank" href="https://programadorbr.com/certificado/DVWBGS13NO266118">Acessar Certificado <i className='fas fa-certificate'></i></a>
                                </div>

                            </Slider>

                        </div>
                    </section>

                </Sliders>

            </Skill>

        </>
    )
}

export default Skills