import React from 'react'; 
import styled from 'styled-components';
import {useRouter} from 'next/router';

const CircleImgCont = styled.div`
// max-height: "193px";
// max-width: "193px";
// border-radius: "100px";
// img.src: "/result2.png";

`;

const CircleImgSource = styled.img`


`;

const CircleImg = ({
  imgurl="/redresult.png"

}) => {
  return <CircleImgCont>
    <CircleImgSource src={imgurl} />
  </CircleImgCont>
}

export default CircleImg;
