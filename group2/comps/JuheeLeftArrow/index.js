import React from "react";
import styled from "styled-components";


const ButtonCont = styled.button`
background-color:rgb(0,0,0,0);
border:none;
`;
const ArrowImg = styled.img`

${'' /* padding:0 30px 0 30px; */}
`;
const LeftArrow = ({
  onLeftClick =()=>{},

}) => {
 
  return <ButtonCont> 



<ArrowImg onClick = {onLeftClick} src="/navyleftarrow.svg" />
    

  </ButtonCont>  
}

export default LeftArrow;