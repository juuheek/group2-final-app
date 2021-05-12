import React, {useEffect, useState} from 'react';
import styled, { keyframes } from 'styled-components';
import Button from '../comps/NavyButton';
import RedResult from '../comps/Redresult';
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

const UserResult = {
  Underweighgt1Morethanthree: "Red Flag",
  Normal2Lessthantwo: "Yellow Flag"

}

export default function Result(){
  const [options, setOptions] = useState({

    BMI:null,
    Meals:null,
    Habits:null
}
  
  );

const [text, setText] = useState("Red Flag");

useEffect (()=>{
  if(process.browser){
    var o = sessionStorage.getItem("options");
    setOptions(JSON.parse(o));

    var obj = JSON.parse(o);
    var key = obj.BMI+obj.Meals+obj.Habits;

    if(UserResult[key]){
      setText(UserResult[key])
    }
    console.log(key);
   
  }
}, []);

  return (
    <MinChunCont background="#FFF">
      <Mindiv>
          <Back routeTo="/quiz3"/>
        </Mindiv>
        <BouncyDiv>
          <Redresult flagcolor={text}/>

       
        </BouncyDiv>
          <BottomMenu/>
    </MinChunCont>

  )
}
