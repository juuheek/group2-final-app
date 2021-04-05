import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';

const ButtonCont = styled.span`
  margin:5px;
`;
const ButtonInput = styled.button`
      background-color:${props=>props.bg};
      color:#FFF;
      width:315px;
      height:55px;
      padding:10px;
      border-radius: 10px;
      border:none;
      font-size:18px;
`;

const Button = ({
  text="Next",
  bgcolor="#26325B", 

}) => {
  const router =useRouter(); 
  return <ButtonCont>
    {/* <ButtonImg src="/vercel.svg"/> */}

    <ButtonInput bg={bgcolor}>
      {text}
    </ButtonInput>
  </ButtonCont>
}

export default Button;