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
import { NavLink, Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class AboutMePage extends React.Component {
  render() {
  return (
    <div className='AboutMePage'><p>Hello</p></div>
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
export default AboutMePage;