import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled, { css } from "styled-components";
import M from 'materialize-css';
import carousel from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import Carousel from 'react-bootstrap/Carousel'


function App() {
  document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems);
  });
  return (
    <div className='App'>
      <Carousel controls={false} >
        <Carousel.Item  id="reflect">
          <div className='Name'>Ahmed Al-Balaghi</div>
          <div className='Designation'>CEO, Biconomy</div>
          <LI src={require('./assets/images/linkedin-3-512.png')}></LI>
          <T src={require('./assets/images/pngguru.com.png')}></T>
          <E src={require('./assets/images/Extra.png')}></E>
          <div className='ProfilePic'></div>
          <div className='Hash'>#</div>
          <div className='Comment'>Truly Outstanding</div>
        </Carousel.Item>
        <Carousel.Item  id="reflect">
          <div className='Name'>Aniket Jindal</div>
          <div className='Designation'>COO, Biconomy</div>
          <LI src={require('./assets/images/linkedin-3-512.png')}></LI>
          <T src={require('./assets/images/pngguru.com.png')}></T>
          <E src={require('./assets/images/Extra.png')}></E>
          <div className='ProfilePic'></div>
          <div className='Hash'>#</div>
          <div className='Comment'>Great sense of designing! Dedicated towards his work and his dreams.</div>
        </Carousel.Item>
        <Carousel.Item  id="reflect">
          <div className='Name'>Sachin Tomar</div>
          <div className='Designation'>CTO, Biconomy</div>
          <LI src={require('./assets/images/linkedin-3-512.png')}></LI>
          <T src={require('./assets/images/pngguru.com.png')}></T>
          <E src={require('./assets/images/Extra.png')}></E>
          <div className='ProfilePic'></div>
          <div className='Hash'>#</div>
          <div className='Comment'>Truly Outstanding</div>
        </Carousel.Item>
        <Carousel.Item  id="reflect">
          <div className='Name'>Divya Nailwal</div>
          <div className='Designation'>Full Stack Developer, Biconomy</div>
          <LI src={require('./assets/images/linkedin-3-512.png')}></LI>
          <T src={require('./assets/images/pngguru.com.png')}></T>
          <E src={require('./assets/images/Extra.png')}></E>
          <div className='ProfilePic'></div>
          <div className='Hash'>#</div>
          <div className='Comment'>Truly Outstanding</div>
        </Carousel.Item>
        <Carousel.Item  id="reflect">
          <div className='Name'>Tarun Gupta</div>
          <div className='Designation'>Platform Engineer & Researcher, Biconomy</div>
          <LI src={require('./assets/images/linkedin-3-512.png')}></LI>
          <T src={require('./assets/images/pngguru.com.png')}></T>
          <E src={require('./assets/images/Extra.png')}></E>
          <div className='ProfilePic'></div>
          <div className='Hash'>#</div>
          <div className='Comment'>Truly Outstanding</div>
        </Carousel.Item>
        <Carousel.Item  id="reflect">
          <div className='Name'>Anubhav Girdhar</div>
          <div className='Designation'>Blockchain Engineer, Biconomy</div>
          <LI src={require('./assets/images/linkedin-3-512.png')}></LI>
          <T src={require('./assets/images/pngguru.com.png')}></T>
          <E src={require('./assets/images/Extra.png')}></E>
          <div className='ProfilePic'></div>
          <div className='Hash'>#</div>
          <div className='Comment'>Truly Outstanding</div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

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

export default App;
