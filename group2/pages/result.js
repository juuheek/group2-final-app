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

//result data - min
const Userresult = {
  //bmi ~18.5
  BMI1Meals1Habits1: <Redresult />,
  BMI1Meals1Habits2: <Redresult />,
  BMI1Meals1Habits3: <Yellowresult />,

  BMI1Meals2Habits1: <Redresult />,
  BMI1Meals2Habits2: <Yellowresult />,
  BMI1Meals2Habits3: <Greenresult />,
  
  BMI1Meals3Habits1: <Yellowresult />,
  BMI1Meals3Habits2: <Yellowresult />,
  BMI1Meals3Habits3: <Greenresult />,

  //bmi 18.5+
  BMI2Meals1Habits1: <Redresult />,
  BMI2Meals1Habits2: <Redresult />,
  BMI2Meals1Habits3: <Yellowresult />,

  BMI2Meals2Habits1: <Redresult />,
  BMI2Meals2Habits2: <Yellowresult />,
  BMI2Meals2Habits3: <Greenresult />,
  
  BMI2Meals3Habits1: <Yellowresult />,
  BMI2Meals3Habits2: <Yellowresult />,
  BMI2Meals3Habits3: <Greenresult />,

  //bmi 25+

  BMI3Meals1Habits1: <Redresult />,
  BMI3Meals1Habits2: <Redresult />,
  BMI3Meals1Habits3: <Yellowresult />,

  BMI3Meals2Habits1: <Redresult />,
  BMI3Meals2Habits2: <Yellowresult />,
  BMI3Meals2Habits3: <Greenresult />,
  
  BMI3Meals3Habits1: <Redresult />,
  BMI3Meals3Habits2: <Yellowresult />,
  BMI3Meals3Habits3: <Greenresult />,

  //bmi 30 + 

  BMI4Meals1Habits1: <Redresult />,
  BMI4Meals1Habits2: <Redresult />,
  BMI4Meals1Habits3: <Yellowresult />,

  BMI4Meals2Habits1: <Redresult />,
  BMI4Meals2Habits2: <Yellowresult />,
  BMI4Meals2Habits3: <Greenresult />,
  
  BMI4Meals3Habits1: <Redresult />,
  BMI4Meals3Habits2: <Yellowresult />,
  BMI4Meals3Habits3: <Greenresult />,
}
//result data end

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
