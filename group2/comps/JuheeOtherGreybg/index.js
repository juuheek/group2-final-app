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
  font-size:35px;
  color:#26325b;

`;
const GreybgText = styled.p`
font-family:DIN alternate;
font-size:18px;
color:#8A8A8A;
padding:50px;
width:388px;

`;
const ButtonCont = styled.div`

margin-bottom:50px;

`;

const Greyybg = ({

  bold="Anorexia Nervosa",
  text=" is a psychological and potentially life-threatening eating disorder.Those suffering from this are typically suffering from an extremely low body weight relative to their height and body type.",
  bgcolor="#EAEAEA",
  routeTo="/resources"
}) =>{

  return <GreybgCont color={bgcolor} > 

    <GreybgText><Greybgbold>{bold}</Greybgbold>{text}</GreybgText>

    <ButtonCont>

    <NavyButton text="Learn More " bgcolor="transparent" color="#26325B" border="1px #26325B solid" icon="" routeTo={routeTo} bold={bold} />
    </ButtonCont>

  </GreybgCont>
}

export default Greyybg;