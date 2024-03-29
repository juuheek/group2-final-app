import React from 'react';
import styled from 'styled-components';
import NavyButton from '../NavyButton'

const GreybgCont = styled.div`
margin-top: 31px;
min-width:388px;
  width:100vw;
  height:100vh;
  min-height:410px;
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items:center;
  background-color:${props=>props.color};
  border-radius: 10px 10px 0px 0px;
`;

const Greybgbold = styled.p`
  font-weight: bold;
  font-size:30px;
  color:#26325B;
  text-align:center;

`;
const GreybgText = styled.p`
font-size:18px;
color:#8A8A8A;
padding:50px;
width:388px;
`;
const GlianDiv = styled.div`
margin:15px;
`;
const Greybg = ({
  bgcolor="#EAEAEA",
  bold="Maintaining a Balanced Diet",
}) =>{
  return <GreybgCont color={bgcolor} > 
    <Greybgbold>{bold}</Greybgbold>
    <GlianDiv>

    <NavyButton text="Get Help " bgcolor="transparent" color="#26325B" border="3px #26325B solid" routeTo="/helpline"/>
    </GlianDiv>
    <GlianDiv>

    <NavyButton text="Self Checkup " bgcolor="transparent" color="#26325B" border="3px #26325B solid" routeTo="/quizzes/BMI" />
    </GlianDiv>
  </GreybgCont>
}

export default Greybg;