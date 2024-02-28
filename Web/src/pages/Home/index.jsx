import React, { useState } from "react";
import Developer from "components/Developer";
import About from "components/About";
import Skills from "components/Skills";
import Projects from "components/Projects";
import Curriculum from "components/Curriculum";
import ScrollToTop from "components/ScrollToTop";
import Footer from "components/Footer";
import useLocalStorage from "use-local-storage";
import Header from "components/Header";
import { Switch } from "./style";

const Home = () => {
  const [pageHome, setPageHome] = useState(true);

  const [darkMode, setDarkMode] = useLocalStorage(
    "theme" ? "dark-mode" : "light-mode"
  );

  return (
    <>
      <Switch>
        <div className="toggle-switch">
          <label className="switch-label">
            <input
              type="checkbox"
              className="checkbox"
              onClick={() => setDarkMode(!darkMode)}
              defaultChecked={darkMode ? true : false}
            />
            <span className="slider"></span>
          </label>
        </div>
        <div className={darkMode ? "dark-mode" : "light-mode"}>
          <Header />
          <Developer />
          <About />
          <Skills />
          <Projects />
          <Curriculum />
          <ScrollToTop />
          <Footer pageHome={pageHome} />
        </div>
      </Switch>
    </>
  );
};

export default Home;
