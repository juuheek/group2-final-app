import React, {useState} from 'react';
import styled from 'styled-components';
import Whitebg from '../comps/Disclaimer';
import Textbox from '../comps/textbox';

const GlianCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  width:100vw;
  height:100vh;
	background: linear-gradient(-45deg, #E87E7A, #F8E8AE, #96ABB8);
	background-size: 400% 400%;
	animation: gradient 4s ease infinite;
  @keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}

`;


// const TopRight = styled.img`
// display:flex;
// justify-content:flex-start


// `;

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
        {/* <TopRight src="/Group147.svg"/> */}
        <Div>
          
        <Whitebg bgcolor="white" bold="DISCLAIMER" text="Our app is to inform our users about various eating disorders.

Some of our content might be sensitive to some of our users">


        </Whitebg>
        </Div>

    </GlianCont>
  )
}
