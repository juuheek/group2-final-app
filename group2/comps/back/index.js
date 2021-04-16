import React from "react";
import styled from "styled-components";

import {BiArrowBack} from 'react-icons/bi';

const BackCont = styled.div`
    display: flex;
    flex-direction: row;
`;
const BackImg = styled.div`
display: inline-block;
width: 24px;
height: 24px;
`;

const Text = styled.h2`
font-family: DIN alternate;
font-size: 18px;
color:#8A8A8A;
margin: 0;
position: relative;
bottom: 3px;
`;

const Back = ({
width=24
}) => {

    return <BackCont>
        <BackImg>
        <BiArrowBack color="#8A8A8A" />
        </BackImg>
        <Text>BACK</Text>
    </BackCont>
}

export default Back;
