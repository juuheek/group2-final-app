import React from 'react';
import styled from 'styled-components';
import {RiMentalHealthFill} from 'react-icons/ri'


const CauseCardCont = styled.div`
  width:315px;
  height:158px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  background-color:#F6F6F6;
  border-radius:10px;
`;


const BottomText = styled.p`
font-size:18px;
color:#26325B;
text-align:center;
`;

const CauseCardImg = styled.img`

padding:0 30px 0 30px;
`;



const SymptomCard = ({
  onLeftClick =()=>{},
  onRightClick=()=>{},

  bottomsymptomtext="Stressful transitions or life",
  src="/food.svg"
}) => {
 
  return <CauseCardCont> 



      <CauseCardImg src={src} />
  

    <BottomText>{bottomsymptomtext}</BottomText>
  </CauseCardCont>  
}

export default SymptomCard;