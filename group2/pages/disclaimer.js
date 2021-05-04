import React, {useState} from 'react';
import styled from 'styled-components';
import Whitebg from '../comps/Disclaimer';
import Textbox from '../comps/textbox';

const GlianCont = styled.div`
  display: flex;
  flex-direction: column;
  width:100vw;
  height:100vh;
  background-color: #E8ECF0;
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
        <Whitebg bgcolor="white" bold="DISCLAIMER" text="Our app is to inform our users about various eating disorders.

Some of our content might be sensitive to some of our users">


        </Whitebg>
    </GlianCont>
  )
}
