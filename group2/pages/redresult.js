import React from 'react';
import styled from 'styled-components';
import Button from '../comps/NavyButton';
import MinWhitebg from '../comps/WhiteBG';
import Textbox from '../comps/textbox';
import Back from '../comps/back';
import NavyButton from '../comps/NavyButton';
import CircleImg from '../comps/circleimg';
import BottomMenu from '../comps/BottomMenu'
import {RiStethoscopeLine} from 'react-icons/ri'
import {useRouter} from 'next/router';

const MinChunCont = styled.div`
  
    background-color: ${props=>props.background};
    width: 414px;
    height: 896px;
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



export default function Result({
  bgcolor = "#F19A97"


}) {
  return (
    <MinChunCont background={bgcolor}>
      <Mindiv>
          <Back routeTo="/quiz3"/>
        </Mindiv>
        <CircleImg />
          <MinWhitebg >

          </MinWhitebg>
          <BottomMenu/>
    </MinChunCont>
  )
}