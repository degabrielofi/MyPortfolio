import React from "react";
import ProjectDetails from "components/ProjectDetails";
import Footer from "components/Footer";
import ScrollToTop from "components/ScrollToTop";
import useLocalStorage from "use-local-storage";
import { Switch } from "./style";

const PageSecond = () => {
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
          <ProjectDetails darkMode={darkMode} />
          <ScrollToTop />
          <Footer />
        </div>
      </Switch>
    </>
  );
};

export default PageSecond;
