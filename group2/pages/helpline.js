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
    display:flex;
    flex-direction: column;
    background-color: ${props=>props.background};
    width: 100vw;
    height: 100vh;
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
    min-width: 414px;
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
              onCardClick = {()=> HandleClick(1)}
              width={cardstate=== 1 ? 190 : 120}
              height={cardstate=== 1 ? 160 : 80}
              display={cardstate=== 1 ? "block" : "none"}
              backgroundcolor={cardstate=== 1 ? "#E79B76" : "white"}
            />
            <Helplinev2
              onCardClick = {()=> HandleClick(2) }
              width={cardstate === 2 ? 190 : 120}
              height={cardstate === 2 ? 160 : 80}
              display={cardstate === 2 ? "block" : "none"}
              backgroundcolor={cardstate === 2 ? "#E79B76" : "white"}
              doctorname="Renew Eating Disorder"
              address="2628 Granville St, Vancouver, BC V6H 4B4"
              phone="604-261-0360"
              />
            <Helplinev2 
              onCardClick = {()=> HandleClick(3) }
              width={cardstate === 3 ? 190 : 120}
              height={cardstate === 3 ? 160 : 80}
              display={cardstate === 3 ? "block" : "none"}
              backgroundcolor={cardstate === 3 ? "#E79B76" : "white"}
              doctorname="North Fraser Eating Disorders"
              address="3003 St Johns St, Port Moody, BC V3H 2C4"
              phone="604-469-7600"
              
              />
            <Helplinev2 
              onCardClick = {()=> HandleClick(4) }
              width={cardstate === 4 ? 190 : 120}
              height={cardstate === 4 ? 160 : 80}
              display={cardstate === 4 ? "block" : "none"}
              backgroundcolor={cardstate === 4 ? "#E79B76" : "white"}
              doctorname="Heemang Emotional Wellness"
              address="1030 W Georgia St #1420, Vancouver, BC V6E 3M5"
              phone="604-469-7600"
              
              
              />
            
        </Mindiv4>
      <BottomMenu />
    </MinChunCont>
    
  )
}