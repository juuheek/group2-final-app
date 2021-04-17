import React from 'react';
import styled from 'styled-components';
import NavyButton from '../NavyButton'

const GreybgCont = styled.div`
  max-width:388px;
  height:466px;
  display:flex;
  flex-direction:column;
  justify-content: space-between;
  align-items:center;
  background-color:${props =>props.bgcolor};
  border-radius: 10px 10px 0px 0px;
`;

const Greybgbold = styled.p`
  font-weight: bold;
  font-size:18px;
  color:#000;
`;
const GreybgText = styled.p`
font-size:18px;
color:#8A8A8A;
padding:50px;
`;
const Greybg = ({
  bold="Anorexia Nervosa",
  text=" is a psychological and potentially life-threatening eating disorder.Those suffering from this are typically suffering from an extremely low body weight relative to their height and body type.",
  bgcolor="#EAEAEA"
}) =>{
  return <GreybgCont bgcolor={bgcolor}> 
    <GreybgText><Greybgbold>{bold}</Greybgbold>{text}</GreybgText>
    <NavyButton text="See All " bgcolor="transparent" color="#26325B" border="1px #26325B solid" />
  </GreybgCont>
}

export default Greybg;