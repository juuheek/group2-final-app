import React, {useState} from 'react';
import styled from 'styled-components';
import MinWhitebg from '../comps/WhiteBG';
import Textbox from '../comps/textbox';
import Back from '../comps/back';
import Helpline from '../comps/helpline';
import NavyButton from '../comps/NavyButton';
import BottomMenu from '../comps/BottomMenu'
import ImgCarousel from '../comps/imgcarousel'
import Card from '../comps/card'
import Helplinev2 from '../comps/Helplinev2'
import {FaHandsHelping} from 'react-icons/fa';
import {useRouter} from 'next/router';
import { motion } from "framer-motion"

const MinChunCont = styled.div`
  
    background-color: ${props=>props.background};
    width: 414px;
    height: 896px;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    
  
`;

const HelplineHeader = styled.p`
    font-size: 30px;
    color: #26325B;
    font-weight: bold;
`;

const Helplinebody = styled.p`
    font-size: 16px;
    color: #26325B;
`;

const Mindiv = styled.div`
    margin-right: 300px;
    margin-top: 30px;
    
    
`;

const Mindiv3 = styled.div`

`;

const Mindiv4 = styled.div`
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    min-width: 450px;
    justify-content: center;

    
`;



export default function Result({
  bgcolor = "#FFDCDC"


}) {
  const [cardstate, setCardState] = useState(0);

  const HandleClick = (num) => {
    
    
    setCardState(num)
  }
  return (
    <MinChunCont background={bgcolor}>
      <Mindiv>
          <Back routeTo="/redresult" />
        </Mindiv>
        <Mindiv3>
          <HelplineHeader><FaHandsHelping color="#E67571"/>Helpline</HelplineHeader>

        </Mindiv3>
            
        <Mindiv4>
            <Helplinev2 
              onCardClick = {()=>HandleClick(1)}
              width={cardstate=== 1 ? 260 : 174}
              height={cardstate=== 1 ? 250 : 133}
              display={cardstate=== 1 ? "block" : "none"}
              backgroundcolor={cardstate===1 ? "#E79B76" : "white"}
            />
            <Helplinev2
              onCardClick = {HandleClick }
              width={cardstate === 2 ? 260 : 174}
              height={cardstate === 2 ? 250 : 133}
              display={cardstate === 2 ? "block" : "none"}
              backgroundcolor={cardstate === 2 ? "#E79B76" : "white"}
              doctorname="example2"/>
            <Helplinev2 

            doctorname="example3"/>
            <Helplinev2 

            doctorname="example4"/>
            
        </Mindiv4>
      <BottomMenu />
    </MinChunCont>
    
  )
}