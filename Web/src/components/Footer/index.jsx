import React, { useState } from "react";
import { WavesAnimation, Contact, FooterContainer, Button } from "./style";
import api from "lib/api";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import images from "data/images.json";

const Footer = ({ pageHome }) => {
  const MySwal = withReactContent(Swal);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);

  let currentDate = new Date().getFullYear();

  const handleScrollToHome = () => {
    const Home = document.querySelector("#Home");

    Home?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToAbout = () => {
    const About = document.querySelector("#About");

    About?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToTech = () => {
    const Technologies = document.querySelector("#Technologies");

    Technologies?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToCurriculum = () => {
    const Curriculum = document.querySelector("#Curriculum");

    Curriculum?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToPortfolio = () => {
    const Portfolio = document.querySelector("#Portfolio");

    Portfolio?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToFooter = () => {
    const Footer = document.querySelector("#Footer");

    Footer?.scrollIntoView({ behavior: "smooth" });
  };

  async function sendEmail(e) {
    e.preventDefault();

    setLoading(true);
    try {
      await api.post("/contact", {
        name,
        email,
        phone,
        subject,
        comment,
      });

      setLoading(false);

      MySwal.fire({
        icon: "success",
        title: "Mensagem Enviada!",
        text: "Sua Mensagem foi enviada com sucesso.",
        footer: "Obrigado por ter entrado em contato.",
        confirmButtonColor: "#880c85",
      });
    } catch (error) {
      setLoading(false);

      MySwal.fire({
        icon: "error",
        title: "Oops...",
        text: "Alguma coisa deu errado!",
        footer: "Preencha os campos corretamente e tente novamente.",
        confirmButtonColor: "#d33",
      });
    }
  }

  return (
    <>
      <WavesAnimation>
        <div
          className="waves"
          style={pageHome ? { marginTop: "-40%" } : { marginTop: "1rem" }}
        >
          <svg
            width="100%"
            height="100%"
            id="svg"
            viewBox="0 0 1440 590"
            xmlns="http://www.w3.org/2000/svg"
            className="transition duration-300 ease-in-out delay-150"
          >
            <path
              d="M 0,600 L 0,112 C 34.93687644194128,101.78377377197464 69.87375288388256,91.56754754394927 105,75 C 140.12624711611744,58.432452456050726 175.441864906411,35.51358359617754 212,59 C 248.558135093589,82.48641640382246 286.3587874904734,152.37811807134057 315,149 C 343.6412125095266,145.62188192865943 363.1229851316956,68.97394411846022 396,61 C 428.8770148683044,53.026055881539776 475.1492719827444,113.72610545481848 514,144 C 552.8507280172556,174.27389454518152 584.2799269373265,174.12163406226585 617,160 C 649.7200730626735,145.87836593773415 683.7310202679492,117.78735829611817 716,104 C 748.2689797320508,90.21264170388183 778.7959919908768,90.72893275326147 813,82 C 847.2040080091232,73.27106724673853 885.0850117685437,55.29691069083593 918,73 C 950.9149882314563,90.70308930916407 978.8639609349482,144.0834244833948 1014,145 C 1049.1360390650518,145.9165755166052 1091.4591444916634,94.3693913755849 1129,82 C 1166.5408555083366,69.6306086244151 1199.2994610983983,96.43901001426562 1232,115 C 1264.7005389016017,133.56098998573438 1297.3430111147434,143.8745685673527 1332,142 C 1366.6569888852566,140.1254314326473 1403.3284944426282,126.06271571632365 1440,112 L 1440,600 L 0,600 Z"
              stroke="none"
              strokeWidth="0"
              fill={"#fff"}
              fillOpacity="0.4"
              className="transition-all duration-300 ease-in-out delay-150 path-0"
            ></path>
            <path
              d="M 0,600 L 0,262 C 35.587018069173936,297.0440270808002 71.17403613834787,332.0880541616004 108,316 C 144.82596386165213,299.9119458383996 182.89087351578246,232.69181043439846 214,208 C 245.10912648421754,183.30818956560154 269.2624697985224,201.1447041008057 301,233 C 332.7375302014776,264.8552958991943 372.0592472901281,310.72937316237864 405,301 C 437.9407527098719,291.27062683762136 464.50054104096523,225.93780324967966 503,222 C 541.4994589590348,218.06219675032034 591.9385885460108,275.5194138389026 632,288 C 672.0614114539892,300.4805861610974 701.7451047749914,267.9845413947097 727,249 C 752.2548952250086,230.0154586052903 773.0809923540236,224.54242058225847 808,239 C 842.9190076459764,253.45757941774153 891.9309258089145,287.8457762762564 932,282 C 972.0690741910855,276.1542237237436 1003.1953044103184,230.07447431271586 1031,239 C 1058.8046955896816,247.92552568728414 1083.2878565498115,311.8563264728803 1119,314 C 1154.7121434501885,316.1436735271197 1201.6532693904353,256.50021979576303 1236,254 C 1270.3467306095647,251.49978020423697 1292.0990658884473,306.14279434406774 1324,317 C 1355.9009341115527,327.85720565593226 1397.9504670557762,294.92860282796613 1440,262 L 1440,600 L 0,600 Z"
              stroke="none"
              strokeWidth="0"
              fill={"#fff"}
              fillOpacity="0.53"
              className="transition-all duration-300 ease-in-out delay-150 path-1"
            ></path>
            <path
              d="M 0,600 L 0,412 C 38.37586124714542,423.1868075258178 76.75172249429085,434.3736150516357 110,437 C 143.24827750570915,439.6263849483643 171.36897126998207,433.6923473192752 203,435 C 234.63102873001793,436.3076526807248 269.7723924257808,444.8569956712635 303,430 C 336.2276075742192,415.1430043287365 367.5414590268948,376.8796699956709 404,368 C 440.4585409731052,359.1203300043291 482.0617714666399,379.6243243460531 522,379 C 561.9382285333601,378.3756756539469 600.211455106545,356.62303262011676 634,374 C 667.788544893455,391.37696737988324 697.0924081071796,447.8835451734799 729,458 C 760.9075918928204,468.1164548265201 795.4189124647363,431.84278668596363 829,411 C 862.5810875352637,390.15721331403637 895.2319420338752,384.74530808266553 926,401 C 956.7680579661248,417.25469191733447 985.6533193997627,455.17598098337413 1025,460 C 1064.3466806002373,464.82401901662587 1114.154780367074,436.5507679838379 1146,407 C 1177.845219632926,377.4492320161621 1191.7275591319417,346.6209470812744 1224,360 C 1256.2724408680583,373.3790529187256 1306.9349831051597,430.9654436910645 1346,447 C 1385.0650168948403,463.0345563089355 1412.5325084474202,437.51727815446776 1440,412 L 1440,600 L 0,600 Z"
              stroke="none"
              strokeWidth="0"
              fill={"#fff"}
              fillOpacity="1"
              className="transition-all duration-300 ease-in-out delay-150 path-2"
            ></path>
          </svg>
        </div>
      </WavesAnimation>

      <Contact id="Footer">
        <section className="wrapper" style={{ background: "#fff" }}>
          <header>
            <h2 style={{ color: "#000" }}>Mande a sua mensagem ⭣</h2>
          </header>
          <form onSubmit={sendEmail}>
            <div className="dbl-field">
              <div className="field">
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  name="name"
                  placeholder="Coloque seu nome (*)"
                  required
                />
                <i className="textInput fas fa-user"></i>
              </div>
              <div className="field">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  name="email"
                  placeholder="email@exemplo.com.br (*)"
                  required
                />
                <i className="textInput fas fa-envelope"></i>
              </div>
            </div>
            <div className="dbl-field">
              <div className="field">
                <input
                  onChange={(e) => setPhone(e.target.value)}
                  type="text"
                  name="phone"
                  placeholder="Coloque o seu telefone"
                />
                <i className="textInput fas fa-phone-alt"></i>
              </div>
              <div className="field">
                <input
                  onChange={(e) => setSubject(e.target.value)}
                  type="text"
                  name="subject"
                  placeholder="Coloque o assunto (*)"
                  required
                />
                <i className="textInput fas fa-globe"></i>
              </div>
            </div>
            <div className="message">
              <textarea
                onChange={(e) => setComment(e.target.value)}
                placeholder="Escreva sua mensagem (*)"
                name="message"
                required
              ></textarea>
            </div>
            <Button>
              <button type="submit" className="btn">
                <div>{loading ? "Enviando..." : "Enviar Mensagem"}</div>
                <i className="submitMessage fas fa-paper-plane"></i>
              </button>
            </Button>
          </form>
        </section>
      </Contact>

      <FooterContainer>
        <footer style={{ background: "#fff" }}>
          <section className="container">
            <div className="content">
              <div className="logo">
                <img src={images.DeGabrielDEV.link} alt="" />
              </div>
              <section className="links">
                <div className="contacts">
                  <nav>
                    <ul>
                      <li>
                        <span>Menu:</span>
                        <a
                          href="/"
                          onClick={(e) => {
                            e.preventDefault();
                            handleScrollToHome();
                          }}
                        >
                          Home
                        </a>
                        <a
                          href="/"
                          onClick={(e) => {
                            e.preventDefault();
                            handleScrollToAbout();
                          }}
                        >
                          Sobre
                        </a>
                        <a
                          href="/"
                          onClick={(e) => {
                            e.preventDefault();
                            handleScrollToTech();
                          }}
                        >
                          Tecnologias
                        </a>
                        <a
                          href="/"
                          onClick={(e) => {
                            e.preventDefault();
                            handleScrollToPortfolio();
                          }}
                        >
                          Portfólio
                        </a>
                        <a
                          href="/"
                          onClick={(e) => {
                            e.preventDefault();
                            handleScrollToCurriculum();
                          }}
                        >
                          Currículo
                        </a>
                        <a
                          href="/"
                          onClick={(e) => {
                            e.preventDefault();
                            handleScrollToFooter();
                          }}
                        >
                          Contatos
                        </a>
                      </li>
                      <li>
                        <span>Redes Sociais:</span>
                        <a
                          href="https://www.linkedin.com/in/degabrielofi/"
                          target="--blank"
                        >
                          LinkedIn
                        </a>
                        <a
                          href="https://github.com/degabrielofi"
                          target="--blank"
                        >
                          GitHub
                        </a>
                      </li>
                      <li>
                        <span>Fale Conosco:</span>
                        <a
                          href="mailto:contatodegabrielofi@gmail.com"
                          target="--blank"
                        >
                          E-Mail
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </section>
              <section className="row">
                <div className="copy">
                  <h5>© {currentDate} DeGabrielDEV - All Rights Reserved</h5>
                </div>
              </section>
            </div>
          </section>
        </footer>
      </FooterContainer>
    </>
  );
};

export default Footer;
