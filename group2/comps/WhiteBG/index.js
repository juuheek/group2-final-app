import React from 'react';
import styled from 'styled-components';
import Button from '../../comps/NavyButton';
import Back from '../../comps/back';
import Textbox from '../../comps/textbox';
import NavyButton from '../../comps/NavyButton';
import {RiStethoscopeLine} from 'react-icons/ri'
import {useRouter} from 'next/router';
import CircleImg from '../circleimg';



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
  color:#8A8A8A;
  font-size: 25px;
  text-align: center;
`;

const WhitebgBody = styled.p`
  color:${props=>props.color}px;
  font-size: 25px;
  text-align: center;
`;



const MinWhitebg = ({
  height= 500,
  yourresult="Your Result:",
  flagcolor="Red Flag",
  color= "#E67571",


})=>{ 
  return <MinWhitebgCont height={height} >
    
    <WhitebgHeader>{yourresult}</WhitebgHeader>
    <WhitebgBody color={color}>{flagcolor}</WhitebgBody>
    <Textbox/>

    <NavyButton text="Get Help" />
    <NavyButton text="Get Information" />
  </MinWhitebgCont>
}
export default MinWhitebg;
