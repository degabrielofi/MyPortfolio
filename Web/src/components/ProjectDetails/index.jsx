import { Image, Techs, Detail } from "./style";
import details from "data/details.json";
import Slider from "infinite-react-carousel";
import { useParams } from "react-router-dom";
import HeaderDetail from "components/HeaderDetails";
import WebVideo from "components/WebVideo";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const ProjectDetails = ({ darkMode }) => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <FaArrowAltCircleRight
          style={{
            ...style,
            color: darkMode ? "#fff" : "#000",
            fontSize: "30px",
          }}
        />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <FaArrowAltCircleLeft
          style={{
            ...style,
            color: darkMode ? "#fff" : "#000",
            fontSize: "30px",
          }}
        />
      </div>
    );
  }

  const settings = {
    duration: 20,
    autoplaySpeed: 3000,
    dots: true,
    arrows: true,
    autoplay: true,
    slidesPerRow: 1,
    infinite: true,
    centerMode: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const { id } = useParams();
  const {
    title,
    Description,
    link,
    Technologies,
    icon,
    images,
    additionalDescription,
    video,
  } = details.DetailsIdentification[id].Details;

  return (
    <>
      <HeaderDetail />
      <Image>
        <Slider {...settings}>
          {images.map((mockup) => {
            return (
              <div className="images">
                <img className={mockup.class} src={mockup.image} alt="Images" />
              </div>
            );
          })}
        </Slider>
      </Image>

      <Detail>
        <section className="details">
          <div className="titles">
            <img src={icon} alt="Icon" />
            <div className="buttons">
              <h1>{title}</h1>
              <a href={link} target="--blank">
                <i className="fas fa-link"></i> Acessar Site
              </a>
            </div>
          </div>
          <br />
          <br />
          <span>{Description}</span>
          <br />
          <br />
          <span className="addition_text">
            {additionalDescription ? additionalDescription : ""}
          </span>
          <Techs>
            <section className="all-techs">
              <h5 className="title">
                <i className="fas fa-code"></i> Tecnologias Utilizadas:
              </h5>
              {Technologies.map((techs) => {
                return (
                  <div style={{ background: techs.color }} className="techs">
                    {techs.name}
                  </div>
                );
              })}
            </section>
          </Techs>
        </section>
      </Detail>

      <WebVideo video={video} />
    </>
  );
};

export default ProjectDetails;
