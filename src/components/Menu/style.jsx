import styled from "styled-components";

export const Headers = styled.div`

#header {

position: fixed;
top: 0;
left: -300px;
bottom: 0;
width: 300px;
transition: all ease-in-out 0.5s;
transition: all 0.5s;
padding: 0 15px;
background: #040b14;
overflow-y: auto;
border-radius: 0 30px 30px 0;
z-index: 1000;

}

#header .profile img {

margin: 15px auto;
display: block;
width: 120px;
border: 8px solid #2c2f3f;
transition: ease 1s;
transition: all 0.5s;

}

#header .profile img:hover {

margin: 15px auto;
display: block;
width: 120px;
border: 8px solid #fff;
transition: ease 1s;

}

#header .profile h1 {

font-size: 24px;
margin: 0;
padding: 0;
font-weight: 600;
-moz-text-align-last: center;
text-align-last: center;
font-family: "Poppins", sans-serif;

}

#header .profile h1 a, #header .profile h1 a:hover {

color: #fff;
text-decoration: none;

}

#header .profile .social-links a {

text-decoration: none;
color: #fff;
width: 36px;
height: 36px;
background: #212431;
display: inline-flex;
border-radius: 50%;
margin-right: 8px;
align-items: center;
justify-content: center;
line-height: 1;

}

#header .profile .social-links a i {

font-size: 18px;
z-index: 100;
transition: 0.3s ease-in-out;

}

#header .profile .social-links a i:hover {

color: #111;
transition: 0.3s ease-in-out;

}

#header .profile .social-links a::before {

content: "";
width: 36px;
height: 36px;
position: absolute;
background-color: #ffffff;
color: #040b14;
border-radius: 50%;
transform: scale(0);
transition: 0.3s ease-in-out;

}

#header .profile .social-links a:hover::before {

transform: scale(1);


}

#main {

margin-left: 300px;

}

.nav-menu {

padding: 30px 0 0 0;

}

.nav-menu * {

margin: 0;
padding: 0;
list-style: none;

}

.nav-menu a, .nav-menu a:focus {

display: flex;
align-items: center;
color: #a8a9b4;
padding: 12px 15px;
margin-bottom: 8px;
transition: 0.3s;
font-size: 15px;

}

.nav-menu a i, .nav-menu a:focus i {

font-size: 24px;
padding-right: 8px;
color: #6f7180;

}

.nav-menu a:hover, .nav-menu .active, .nav-menu .active:focus, .nav-menu li:hover a {

text-decoration: none;
color: #fff;

}

.nav-menu a:hover i, .nav-menu .active i, .nav-menu .active:focus i, .nav-menu li:hover a i {

color: #fff;

}

#menu {

position: fixed;
right: 1rem;
top: 1rem;
background-color: #111;
border: 2px solid #fff;
border-radius: 50%;
height: 50px;
width: 50px;
color: #fff;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
transition: all 0.3s;

}

#menu .fa-times {

width: 10rem;

}

#menu .fa-bars {

transform: rotate(-180deg);

}

.menu-section.on #header {

left: -15px;

}

i {

    color: #fff;

}

`