import React,{useEffect, useState} from 'react';
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
  
    background-color: #F19A97;
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

//Data from quiz1



export default function Result(){

    const [options, setOptions] = useState(null);

  useEffect(()=>{
    if(process.browser){
      var o = sessionStorage.getItem("options");
      setOptions(JSON.parse(o));
    }
  }, []);


  return <MinChunCont>
      <Mindiv>
          <Back routeTo="/quiz3"/>
        </Mindiv>
        <CircleImg />
          <MinWhitebg >

          </MinWhitebg>
          <BottomMenu/>
    </MinChunCont>
}