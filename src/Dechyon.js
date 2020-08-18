import React from 'react';
import styled from "styled-components";

class Dechyon extends React.Component {
    render() {
        return (
            <div className='Dechyon'>
                <div className='heading'>DëchYon Network</div>
                <div className='selectedprojectcontent'>
                Interacting with Blockchain on Java-based Intractive, User-Friendly UI Dashboard to collaborate and get the instant updates about the current state of your Crypto-Wallet and current trends of Blockchain with Public-Key for accessing any feature of MainFrame and Private-Key for validating, authenticating and confirming processes accessed.
                </div>
                <Image src={require('./assets/images/dechyon.png')} />
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
export default Dechyon;