import React from 'react';
import styled from 'styled-components';
import MinWhitebg from '../comps/WhiteBG';
import Textbox from '../comps/textbox';
import Start from '../comps/NavyButton';



const GlianCont = styled.div`
  display: flex;
  flex-direction: column;
  width:414px;
  height:896px;
  background-color: #E8ECF0;


  
`;

const TopRight = styled.img`


`;

const BottomRight = styled.img`
position: relative;

`;

const Welcome = styled.p`

Font-family: Montserrat;
font-size: 36px;
font-style: italic;
margin-top:0px;
`;  

const Logo = styled.img`

`;

const Awareness = styled.p`

Font-family: Montserrat;
font-size: 25px;
font-style: italic;
`;

export default function Glian({
text="Get Started",
bgcolor="#000000"


}) {
  return (
    <GlianCont>
        <TopRight src="/Group147.svg"/>
        <Welcome>Welcome To</Welcome>
        <Logo src="/logo1.svg"/>
        <Awareness>“raising awareness about
eating disorders”</Awareness>
    <Start bg={bgcolor}>
        {text}
        </Start>


        <BottomRight src="/Group146.svg"/>
    </GlianCont>
  )
}