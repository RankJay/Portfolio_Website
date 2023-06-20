import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LandingPage from './LandingPage';
import Helmet from 'react-helmet';
import { BrowserRouter } from 'react-router-dom';
import AboutMePage from './AboutMePage';
import AchievementsPage from './AchievementsPage';
import SkillsPage from "./SkillsPage";
import ContactPage from "./ContactPage";
import ProjectsPage from "./ProjectsPage";
// import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./LandingPage";
import M from 'materialize-css';
import MetaTags from 'react-meta-tags';
// import 'materialize-css/dist/css/materialize.min.css';


ReactDOM.render(<LandingPage />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
