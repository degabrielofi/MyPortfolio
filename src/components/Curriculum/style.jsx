import styled from "styled-components";

export const Container = styled.div`
  font-family: "Madimi One", sans-serif;
  width: 100%;

  /* NÃO usa sticky aqui */
  svg {
    display: block;
    width: 100%;
    height: auto;
  }

  .curriculum {
    margin-top: -4px; /* encosta a onda sem “buraco” */
    background-color: #880c85;
    padding: 3.5rem 0 2rem 0; /* espaço real, sem height:100% */
  }

  .curriculum .content {
    width: min(980px, 92%);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 14px;
  }

  .curriculum h1 {
    margin: 0;
    font-size: 44px;
    color: #fff;
    line-height: 1.15;
  }

  .curriculum p {
    margin: 0;
    font-size: 22px;
    color: rgba(255, 255, 255, 0.92);
    line-height: 1.5;
    max-width: 760px;
  }

  @media (max-width: 992px) {
    .curriculum {
      padding: 2.5rem 0 1.5rem 0;
    }

    .curriculum h1 {
      font-size: 24px;
    }

    .curriculum p {
      font-size: 16px;
    }
  }
`;

export const Button = styled.div`
  /* remove z-index absurdo */
  a {
    cursor: pointer;
    text-decoration: none;
    display: inline-block;
  }

  .curriculumButton {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    margin-top: 0.5rem;
    font-size: 18px;
    background: #fff;
    color: #880c85;
    padding: 0.9em 1.2em;
    border: none;
    border-radius: 16px;
    overflow: hidden;
    transition: 0.2s ease;
    cursor: pointer;
  }

  .curriculumButton:hover {
    transform: translateY(-1px);
    filter: brightness(1.02);
  }

  .curriculumButton span {
    display: block;
    transition: all 0.3s ease-in-out;
    font-weight: 700;
  }

  button svg {
    display: block;
    transform-origin: center center;
    transition: transform 0.3s ease-in-out;
  }

  .curriculumButton:hover .svg-wrapper {
    animation: fly-1 0.6s ease-in-out infinite alternate;
  }

  .curriculumButton:hover svg {
    transform: translateX(2.2em) rotate(45deg) scale(1.05);
  }

  .curriculumButton:hover span {
    transform: translateX(8em);
  }

  @keyframes fly-1 {
    from {
      transform: translateY(0.1em);
    }
    to {
      transform: translateY(-0.1em);
    }
  }
`;

export const Socials = styled.div`
  background-color: #880c85;
  padding: 2rem 0 3.5rem 0; /* aqui controla o “respiro” antes do footer */

  .social {
    width: min(980px, 92%);
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 22px;
    flex-wrap: wrap;
  }

  .button {
    background-color: #ffffff;
    border: none;
    border-radius: 999px;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.35);
    animation: sway 2s infinite alternate;
    width: 70px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    perspective: 500px;
    transition: transform 0.35s, box-shadow 0.35s;
    padding: 0;
  }

  .button a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .button:hover {
    transform: scale(1.25) rotate(-12deg) translateY(-6px);
    box-shadow: 0 0 20px 0 rgba(29, 161, 242, 0.35);
  }

  @keyframes sway {
    from {
      transform: translateY(0px);
    }
    to {
      transform: translateY(-4px);
    }
  }

  @media (max-width: 992px) {
    padding: 1.2rem 0 2.2rem 0;

    .button {
      width: 62px;
      height: 62px;
    }

    .button:hover {
      transform: scale(1.15) rotate(-10deg) translateY(-4px);
    }
  }
`;
