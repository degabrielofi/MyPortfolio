import styled from "styled-components";

export const Resumes = styled.div`


.title_page {

display: flex;
justify-content: center;
align-items: center;
margin-top: 2rem;

}

.section-title-01 {

opacity: 0.1;
position: absolute;
font-size: 3rem;
font-weight: 800;
transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
transition: opacity 2.5s cubic-bezier(0.5, 0, 0, 1) 0.5s, transform 2.5s cubic-bezier(0.5, 0, 0, 1) 0.5s;

}

.section-title-02 {


opacity: 1;
font-weight: 700;
font-size: 2rem;
transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 20, 0, 1);
transition: opacity 2.5s cubic-bezier(0.5, 0, 0, 1) 0.5s, transform 2.5s cubic-bezier(0.5, 0, 0, 1) 0.5s;

}

.section-title-02::before {

  content: '';
  position: absolute;
  width: 4rem;
  height: 4px;
  right: 0;
  bottom: 0;
  background: #0563bb;

}

.resume-wrap {

  width: 100%;
  margin-top: 3rem;
  margin-bottom: 30px;
  padding: 30px;
  border-radius: 1.5rem; 
  border-bottom: 3px solid #0563bb;
  box-shadow: 0px 0px 20px rgb(0 0 0 / 10%);
  background: #fff;

}

.resume-wrap .title {

  display: flex;
  align-items: center;
  margin: 0;

}

.resume-wrap .title .date {

    font-weight: 900;
    font-size: 26px;
    color: #ffbd39; 
    margin-left: 1rem;

}

.resume-wrap h2 {

    font-size: 26px; 

}

  .resume-wrap .position {
    
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 3px;
    text-transform: uppercase; 

}

.resume-wrap .title i {
  
  width: 2.5rem;
  line-height: 2.5rem;
  text-align: center;
  border-radius: 50%;
  color: #fff;
  background-color: #252525;

}



@media screen and (max-width: 998px) {

.section-title-01 {

    font-size: 2.5rem;

}

.section-title-02 {

    font-size: 1.5rem;

}

}
  
`