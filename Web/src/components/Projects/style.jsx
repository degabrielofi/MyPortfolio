import styled from "styled-components";

export const Title = styled.div`
  .title_page {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
  }

  .section-title-01 {
    opacity: 0.1;
    position: absolute;
    font-size: 3rem;
    font-weight: 800;
    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    transition: opacity 2.5s cubic-bezier(0.5, 0, 0, 1) 0.5s,
      transform 2.5s cubic-bezier(0.5, 0, 0, 1) 0.5s;
  }

  .section-title-02 {
    opacity: 1;
    font-weight: 700;
    font-size: 2rem;
    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 20, 0, 1);
    transition: opacity 2.5s cubic-bezier(0.5, 0, 0, 1) 0.5s,
      transform 2.5s cubic-bezier(0.5, 0, 0, 1) 0.5s;
  }

  .section-title-02::before {
    content: "";
    position: absolute;
    width: 4rem;
    height: 4px;
    right: 0;
    bottom: 0;
    background: #880c85;
  }

  @media screen and (max-width: 998px) {
    .section-title-01 {
      font-size: 2.5rem;
    }

    .section-title-02 {
      font-size: 1.5rem;
    }
  }
`;

export const AllProjects = styled.div`
  .project {
    margin-top: 2rem;
  }

  .flip-card {
    background-color: transparent;
    width: 100%;
    height: 250px;
    perspective: 1000px;
    margin-top: 3rem;
  }

  .title {
    font-size: 1.5em;
    font-weight: 900;
    text-align: center;
    margin: 0;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 1.5s;
    transform-style: preserve-3d;
  }

  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front,
  .flip-card-back {
    box-shadow: 0 8px 14px 0 rgba(0, 0, 0, 0.2);
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: 1rem;
  }

  .flip-card-back {
    background: linear-gradient(
      120deg,
      rgb(136, 12, 133) 30%,
      rgb(168, 12, 133) 88%,
      rgb(155, 43, 127) 78%
    );
    color: white;
    transform: rotateY(180deg);
  }

  .flip-card-back h4 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #fff;
    letter-spacing: 0.8px;
    line-height: 1.1em;
  }

  .flip-card-back span {
    font-weight: 400;
    color: #fff;
    font-size: 1rem;
    letter-spacing: 0.8px;
  }

  .flip-card-back .links a {
    text-decoration: none;
  }

  .flip-card-back .links a i {
    color: #ffffff;
    font-size: 2rem;
    margin: 1rem;
    transition: all 0.3s;
  }

  .flip-card-back .links a i:hover {
    color: #5e5e5e;
    transition: all 0.3s;
  }

  @media screen and (min-width: 395px) and (max-width: 575px) {
    .flip-card {
      margin-top: 30%;
    }
  }
`;
