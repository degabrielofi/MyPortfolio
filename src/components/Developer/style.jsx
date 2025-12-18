import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: 15%;

  #hero {
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding: 72px 0;
  }

  .wrap {
    width: min(980px, 92%);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 18px;
  }

  .badge {
    width: fit-content;
    border: 1px solid rgba(136, 12, 133, 0.35);
    padding: 8px 12px;
    border-radius: 999px;
    font-size: 13px;
    letter-spacing: 0.4px;
  }

  h1 {
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: clamp(34px, 4.2vw, 56px);
    line-height: 1.05;
    margin: 0;
  }

  .accent {
    color: #880c85;
  }

  .subtitle {
    margin: 0;
    font-size: clamp(18px, 2vw, 24px);
    line-height: 1.35;
    font-family: "Montserrat", sans-serif;
  }

  .txt-rotate {
    color: #880c85;
    letter-spacing: 0.5px;
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    white-space: nowrap;
  }

  .caret {
    display: inline-block;
    width: 10px;
    height: 22px;
    border-radius: 2px;
    background: #880c85;
    animation: blink 0.9s infinite;
  }

  @keyframes blink {
    0%,
    45% {
      opacity: 1;
    }
    46%,
    100% {
      opacity: 0;
    }
  }

  .cta {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    margin-top: 8px;
  }

  button {
    border-radius: 999px;
    cursor: pointer;
    font-weight: 600;
    font-size: 15px;
    line-height: 48px;
    padding: 0 26px;
    transition: filter 0.2s ease, transform 0.05s ease;
  }

  button:active {
    transform: translateY(1px);
  }

  .primary {
    border: 2px solid #880c85;
    background: #880c85;
    color: #fff;
  }

  .secondary {
    border: 2px solid #880c85;
    background: transparent;
    color: #880c85;
  }

  button:hover {
    filter: brightness(0.95);
  }

  @media (max-width: 430px) {
    margin-top: -20%;

    #hero {
      padding: 56px 0;
    }
  }
`;
