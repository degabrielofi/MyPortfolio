import React, { useState, useEffect } from "react";
import { Scroll } from "./style.jsx";
import { FiArrowUpCircle } from "react-icons/fi";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
   <Scroll>
        <div className="top-to-btm">
      {" "}
      {showTopBtn && (
        <FiArrowUpCircle className="icon-position icon-style" onClick={goToTop} />
      )}{" "}
    </div>
   </Scroll>
  );
};

export default ScrollToTop;
