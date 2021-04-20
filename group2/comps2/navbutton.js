import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';

const ButtonCont = styled.span`
  margin:20px;
`;
const ButtonInput = styled.button`
      background-color:${props=>props.bg};
      color:${props=>props.textcolor};
      width:315px;
      height:55px;
      padding:10px;
      border-radius: 10px;
      border:${props => props.navyborder};
      font-size:18px;
`;

const NavyButton = ({
  text="Next",
  bgcolor="#26325B", 
  color = "#FFF",
  border = "none"

}) => {
  const router =useRouter(); 
  return <ButtonCont>
    {/* <ButtonImg src="/vercel.svg"/> */}

    <ButtonInput bg={bgcolor} textcolor={color} navyborder={border}>
      {text}
    </ButtonInput>
  </ButtonCont>
}

export default NavyButton;