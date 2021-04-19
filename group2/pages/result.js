import React from 'react';
import styled from 'styled-components';
import Button from '../comps/NavyButton';
import MinWhitebg from '../comps/WhiteBG';
import Textbox from '../comps/textbox';
import NavyButton from '../comps/NavyButton';
import {RiStethoscopeLine} from 'react-icons/ri'
import {useRouter} from 'next/router';

const MinChunCont = styled.div`
  
    background-color: ${props=>props.background};
    width: 414px;
    height: 896px;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    
  
`;

    const WhitebgHeader = styled.p`
      color:#8A8A8A;
      font-size: 25px;
      text-align: center;

    `;

    const WhitebgBody = styled.p`
      color:#8A8A8A;
      font-size: 25px;
      text-align: center;

    `;

export default function Result({
  bgcolor = "#FF9090"


}) {
  return (
    <MinChunCont background={bgcolor}>

          <MinWhitebg>

          </MinWhitebg>
            

    </MinChunCont>
  )
}