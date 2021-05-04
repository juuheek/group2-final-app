import React, {useState} from 'react';
import styled from 'styled-components';
import MinWhitebg from '../comps/WhiteBG';
import Textbox from '../comps/textbox';
import Start from '../comps/NavyButton';
import NavyButton from '../comps/NavyButton'




const GlianCont = styled.div`
  display: flex;
  flex-direction: column;
  width:100vw;
  height:100vh;
  background-color: #E8ECF0;
  
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
margin-top: -25px;
margin-left: -100px;

`;

const BottomRight = styled.img`
margin-top: -150px;
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

`;


const Awareness = styled.p`

Font-family: Montserrat;
font-size: 23px;
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
        <Welcome>Welcome To</Welcome>
        <MinCont>
        <Logo class="logo" src="/logo1.svg"/>
        </MinCont>
        <Awareness>“raising awareness about eating disorders”
</Awareness>
    <Move>

    <NavyButton onClick={()=>{console.log("click")}} text="Get Started" bgcolor="transparent" color="#26325B" border="1px #26325B solid" icon="" routeTo="/disclaimer"/>


      
      </Move>


        <BottomRight src="/Group146.svg"/>
    </GlianCont>
  )

}
