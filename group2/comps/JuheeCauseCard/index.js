import React from 'react';
import styled from 'styled-components';



const CauseCardCont = styled.div`
  max-width:315px;
  height:158px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  background-color:#F6F6F6;
  border-radius:10px;
`;

const TopText = styled.p`
  font-size:18px;
  color:#26325B;
`;
const MiddleIcons = styled.div`
  flex-direction:row;
  ${'' /* align-items:center; */}
  &* > {
    padding:20px;
  }
`;
const BottomText = styled.p`
font-size:18px;
color:#26325B;
text-align:center;
`;

const CauseCardImg = styled.img`

padding:0 30px 0 30px;
`;

const CauseCard = ({
  onLeftClick =()=>{},
  onRightClick=()=>{},
  toptext="Potential Causes",
  bottomcausetext="Stressful transitions or life"
}) => {
 
  return <CauseCardCont> 
    <TopText>{toptext}</TopText>
    <MiddleIcons>
      <CauseCardImg src="/navyleftarrow.svg" onClick={onLeftClick}/>
      <CauseCardImg src="/causeicon.svg" />
      <CauseCardImg src="/navyrightarrow.svg" onClick={onRightClick} />
    </MiddleIcons>
    <BottomText>{bottomcausetext}</BottomText>
  </CauseCardCont>  
}

export default CauseCard;