import React from 'react';
import logo from './logo.svg';
import Home from './Home';
import AboutMePage from "./AboutMePage";
import SkillsPage from "./SkillsPage";
import AchievementsPage from "./AchievementsPage";
import ResearchPage from "./ResearchPage";
import ProjectsPage from "./ProjectsPage";
import GalleryPage from "./GalleryPage";
import ContactPage from "./ContactPage";
import './LandingPage.css';
import { Component } from "react";
import styled, { css } from "styled-components";
import './assets/images/Group_1111.png';
import './assets/fonts/Gilroy-Medium.ttf';
import './assets/fonts/Raleway-Light.ttf';
import './assets/fonts/Raleway-Medium.ttf';
import { NavLink, Link, Redirect } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class LandingPage extends React.Component {
  render() {
  return (
      <div className="LandingPage">
        <div className="AboutMeRow">
          <Router>
            <nav>
              <div className="AboutMe"><Lnk to="/AboutMePage">About Me</Lnk></div>
              <div className="Skills"><Lnk to="/SkillsPage">Skills</Lnk></div>
              <div className="Achievements"><Lnk to="/AchievementsPage">Achievements</Lnk></div>
              <div className="Research"><Lnk to="/ResearchPage">Research</Lnk></div>
              <div className="Projects"><Lnk to="/ProjectsPage">Projects</Lnk></div>
              <div className="Gallery"><Lnk to="/GalleryPage">Gallery</Lnk></div>
              <div className="Contact"><Lnk to="/ContactPage">Contact</Lnk></div>
            </nav>
          </Router>
        </div>
        <React.Fragment>
          <Router>
            <Switch>
              <Route path='/AboutMePage' component={AboutMePage} />
              <Route path='/SkillsPage' component={SkillsPage} />
              <Route path='/AchievementsPage' component={AchievementsPage} />
              <Route path='/ResearchPage' component={ResearchPage} />
              <Route path='/ProjectsPage' component={ProjectsPage} />
              <Route path='/GalleryPage' component={GalleryPage} />
              <Route path='/ContactPage' component={ContactPage} />
              <Route path='/' component={Home} />
            </Switch>
            <Redirect to="/Home"></Redirect>
          </Router>
        </React.Fragment>
      </div>
  );
}
}

const Image = styled.img`
  width: 80%;
  align: center;
  height: 80%;
`;
const Lnk = styled(Link)`
    text-decoration: none;
    color: #ffffff;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
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

export default LandingPage;
