//import style
import styled from 'styled-components';

//import comps
import NavyButton from '../../comps/NavyButton';
import Button from '../../comps/Quesbutton';
import QuizNav from '../../comps/QuizNav';
import Info from '../../comps/info';
import BottomMenu from '../../comps/BottomMenu';
import BMI from '../../comps/BMI';
import BulletPoints from '../../comps/bullet';

// import React, {userstate} from 'react';
import React, {useState} from "react";
import {useRouter} from 'next/router';

const QuizPage1 = styled.div `
    background-color:#96ABB8;
    display:flex;
    flex-direction: column;
    align-items: center;

 `;

const QuestionTxt = styled.p`
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #FFFFFF;
    padding: 20px;
    margin-bottom: 0;
    width:500px;
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
    margin:50px 0 50px 0;
    height: 600px;
`;


var quizdata = {
    question:"",
    content:null,
    option1:null,
    option2:null,
    option3:null,
    option4:null,
    subtext1:null,
    subtext2:null,
    subtext3:null,
    subtext4:null,
    routeTo:""
}

var options = {
    BMI:null,
    Meals:null,
    Habits:null,
};

export default function Quiz (){
    
    //Quiz Data
    const router = useRouter();
    const {type} = router.query;

    if(type === "BMI" ){
        
        quizdata.question = "Please follow this link that will direct you to a BMI Calculator and come back to select your weight ";
        quizdata.option1 = "Underweight";
        quizdata.option2 = "Normal";
        quizdata.option3 = "Overweight";
        quizdata.option4 = "Obesity";
        quizdata.subtext1 = "Less than 18.5";
        quizdata.subtext2 = "19-25";
        quizdata.subtext3 = "26-30";
        quizdata.subtext4 = "Greater than 30";
        quizdata.content = <NavyButton  onClick={()=>window.open("https://www.calculator.net/bmi-calculator.html", "_blank")} text="BMI Calculator" bgcolor="white" color="#26325B" border="1px #26325B solid"></NavyButton>;
        quizdata.routeTo = "/quizzes/Meals"
        //question = "Please follow this link that will direct you to a BMI Calculator and come back to select your weight";
    }

    if(type === "Meals" ){
        quizdata.question = "How many meals do you eat in a day?"
        quizdata.option1 = "1";
        quizdata.option2 = "2";
        quizdata.option3 = "3";
        quizdata.option4 = null;
        quizdata.content = null;
        quizdata.subtext1 = null;
        quizdata.subtext2 = null;
        quizdata.subtext3 = null;
        quizdata.routeTo = "/quizzes/Habits"
    }

    if(type === "Habits" ){
        quizdata.question = "Do you engage in any of the following behaviours? ";
        quizdata.content = <BulletPoints></BulletPoints>;
        quizdata.option1 = "More than three";
        quizdata.option2 = "Less than two";
        quizdata.option3 = "None of it";
        quizdata.option4 = null;
        quizdata.subtext1 = null;
        quizdata.subtext2 = null;
        quizdata.subtext3 = null;
        quizdata.routeTo = "/quizzes/"
        //RESULTS
    }

    const HandleClick = (text) =>{
        //alert(txt1);
        if(type === "BMI" ){
            options.BMI = text;
        }
    
        if(type === "Meals" ){
            options.Meals = text;
        }
    
        if(type === "Habits" ){
            options.Habits = text;
        }
        console.log(options);
        sessionStorage.setItem("options", JSON.stringify(options));
        router.push(quizdata.routeTo)
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

        <QuizNav Title={type}></QuizNav>
        <BigDiv>

        <QuestionTxt>{quizdata.question}</QuestionTxt>
        {/* <Info onInfoClick={HandleInfo} >
            {BMIdef === "nothing sub" && <BMI></BMI>}
            popup={BMIdef}
        </Info> */}
        {quizdata.content}
        <Divider></Divider>
        <ButtonStyle><Button text1={quizdata.option1} text2={quizdata.subtext1} onClick={()=>HandleClick(quizdata.option1)}/></ButtonStyle>
        <ButtonStyle><Button text1={quizdata.option2} text2={quizdata.subtext2} onClick={()=>HandleClick(quizdata.option2)}/></ButtonStyle>
        <ButtonStyle><Button text1={quizdata.option3} text2={quizdata.subtext3} onClick={()=>HandleClick(quizdata.option3)} /></ButtonStyle>
        {
            quizdata.option4 !== null && <ButtonStyle><Button text1={quizdata.option4} text2={quizdata.subtext4} onClick={()=>HandleClick(quizdata.option4)}/></ButtonStyle>
        }
        {/* END BUTTON: <ButtonStyle><Button txtcolor="#FFFFFF" txt1="Submit" bgcolor="#26325B"  border="#26325B" onClick={HandleEnd} /></ButtonStyle> */}
        </BigDiv>
        <BottomMenu/>


    </QuizPage1>
}
