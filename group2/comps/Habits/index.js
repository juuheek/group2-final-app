import React from 'react';
import styled from 'styled-components';
import NavyButton from '../NavyButton'

const GreybgCont = styled.div`
margin-top: 31px;
  max-width:388px;
  height:466px;
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items:center;
  background-color:${props=>props.color};
  border-radius: 10px 10px 0px 0px;
`;

const Greybgbold = styled.p`
  font-weight: bold;
  font-size:18px;
  color:#26325B;

`;
const GreybgText = styled.p`
font-size:18px;
color:#8A8A8A;
padding:50px;
`;
const Greybg = ({
  bgcolor="#EAEAEA",
  bold="Maintaining a Balanced Diet",
}) =>{
  return <GreybgCont color={bgcolor} > 
    <Greybgbold>{bold}</Greybgbold>
    <NavyButton text="Get Help " bgcolor="transparent" color="#26325B" border="3px #26325B solid" />
    <NavyButton text="Self Diagnose " bgcolor="transparent" color="#26325B" border="3px #26325B solid" />
  </GreybgCont>
}

export default Greybg;