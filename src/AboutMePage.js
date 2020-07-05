import React from 'react';
import './AboutMePage.css';
import SkillsPage from "./SkillsPage";
import AchievementsPage from "./AchievementsPage";
import ResearchPage from "./ResearchPage";
import ProjectsPage from "./ProjectsPage";
import GalleryPage from "./GalleryPage";
import ContactPage from "./ContactPage";
import { Component } from "react";
import styled, { css } from "styled-components";
import './assets/fonts/Gilroy-Medium.ttf';
import './assets/fonts/ChreiRegular.ttf';
import './assets/images/filmtocat.png';
import './assets/images/AboutMeTitle.png';
import { NavLink, Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class AboutMePage extends React.Component {
  render() {
  return (
    <div className='AboutMePage'>
      <div className='Hi'>
        <p>Hi,</p>
      </div>
      <div className='AboutMeContent'>
        <p>A Skilled Architect / Developer, set onboard the voyage<br></br>
        to thrive towards excelling knowledge of everything. An<br></br>
        Ambivert whose skilled at Art, Dance, Athletics,<br></br>
        Architecting, and Developing. An Explorer who loves to<br></br>
        travel, discover new horizons of himself and pushing<br></br>
        the limits of his own. Data Science Enthusiast, Black Hat<br></br>
        Hacker, A Visionary of 21st century</p>
      </div>
      <div className='filmtocat'>
        <p>
          <Image src={require("./assets/images/filmtocat.png")}></Image>
        </p>
      </div>
      <div className='AboutMeTitle'>
      <Image1 src={require("./assets/images/AboutMeTitle.png")}></Image1>
      </div>
    </div>
  );
  }
}

const Image = styled.img`
  width: 20%;
  align: center;
  height: 20%;
  margin-top: -17%;
  margin-left: 70%;
`;

const Image1 = styled.img`
  width: 27%;
  height: 27%;
`;

const Lnk = styled(Link)`
    text-decoration: none;
    color: #ffffff;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;
export default AboutMePage;
