import styled from "styled-components";

export const Image = styled.div`
  margin-top: -30%;
  text-align: center;

  .images .mockup {
    width: 60%;
  }

  .images .image {
    width: 50%;
  }

  @media screen and (max-width: 998px) {
    margin-top: -25%;

    .images .mockup {
      width: 100%;
    }

    .images .image {
      width: 85%;
    }
  }
`;

export const Detail = styled.div`
  max-width: 100%;
  margin: 0 10rem 0 10rem;

  .details .titles {
    display: flex;
  }

  .details .titles .buttons {
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
    justify-content: center;
  }

  .details .titles .buttons h1 {
    font-family: "Dosis", sans-serif;
    font-weight: 500;
    font-size: 1.5rem;
  }

  .details .titles .buttons a {
    text-decoration: none;
    font-family: "Dosis", sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  .details .titles .buttons a:hover,
  .details .titles .buttons a:hover i {
    color: #a80c85;
  }

  .details span {
    font-family: "Dosis", sans-serif;
    font-weight: 300;
    font-size: 1.4rem;
  }

  @media screen and (max-width: 998px) {
    margin: 0 2rem 0 2rem;
  }
`;

export const Techs = styled.div`
  section {
    display: flex;
    flex-wrap: wrap;
  }

  .title {
    margin: 5px;
  }

  .techs {
    padding: 0.5rem 1rem;
    border-radius: 1rem;
    color: #fff;
    margin: 0 5px 5px 0;
  }
`;
