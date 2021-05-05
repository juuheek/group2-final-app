import React, {useState} from 'react';
import styled from 'styled-components';
import Carousel from '../comps/carousel';

const GlianCont = styled.div`
  display: flex;
  flex-direction: column;
  width:100vw;
  height:100vh;
  background-color: white;
  justify-content: center;
  align-items: center;
`;


const Welcome = styled.p`

position:relative;
text-align:center;
Font-family: Montserrat;
font-size: 36px;
font-style: italic;
margin-top:0px;
`;  

const Move = styled.div`
display:flex;
justify-content: center;
align-items: center;
`;

const Logo = styled.img`

`;

const Awareness = styled.p`

Font-family: Montserrat;
font-size: 23px;
font-style: italic;
text-align: center;
`;

export default function Glian(){

  return (
    <GlianCont>
        <Carousel></Carousel>
    </GlianCont>
  )
}
