//import style
import styled from 'styled-components';

//import comps
import NavyButton from '../comps/NavyButton';
import Button from '../comps/Quesbutton';
import QuizNav from '../comps/QuizNav';
import Info from '../comps/info';
import BottomMenu from '../comps/BottomMenu';
import BMI from '../comps/BMI';

// import React, {userstate} from 'react';
import React, {useState} from "react";
import {useRouter} from 'next/router';

const QuizPage1 = styled.div `
    width: 414px;
    height: 887px;
    max-height: 887px;
    background-color:#96ABB8;
    display:flex;
    flex-direction: column;
    align-items: center;
 `;

const QuestionTxt = styled.p`
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    color: #FFFFFF;
    padding: 20px;
    margin-bottom: 0;
`;

 const Divider = styled.hr`
    border: 0.5px solid #FFFFFF;
    margin:30px;
    width: 298px;
 `;
const ButtonStyle = styled.div `
    width:144px;
    padding:15px;
    display:flex;
    justify-content: center;
    align-items: center;
    margin:0;
`;
const BigDiv = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
margin:50px 0 80px 0;
`;

//if else shortcut: 1- {condition} ? value1 : value2
//OR 1- {condition} && value2
//apple=info
//sub=BMIdef

var BMIweight = null;

export default function Quiz (){
    
    //Quiz Data
    const router = useRouter();

    const HandleClick = (txt1) =>{
        //alert(txt1);
        BMIweight = txt1;
        sessionStorage.setItem("BMI",BMIweight);
        router.push("/quiz2")
    }

    //IF WE WANT AND END BUTTON:
    // const HandleEnd = () =>{
    //     sessionStorage.setItem("options",BMIweight);
    // }


    //POPUP FUNTION
    // const [BMIdef, setBMIdef] = useState("more BMI");
    // const HandleInfo = () =>{
    //     setBMIdef(BMIdeftexts.info.BMIdef);
    // }

    return <QuizPage1>

        <QuizNav Title="BMI"></QuizNav>
        <BigDiv>
        <QuestionTxt>Please follow this link that will direct you to a BMI Calculator and come back to select your weight </QuestionTxt>
        {/* <Info onInfoClick={HandleInfo} >
            {BMIdef === "nothing sub" && <BMI></BMI>}
            popup={BMIdef}
        </Info> */}
        <NavyButton  onClick={()=>window.open("https://www.calculator.net/bmi-calculator.html")} target="blank" text="BMI Calculator" bgcolor="white" color="#26325B" border="1px #26325B solid"></NavyButton>
        <Divider></Divider>

        <ButtonStyle>
        <Button txt1="Underweight" txt2="less than 18" onClick={()=>HandleClick("Underweight")} />
        </ButtonStyle>
        <ButtonStyle>
        <Button txt1="Normal" txt2="18-24" onClick={()=>HandleClick("Normal")}/>
        </ButtonStyle>
        <ButtonStyle>
        <Button txt1="Overweight" txt2="25-29" onClick={()=>HandleClick("Overweight")} />
        </ButtonStyle>
        <ButtonStyle>
        <Button txt1="Obesity" txt2="30 or greater" onClick={()=>HandleClick("Obesity")}/>
        </ButtonStyle>
        {/* END BUTTON: <ButtonStyle><Button txtcolor="#FFFFFF" txt1="Submit" bgcolor="#26325B"  border="#26325B" onClick={HandleEnd} /></ButtonStyle> */}
        </BigDiv>
        <BottomMenu/>


    </QuizPage1>
}
