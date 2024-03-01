import styled from "styled-components";

export const Container = styled.div`
  font-family: "Madimi One", sans-serif;
  width: 100%;

  svg {
    position: sticky;
  }

  .curriculum {
    margin-top: -1%;
    background-color: #880c85;
    height: 100%;
  }

  .curriculum .content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .curriculum h1 {
    margin-top: 1rem;
    font-size: 48px;
    color: #fff;
  }

  .curriculum p {
    font-size: 25px;
    margin-top: 1rem;
    color: #fff;
  }

  @media (max-width: 992px) {
    .curriculum {
      margin-top: -3%;
    }

    .curriculum h1 {
      margin-top: 1rem;
      font-size: 120%;
    }

    .curriculum p {
      margin: 0 1.5rem 1rem 1.5rem;
      font-size: 100%;
    }
  }
`;

export const Button = styled.div`
  button {
    display: flex;
    align-items: center;
    margin-top: 1.5rem;
    font-size: 20px;
    background: #fff;
    color: #880c85;
    padding: 0.5em 1em;
    border: none;
    border-radius: 15px;
    overflow: hidden;
    transition: all 0.2s;
    cursor: pointer;
    z-index: 1000;
  }

  button span {
    display: block;
    margin-left: 0.3em;
    transition: all 0.3s ease-in-out;
  }

  a {
    text-decoration: none;
  }

  button svg {
    display: block;
    transform-origin: center center;
    transition: transform 0.3s ease-in-out;
  }

  button:hover .svg-wrapper {
    animation: fly-1 0.6s ease-in-out infinite alternate;
  }

  button:hover svg {
    transform: translateX(3em) rotate(45deg) scale(1.1);
  }

  button:hover span {
    transform: translateX(10em);
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
  .social {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #880c85;
  }

  .button {
    margin: 4rem 2rem 25% 2rem;
    background-color: #ffffff;
    border: none;
    border-radius: 50%;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.5);
    animation: sway 2s infinite alternate;
    width: 70px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    perspective: 500px;
    transition: transform 0.5s, box-shadow 0.5s;
  }

  .button:hover {
    transform: scale(1.5) rotate(-360deg) translateY(-1em);
    box-shadow: 0 0 20px 0 rgba(29, 161, 242, 0.5);
  }

  .icon {
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.6));
    transition: transform 0.5s;
  }

  .icon:hover {
    transform: scale(8);
    filter: drop-shadow(1px 2px 4px rgba(0, 0, 0, 0.9));
  }
`;
