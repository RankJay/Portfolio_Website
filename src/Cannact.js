import React from 'react';
import styled from "styled-components";

class Cannact extends React.Component {
    render() {
        return (
            <div className='Cannact'>
                <div className='heading'>Cannact</div>
                <div className='selectedprojectcontent'>
                A smart app focusing on Producer-Consumer needs, by removing the middle man procedures. A one step solution for all the issues and complaints related to commodities to health care to local fault error. A virtual platform connect locally known to profeesional medical practitioners with patients. A 24x7 chat-bot service to help facilitate locally addressed issues.
                </div>
                <a href="https://youtu.be/oIIuMoWns4w" target='_blank'><Image src={require('./assets/images/cannact.png')} /></a>
            </div>
        );
    }
}

const Image = styled.img`
display: flex;
width: 35%;
margin-top: -21%;
margin-left: 55%;
`
export default Cannact;