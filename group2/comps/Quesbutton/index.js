import React from "react";
import styled from "styled-components";
import {useRouter} from 'next/router';

const ButtonCont = styled.span``

;
const ButtonInput = styled.button`
background-color: ${props=>props.bgcolor};
border: ${props => props.border};
box-shadow: 0px 4px 4px 0px #00000040; 
border-radius: 15px;
width: 144px;
height: 54px;
flex-display: column;
justify-content: centre;
align-items: centre;
margin: 0;
`;
const Input1 = styled.p`
color: ${props=>props.txtcolor};
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
    text1="Underweight",
    text2="  ",
    bgcolor="white",
    border="1px solid #FFFFFF",
    txtcolor="#E79A74",
    onClick=()=>{},
    //routeTo="/quiz2"
}) => {
    const router =useRouter(); 

    return <ButtonCont onClick={onClick}>
    {/*old route: onClick={()=>router.push(routeTo)}*/}

        {/* <button style={{
            // backgroundColor: "white",
            // color: "#656565",
            // border: "1px solid #26325B",
        }}>1</button> */}
        <ButtonInput bgcolor={bgcolor} border={border} >
            <Input1 txtcolor={txtcolor} >{text1} </Input1>
            <Input2>{text2}</Input2>
        </ButtonInput>
        
    </ButtonCont>
}

export default Button;
