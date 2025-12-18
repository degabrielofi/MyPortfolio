import React, { useEffect, useState } from "react";
import { Container, HeaderMobile, WavesAnimation } from "./style";
import images from "assets/data/images.json";

const Header = () => {
  // mobile
  const [mobileOpen, setMobileOpen] = useState(false);

  // ====== SCROLL (mantive sua lógica) ======
  const handleScrollToHome = () => {
    const Home = document.querySelector("#Home");
    Home?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  const handleScrollToAbout = () => {
    const About = document.querySelector("#About");
    About?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  const handleScrollToTech = () => {
    const Technologies = document.querySelector("#Technologies");
    Technologies?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  const handleScrollToEcosystem = () => {
    const Ecosystem = document.querySelector("#Ecosystem");
    Ecosystem?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  const handleScrollToPortfolio = () => {
    const Portfolio = document.querySelector("#Portfolio");
    Portfolio?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  const handleScrollToFooter = () => {
    const Footer = document.querySelector("#Footer");
    Footer?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  // ESC fecha + trava scroll do body quando aberto
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setMobileOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);

    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* ===== DESKTOP (IGUAL AO SEU) ===== */}
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
                Projetos
              </a>
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollToEcosystem();
                }}
              >
                Ecossistema
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

      {/* ===== MOBILE (NOVO) ===== */}
      <HeaderMobile>
        <header className="mobileHeader">
          <a
            className="logo"
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleScrollToHome();
            }}
            aria-label="Voltar para Home"
          >
            <img src={images.DeGabrielDevIcon.link} alt="DeGabrielDEV" />
          </a>

          <button
            type="button"
            className={`burger ${mobileOpen ? "open" : ""}`}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            <span />
            <span />
            <span />
          </button>
        </header>

        <div
          className={`backdrop ${mobileOpen ? "show" : ""}`}
          onClick={() => setMobileOpen(false)}
          aria-hidden={!mobileOpen}
        />

        <nav
          id="mobile-menu"
          className={`drawer ${mobileOpen ? "open" : ""}`}
          aria-label="Menu mobile"
        >
          <div className="drawerTop">
            <span className="drawerTitle">Menu</span>
            <button
              type="button"
              className="close"
              onClick={() => setMobileOpen(false)}
              aria-label="Fechar menu"
            >
              ✕
            </button>
          </div>

          <div className="drawerLinks">
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
              Projetos
            </a>
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                handleScrollToEcosystem();
              }}
            >
              Ecossistema
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
        </nav>
      </HeaderMobile>

      {/* WAVES (igual ao seu) */}
      <WavesAnimation>
        <section className="waves">
          {/* mantém teu SVG e animações como estavam */}
          {/* ... */}
        </section>
      </WavesAnimation>
    </>
  );
};

export default Header;
