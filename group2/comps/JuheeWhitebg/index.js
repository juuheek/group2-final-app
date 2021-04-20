import React from 'react';
import styled from 'styled-components';
import Button from '../../comps/NavyButton';
import {RiStethoscopeLine} from 'react-icons/ri'
import {useRouter} from 'next/router';

const WhitebgCont = styled.div`
  max-width: 346px;
  max-height: ${props=>props.height}px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  
  background-color:#FFF;
  border-radius:5px;

`;
const Whitebgbold = styled.p`
  font-weight: bold;
  font-size:18px;
  color:#000;
  padding:0 30px 0 30px;
`;
const WhitebgText = styled.p`
  font-size:18px;
  color:#8A8A8A;
  padding:0 30px 0 30px;
`;


const Whitebg = ({
  bold="Anorexia Nervosa",
  text=" is a psychological and potentially life-threatening eating disorder.Those suffering from this are typically suffering from an extremely low body weight relative to their height and body type.",
  height= 350
})=>{
  return <WhitebgCont height={height} >
    <Whitebgbold> <RiStethoscopeLine color="#E67571"/> {bold}</Whitebgbold>
    <WhitebgText>{text}</WhitebgText>
    
  </WhitebgCont>
}
export default Whitebg;