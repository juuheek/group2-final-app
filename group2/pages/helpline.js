import React from 'react';
import styled from 'styled-components';
import Button from '../comps/NavyButton';
import MinWhitebg from '../comps/WhiteBG';
import Textbox from '../comps/textbox';
import Back from '../comps/back';
import Helpline from '../comps/helpline';
import NavyButton from '../comps/NavyButton';
import CircleImg from '../comps/circleimg';
import {RiStethoscopeLine} from 'react-icons/ri'
import {useRouter} from 'next/router';

const MinChunCont = styled.div`
  
    background-color: ${props=>props.background};
    width: 414px;
    height: 896px;
    display:flex;
    flex-direction: column;
    align-items: center;
    
  
`;


const Mindiv = styled.div`
    margin-right: 300px;
    margin-top: 30px;
`;

const Mindiv2 = styled.div`
`;

const Mindiv3 = styled.div`
  height: 201px;
  width: 388px;
  background-color: white;
  border-radius: 5px;
  margin-top: 15px;

`;



export default function Result({
  bgcolor = "#96ABB8"


}) {
  return (
    <MinChunCont background={bgcolor}>
      <Mindiv>
          <Back />
        </Mindiv>
        <CircleImg />
          <Mindiv3>

          </Mindiv3>
          <Helpline />

    </MinChunCont>
  )
}