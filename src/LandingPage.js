import React from 'react';
import logo from './logo.svg';
import './LandingPage.css';
import { Component } from "react";
import styled, { css } from "styled-components";
import './assets/images/Group_1111.png';
import './assets/fonts/Gilroy-Medium.ttf';
import './assets/fonts/Raleway-Light.ttf';
import './assets/fonts/Raleway-Medium.ttf';

function LandingPage(props) {
  return (
    <Container>
      <AboutMeRow>
        <AboutMe>About Me</AboutMe>
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
      <ImageRow>
        <Image src={require("./assets/images/LandingPage.png")}></Image>
      </ImageRow>
      </div>
      <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
      <NameOverlapRow>
        <NameOverlap>RANK JAY</NameOverlap>
      </NameOverlapRow>
      </div>
      <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
      <NameRow>
        <Dev>Dreamer. Designer. Developer.</Dev>
      </NameRow>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: radial-gradient(rgba(5,5,5,1) 0%, rgba(0,0,0,1) 100%);
  height: 100vh;
  width: 100vw;
`;

const AboutMe = styled.span`
  font-family: Gilroy-Medium;
  font-style: normal;
  font-weight: 450;
  color: rgba(255,255,255,1);
  font-size: 13px;
  margin-right: 35px;
`;

const Skills = styled.span`
  font-family: Gilroy-Medium;
  font-style: normal;
  font-weight: 450;
  color: rgba(255,255,255,1);
  font-size: 13px;
  margin-right: 35px;
  margin-left: 35px;
`;

const Achievements = styled.span`
  font-family: Gilroy-Medium;
  font-style: normal;
  font-weight: 450;
  color: rgba(255,255,255,1);
  font-size: 13px;
  margin-right: 35px;
  margin-left: 35px;
`;

const Research = styled.span`
  font-family: Gilroy-Medium;
  font-style: normal;
  font-weight: 450;
  color: rgba(255,255,255,1);
  font-size: 13px;
  margin-right: 35px;
  margin-left: 35px;
`;

const Projects = styled.span`
  font-family: Gilroy-Medium;
  font-style: normal;
  font-weight: 450;
  color: rgba(255,255,255,1);
  font-size: 13px;
  margin-right: 35px;
  margin-left: 35px;
`;

const Gallery = styled.span`
  font-family: Gilroy-Medium;
  font-style: normal;
  font-weight: 450;
  color: rgba(255,255,255,1);
  font-size: 13px;
  margin-right: 35px;
  margin-left: 35px;
`;

const Contact = styled.span`
  font-family: Gilroy-Medium;
  font-style: normal;
  font-weight: 450;
  color: rgba(255,255,255,1);
  font-size: 13px;
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



const ImageRow = styled.div`
  margin-top: 200px;
`;

const Image = styled.img`
  width: 1200px;
  height: 200%;
  object-fit: contain;
`;



const NameOverlapRow = styled.div`
  margin-top: -160px;
`;

const NameOverlap = styled.span`
  font-family: Raleway-Light;
  font-style: normal;
  letter-spacing: 60px;
  font-weight: 200;
  color: rgba(255,255,255,1);
  font-size: 33px;
  margin-left: 50px;
`;



const Dev = styled.span`
  font-family: Raleway-Medium;
  font-style: normal;
  font-weight: 500;
  color: rgba(255,255,255,1);
  font-size: 30px;
`;

const NameRow = styled.div`
  height: 20px;
  flex-direction: row;
  display: flex;
  margin-top: 75px;
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

export default LandingPage;
