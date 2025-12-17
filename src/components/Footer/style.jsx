import styled from "styled-components";

export const WavesAnimation = styled.div`
  margin-top: 1rem;

  .path-0 {
    animation: pathAnim-0 4s linear infinite;
  }
  .path-1 {
    animation: pathAnim-1 4s linear infinite;
  }
  .path-2 {
    animation: pathAnim-2 4s linear infinite;
  }

  /* cola aqui suas keyframes completas (as 3) do arquivo antigo */
`;

export const Contact = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;

  .wrapper {
    margin-top: -5%;
    width: 100%;
  }

  header {
    width: min(980px, 92%);
    margin: 0 auto;
    padding: 0.5rem 0 0;
  }

  header h2 {
    margin: 0;
    color: #000;
    font-size: 26px;
    font-weight: 800;
    font-family: "Dosis", sans-serif;
    letter-spacing: 0.2px;
  }

  .wrapper form {
    width: min(980px, 92%);
    margin: 1.2rem auto 0;
  }

  form .dbl-field {
    display: flex;
    gap: 14px;
    margin-bottom: 16px;
  }

  .dbl-field .field {
    height: 50px;
    display: flex;
    position: relative;
    width: calc(100% / 2 - 7px);
  }

  .textInput {
    position: absolute;
    top: 50%;
    left: 16px;
    color: #c8c8c8;
    font-size: 16px;
    pointer-events: none;
    transform: translateY(-50%);
    transition: 0.2s;
  }

  form .field input,
  form .message textarea {
    width: 100%;
    outline: none;
    border-radius: 14px;
    border: 1px solid #ddd;
    padding: 0 16px 0 46px;
    font-size: 16px;
    font-family: "Dosis", sans-serif;
    transition: 0.2s;
  }

  .field input:focus,
  .message textarea:focus {
    border: 2px solid #880c85;
  }

  .field input:focus ~ .textInput,
  .message textarea:focus ~ .textInput {
    color: #880c85;
  }

  form .message {
    position: relative;
  }

  form .message .textInput {
    top: 26px;
    transform: none;
  }

  form .message textarea {
    min-height: 150px;
    max-height: 260px;
    max-width: 100%;
    min-width: 100%;
    padding: 14px 16px 0 46px;
    border-radius: 16px;
  }

  form .message textarea::-webkit-scrollbar {
    width: 0px;
  }

  @media (max-width: 600px) {
    form .dbl-field {
      flex-direction: column;
    }

    form .dbl-field .field {
      width: 100%;
      height: 48px;
    }

    form .message textarea {
      resize: none;
    }
  }
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  margin-bottom: 2rem;

  .btn {
    width: min(420px, 92%);
    border: none;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 0;
    transition: 0.2s;
  }

  .btn span {
    width: 100%;
    display: block;
    text-align: center;
    background: #880c85;
    color: #fff;
    padding: 14px 18px;
    border-radius: 999px;
    font-weight: 800;
    font-family: "Dosis", sans-serif;
    letter-spacing: 0.6px;
    box-shadow: 0 10px 22px rgba(136, 12, 133, 0.18);
    transition: 0.2s;
  }

  .btn:hover span {
    filter: brightness(1.06);
    transform: translateY(-1px);
  }

  .btn:disabled {
    opacity: 0.7;
    pointer-events: none;
  }

  .submitMessage {
    display: none; /* esse ícone aqui é enfeite e só polui */
  }
`;

export const FooterContainer = styled.div`
  margin-top: -5%;

  .container .content {
    width: min(1180px, 92%);
    margin: 0 auto;
  }

  .container .content .logo {
    margin-top: 4%;
    width: 100%;
    position: relative;
  }

  .container .content .logo:after {
    content: "";
    display: block;
    position: absolute;
    right: 0px;
    left: 25%;
    top: 50%;
    height: 1px;
    background: #c5c5c5c5;
  }

  .container .content .logo img {
    width: 25%;
  }

  /* ✅ aqui é o ponto: os links vão pro final */
  .container .content .links {
    display: flex;
    justify-content: flex-end;
    padding: 2.2rem 0 3%;
  }

  nav {
    width: auto; /* não deixa o nav ocupar a tela toda */
  }

  ul {
    display: flex;
    justify-content: flex-end; /* ✅ vai pro final */
    gap: 90px; /* ✅ espaçamento “premium” entre colunas */
    list-style: none;
    padding-left: 0;
    margin: 0;
  }

  li {
    margin: 0; /* tira margin antiga que bagunça */
    min-width: 180px;
  }

  .container .content .links a {
    display: block;
    color: #5b5e5e;
    font-size: 1.05rem;
    font-weight: 600;
    text-decoration: none;
    position: relative;
    margin-top: 8px;
    font-family: "Dosis", sans-serif;
  }

  .container .content .links a::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -3px;
    height: 2px;
    width: 0;
    background: #880c85;
    transition: width 0.2s ease;
  }

  .container .content .links a:hover::after {
    width: 100%;
  }

  span {
    font-family: "Dosis", sans-serif;
    font-weight: 800;
    color: #880c85;
  }

  /* bottom bar */
  .footerBottom {
    margin-top: 1.2rem;
    padding: 0 0 1.6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  }

  .copy {
    color: #5b5e5e;
    font-size: 0.95rem;
    font-weight: 600;
    font-family: "Dosis", sans-serif;
    line-height: 1;
    white-space: nowrap;
  }

  .studioCredit {
    display: inline-flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
    text-decoration: none;
    opacity: 0.8;
    transition: 0.2s ease;
    line-height: 1;
    white-space: nowrap;
  }

  .studioCredit:hover {
    opacity: 1;
  }

  .studioCredit img {
    width: 40px;
    height: 40px;
    object-fit: contain;
    display: block;
  }

  .studioCredit span {
    color: #111;
    font-size: 0.95rem;
    font-weight: 600;
    font-family: "Dosis", sans-serif;
    line-height: 1;
  }

  @media (max-width: 992px) {
    .container .content .logo img {
      width: 50%;
    }

    .container .content .logo:after {
      left: 50%;
    }

    .container .content .links {
      justify-content: center;
      padding: 1.8rem 0 2%;
    }

    ul {
      flex-direction: column;
      gap: 22px;
      align-items: center;
      text-align: center;
    }

    li {
      min-width: unset;
    }

    .footerBottom {
      flex-direction: column;
      align-items: center;
      text-align: center;
      white-space: normal;
    }

    .copy,
    .studioCredit {
      white-space: normal;
    }
  }
`;
