import './Y2018.css';
import React from 'react';
import styled from "styled-components";

class Y2018 extends React.Component {
    render() {
        return (
            <div className='Y2018'>
                <div className='Participation'>
                    <div className='ParticipationTitle'>PARTICIPATIONS</div>
                    <div className='Registry'>
                        <div>Google Kick Start</div>
                        <div>Adobe Creative Cloud </div>
                    </div>
                </div>
                <div className='Community'>
                    <div className='CommunityTitle'>COMMUNITY</div>
                    <div className='Registry'>
                        <div>AIESEC, Ahmedabad - Team member</div>
                        <div>MATHS TEASERS - Team Lead</div>
                    </div>
                </div>
            </div>
        );
    }
}

const Image = styled.img`
display: flex;
width: 35%;
margin-top: -19.5%;
margin-left: 55%;
`

const Image3 = styled.img`
text-align: center;
display: block;
justify-content: center;
align-items: center;
margin: auto;
width: 80%;
`

export default Y2018;