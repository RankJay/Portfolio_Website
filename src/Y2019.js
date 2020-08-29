import './Y2019.css';
import React from 'react';
import styled from "styled-components";

class Y2019 extends React.Component {
    render() {
        return (
            <div className='Y2019'>
                <div className='Participation'>
                    <div className='ParticipationTitle'>PARTICIPATIONS</div>
                    <div className='Registry'>
                    <div>Hack Asia</div>
                        <div>Android Developer Challenge</div>
                        <div>Facebook PyTorch Schlorship</div>
                        <div>Google Code Jam / Kick Start</div>
                        <div>MLH Hackday</div>
                        <div>HackerRank</div>
                    </div>
                </div>
                <div className='Community'>
                    <div className='CommunityTitle'>COMMUNITY</div>
                    <div className='Registry'>
                        <div>Facebook DevC - member</div>
                        <div>GDG Ahmedabad / Gandhinagar- member</div>
                        <div>Flutter Ahmedabad - member</div>
                        <div>Symmetry (Graphic Design Club) - Core Team</div>
                        <div>CSI, PDPU - member</div>
                        <div>PDPU OIR - Designer</div>
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

export default Y2019;