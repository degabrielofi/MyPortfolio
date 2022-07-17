import React from 'react'
import { Service } from './style'
import images from '../../Data/images.json'

const Services = () => {
  return (
    <>

      <Service id="services">


        <div className='title_page'>
          <h1 className="section-title-01" ><i className="bx bx-server m-2"></i>O QUE FAÇO</h1>
          <h2 className="section-title-02">MEUS SERVIÇOS</h2>
        </div>

        <section className="services" id="services">

          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="service">
                  <img alt="" class="lazyload" src={images.IconDiscordjs.link} />
                  <div className="title">Bot Developer</div>
                  <span>BOTS PARA O DISCORD</span>
                  <div className="p-2"></div>
               <p>   Criação e o desenvolvimento de artes no Photoshop e Illustrator para alavancar a sua empresa.</p><div class="p-2"></div>
                  <a href="#footer" className="linknav" data-id="contact"><div className="btn-default">Saiba mais</div></a>
                </div>
                <div className="p-4"></div>
              </div>
              <div class="col-lg-6">
                <div className="service">
                  <img className="lazyload" src={images.IconAdobe.link} alt="Icon" />
                  <div className="title">Designer</div>
                  <span>DESIGNER GRÁFICO</span>
                  <div className="p-2"></div><p>Criação e o desenvolvimento de artes no Photoshop e Illustrator para alavancar a sua empresa.</p><div class="p-2"></div>
                  <a href="#footer" className="linknav" data-id="contact"><div className="btn-default">Saiba mais</div></a>
                </div>
                <div className="p-4"></div>
              </div>
              <div className="col-lg-6">
                <div className="service">
                  <img alt="" class="lazyload" src={images.IconVSCODE.link} />
                  <div className="title">Web Developer</div>
                  <span>DESENVOLVIMENTO WEB</span>
                  <div className="p-2"></div>
                  <p>                  Desenvolvimento web de baixa ou alta complexidade para suprir a necessidade da sua empresa.                            <div class="p-2"></div></p>
                  <a href="#footer" className="linknav" data-id="contact"><div className="btn-default">Saiba mais</div></a>
                </div>
                <div className="p-4"></div>
              </div>
            </div>
          </div>

        </section>


      </Service>

    </>
  )
}

export default Services