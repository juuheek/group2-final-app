import React from 'react';
import styled from 'styled-components';
import Button from '../../comps/NavyButton';
import {RiStethoscopeLine} from 'react-icons/ri'
import {useRouter} from 'next/router';

const MinWhitebgCont = styled.div`
  width: 388px;
  height: ${props=>props.height}px;
  border-radius: 5px;
  background-color: #FFF;

`;

const WhitebgBody = styled.p`
  color:#8A8A8A;
  font-size: 25px;
  text-align: center;

`;



const MinWhitebg = ({
  height= 500
})=>{
  return <MinWhitebgCont height={height} >
    <WhitebgBody>Hello</WhitebgBody>
    
  </MinWhitebgCont>
}
export default MinWhitebg;