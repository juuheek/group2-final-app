import React from 'react'; 
import styled from 'styled-components';
import {useRouter} from 'next/router';

const WhiteCont = styled.div`
width: ${props=>props.width};
height: ${props=>props.height};
border-radius: ${props=>props.borderradius};
background-color: ${props=>props.backgroundcolor};
`;

const WhiteContSub = styled.h3`
`;

const WhiteBG = ({
  wid= "388px",
  height= "579px",
  borderradius= "5px",
  bbgcolor= "white"
  

}) => {
  return <WhiteCont width={wid} height={height} borderradius={borderradius} backgroundcolor={bbgcolor}  >
      <WhiteContSub></WhiteContSub>
  </WhiteCont>
}

export default WhiteBG;
