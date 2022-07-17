import styled from "styled-components";

export const Skill = styled.div`

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

.skills {

    margin-top: 3rem;
    cursor: grab;

}

.skills:active {

    cursor: grabbing;

}

@media screen and (max-width: 998px) {

.section-title-01 {

    font-size: 3.5rem;

}

.section-title-02 {

    font-size: 1.5rem;

}

}

`



export const Item = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;

.content {

    display: flex;
    font-family: 'Raleway', sans-serif;
    flex-direction: column;
    text-align: center;
    color: #000;
    font-size: 0.7rem;
    font-weight: 400;
    list-style: none;
    text-transform: uppercase;

}

`



export const Sliders = styled.div`

    display: flex;
    margin-top: -5rem;

.qualifications .differences span {

    display: flex;
    justify-content: center;

}

.qualifications {

    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;

}

.qualifications .differences {

    width: 90%;
    margin: 10rem 1rem 0 1rem;
    padding: 1rem;
    background: #fff;
    box-shadow: 1px 0px 28px 0px rgb(0 0 0 / 41%);
    border-radius: 1.5rem;
    min-height: 10rem;

}

.qualifications .differences .expertise {

    width: 100%;
    position: relative;
    padding-left: 120px;
    text-align: left;
    cursor: grab;

}

.qualifications .differences .expertise:active {

    cursor: grabbing;

}

.qualifications .differences .expertise p {

   color: #111;

}

.qualifications .differences .expertise:active {

    cursor: grabbing;

}

.qualifications .differences .expertise img {

    height: 100%;
    width: 100px;
    position: absolute;
    object-fit: contain;
    top: 0px;
    left: 0px;

}

.qualifications .differences .expertise .title {

    
    font-size: 18px;
    font-weight: 900;

}

p {

    margin-top: 0.2rem;

}

i {

    color: #111;

}

a {

    text-decoration: none;
    color: #0563bb;
    font-size: 12px;
    padding: 0 10px 0;
    border-radius: 5px;
    transition: 0.5s;

}

a:hover {

    background-color: #054785;
    box-shadow: 0 2px 10px #00000073;
    text-decoration: none;
    color: #fff;
    font-size: 12px;
    padding: 2px 10px;
    border-radius: 5px;
    transition: 0.5s;

}

@media screen and (max-width: 998px) {

    display: flex;
    flex-direction: column;

.qualifications .differences {

    width: 95%;

}
    
}

`