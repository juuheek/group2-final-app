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

`;


const TopRight = styled.img`
display:flex;
justify-content:flex-start


`;

const Div = styled.div`
 display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  margin-bottom:90px;
  ${'' /* align-items: center; */}
`;

export default function Glian(){

  return (
    <GlianCont>
        <TopRight src="/Group147.svg"/>
        <Div>
          
        <Whitebg bgcolor="white" bold="DISCLAIMER" text="Our app is to inform our users about various eating disorders.

Some of our content might be sensitive to some of our users">


        </Whitebg>
        </Div>

    </GlianCont>
  )
}
