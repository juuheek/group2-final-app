import React from 'react';
import styled from 'styled-components';
import Button from '../comps/NavyButton';
import MinYellowResult from '../comps/Yellowresult';
import Textbox from '../comps/textbox';
import Back from '../comps/back';
import NavyButton from '../comps/NavyButton';
import CircleImg from '../comps/circleimg';
import BottomMenu from '../comps/BottomMenu'
import {RiStethoscopeLine} from 'react-icons/ri'
import {useRouter} from 'next/router';
import { PieChart } from 'react-minimal-pie-chart';

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

const Div = styled.div`
animation: ease-out;
`;

export default function Result({
  bgcolor = "#FFF"


}) {
  return (
    <MinChunCont background={bgcolor}>
      <Mindiv>
          <Back routeTo="/quiz3"/>
        </Mindiv>
          <MinYellowResult >
     

          </MinYellowResult>
          <BottomMenu/>
   
          <Div>

          <PieChart radius={20} 
  data={[
    { title: 'One', value: 85, color: '#E38627' },
    { title: 'Two', value: 15, color: '#C13C37' },

  ]}
/>
          </Div>

    </MinChunCont>
  )
}