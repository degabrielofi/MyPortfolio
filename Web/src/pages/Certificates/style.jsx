import styled from "styled-components";

export const Switch = styled.div`
  .toggle-switch {
    position: fixed;
    z-index: 1000;
    bottom: 1rem;
    left: 1rem;
    width: 100px;
    height: 50px;
    --light: #d8dbe0;
    --dark: #28292c;
  }

  .switch-label {
    position: absolute;
    width: 100%;
    height: 50px;
    background-color: var(--dark);
    border-radius: 25px;
    cursor: pointer;
    border: 3px solid var(--dark);
  }

  .checkbox {
    position: absolute;
    display: none;
  }

  .slider {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 25px;
    -webkit-transition: 0.3s;
    transition: 0.3s;
  }

  .checkbox:checked ~ .slider {
    background-color: var(--light);
  }

  .slider::before {
    content: "";
    position: absolute;
    top: 10px;
    left: 10px;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    -webkit-box-shadow: inset 12px -4px 0px 0px var(--light);
    box-shadow: inset 12px -4px 0px 0px var(--light);
    background-color: var(--dark);
    -webkit-transition: 0.3s;
    transition: 0.3s;
  }

  .checkbox:checked ~ .slider::before {
    -webkit-transform: translateX(50px);
    -ms-transform: translateX(50px);
    transform: translateX(50px);
    background-color: var(--dark);
    -webkit-box-shadow: none;
    box-shadow: none;
  }
`;

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .wrapper {
    background: linear-gradient(135deg, #1e293b, #0f172a);
    padding: 2rem;
  }

  .container {
    background-color: #ffffff10;
    backdrop-filter: blur(12px);
    color: white;
    padding: 3rem 2rem;
    border-radius: 20px;
    max-width: 480px;
    width: 100%;
    text-align: center;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    font-family: "Segoe UI", sans-serif;
    border: 1px solid rgba(255, 255, 255, 0.1);

    .icon {
      font-size: 4rem;
      margin-bottom: 1rem;
      animation: pulse 1.5s infinite;
    }

    h1 {
      font-size: 2rem;
      margin-bottom: 0.75rem;
      font-weight: 600;
    }

    p {
      font-size: 1rem;
      color: #e2e8f0;
      margin-bottom: 1.5rem;
      line-height: 1.6;
    }

    a {
      background-color: #3b82f6;
      color: #fff;
      padding: 10px 20px;
      border-radius: 8px;
      text-decoration: none;
      font-weight: 500;
      transition: background 0.3s ease;

      &:hover {
        background-color: #2563eb;
      }
    }

    @keyframes pulse {
      0% {
        transform: scale(1);
        opacity: 1;
      }
      50% {
        transform: scale(1.1);
        opacity: 0.85;
      }
      100% {
        transform: scale(1);
        opacity: 1;
      }
    }
  }
`;
