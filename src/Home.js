import React from 'react';
import './Home.css';
import { Component } from "react";
import styled from "styled-components";
import './assets/fonts/Gilroy-Medium.ttf';
import './assets/fonts/Raleway-Light.ttf';
import './assets/fonts/Raleway-Medium.ttf';

class Home extends React.Component {
  render() {
  return (
      <div className="Test">
        <div className="Cont">
        <p>
          <Image src={require("./assets/images/LandingPage.png")} className='imge'></Image>
        </p>
        <h1>RANK JAY</h1>
        <div className='Dev'>Dreamer. Designer. Developer.</div>
        </div>
        <div className="MobileView">
            {/* <Image1 src={require("./BG.png")} className='img'></Image1> */}
        </div>
      </div>
    );
  }
}

const Image = styled.img`
width: 80%;
align: center;
height: 80%;
`;

const Image1 = styled.img`
margin: auto;
width: 95%;
height: 95%;
`;


const Dev = styled.span`
font-family: Raleway-Medium;
font-style: normal;
font-weight: 500;
font-size: 30px;
height: 100%;
width: 100%;
margin-top: 120%;
`;

export default Home;