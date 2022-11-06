import styled from "styled-components";

export const Image = styled.div`
 
   margin-top: -15%;
   text-align: center;
    
   .images .mockup {

    width: 60%;

   }

   .images .image {

    width: 50%;

  }


   @media screen and (max-width: 998px){
     
     margin-top: -2rem;
    
    .images .mockup {

     width: 100%;

    }

    .images .image {

     width: 85%;

    }

   }
    

`

export const Detail = styled.div`

       max-width: 100%;
       margin: 0 10rem 0 10rem;
       
       .details .titles {

         display: flex;

       }

       .details .titles .buttons {

        display: flex;
        flex-direction: column;
        margin-left: 1rem;
        justify-content: center;

       }

       .details .titles .buttons h1{

        font-family: 'Dosis', sans-serif;
        font-weight: 500;
        font-size: 1.5rem;

       }

       .details .titles .buttons a{

        text-decoration: none;
        font-family: 'Dosis', sans-serif;
        font-weight: 400;
        font-size: 1rem;

       }
       
       .details .titles .buttons a:hover{

        color: #0563bb;

       }
     
       .details span {
 
          font-family: 'Dosis', sans-serif;
          font-weight: 300;
          font-size: 1.4rem;

       }
  
     @media screen and (max-width: 998px) {

       margin: 0 2rem 0 2rem;
      
     }

`

export const Techs = styled.div`

section {

  display: flex;
  flex-wrap: wrap;

}

.title {

  margin: 5px;

}

.techs {

    padding: 0.5rem 1rem;
    border-radius: 1rem;
    color: #fff;
    margin: 0 5px 5px 0;

}

`

export const WebVideo = styled.div`



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

.video_web {

  display: flex;
  position: relative;
  padding-bottom: 56.25%;

}

.video_web iframe {

  position: absolute;
  width: 75%;
  height: 75%;
  border-radius: 20px;
  margin-top: 2rem;

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