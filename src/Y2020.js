import './Y2020.css';
import React from 'react';
import styled from "styled-components";

class Y2020 extends React.Component {
    render() {
        return (
            <div className='Y2020'>
                <div className='Participation'>
                    <div className='ParticipationTitle'>PARTICIPATIONS</div>
                    <div className='Registry'>
                        <div>UC Berkeley's Smart Village Movement</div>
                        <div>Caltech's HackTech Finalist</div>
                        <div>HackMIT'20</div>
                        <div>intern at Biconomy</div>
                        <div>Nutanix Hybrid Cloud / AWS ML Scholar</div>
                        <div>Facebook AI Hackathon</div>
                    </div>
                </div>
                <div className='Community'>
                    <div className='CommunityTitle'>COMMUNITY</div>
                    <div className='Registry'>
                        <div>Microsoft QuantumKatas Open-source</div>
                        <div>Google Cirq Open-source</div>
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

export default Y2020;