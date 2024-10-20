import React, { useState } from "react";
import { Container, HeaderMobile, WavesAnimation } from "./style";
import images from "data/images.json";

const Header = () => {
  const [classOn, setClassOn] = useState(false);

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

  return (
    <>
      <Container>
        <header>
          <section className="content">
            <div className="links">
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
                About
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
            </div>
            <div className="icon">
              <img src={images.DeGabrielDevIcon.link} alt="DeGabrielDEV" />
            </div>
            <div className="links">
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
            </div>
          </section>
        </header>
      </Container>

      <HeaderMobile>
        <section className="headerContainer">
          <header>
            <div className="logo">
              <img src={images.DeGabrielDevIcon.link} alt="icon" />
            </div>

            <div className="links">
              <input type="checkbox" id="checkbox" />
              <label
                onClick={() => {
                  setClassOn(!classOn);
                }}
                htmlFor="checkbox"
                className="toggle"
              >
                <div className="bars" id="bar1"></div>
                <div className="bars" id="bar2"></div>
                <div className="bars" id="bar3"></div>
              </label>
            </div>
          </header>

          <nav className={classOn ? "navbar-active" : "navbar"}>
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
              About
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
          </nav>
        </section>
      </HeaderMobile>

      <WavesAnimation>
        <section className="waves">
          <svg
            width="100%"
            height="100%"
            id="svg"
            viewBox="0 0 1440 690"
            xmlns="http://www.w3.org/2000/svg"
            className="transition duration-300 ease-in-out delay-150"
          >
            <path
              d="M 0,700 L 0,131 C 54.97243053624901,131.99802910828217 109.94486107249801,132.99605821656434 150,140 C 190.055138927502,147.00394178343566 215.19298624625696,160.0137962420248 252,146 C 288.80701375374304,131.9862037579752 337.2831939424741,90.94875681533648 381,91 C 424.7168060575259,91.05124318466352 463.67423798384675,132.19117649662928 514,128 C 564.3257620161532,123.8088235033707 626.0198541221388,74.28653719814632 673,71 C 719.9801458778612,67.71346280185368 752.2463455275986,110.66267471078538 789,117 C 825.7536544724014,123.33732528921462 866.9947637674667,93.0627639587122 909,100 C 951.0052362325333,106.9372360412878 993.7745994025347,151.0862694543658 1046,165 C 1098.2254005974653,178.9137305456342 1159.9068386223946,162.59215822382458 1200,165 C 1240.0931613776054,167.40784177617542 1258.5980461078873,188.54509765033583 1295,186 C 1331.4019538921127,183.45490234966417 1385.7009769460565,157.22745117483208 1440,131 L 1440,700 L 0,700 Z"
              stroke="none"
              strokeWidth="0"
              fill="#880c85"
              fillOpacity="0.4"
              className="transition-all duration-300 ease-in-out delay-150 path-0"
              transform="rotate(-180 720 350)"
            ></path>
            <path
              d="M 0,700 L 0,306 C 44.90254090972678,284.0521923292823 89.80508181945356,262.1043846585647 130,253 C 170.19491818054644,243.8956153414353 205.68221363191253,247.63465369502353 252,253 C 298.31778636808747,258.36534630497647 355.4660636528964,265.3570005613412 403,287 C 450.5339363471036,308.6429994386588 488.4535317565019,344.937344059612 523,353 C 557.5464682434981,361.062655940388 588.719809321096,340.8936232002111 639,337 C 689.280190678904,333.1063767997889 758.6672309591141,345.4881631395438 803,346 C 847.3327690408859,346.5118368604562 866.6112668424473,335.153724241614 902,316 C 937.3887331575527,296.846275758386 988.8877016710965,269.89693989400035 1040,266 C 1091.1122983289035,262.10306010599965 1141.8379264731664,281.25851618238454 1192,301 C 1242.1620735268336,320.74148381761546 1291.760592436238,341.06899537646154 1333,342 C 1374.239407563762,342.93100462353846 1407.119703781881,324.4655023117692 1440,306 L 1440,700 L 0,700 Z"
              stroke="none"
              strokeWidth="0"
              fill="#880c85"
              fillOpacity="0.53"
              className="transition-all duration-300 ease-in-out delay-150 path-1"
              transform="rotate(-180 720 350)"
            ></path>
            <path
              d="M 0,700 L 0,481 C 37.782458178315224,467.8231137964191 75.56491635663045,454.6462275928382 121,445 C 166.43508364336955,435.3537724071618 219.52279275179342,429.2382034250663 260,426 C 300.4772072482066,422.7617965749337 328.343912636196,422.4009587068967 377,442 C 425.656087363804,461.5990412931033 495.1015567034225,501.1579617473469 544,520 C 592.8984432965775,538.8420382526531 621.2498605501142,536.9671943037156 659,526 C 696.7501394498858,515.0328056962844 743.8990010961203,494.97326103779045 782,481 C 820.1009989038797,467.02673896220955 849.1541350654043,459.1397615451225 895,462 C 940.8458649345957,464.8602384548775 1003.4844586422628,478.4676927817197 1059,470 C 1114.5155413577372,461.5323072182803 1162.9080303655448,430.9894673279985 1198,434 C 1233.0919696344552,437.0105326720015 1254.8834198955587,473.5744379062861 1293,487 C 1331.1165801044413,500.4255620937139 1385.5582900522206,490.71278104685695 1440,481 L 1440,700 L 0,700 Z"
              stroke="none"
              strokeWidth="0"
              fill="#880c85"
              fillOpacity="1"
              className="transition-all duration-300 ease-in-out delay-150 path-2"
              transform="rotate(-180 720 350)"
            ></path>
          </svg>
        </section>
      </WavesAnimation>
    </>
  );
};

export default Header;
