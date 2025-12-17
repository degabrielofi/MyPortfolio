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
  }

  .section-title-02 {
    opacity: 1;
    font-weight: 700;
    font-size: 2rem;
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

export const Box = styled.div`
  width: min(1100px, 92%);
  margin: 2.5rem auto 0 auto;
  background: #fff;
  border-radius: 2rem;
  box-shadow: 1px 0px 28px 0px rgb(0 0 0 / 24%);
  padding: 1.4rem 1.4rem;
  border: 1px solid rgba(0, 0, 0, 0.06);

  .state {
    margin-top: 1rem;
    padding: 1rem;
    border-radius: 1.2rem;
    background: rgba(136, 12, 133, 0.06);
    border: 1px solid rgba(136, 12, 133, 0.18);
    font-weight: 800;
    color: #111;
  }

  .state.error {
    background: rgba(220, 53, 69, 0.08);
    border: 1px solid rgba(220, 53, 69, 0.22);
  }
`;

export const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;

  .left {
    display: flex;
    align-items: center;
    gap: 12px;
    min-width: 0;
  }

  .avatar {
    width: 54px;
    height: 54px;
    border-radius: 16px;
    object-fit: cover;
    border: 2px solid rgba(136, 12, 133, 0.25);
    background: #fff;
    flex: 0 0 auto;
  }

  .avatar.placeholder {
    background: rgba(0, 0, 0, 0.06);
  }

  .meta {
    min-width: 0;
  }

  .kicker {
    color: #880c85;
    font-weight: 900;
    letter-spacing: 3px;
    font-size: 12px;
    margin-bottom: 2px;
  }

  .name {
    font-weight: 900;
    font-size: 1.15rem;
    line-height: 1.1;
    color: #111;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 520px;
  }

  .sub {
    margin-top: 4px;
    color: #111;
    opacity: 0.7;
    font-weight: 700;
  }

  .primary {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    border: 2px solid #880c85;
    background: #880c85;
    color: #fff;
    font-weight: 900;
    padding: 10px 14px;
    border-radius: 14px;
    transition: 0.25s;
    white-space: nowrap;
  }

  .primary:hover {
    filter: brightness(0.92);
  }

  @media screen and (max-width: 992px) {
    flex-direction: column;
    align-items: stretch;

    .primary {
      width: 100%;
      justify-content: center;
    }

    .name {
      max-width: 100%;
    }
  }
`;

export const Grid = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;

  @media screen and (max-width: 998px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.a`
  text-decoration: none;
  color: inherit;
  background: #fff;
  border-radius: 1.6rem;
  box-shadow: 1px 0px 28px 0px rgb(0 0 0 / 18%);
  border: 1px solid rgba(0, 0, 0, 0.06);
  overflow: hidden;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 1px 0px 28px 0px rgb(0 0 0 / 28%);
  }

  .thumb {
    width: 100%;
    background: rgba(0, 0, 0, 0.04);
    aspect-ratio: 16 / 9;
    overflow: hidden;
  }

  .thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .body {
    padding: 12px 12px;
  }

  .date {
    color: #880c85;
    font-weight: 900;
    font-size: 12px;
    letter-spacing: 1px;
  }

  .title {
    margin-top: 6px;
    font-weight: 900;
    color: #111;
    line-height: 1.2;
    font-size: 1rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    min-height: 2.4em;
  }

  .cta {
    margin-top: 10px;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-weight: 900;
    color: #880c85;
  }
`;
