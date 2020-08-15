import React from 'react';
import './AchievementsPage.css';
import styled from "styled-components";
import './assets/fonts/Gilroy-Medium.ttf';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Y2018 from './Y2018';
import Y2019 from './Y2019';
import Y2020 from './Y2020';

class AchievementsPage extends React.Component {
  render() {
    return (
      <div className='AchievementsPage'>
        <div className='Achievement'>ACHIEVEMENTS</div>
        <div className='Year'>
          <div className='YearName'><Lynk to="/AchievementsPage/Y2018">2018</Lynk></div>
          <div className='YearName'><Lynk to="/AchievementsPage/Y2019">2019</Lynk></div>
          <div className='YearName'><Lynk to="/AchievementsPage/Y2020">2020</Lynk></div>
        </div>
        {/* <Image3 src={require('./assets/images/Achievements.png')}></Image3> */}
        <Switch>
          <Route path='/AchievementsPage/Y2018' component={Y2018} />
          <Route path='/AchievementsPage/Y2019' component={Y2019} />
          <Route path='/AchievementsPage/Y2020' component={Y2020} />
        </Switch>
      </div>
    );
  }
}

const Image3 = styled.img`
text-align: center;
display: block;
justify-content: center;
align-items: center;
margin: auto;
width: 80%;
`

const Lynk = styled(Link)`
text-decoration: none;
&:hover{
    text-decoration: none;
    color: #ffffff;
  }
`;

export default AchievementsPage;