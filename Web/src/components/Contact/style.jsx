import styled from "styled-components";

export const Contacts = styled.div`

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

.container{

  width: 85%;
  margin-top: 3rem;
  border-radius: 0.5rem;
  background: #fff;
  border-bottom: 3px solid #0563bb;
  padding: 1.5rem;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  

}

.container .content{

  display: flex;
  align-items: center;
  justify-content: center;

}

.container .content .left-side{

  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  position: relative;

}

.content .left-side::before{
  
  content: '';
  position: absolute;
  height: 70%;
  width: 2px;
  right: -15px;
  top: 50%;
  transform: translateY(-50%);
  background: #afafb6;

}

.content .left-side .details {

  margin: 1rem;
  text-align: center;

}

.content .left-side .details i {

  font-size: 30px;
  color: #0563bb;
  margin-bottom: 10px;

}

.content .left-side .details .topic{

  font-size: 18px;
  font-weight: 500;
  color: #111;
  
}

.content .left-side .details .text-one,
.content .left-side .details .text-two {

  font-size: 14px;
  color: #afafb6;
  transition: all 0.3s;
  
}

.content .left-side .details .whatsapp {

  text-decoration: none;

}

.content .left-side .details .whatsapp .text-one:hover {

  color: #0563bb;
  transition: all 0.3s;

}

.container .content .right-side {

  width: 75%;
  margin-left: 75px;
  
}

.content .right-side .topic-text {

  font-size: 23px;
  font-weight: 600;
  color: #0563bb;

}

.right-side .input-box {

  height: 50px;
  width: 100%;
  margin: 12px 0;

}

.right-side .input-box input,
.right-side .input-box textarea {

  height: 100%;
  width: 100%;
  border: none;
  outline: none;
  font-size: 16px;
  background: #F0F1F8;
  border-radius: 6px;
  padding: 0 15px;
  resize: none;
  
}

.right-side .message-box {

  min-height: 110px;

}

.right-side .input-box textarea {

  padding-top: 6px;
  
}

.right-side .button {

  display: inline-block;
  margin-top: 12px;

}

.right-side .button button {

  background: #0563bb;
  border: 0;
  padding: 10px 35px;
  color: #fff;
  transition: 0.4s;
  border-radius: 50px;
  transition: all 0.5s;

}

.right-side .button button:hover {

  background: #054785;
  transition: all 0.5s;

}


@media (max-width: 950px) {

  .section-title-01 {

font-size: 3rem;

}

.section-title-02 {

font-size: 1.5rem;

}

  .container {

    width: 90%;
    padding: 1.5rem;

  }
  .container .content .right-side {

   width: 75%;
   margin-left: 55px;

}

}

@media (max-width: 820px) {

  .container {

    margin: 40px 0;
    height: 100%;

  }
 
  .container .content{

    display: flex;
    justify-content: center;
    flex-direction: column-reverse;
  
  }
 
  .container .content .left-side {

   width: 100%;
   flex-direction: row;
   margin-top: 40px;
   justify-content: center;
   flex-wrap: wrap;

}
 
.container .content .left-side::before{

   display: none;
 
  }

 .container .content .right-side {

   width: 100%;
   margin-left: 0;

 }

}

`