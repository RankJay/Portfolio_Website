import React from 'react';
import Home from './Home';
import AboutMePage from "./AboutMePage";
import SkillsPage from "./SkillsPage";
import AchievementsPage from "./AchievementsPage";
import ResearchPage from "./ResearchPage";
import ProjectsPage from "./ProjectsPage";
import ContactPage from "./ContactPage";
import './LandingPage.css';
import styled from "styled-components";
import './assets/fonts/Gilroy-Medium.ttf';
import './assets/fonts/Raleway-Light.ttf';
import './assets/fonts/Raleway-Medium.ttf';
import { Link, Redirect } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MetaTags from 'react-meta-tags';

class LandingPage extends React.Component {
  componentDidMount() {
    document.title = 'Rank Jay';
    document.oncontextmenu = new Function("return false;")
    document.addEventListener('contextmenu', e => e.preventDefault());
    document.onkeydown = function (e) {
      if (e.keyCode == 123) {
        alert("This function has been disabled to prevent you from stealing my code!");
        return false;
      }
      if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        alert("This function has been disabled to prevent you from stealing my code!");
        return false;
      }
      if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        alert("This function has been disabled to prevent you from stealing my code!");
        return false;
      }
      if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        alert("This function has been disabled to prevent you from stealing my code!");
        return false;
      }
      if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        alert("This function has been disabled to prevent you from stealing my code!");
        return false;
      }
      if (e.ctrlKey && e.keyCode == 'C'.charCodeAt(0)) {
        alert("Just try being original for once!");
        return false;
      }
    }
  }
  render() {
    return (
      <div className="LandingPage">
        <Router>
          <nav>
            <div className="AboutMeRow">
              <div className="AboutMe"><Lnk to="/AboutMePage">About Me</Lnk></div>
              <div className="Skills"><Lnk to="/SkillsPage">Skills</Lnk></div>
              <div className="Achievements"><Lnk to="/AchievementsPage">Achievements</Lnk></div>
              <div className="Research"><Lnk to="/ResearchPage">Research</Lnk></div>
              <div className="Projects"><Lnk to="/ProjectsPage">Projects</Lnk></div>
              <div className="Contact"><Lnk to="/ContactPage">Contact</Lnk></div>
            </div>
          </nav>
          <React.Fragment>
            <Switch>
              <Route path='/AboutMePage' component={AboutMePage} />
              <Route path='/SkillsPage' component={SkillsPage} />
              <Route path='/AchievementsPage' component={AchievementsPage} />
              <Route path='/ResearchPage' component={ResearchPage} />
              <Route path='/ProjectsPage' component={ProjectsPage} />
              <Route path='/ContactPage' component={ContactPage} />
              <Route path='/' component={Home} />
            </Switch>
            <Redirect to="/Home"></Redirect>
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

const Lnk = styled(Link)`
    text-decoration: none;
    color: #ffffff;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

export default LandingPage;
