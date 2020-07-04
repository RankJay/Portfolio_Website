import React from 'react';
import './LandingPage.css';
import { Component } from "react";
import styled from "styled-components";
import './assets/images/Group_1111.png';
import './assets/fonts/Gilroy-Medium.ttf';
import './assets/fonts/Raleway-Light.ttf';
import './assets/fonts/Raleway-Medium.ttf';

class Home extends React.Component {
  render() {
  return (
      <header className="Test">
        <p>
          <Image src={require("./assets/images/LandingPage.png")}></Image>
        </p>
        <h1>RANK JAY</h1>
        <Dev>Dreamer. Designer. Developer.</Dev>
      </header>
    );
  }
}

const Image = styled.img`
width: 80%;
align: center;
height: 80%;
`;


const Dev = styled.span`
font-family: Raleway-Medium;
font-style: normal;
font-weight: 500;
font-size: 30px;
height: 100%;
width: 100%;
margin-top: 130px;
`;

export default Home;