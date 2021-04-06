import React from "react";
import styled from "styled-components";

const ButtonCont = styled.span``

;
const ButtonInput = styled.button`
background-color: ${props=>props.bgcolor};
color: #656565;
border: ${props => props.border};
border-radius: 15px;
width: 144px;
height: 54px;
`;

const Button = ({
    txt="1",
    bgcolor="white",
    border="1px solid #26325B"
}) => {

    return <ButtonCont>
        {/* <button style={{
            // backgroundColor: "white",
            // color: "#656565",
            // border: "1px solid #26325B",
        }}>1</button> */}
        <ButtonInput bgcolor = {bgcolor} border = {border}>
            {txt}
        </ButtonInput>
    </ButtonCont>
}

export default Button;