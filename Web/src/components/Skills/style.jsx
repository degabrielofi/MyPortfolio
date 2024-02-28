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
    font-size: 1.8rem;
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
`;

export const Skill = styled.div`
  .skills {
    margin-top: 3rem;
    cursor: grab;
  }

  .skills:active {
    cursor: grabbing;
  }

  @media screen and (max-width: 998px) {
    .section-title-01 {
      font-size: 2.5rem;
    }

    .section-title-02 {
      font-size: 1.3rem;
    }
  }
`;

export const Item = styled.div`
  .content {
    display: flex;
    flex-direction: column;
    text-align: center;
    color: #000;
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
  }
`;

export const Sliders = styled.div`
  display: flex;

  .qualifications .differences span {
    display: flex;
    justify-content: center;
  }

  .qualifications {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }

  .qualifications .differences {
    width: 100%;
    margin: 10% 2rem 0 2rem;
    padding: 1rem;
    background: #fff;
    box-shadow: 1px 0px 28px 0px rgb(0 0 0 / 41%);
    border-radius: 2rem;
  }

  .qualifications .differences .expertise {
    padding-left: 120px;
    cursor: grab;
  }

  .qualifications .differences .expertise:active {
    cursor: grabbing;
  }

  .qualifications .differences .expertise p {
    color: #111;
  }

  .qualifications .differences .expertise img {
    height: 100px;
    width: 100px;
    position: absolute;
    object-fit: contain;
    top: 0;
    left: 0;
  }

  .qualifications .differences .expertise .title {
    font-size: 18px;
    font-weight: 900;
  }

  i {
    color: #880c85;
    transition: 0.5s;
  }

  a:hover i {
    color: #fff;
    transition: 0.5s;
  }

  a {
    text-decoration: none;
    color: #880c85;
    font-size: 13px;
    border-radius: 5px;
    transition: 0.5s;
  }

  a:hover {
    background-color: #a80c85;
    text-decoration: none;
    color: #fff;
    font-size: 13px;
    padding: 2px 10px;
    border-radius: 5px;
    transition: 0.5s;
  }

  .cert {
    margin-top: -10px;
  }

  @media screen and (max-width: 998px) {
    display: flex;
    flex-direction: column;

    .qualifications .differences span {
      font-size: 14px;
    }

    .qualifications .differences .expertise .title {
      font-size: 12px;
    }

    p {
      font-size: 10px;
      margin-top: 0.2rem;
    }

    .qualifications .differences {
      width: 100%;
      height: 100%;
      margin: 3rem 1rem 0 1rem;
    }
  }
`;
