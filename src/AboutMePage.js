import React from 'react';
import './AboutMePage.css';
import styled from "styled-components";
import './assets/fonts/Gilroy-Medium.ttf';
import './assets/fonts/ChreiRegular.ttf';
import './assets/images/filmtocat.png';
import './assets/images/AboutMeTitle.png';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import M from 'materialize-css';
// import 'materialize-css/dist/css/materialize.min.css';
import Carousel from 'react-bootstrap/Carousel';

class AboutMePage extends React.Component {
  render() {
    // document.addEventListener('DOMContentLoaded', function () {
    //   var elems = document.querySelectorAll('.carousel');
    //   var instances = M.Carousel.init(elems);
    // });
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
        <Temp src={require('./assets/images/AboutMePage.svg')} className='canterimage'/>
        {/* <div className='Feedback'>
          <App /> 
        </div> */}
      </div>
    );
  }
}

const Temp = styled.img`
width: 60%;
margin-left: 20%;
margin-top: 13%;
`

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
const LI = styled.img`
  display: flex;
  max-width: 4.5%;
  max-height: 7%;
  margin-left: 66%;
  margin-top: -6%;
`;

const T = styled.img`
  display: flex;
  max-width: 4.5%;
  max-height: 7%;
  margin-left: 78%;
  margin-top: -4%;
`;

const E = styled.img`
  display: flex;
  max-width: 1%;
  max-height: 6%;
  margin-left: 90%;
  margin-top: -3.5%;
`;

export default AboutMePage;