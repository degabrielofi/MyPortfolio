import { Image, Techs, Detail, WebVideo } from './style'
import details from '../../Data/details.json'
import Slider from "infinite-react-carousel";
import { useParams } from 'react-router-dom'

const Details = () => {

  const settings = {

    duration: 20,
    autoplaySpeed: 3000,
    dots: false,
    arrows: false,
    autoplay: true,
    slidesPerRow: 1,
    infinite: true,
    centerMode: true

  };

  const { id } = useParams()
  const { title, description, link, technologies, icon, images, description2, video } = details.DetailsIdentification[id].Details

  return (
    <>

      <Image>

        <Slider {...settings}>

          {
            images.map((mockup) => {
              return (
                <div className="images">
                  <img className={mockup.class} src={mockup.image} alt="Images" />
                </div>
              )
            })
          }

        </Slider>

      </Image>

      <Detail>

        <div className="details">
          <div className='titles'><img src={icon} alt="Icon" />
            <div className='buttons'>
              <h1>{title}</h1>
              <a href={link} target="--blank" ><i className='fas fa-link'></i> Acessar Site</a>
            </div>
          </div>
          <br />
          <br />
          <span>{description}</span>
          <br />
          <br />
          <span>{description2 ? { description2 } : ""}</span>
          <Techs>
            <section className='all-techs'>
              <h5 className='title'><i className="fas fa-code"></i> Tecnologias Utilizadas:</h5>
              {
                technologies.map((techs) => {
                  return (

                    <div style={{ background: techs.color }} className='techs'>
                      {techs.name}
                    </div>

                  )
                })
              }
            </section>
          </Techs>
        </div>

      </Detail>

      <WebVideo>
        <div className='title_page'>
          <h1 className="section-title-01" ><i className="fas fa-film"></i> VIDEO</h1>
          <h2 className="section-title-02">RESULTADO FINAL</h2>
        </div>

        <div className='video_web d-flex justify-content-center'>
          <iframe src={video.link} title={video.name} allow="accelerometer; autoplay; picture-in-picture; fullscreen" >
          </iframe>
        </div>
      </WebVideo>

    </>
  )
}


export default Details