import React from 'react';
import logo from './logo.svg';
import './SkillsPage.css';
import AboutMePage from "./AboutMePage";
import AchievementsPage from "./AchievementsPage";
import ResearchPage from "./ResearchPage";
import ProjectsPage from "./ProjectsPage";
import GalleryPage from "./GalleryPage";
import ContactPage from "./ContactPage";
import { Component } from "react";
import styled, { css } from "styled-components";
import './assets/fonts/Gilroy-Medium.ttf';
import { NavLink } from 'react-router-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'


class SkillsPage extends React.Component {
  render() {
  return (
    <div className="AboutMeRow">
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

export default SkillsPage;