import React from "react";
import styled from "styled-components";
import MinWhitebg from "../comps/WhiteBG";
import Whitebg from "../comps/JuheeWhitebg";

const MinChunCont = styled.div`
  
    background-color: ${props=>props.background};
    width: 414px;
    height: 896px;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    
  
`;

const MinChunDiv = styled.div``;


export default function Result({
  bgcolor = "#FF9090"

}) {
  return (
    <MinChunCont background={bgcolor}>

          <MinWhitebg />

    </MinChunCont>
  )
}