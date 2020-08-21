import React from 'react';
import './ProjectsPage.css';
import Mystic from "./Mystic";
import Dechyon from "./Dechyon";
import Cannact from "./Cannact";
import styled from "styled-components";
import './assets/fonts/Gilroy-Medium.ttf';
import {  Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


class ProjectsPage extends React.Component {
  render() {
  return (
    <div className='ProjectsPage'>
      <div className='Project'>PROJECTS</div>
      <div className='ProjectsName'>
        <div className='mys'><Lnki to="/ProjectsPage/Mystic">Mystic.io</Lnki></div>
        <div className='dec'><Lnki to="/ProjectsPage/Dechyon">DëchYon Network</Lnki></div>
        <div className='can'><Lnki to="/ProjectsPage/Cannact">Cannact</Lnki></div>
        <div className='por'>Portfolio Website</div>
        <div className='and'><a href="https://github.com/RankJay" target='_blank'>and many more...</a></div>
      </div>
      <div className='selectedproject'>
            <Switch>
              <Route path='/ProjectsPage/Mystic' component={ Mystic } />
              <Route path='/ProjectsPage/Dechyon' component={ Dechyon } />
              <Route path='/ProjectsPage/Cannact' component={ Cannact } />
            </Switch>
      </div>
    </div>
  );
}
}

const Lnki = styled(Link)`
    text-decoration: none;
    &:hover{
        text-decoration: none;
        color: #ffffff;
      }
`;
const Image = styled.img `
display: flex;
width: 35%;
margin-top: -18%;
margin-left: 55%;
`

export default ProjectsPage;