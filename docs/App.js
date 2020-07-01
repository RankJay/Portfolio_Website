import React from 'react';
import logo from './logo.svg';
import { Link } from 'react-router-dom';
import './App.css';
import './LandingPage.js';
import './assets/fonts/Gilroy-Medium.ttf';
import { Component } from "react";
import styled, { css } from "styled-components";
import './assets/images/Group_1111.png'

function Default(props) {
  return (
    <Container>
      <AboutMeRow>
        <AboutMe><a
          className="App-link"
          href="./LandingPage.js"
          target="_blank"
          rel="noopener noreferrer"
        >About Me</a></AboutMe>
        <Skills>Skills</Skills>
        <Achievements>Achievements</Achievements>
        <Research>Research</Research>
        <Projects>Projects</Projects>
        <Gallery>Gallery</Gallery>
        <Contact>Contact</Contact>
      </AboutMeRow>
      <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
      <Image src={require("./assets/images/Group_1111.png")}></Image>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(0,0,0,1);
  height: 100vh;
  width: 100vw;
`;

const AboutMe = styled.span`
  font-family: Gilroy;
  font-style: medium;
  font-weight: 500;
  color: rgba(255,255,255,1);
  font-size: 14px;
  margin-right: 35px;
`;

const Skills = styled.span`
  font-family: Gilroy;
  font-style: medium;
  font-weight: 500;
  color: rgba(255,255,255,1);
  font-size: 14px;
  margin-right: 35px;
  margin-left: 35px;
`;

const Achievements = styled.span`
  font-family: Gilroy;
  font-style: medium;
  font-weight: 500;
  color: rgba(255,255,255,1);
  font-size: 14px;
  margin-right: 35px;
  margin-left: 35px;
`;

const Research = styled.span`
  font-family: Gilroy;
  font-style: medium;
  font-weight: 500;
  color: rgba(255,255,255,1);
  font-size: 14px;
  margin-right: 35px;
  margin-left: 35px;
`;

const Projects = styled.span`
  font-family: Gilroy;
  font-style: medium;
  font-weight: 500;
  color: rgba(255,255,255,1);
  font-size: 14px;
  margin-right: 35px;
  margin-left: 35px;
`;

const Gallery = styled.span`
  font-family: Gilroy;
  font-style: medium;
  font-weight: 500;
  color: rgba(255,255,255,1);
  font-size: 14px;
  margin-right: 35px;
  margin-left: 35px;
`;

const Contact = styled.span`
  font-family: Gilroy;
  font-style: medium;
  font-weight: 500;
  color: rgba(255,255,255,1);
  font-size: 14px;
  margin-right: 35px;
  margin-left: 35px;
`;

const AboutMeRow = styled.div`
  height: 20px;
  flex-direction: row;
  display: flex;
  margin-top: 42px;
  margin-left: 524px;
  margin-right: 86px;
`;

const Image = styled.img`
  width: 742px;
  height: 75%;
  margin-top: 100px;
  object-fit: contain;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Default;
