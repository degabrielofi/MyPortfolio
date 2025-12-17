import React, { useEffect, useState } from "react";
import { Container } from "./style";

const Developer = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(220);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const toRotate = [
    "Produtos digitais",
    "Ecossistemas",
    "Marca + tecnologia",
    "Soluções escaláveis",
  ];
  const period = 1600;

  const handleScrollToSection = (id) => {
    const el = document.querySelector(`#${id}`);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, delta]);

  const tick = () => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];

    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) setDelta((prev) => Math.max(50, prev / 1.8));

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
      return;
    }

    if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum((prev) => prev + 1);
      setDelta(220);
      return;
    }
  };

  return (
    <Container id="Home">
      <section id="hero" aria-label="Hero">
        <div className="wrap">
          <div className="badge">Guebly • Founder</div>

          <h1>
            Eu construo <span className="accent">negócios</span> e{" "}
            <span className="accent">produtos</span> digitais que saem do papel.
          </h1>

          <p className="subtitle">
            Foco em{" "}
            <span className="txt-rotate" aria-label="Texto animado">
              <span className="typing">{text}</span>
              <span className="caret" />
            </span>
          </p>

          <div className="cta">
            <button
              type="button"
              className="primary"
              onClick={() => handleScrollToSection("Companies")}
            >
              Ver o ecossistema
            </button>

            <button
              type="button"
              className="secondary"
              onClick={() => handleScrollToSection("Contact")}
            >
              Contato
            </button>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Developer;
