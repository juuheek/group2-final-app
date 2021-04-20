import React from 'react'; 
import styled from 'styled-components';
import {useRouter} from 'next/router';

const WhiteCont = styled.div`

`;

const WhiteContSub = styled.h3`
`;

const WhiteBG = ({


}) => {
  return <WhiteCont style={{
    width: "388px",
    height: "579px",
    borderRadius: "5px",
    backgroundColor: "#AFCF6B",
  }}>
      <WhiteContSub>test test. will have other componets. andits usually white</WhiteContSub>
  </WhiteCont>
}

export default WhiteBG;
