import React from "react";
import { Menu, WavesAnimation } from "./style";
import images from "data/images.json";
import { FaX } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";

const HeaderDetails = () => {
  const navigate = useNavigate();

  const handleRedirectToHome = () => {
    navigate("/");

    setTimeout(() => {
      scroller.scrollTo("Portfolio", {
        duration: 300,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    }, 500);
  };

  return (
    <>
      <Menu>
        <header>
          <img src={images.DeGabrielDevIcon.link} alt="DeGabrielDEV" />
          <button
            onClick={handleRedirectToHome}
            style={{ background: "none", border: "none" }}
          >
            <FaX style={{ color: "#5b5e5e", fontSize: "30px" }} />
          </button>
        </header>
      </Menu>

      <WavesAnimation>
        <section className="waves">
          <svg
            width="100%"
            height="100%"
            id="svg"
            viewBox="0 0 1440 690"
            xmlns="http://www.w3.org/2000/svg"
            className="transition duration-300 ease-in-out delay-150"
          >
            <path
              d="M 0,700 L 0,131 C 54.97243053624901,131.99802910828217 109.94486107249801,132.99605821656434 150,140 C 190.055138927502,147.00394178343566 215.19298624625696,160.0137962420248 252,146 C 288.80701375374304,131.9862037579752 337.2831939424741,90.94875681533648 381,91 C 424.7168060575259,91.05124318466352 463.67423798384675,132.19117649662928 514,128 C 564.3257620161532,123.8088235033707 626.0198541221388,74.28653719814632 673,71 C 719.9801458778612,67.71346280185368 752.2463455275986,110.66267471078538 789,117 C 825.7536544724014,123.33732528921462 866.9947637674667,93.0627639587122 909,100 C 951.0052362325333,106.9372360412878 993.7745994025347,151.0862694543658 1046,165 C 1098.2254005974653,178.9137305456342 1159.9068386223946,162.59215822382458 1200,165 C 1240.0931613776054,167.40784177617542 1258.5980461078873,188.54509765033583 1295,186 C 1331.4019538921127,183.45490234966417 1385.7009769460565,157.22745117483208 1440,131 L 1440,700 L 0,700 Z"
              stroke="none"
              strokeWidth="0"
              fill="#880c85"
              fillOpacity="0.4"
              className="transition-all duration-300 ease-in-out delay-150 path-0"
              transform="rotate(-180 720 350)"
            ></path>
          </svg>
        </section>
      </WavesAnimation>
    </>
  );
};

export default HeaderDetails;
