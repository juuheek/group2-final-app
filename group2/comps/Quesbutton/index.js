import React from "react";
import styled from "styled-components";
import {useRouter} from 'next/router';

const ButtonCont = styled.span``

;
const ButtonInput = styled.button`
background-color: ${props=>props.bgcolor};
border: ${props => props.border};
border-radius: 15px;
width: 144px;
height: 54px;
flex-display: column;
justify-content: centre;
align-items: centre;
margin: 0;
`;
const Input1 = styled.p`
color: #E79A74;
font-size: 18px;
font-weight: bold;
margin: 0;
`;

const Input2 = styled.p`
color: #26325B;
font-size: 16px;
font-weight: bold;
margin: 0;
`;
const Button = ({
    txt1="Underweight",
    txt2="  ",
    bgcolor="white",
    border="1px solid #26325B",
    routeTo="/quiz2"
}) => {
    const router =useRouter(); 
    return <ButtonCont onClick={()=>router.push(routeTo)}>
        {/* <button style={{
            // backgroundColor: "white",
            // color: "#656565",
            // border: "1px solid #26325B",
        }}>1</button> */}
        <ButtonInput bgcolor = {bgcolor} border = {border}>
            <Input1>{txt1} </Input1>
            <Input2>{txt2}</Input2>
        </ButtonInput>
        
    </ButtonCont>
}

export default Button;