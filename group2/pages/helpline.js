import React from 'react';
import styled from 'styled-components';
import MinWhitebg from '../comps/WhiteBG';
import Textbox from '../comps/textbox';
import Back from '../comps/back';
import Helpline from '../comps/helpline';
import NavyButton from '../comps/NavyButton';
import BottomMenu from '../comps/BottomMenu'
import ImgCarousel from '../comps/imgcarousel'

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


const Mindiv = styled.div`
    margin-right: 300px;
    margin-top: 30px;
`;

const Mindiv2 = styled.div`
  height: 201px;
  width: 388px;
  background-color: white;
  border-radius: 15px;
  margin-top: 15px;
  margin-bottom: 25px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display:flex;
  justify-content:center;
  flex-direction: column;
  padding: 30px;

`;

const Mindiv4 = styled.div`
  display:flex;
`;

const HelplineHeader = styled.p`
  font-size: 36px;
  color: #E67571;
  text-align: center;
`;

const HelplineBody = styled.p`
  font-size: 20px;
  color: black;
  font-weight: bold;
  text-align: center;
  padding-bottom: 30px;
  

`;



export default function Result({
  bgcolor = "#96ABB8"


}) {
  return (
    <MinChunCont background={bgcolor}>
      <Mindiv>
          <Back routeTo="/redresult" />
        </Mindiv>

          <Mindiv2>
            <HelplineHeader>Helpline</HelplineHeader>
            <HelplineBody>Need to reach out to someone? Here are some resources  you can use to ask for help.</HelplineBody>
          
          </Mindiv2>
          <div>   
               <Helpline />
         
          </div>
              <Mindiv4>
                <ImgCarousel></ImgCarousel>
                <ImgCarousel></ImgCarousel>
                <ImgCarousel></ImgCarousel>
              </Mindiv4>
          <BottomMenu />
    </MinChunCont>
    
  )
}