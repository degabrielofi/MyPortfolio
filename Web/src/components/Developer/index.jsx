import React, { useState } from "react";
import { Container } from "./style";
import { useEffect } from "react";
import images from "Data/images.json";

const Developer = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [text, setText] = useState("");
  const toRotate = ["ReactJS", "VueJS", "NodeJS", "JavaScript"];
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(1);
  const period = 2000;

  const handleScrollToPortfolio = () => {
    const Portfolio = document.querySelector("#Portfolio");

    Portfolio?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <>
      <Container id="Home">
        <section
          id="hero"
          className="d-flex flex-column justify-content-center"
        >
          <div className="container">
            <img src={images.Photo.link} alt="" />
            <div className="items">
              <h1>Desenvolvedor Full-Stack</h1>
              <p>
                {`Atuação com`}{" "}
                <span className="txt-rotate">
                  <span className="wrap">{text}</span>
                </span>
              </p>
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollToPortfolio();
                }}
              >
                <button className="main-btn">Ver meu portfólio</button>
              </a>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
};

export default Developer;
