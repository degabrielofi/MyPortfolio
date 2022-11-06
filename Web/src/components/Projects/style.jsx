import styled from "styled-components";

export const AllProjects = styled.div`

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


.project {

margin-top: 3rem;
  
}

.proj-imgbx {


  position: relative;
  border-radius: 30px;
  overflow: hidden;
  margin-bottom: 24px;

}

.proj-imgbx img {

width: 100%;
height: auto;

}

.proj-imgbx::before {

  content: "";
  background: linear-gradient(90deg, #000046 0%, #1cb5e0 100%);
  opacity: 0.85;
  position: absolute;
  width: 100%;
  height: 0;
  transition: 0.4s ease-in-out;

}

.proj-imgbx:hover::before {

  height: 100%;

}

.proj-txtx {

  display: flex;
  position: absolute;
  flex-direction: column;
  text-align: center;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: 0.5s ease-in-out;
  opacity: 0;
  width: 100%;

}

.proj-imgbx:hover .proj-txtx {

  top: 50%;
  opacity: 1;

}

.proj-txtx h4 {

  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  letter-spacing: 0.8px;
  line-height: 1.1em;

}

.proj-txtx span {

  font-style: italic;
  font-weight: 400;
  color: #fff;
  font-size: 1rem;
  letter-spacing: 0.8px;
  
}

.proj-txtx .links a i{

  color: #ffffff;
  font-size: 2rem;
  margin: 1rem;
  transition: all 0.3s;

}

.proj-txtx .links a i:hover{

color: #0563bb;
transition: all 0.3s;

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