import styled from "styled-components";

export const Wrapper = styled.section`
  margin-top: 4rem;
  padding-bottom: 3rem;
`;

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
    position: relative;
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

export const Story = styled.div`
  width: min(1100px, 92%);
  margin: 2.5rem auto 0 auto;

  .box {
    background: #fff;
    border-radius: 2rem;
    box-shadow: 1px 0px 28px 0px rgb(0 0 0 / 41%);
    padding: 1.6rem 1.6rem;
  }

  .kicker {
    color: #880c85;
    font-weight: 900;
    letter-spacing: 3px;
    font-size: 12px;
    margin-bottom: 0.6rem;
  }

  h3 {
    margin: 0 0 0.6rem 0;
    font-weight: 900;
    font-size: 1.8rem;
    line-height: 1.1;
  }

  p {
    margin: 0;
    color: #111;
    opacity: 0.95;
    font-size: 1rem;
    line-height: 1.5;
  }

  b {
    color: #880c85;
  }

  .timeline {
    margin-top: 1.2rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
  }

  .step {
    background: rgba(136, 12, 133, 0.06);
    border: 1px solid rgba(136, 12, 133, 0.18);
    border-radius: 1.2rem;
    padding: 12px 12px;
    display: flex;
    gap: 10px;
    align-items: flex-start;
  }

  .dot {
    width: 12px;
    height: 12px;
    border-radius: 999px;
    background: #880c85;
    margin-top: 4px;
    flex: 0 0 auto;
  }

  .step .title {
    font-weight: 900;
    color: #111;
    font-size: 14px;
  }

  .step .desc {
    color: #111;
    opacity: 0.9;
    font-size: 13px;
    margin-top: 2px;
    line-height: 1.35;
  }

  @media screen and (max-width: 998px) {
    .timeline {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (max-width: 520px) {
    .timeline {
      grid-template-columns: 1fr;
    }

    h3 {
      font-size: 1.4rem;
    }
  }
`;

export const Grid = styled.div`
  width: min(1100px, 92%);
  margin: 1.8rem auto 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media screen and (max-width: 998px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

export const CompanyCard = styled.div`
  background: #fff;
  border-radius: 1.6rem;
  box-shadow: 1px 0px 28px 0px rgb(0 0 0 / 24%);
  padding: 1.2rem 1.2rem;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  border: 1px solid rgba(0, 0, 0, 0.06);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 1px 0px 28px 0px rgb(0 0 0 / 34%);
  }

  .top {
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
    background: #fff;
    flex: 0 0 auto;
  }

  .name {
    font-weight: 900;
    font-size: 1.1rem;
    line-height: 1.1;
    color: #111;
  }

  .role {
    margin-top: 2px;
    color: #880c85;
    font-weight: 800;
    letter-spacing: 0.4px;
    font-size: 0.9rem;
  }

  .desc {
    margin-top: 10px;
    color: #111;
    opacity: 0.95;
    font-size: 0.98rem;
    line-height: 1.4;
  }

  .highlights {
    margin-top: 12px;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .pill {
    font-size: 12px;
    font-weight: 800;
    color: #880c85;
    border: 1px solid rgba(136, 12, 133, 0.25);
    background: rgba(136, 12, 133, 0.06);
    padding: 6px 10px;
    border-radius: 999px;
  }

  .actions {
    margin-top: 14px;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    color: #880c85;
    font-size: 13px;
    border-radius: 12px;
    transition: 0.25s;
    border: 2px solid #880c85;
    padding: 8px 12px;
    font-weight: 900;
  }

  .btn:hover {
    background: #880c85;
    color: #fff;
  }

  .btn.disabled {
    opacity: 0.45;
    pointer-events: none;
  }
`;
