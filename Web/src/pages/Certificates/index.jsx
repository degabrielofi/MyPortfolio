import React from "react";
import { Switch, Container } from "./style";
import useLocalStorage from "use-local-storage";

const Certificates = () => {
  const [darkMode, setDarkMode] = useLocalStorage(
    "theme" ? "dark-mode" : "light-mode"
  );

  return (
    <>
      <Switch>
        <div className={darkMode ? "dark-mode" : "light-mode"}>
          <Container>
            <div className="container">
              <div className="icon">🚧</div>
              <h1>Em construção</h1>
              <p>
                Esta página ainda está sendo construída, mas logo logo ela
                estará disponível com muitas novidades incríveis!
              </p>
              <a href="/">Voltar para a Home</a>
            </div>
          </Container>
        </div>
      </Switch>
    </>
  );
};

export default Certificates;
