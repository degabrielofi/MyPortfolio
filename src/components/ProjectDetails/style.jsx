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

  .details {
    padding-bottom: 3rem;
  }

  .notFound {
    margin-top: 2rem;
    background: #fff;
    border-radius: 1.5rem;
    box-shadow: 1px 0px 28px 0px rgb(0 0 0 / 18%);
    padding: 1.2rem 1.2rem;
    text-align: center;
  }

  .notFound h1 {
    font-family: "Dosis", sans-serif;
    font-weight: 700;
    margin: 0;
  }

  .notFound p {
    font-family: "Dosis", sans-serif;
    margin: 0.6rem 0 1rem 0;
    opacity: 0.8;
  }

  .backBtn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    border: 2px solid #880c85;
    color: #880c85;
    font-weight: 700;
    padding: 8px 14px;
    border-radius: 12px;
    transition: 0.25s;
  }

  .backBtn:hover {
    background: #880c85;
    color: #fff;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    margin-top: 1.2rem;
  }

  .left {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .icon {
    width: 56px;
    height: 56px;
    border-radius: 14px;
    object-fit: cover;
    border: 2px solid rgba(136, 12, 133, 0.25);
  }

  .text h1 {
    font-family: "Dosis", sans-serif;
    font-weight: 700;
    font-size: 1.7rem;
    margin: 0;
    line-height: 1.1;
  }

  .subtitle {
    margin: 4px 0 0 0;
    font-family: "Dosis", sans-serif;
    font-weight: 600;
    color: #880c85;
    opacity: 0.9;
  }

  .right {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  .primaryBtn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    border: 2px solid #880c85;
    background: #880c85;
    color: #fff;
    font-weight: 800;
    padding: 8px 14px;
    border-radius: 12px;
    transition: 0.25s;
  }

  .primaryBtn:hover {
    filter: brightness(0.92);
  }

  .secondaryBtn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    border: 2px solid #880c85;
    color: #880c85;
    font-weight: 800;
    padding: 8px 14px;
    border-radius: 12px;
    transition: 0.25s;
  }

  .secondaryBtn:hover {
    background: #880c85;
    color: #fff;
  }

  .content {
    margin-top: 1.2rem;
  }

  .desc,
  .addition {
    font-family: "Dosis", sans-serif;
    font-weight: 400;
    font-size: 130%;
    margin: 0;
    line-height: 1.55;
  }

  .addition {
    margin-top: 1rem;
    opacity: 0.95;
  }

  @media screen and (max-width: 992px) {
    margin: 0 2rem 0 2rem;

    .header {
      flex-direction: column;
      align-items: flex-start;
    }

    .right {
      width: 100%;
      flex-wrap: wrap;
    }

    .primaryBtn,
    .secondaryBtn {
      width: 100%;
      justify-content: center;
    }

    .desc,
    .addition {
      font-size: 100%;
    }
  }
`;

export const Techs = styled.div`
  margin-top: 1.2rem;

  section {
    display: flex;
    flex-direction: column;
  }

  .title {
    margin: 0 0 10px 0;
    font-family: "Dosis", sans-serif;
    font-weight: 700;
  }

  .chips {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .techs {
    padding: 0.5rem 1rem;
    border-radius: 999px;
    color: #fff;
    font-weight: 700;
    font-family: "Dosis", sans-serif;
  }
`;
