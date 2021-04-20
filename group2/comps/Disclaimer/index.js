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
  background-color:${props=>props.color};
  border-radius: 10px 10px 0px 0px;

`;

const Greybgbold = styled.p`
  font-weight: bold;
  font-size:18px;
  color:#26325B;
  text-align:center;
`;
const GreybgText = styled.p`
font-size:18px;
color:#8A8A8A;
padding:50px;
text-align:center;
`;
const Greybg = ({
  bgcolor="#EAEAEA",
  bold="Anorexia Nervosa",
  text=" is a psychological and potentially life-threatening eating disorder.Those suffering from this are typically suffering from an extremely low body weight relative to their height and body type."
}) =>{
  return <GreybgCont color={bgcolor} > 
    <GreybgText><Greybgbold>{bold}</Greybgbold>{text}</GreybgText>
    <NavyButton text="Agree & Continue " bgcolor="transparent" color="#26325B" border="1px #26325B solid" icon="" routeTo="/ed" />
  </GreybgCont>
}

export default Greybg;