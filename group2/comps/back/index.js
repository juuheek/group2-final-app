import React from "react";
import styled from "styled-components";

const BackCont = styled.div`
    display: flex;
    flex-direction: row;
`;
const BackImg = styled.img`
width: 24px;
height: 24px;
`;

const Text = styled.h2`
font-family: DIN alternate;
font-size: 18px;
color:#8A8A8A;
margin: 0;
`;

const Back = ({

}) => {

    return <BackCont>
        <BackImg src="../images/BackArrow.svg" />
        <Text>BACK</Text>
    </BackCont>
}

export default Back;
