import styled from "styled-components";

export const Container = styled.div`

margin-top: -15rem;

.main-btn {

    display: inline-block;
    margin-top: 1rem;
    font-weight: 500;
    text-align: center;
    white-space: nowrap;
    border: 2px solid #0563bb;
    padding: 0 40px;
    font-size: 15px;
    line-height: 48px;
    border-radius: 50px;
    cursor: pointer;
    background-color: transparent;

}

#hero {

    width: 100%;
    height: 100vh;

}

#hero p {

    margin: 15px 0 0 0;
    font-size: 26px;
    font-family: "Poppins", sans-serif;

}

#hero p span {

    color: #0563bb;
    letter-spacing: 1px;

}

.container { 

     display: flex;
     align-items: center;
     justify-content: space-between;


}

.container img {
    width: 40%;
    float: right;
    border-radius: 30% 70% 70% 30% / 30% 27% 73% 70% ;
    border: solid 3px #0563bb;
}

@media (max-width: 992px) {

    margin-top: -5rem;

    .container { 

justify-content: center;
flex-direction: column;


}

.container img {

    width: 80%;
    margin-top: 2rem;
}

#hero {

   
    text-align: center;

}

#hero h1 {

    font-size: 32px;
    line-height: 36px;

}

#hero p {

    margin-top: 10px;
    font-size: 20px;
    line-height: 24px;

}

}


`

