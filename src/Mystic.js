import React from 'react';
import styled from "styled-components";

class Mystic extends React.Component {
    render() {
        return (
            <div className='Mystic'>
                <div className='heading'>MYSTIC.IO</div>
                <div className='selectedprojectcontent'>
                    Mystic is an open-source project designed to help developers instantly get the most optimized code for their respective intended input and output with additionally providing them with 4 different coding language export namely C, C++, Python and Java
                </div>
                <a href="https://youtu.be/JxU9HKELiCw" target='_blank'><Image src={require('./assets/images/mystic.png')} /></a>
            </div>
        );
    }
}

const Image = styled.img`
display: flex;
width: 35%;
margin-top: -18%;
margin-left: 55%;
`
export default Mystic;