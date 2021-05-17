import React from 'react';
import styled from 'styled-components';
import Button from '../NavyButton';
import Back from '../back';
import Textbox from '../textbox';
import NavyButton from '../NavyButton';
import {RiStethoscopeLine} from 'react-icons/ri'
import CircleImg from '../circleimg';
import {useRouter} from 'next/router';

const MinPageDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;

const MinWhitebgCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  width: 388px;
  height: ${props=>props.height}px;
  border-radius: 5px;
  background-color: #98FB98;

`;

const WhitebgHeader = styled.p`
  color: black;
  font-weight: 500;
  font-size: 25px;
  text-align: center;
`;

const WhitebgBody = styled.p`
  color:${props=>props.color}px;
  font-size: 25px;
  text-align: center;
`;

const MinDiv = styled.div`
  margin:15px;
  `;

const MinGreenResult = ({
  height= 500,
  yourresult="Your Result:",
  flagcolor="Green Flag",
  color= "#F19A97",

})=>{ 
  return <MinPageDiv>
    <CircleImg imgurl={"/yellowresult.png"}/>
    <MinWhitebgCont height={height} >
    
    <WhitebgHeader>{yourresult}</WhitebgHeader>
    <WhitebgBody color={color}>{flagcolor}</WhitebgBody>
    <Textbox text="Based on your results you do not have a Eating Disorder. However, You can still use our app to get help and get more information."/>
    <MinDiv>
    <NavyButton text="Get Help" routeTo="/helpline" />
    </MinDiv>
   
    <MinDiv>
    <NavyButton text="Go Back to Home" routeTo="/ed" />
    </MinDiv>
  </MinWhitebgCont>
  </MinPageDiv>
}
export default MinGreenResult;
