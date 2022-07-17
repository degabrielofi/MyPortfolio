import styled from "styled-components";
import images from "../../Data/images.json"

export const Introduction = styled.div`

.home-about-us .container .profile .thumb {

    width: 70%;
    height: 70%;
    border-radius: 100%;
    background: url(${images.AboutImage.link}) no-repeat;
    background-size: cover;
    position: absolute;
    top: 15%;
    left: 15%;

}

.home-about-us .container .quote .label {

  color: #0563bb;
  letter-spacing: 4px;

}

.home-about-us .container .profile {

    width: 320px;
    height: 320px;
    display: block;
    background: url(${images.AboutBorder.link}) no-repeat;
    background-size: 100% 100%;
    margin: auto;
    position: relative;

}

.home-about-us .container .col-xl-4 {
  color: #0563bb;
  text-transform: none;
}

i {

font-style: italic;

}

h2 {

  font-size: 60px;

}



`