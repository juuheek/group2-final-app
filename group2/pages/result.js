import React from 'react';
import styled, { keyframes } from 'styled-components';
import Button from '../comps/NavyButton';
import MinRedResult from '../comps/Redresult';
import Textbox from '../comps/textbox';
import Back from '../comps/back';
import NavyButton from '../comps/NavyButton';
import CircleImg from '../comps/circleimg';
import BottomMenu from '../comps/BottomMenu'
import {RiStethoscopeLine} from 'react-icons/ri'
import {useRouter} from 'next/router';
import { fadeIn } from 'react-animations'

const MinChunCont = styled.div`
  
    background-color: ${props=>props.background};
    width: 100vw;
    height: 100vh;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content:space-between;
    
  
`;


const Mindiv = styled.div`
    margin-right: 300px;
    margin-top: 30px;
`;

const Mindiv2 = styled.div`
`;

// const WhitebgBody = styled.p`
//   color:${props=>props.color}px;
//   font-size: 25px;
//   text-align: center;

// `;

const bounceAnimation = keyframes`${fadeIn}`;

const BouncyDiv = styled.div`
  animation: 5s ${bounceAnimation};
`;

export default function Result({
  bgcolor = "#FFF",
  


}) {
  return (
    <MinChunCont background={bgcolor}>
      <Mindiv>
          <Back routeTo="/quiz3"/>
        </Mindiv>
        <BouncyDiv>
          <MinRedResult >

          </MinRedResult>
        </BouncyDiv>
          <BottomMenu/>
    </MinChunCont>
  )
}