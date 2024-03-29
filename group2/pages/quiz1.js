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
import React, {useEffect, useState} from 'react';
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
margin:50px 0 50px 0;
`;

//if else shortcut: 1- {condition} ? value1 : value2
//OR 1- {condition} && value2
//apple=info
//sub=BMIdef

var options ={
    BMI:null,
    Meals:null,
    Habits:null,
};

var buttontexts = {
    option1:"",
    option2:"",
    option3:"",
}
export default function Quiz (){
    
    //Quiz Data
    const router = useRouter();
    const {type} = router.query;
    const [key, setKey] = useState(null);

    if(type === "BMI" ){
        buttontexts.option1 = "Underweight";
        buttontexts.option2 = "Normal";
        buttontexts.option3 = "Overweight";
        buttontexts.option4 = "Obesity";
    }

    if(type === "Meals" ){
        buttontexts.option1 = "1";
        buttontexts.option2 = "2";
        buttontexts.option3 = "3";
    }

    if(type === "Habits" ){
        buttontexts.option1 = "More than three";
        buttontexts.option2 = "Less than two";
        buttontexts.option3 = "None of it";
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
        sessionStorage.setItem("options", JSON.stringify,(options));
    }

    useEffect(() => {
        if(process.browser){
            var o = sessionStorage.getItem("options");
            var obj = JSON.parse(o);
            var key = obj.BMI+obj.Meals+obj.Habits;
            console.log(key);
        }
    },[]);

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

        <ButtonStyle><Button text1={buttontexts.option1} text2="less than 18" onClick={()=>HandleClick(buttontexts.option1)} /></ButtonStyle>
        <ButtonStyle><Button text1={buttontexts.option2} text2="18-24" onClick={()=>HandleClick(buttontexts.option2)}/></ButtonStyle>
        <ButtonStyle><Button text1={buttontexts.option3} text2="25-29" onClick={()=>HandleClick(buttontexts.option3)} /></ButtonStyle>
        <ButtonStyle><Button text1={buttontexts.option4} text2="30 or greater" onClick={()=>HandleClick(buttontexts.option4)}/></ButtonStyle>
        {/* END BUTTON: <ButtonStyle><Button txtcolor="#FFFFFF" txt1="Submit" bgcolor="#26325B"  border="#26325B" onClick={HandleEnd} /></ButtonStyle> */}
        </BigDiv>
        <BottomMenu/>


    </QuizPage1>
}