import styled from "styled-components";

export const All = styled.div`
 
   margin-top: -15rem;
   text-align: center;
 
  
  .images {

    width: 100%;

    
  }
    
   .images .mockup {

    width: 60%;

   }


   .images .image {

    width: 50%;

  }


   @media screen and (max-width: 998px){
     
     margin-top: -2rem;

    .images {

      width: 100%;

    }
    
    .images .mockup {

     width: 100%;

    }

    .images .image {

     width: 85%;

    }

   }
    

`

export const Detail = styled.div`

h1 {

font-size: 2.5rem;

  
}




       display: flex;
       flex-direction: column;
       align-items: center;
       justify-content: flex-start;
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
        line-height: 2rem;

       }

       .details .titles .buttons a{

        text-decoration: none;
        font-family: 'Raleway', sans-serif;
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.2rem;

       }
       
       .details .titles .buttons a:hover{

        color: #0563bb;

       }
     
       .details span {
 
          font-family: 'Raleway', sans-serif;
          font-weight: 400;
          font-size: 1.4rem;
          line-height: 1.3rem;

       }
     

     span {
     
       line-height: 120%;
       margin-bottom: 1rem; 
       font-size: 130%;
       
     } 
  
     @media screen and (max-width: 998px) {

       margin: 0 2rem 0 2rem;
      
     }

`



export const Skills = styled.div`

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

    font-size: 3.5rem;

}

.section-title-02 {

    font-size: 1.5rem;

}

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
    display: inline-block;
    border-radius: 1rem;
    color: #fff;
    margin: 0 5px 5px 0;

}

`

export const WebVideo = styled.div`


.video_web {

  position: relative;
  width: 100%;
  padding-bottom: 56.25%;

}

.video_web iframe {

  position: absolute;
  width: 80%;
  height: 80%;
  border: none;

}

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

div {

  margin-top: 3rem;

}

img {

 display: flex;
 justify-content: center;
 width: 50%;

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