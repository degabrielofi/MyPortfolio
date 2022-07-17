import styled from "styled-components";
import images from '../../Data/images.json'

export const Service = styled.div`


.title_page {

display: flex;
justify-content: center;
align-items: center;
margin-top: 2rem;

}

.section-title-01 {

opacity: 0.1;
position: absolute;
font-size: 4.5rem;
font-weight: 800;
transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
transition: opacity 2.5s cubic-bezier(0.5, 0, 0, 1) 0.5s, transform 2.5s cubic-bezier(0.5, 0, 0, 1) 0.5s;

}

.section-title-02 {


opacity: 1;
font-weight: 700;
font-size: 2.5rem;
transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 25, 0, 1);
transition: opacity 2.5s cubic-bezier(0.5, 0, 0, 1) 0.5s, transform 2.5s cubic-bezier(0.5, 0, 0, 1) 0.5s;

}

.section-title-02::before {

  content: '';
  position: absolute;
  width: 5rem;
  height: 5px;
  right: 0;
  bottom: 0;
  background: #0563bb;

}






@media screen and (max-width: 998px) {

.section-title-01 {

    font-size: 3rem;

}

.section-title-02 {

    font-size: 2rem;

}

}



section.services {
    
  font-family: 'Raleway', sans-serif;
    margin-top: 3rem;
    position: relative;
    padding-top: 1rem;
    text-align: center;
    background: url(${images.ServiceIcon.link}) center no-repeat;
    background-position-y: 250px;

  }

section.services .service {
    display: block;
    margin: auto;
    max-width: 400px;
}

section.services .service .title {
    font-size: 42px;
    font-weight: 400;
}

section.services span {
    font-size: 12px;
    letter-spacing: 4px;
    font-weight: 700;
}

a {
    text-decoration: none !important;
    color: inherit;
}

section.services .service .btn-default {
 
    background: transparent;
    border: 1px #666 solid;
    border-radius: 30px;
    padding: 10px 30px;
    display: inline-block;
    transition: 0.5s ease-out;

}

section.services .service .btn-default:hover {
 
    background: #000;
    color: #fff;
    border: 1px #fff solid;
    transition: 0.5s ease-out;

}

section.services:after {
    content: '';
    width: 2px;
    background: #d3d3d3;
    display: block;
    position: absolute;
    top: 450px;
    bottom: 0px;
    left: calc(50% - 1px);
}


@media screen and (max-width: 992px){

  section.services {
    
    background: none;

}

section.services:after {
  
    width: 0;
   
}
  
}



`