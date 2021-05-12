import React, {useEffect, useState} from 'react';
import styled, { keyframes } from 'styled-components';
import Button from '../comps/NavyButton';
import Textbox from '../comps/textbox';
import Back from '../comps/back';
import NavyButton from '../comps/NavyButton';
import CircleImg from '../comps/circleimg';
import BottomMenu from '../comps/BottomMenu'
import {RiStethoscopeLine} from 'react-icons/ri'
import {useRouter} from 'next/router';
import { fadeIn } from 'react-animations'


//import result comps -min ;
import Redresult from '../comps/Redresult'
import Yellowresult from '../comps/Yellowresult'
import Greenresult from '../comps/Greenresult'

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


const Userresult = {
  BMI1Meals1Habits1: <Redresult />,
  BMI2Meals2Habits2: <Yellowresult />,

}

export default function Result({
  bgcolor = "#FFF",

}){
  const [key, setKey] = useState(null);
useEffect (()=>{
  if(process.browser){
    var o = sessionStorage.getItem("options");
    var obj = JSON.parse(o);
    var key = "BMI"+obj.BMI+"Meals"+obj.Meals+"Habits"+obj.Habits;

    setKey(key); 
    console.log(key);
  }
}, []);

  return (
    <MinChunCont background={bgcolor}>
      <Mindiv>
          <Back routeTo="/quiz3"/>
        </Mindiv>
        <BouncyDiv>
        {key !== null && Userresult[key]}
        </BouncyDiv>

          <BottomMenu/>
          
    </MinChunCont>

  )
}
