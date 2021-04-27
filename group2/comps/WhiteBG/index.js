import React from 'react';
import styled from 'styled-components';
import Button from '../../comps/NavyButton';
import Back from '../../comps/back';
import Textbox from '../../comps/textbox';
import NavyButton from '../../comps/NavyButton';
import {RiStethoscopeLine} from 'react-icons/ri'
import CircleImg from '../circleimg';
import {useRouter} from 'next/router';



const MinWhitebgCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  width: 388px;
  height: ${props=>props.height}px;
  border-radius: 5px;
  background-color: #FFF;

`;

const WhitebgHeader = styled.p`
  color:#7B7B7B;
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

const MinWhitebg = ({
  height= 500,
  yourresult="Your Result:",
  flagcolor="Red Flag",
  color= "#F19A97",


})=>{ 
  return <MinWhitebgCont height={height} >
    
    <WhitebgHeader>{yourresult}</WhitebgHeader>
    <WhitebgBody color={color}>{flagcolor}</WhitebgBody>
    <Textbox/>
    <MinDiv>
    <NavyButton text="Get Help" routeTo="/helpline" />
    </MinDiv>
   
    <MinDiv>
    <NavyButton text="Get Help" routeTo="/helpline" />
    </MinDiv>
  </MinWhitebgCont>
}
export default MinWhitebg;
