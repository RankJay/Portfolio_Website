import React from 'react';
import './ResearchPage.css';
import styled from "styled-components";
import './assets/fonts/Gilroy-Medium.ttf';


class ResearchPage extends React.Component {
  render() {
    return (
      <div className='ResearchPage'>
        <p className='Titl'>RESEARCH WORK</p>
        <div className='List'>
        <p className='item'>Astronomy / General Relativity</p>
        <p className='item'>Computer Science</p>
        <p className='item'>Technical Blogs</p>
        <p className='item'>Cognitive Sciences</p></div>
        <Image src={require("./assets/images/Res.png")}></Image>
      </div>
    );
  }
}

const Image = styled.img`
  width: 77%;
  align: center;
  height: 77%;
  margin-top: -17%;
  margin-left: 23%;
`;

export default ResearchPage;