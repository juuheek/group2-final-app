import React, {useState} from 'react';
import styled from 'styled-components';
import Textbox from '../comps/textbox';
import Start from '../comps/NavyButton';
import NavyButton from '../comps/NavyButton'


const GlianCont = styled.div`
 
  width:100vw;
  height:100vh;
  background-color: #E8ECF0;
  justify-content: space-between;
	background: linear-gradient(-45deg, #FFBAB8, #F8E8AE, #E8ECF0);
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
const Div = styled.div`
 display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
`;

const MinCont = styled.div`
  .logo{
    height: 150px;
    height: 150px;
  }

  display: flex;
  justify-content: center;
`;

const TopRight = styled.img`

margin-left: -100px;

`;

const BottomRight = styled.img`
margin-top: -200px;
z-index:3;
z-index:-100;
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
z-index: 100;
`;


const Awareness = styled.p`

Font-family: Montserrat;
font-size: 18px;
font-style: italic;
text-align: center;
`;
const Logo = styled.img`
`
;
export default function Glian(){

  return (
    <GlianCont>
        <TopRight src="/Group147.svg"/>
        {/* <Welcome>Welcome To</Welcome> */}
        <Div>

        <MinCont>
        <Logo class="logo" src="/logo1.svg"/>
        </MinCont>
        <Awareness>“raising awareness about eating disorders”</Awareness>
      
    <Move>

    <NavyButton onClick={()=>{console.log("click")}} text="Get Started" bgcolor="transparent" color="#26325B" border="1px #26325B solid" icon="" routeTo="/disclaimer"/>


      
      </Move>

      </Div>
        <BottomRight src="/Group146.svg"/>
       
    </GlianCont>
  )

}
