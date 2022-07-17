import React from 'react'
import { Contacts } from './style'
import emailjs from "emailjs-com";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { EmailJSKey } from '../../config/EmailJSKey';

const Contact = () => {

  const MySwal = withReactContent(Swal)

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('GmailService', 'template_7m8nhcb', e.target, {EmailJSKey})

      .then((result) => {

        MySwal.fire({
          icon: 'success',
          title: 'Mensagem Enviada!',
          text: 'Sua Mensagem foi enviada com sucesso.',
          footer: "Obrigado por ter entrado em contato.",
          confirmButtonColor: '#0563bb'
        })
        
      }, (error) => {
        MySwal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Alguma coisa deu errado!',
          footer: 'Preencha os campos corretamente e tente novamente.',
          cancelButtonColor: '#d33'
        })

      });
    e.target.reset()

  }

  return (

    <>

      <Contacts id='footer'>

        <div className='title_page'>
          <h1 className="section-title-01" ><i className="bx bx-envelope m-2"></i>CONTATOS</h1>
          <h2 className="section-title-02">ENTRE EM CONTATO</h2>
        </div>

        <section className='d-flex justify-content-center'>

          <div className="container">
            <div className="content">
              <div className="left-side">
                <div className="address details">
                  <i className="fas fa-map-marker-alt"></i>
                  <div className="topic">Localização:</div>
                  <div className="text-one">São Paulo - Brasil</div>
                </div>
                <div className="phone details">
                  <i className="fas fa-phone-alt"></i>
                  <div className="topic">Telefone:</div>
                  <a target="--black" className="whatsapp" href="https://api.whatsapp.com/send?phone=5511949046614&text=Ol%C3%A1%20Gabriel!"> <div className="text-one">+55 11 94904-6614</div></a>
                </div>
                <div className="email details">
                  <i className="fas fa-envelope"></i>
                  <div className="topic">Email:</div>
                  <div className="text-one">contatodegabriel@gmail.com</div>
                </div>
              </div>
              <div className="right-side">
                <div className="topic-text">Fale Comigo</div>
                <p className='text-dark'>Resta alguma dúvida? Preencha os campos abaixo com os seguintes dados que em breve entraremos em contato.</p>
                <form onSubmit={sendEmail}>
                  <div className="input-box">
                    <input type="name" name='from_name' placeholder="Digite aqui seu nome" required />
                  </div>
                  <div className="input-box">
                    <input type="email" name="from_email" id="email" placeholder="email@exemplo.com" required />
                  </div>
                  <div className="input-box message-box">
                    <textarea name="message" rows="5" placeholder="Escreva aqui sua mensagem" required></textarea>
                  </div>
                  <div className="button">
                    <div className="text-center"><button type="submit">Enviar Mensagem <i style={{ color: "#fff" }} className='fas fa-paper-plane'></i></button></div>
                  </div>
                </form>
              </div>
            </div>
          </div>

        </section>


      </Contacts>

    </>

  )
}

export default Contact