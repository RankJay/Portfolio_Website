import React from 'react';
import './SkillsPage.css';
import styled from "styled-components";
import './assets/fonts/Gilroy-Medium.ttf';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


class SkillsPage extends React.Component {
  render() {
    function Designing(props) {
      return <DesigningTempSkill src={require('./assets/images/Skills1.svg')} id='S1' />;
    }

    function Programming(props) {
      return <ProgrammingTempSkill src={require('./assets/images/Skills2.svg')} id='S2' />;
    }

    function Research(props) {
      return <ResearchTempSkill src={require('./assets/images/Skills3.svg')} id='S3' />;
    }

    function Technical(props) {
      return <TechnicalTempSkill src={require('./assets/images/Skills4.svg')} id='S4' />;
    }
    return (
      <div className='SkillsPage'>
        <div className='STicky'>
        <div className='list'>
          <ul className='ListForSkillsPage'>
            <Lnik to="/SkillsPage/Designing-Prototyping"><li className='ListItemForSkillsPage'><span>Designing/Prototyping Skills</span></li></Lnik>
            <Lnik to="/SkillsPage/Programming"><li><span>Programming Skills</span></li></Lnik>
            <Lnik to="/SkillsPage/Research-Evangelist"><li><span>Research/Evangelist Skills</span></li></Lnik>
            <Lnik to="/SkillsPage/Technical"><li><span>Technical Skills</span></li></Lnik>
          </ul>
        </div>
        </div>
        <Switch>
          <Route path='/SkillsPage/Designing-Prototyping' component={Designing} />
          <Route path='/SkillsPage/Programming' component={Programming} />
          <Route path='/SkillsPage/Research-Evangelist' component={Research} />
          <Route path='/SkillsPage/Technical' component={Technical} />
        </Switch>
        {/* <TempSkill src={require('./assets/images/Skills2.png')} /> */}
      </div>
    );
  }
}

const DesigningTempSkill = styled.img`
display: flex;
width: 40%;
margin-left: 20%;
margin-top: -10%;
`

const ProgrammingTempSkill = styled.img`
display: flex;
width: 40%;
margin-left: 20%;
margin-top: -10%;
`
const ResearchTempSkill = styled.img`
width: 40%;
margin-left: 20%;
margin-top: -10%;
`
const TechnicalTempSkill = styled.img`
width: 40%;
margin-left: 20%;
margin-top: -10%;
`
const Lnik = styled(Link)`
    text-decoration: none;
    color: #ffffff;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

export default SkillsPage;