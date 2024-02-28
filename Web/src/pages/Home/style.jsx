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
