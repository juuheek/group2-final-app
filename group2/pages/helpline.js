import React from 'react';
import styled from 'styled-components';
import Button from '../comps/NavyButton';
import MinWhitebg from '../comps/WhiteBG';
import Textbox from '../comps/textbox';
import Back from '../comps/back';
import Helpline from '../comps/helpline';
import NavyButton from '../comps/NavyButton';
import CircleImg from '../comps/circleimg';
import {RiStethoscopeLine} from 'react-icons/ri'
import {useRouter} from 'next/router';

const MinChunCont = styled.div`
  
    background-color: ${props=>props.background};
    width: 414px;
    height: 896px;
    display:flex;
    flex-direction: column;
    align-items: center;
    
  
`;


const Mindiv = styled.div`
    margin-right: 300px;
    margin-top: 30px;
`;

const Mindiv2 = styled.div`
  margin-top: 50px;
`;

const Mindiv3 = styled.div`
  height: 201px;
  width: 388px;
  background-color: white;
  border-radius: 15px;
  margin-top: 15px;
  margin-bottom: 25px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

`;

const HelplineHeader = styled.p`
  font-size: 25px;
  color: #E67571;
  text-align: center;
`;

const HelplineBody = styled.p`
  font-size: 16px;
  color: black;
  font-weight: bold;
  text-align: center;
  padding: 15px;
`;



export default function Result({
  bgcolor = "#96ABB8"


}) {
  return (
    <MinChunCont background={bgcolor}>
      <Mindiv>
          <Back />
        </Mindiv>
        <Mindiv2>
        <CircleImg />
        </Mindiv2>
          <Mindiv3>
            <HelplineHeader>EATING DISORDER</HelplineHeader>
            <HelplineBody>Need to reach out to someone? Here are some resources  you can use to ask for help.</HelplineBody>
          
          </Mindiv3>
          <Helpline />

    </MinChunCont>
  )
}