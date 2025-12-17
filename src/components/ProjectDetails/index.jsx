import { Image, Techs, Detail } from "./style";
import details from "assets/data/details.json";
import Slider from "infinite-react-carousel";
import { useParams, Link } from "react-router-dom";
import HeaderDetail from "components/HeaderDetails";
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
    autoplaySpeed: 3500,
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

  const index = Number(id);
  const item = Number.isFinite(index)
    ? details.DetailsIdentification[index]
    : null;

  if (!item || !item.Details) {
    return (
      <>
        <HeaderDetail />
        <Detail>
          <section className="details">
            <div className="notFound">
              <h1>Projeto não encontrado</h1>
              <p>Esse detalhe não existe (ou o link está errado).</p>
              <Link className="backBtn" to="/#Portfolio">
                Voltar
              </Link>
            </div>
          </section>
        </Detail>
      </>
    );
  }

  const {
    title,
    Description,
    link,
    Technologies,
    icon,
    images,
    additionalDescription,
  } = item.Details;

  return (
    <>
      <HeaderDetail />

      <Image>
        <Slider {...settings}>
          {(images || []).map((mockup, idx) => {
            return (
              <div className="images" key={`${mockup.image}-${idx}`}>
                <img
                  className={mockup.class}
                  src={mockup.image}
                  alt={`${title} - imagem ${idx + 1}`}
                  loading="lazy"
                />
              </div>
            );
          })}
        </Slider>
      </Image>

      <Detail>
        <section className="details">
          <div className="header">
            <div className="left">
              <img className="icon" src={icon} alt={`${title} icon`} />
              <div className="text">
                <h1>{title}</h1>
                <p className="subtitle">
                  {item.DetailsID <= 2 ? "Projeto solo" : "Marca / Ecossistema"}
                </p>
              </div>
            </div>

            <div className="right">
              {link ? (
                <a
                  className="primaryBtn"
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Acessar <i className="fas fa-link"></i>
                </a>
              ) : null}

              <Link className="secondaryBtn" to="/#Portfolio">
                Voltar
              </Link>
            </div>
          </div>

          <div className="content">
            <p className="desc">{Description}</p>

            {additionalDescription ? (
              <p className="addition">{additionalDescription}</p>
            ) : null}

            {Array.isArray(Technologies) && Technologies.length ? (
              <Techs>
                <section className="all-techs">
                  <h5 className="title">
                    <i className="fas fa-code"></i> Tecnologias Utilizadas
                  </h5>

                  <div className="chips">
                    {Technologies.map((tech, idx) => {
                      return (
                        <div
                          key={`${tech.name}-${idx}`}
                          style={{ background: tech.color }}
                          className="techs"
                        >
                          {tech.name}
                        </div>
                      );
                    })}
                  </div>
                </section>
              </Techs>
            ) : null}
          </div>
        </section>
      </Detail>
    </>
  );
};

export default ProjectDetails;
