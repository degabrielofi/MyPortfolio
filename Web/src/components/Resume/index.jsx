import React from 'react'
import { Resumes } from './style'

const Resume = () => {
    return (
        <>

            <Resumes id='resume'>

                <div className='title_page'>
                    <h1 className="section-title-01" ><i className="bx bx-file-blank"></i>RESUMO</h1>
                    <h2 className="section-title-02">EDUCAÇÃO E EXPERIÊNCIA</h2>
                </div>


                <section className="ftco-section ftco-no-pb" id="resume-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="resume-wrap ftco-animate">
                                    <div className='title'>
                                        <i className="fa fa-graduation-cap"></i>
                                        <span className="date">2022-2024</span>
                                    </div>
                                    <h2>Ensino Médio</h2>
                                    <span className="position">E.E Antonio Manoel Alves De Lima</span>
                                    <p className="mt-4">Última etapa da educação básica brasileira, Na qual tem duração de três anos e seu principal objetivo é aprimorar os conhecimentos obtidos no ensino fundamenta, além de prepara o aluno para o mercado de trabalho.</p>
                                 </div>
                            </div>
                            <div className="col-md-6">
                                <div className="resume-wrap ftco-animate">
                                    <div className='title'>
                                        <i className="fa fa-briefcase"></i>
                                        <span className="date">2021-PRESENTE</span>
                                    </div>
                                    <h2>Serviços</h2>
                                    <span className="position">Autônomo</span>
                                    <p className="mt-4"><i className='services fa fa-rss-square'></i> Desenvolvimento de sites <br /><i className='services fa fa-code'></i> Desenvolvimento de aplicações web <br /><i className='services fa fa-image'></i> Criação de layouts <br /><i className='services fa fa-robot'></i> Criação de BOTS</p>
                                </div>

                            </div>
                        </div>

                    </div>
                </section>

            </Resumes>

        </>
    )
}

export default Resume