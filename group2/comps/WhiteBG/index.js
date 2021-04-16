import React from 'react';
import styled from 'styled-components';
import Button from '../../comps/NavyButton';
import Textbox from '../../comps/textbox';
import NavyButton from '../../comps/NavyButton';
import {RiStethoscopeLine} from 'react-icons/ri'
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
  color:#8A8A8A;
  font-size: 25px;
  text-align: center;

`;

const WhitebgBody = styled.p`
  color:#8A8A8A;
  font-size: 25px;
  text-align: center;

`;



const MinWhitebg = ({
  height= 500,
  yourresult="Your Result:",
  flagcolor="Red Flag",
  
})=>{ 
  return <MinWhitebgCont height={height} >
    <WhitebgHeader>{yourresult}</WhitebgHeader>
    <WhitebgBody>{flagcolor}</WhitebgBody>
    <Textbox>
        
    </Textbox>
    <NavyButton text="Get Help" />
    <NavyButton text="Get Information" />
  </MinWhitebgCont>
}
export default MinWhitebg;