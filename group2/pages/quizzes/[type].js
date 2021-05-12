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
    const [chosen, setChosen] = useState(0);

    if(type === "BMI" ){
        quizdata.question = "Please follow this link that will direct you to a BMI Calculator and come back to select your weight ";
        quizdata.option1 = "Underweight";
        quizdata.option2 = "Normal";
        quizdata.option2 = "Normal";
        quizdata.option3 = "Overweight";
        quizdata.option4 = "Obesity";
        quizdata.subtext1 = "Less than 18.5";
        quizdata.subtext2 = "19-25";
        quizdata.subtext3 = "26-30";
        quizdata.subtext4 = "Greater than 30";
        quizdata.content = <NavyButton  onClick={()=>window.open("https://www.calculator.net/bmi-calculator.html")} target="blank" text="BMI Calculator" bgcolor="white" color="#26325B" border="1px #26325B solid"></NavyButton>;
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
        quizdata.routeTo = "/result/"
        //RESULTS
    }

    ///min - no need on this page. for history only
    // useEffect(() => {
    //     if (options[type]){
    //       if (options[type].BMI === quizdata.option1) {
    //         setChosen(1);
    //       }
    //       if (options[type] === quizdata.option2) {
    //         setChosen(2);
    //       }
    //       if (options[type] === quizdata.option3) {
    //         setChosen(3);
    //       }
    //       if (options[type] === quizdata.option4) {
    //         setChosen(4);
    //       }
    //     } else {
    //       setChosen(0);
    //     }
      
      
  
    //   if (type === "Meals") {
    //     if (options.coins === quizdata.option1) {
    //       setChosen(1);
    //     }
    //     if (options.coins === quizdata.option2) {
    //       setChosen(2);
    //     }
    //     if (options.coins === quizdata.option3) {
    //       setChosen(3);
    //     }
    //   }
    
  
    // if (type === "Habits") {
    //   if (options.colors === quizdata.option1) {
    //     setChosen(1);
    //   }
    //   if (options.colors === quizdata.option2) {
    //     setChosen(2);
    //   }
    //   if (options.colors === quizdata.option3) {
    //     setChosen(3);
    //   }
    // }
    // }, [router.query]);
///min

    const HandleClick = (text) =>{
        if(quizdata.option1 ===text){
            setChosen(1);
          }
    
          if(quizdata.option2 ===text){
            setChosen(2);
          }
    
          if(quizdata.option3 ===text){
            setChosen(3);
          }

          if(quizdata.option4 ===text){
            setChosen(4);
          }

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
    
        //min try

        // var o = sessionStorage.getItem("options");
        // var obj = JSON.parse(o);
        // var key = obj.BMI+obj.Habits+obj.Meals;

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
        <ButtonStyle><Button text1={quizdata.option1} text2={quizdata.subtext1} onClick={()=>HandleClick(1)}/></ButtonStyle>
        <ButtonStyle><Button text1={quizdata.option2} text2={quizdata.subtext2} onClick={()=>HandleClick(2)}/></ButtonStyle>
        <ButtonStyle><Button text1={quizdata.option3} text2={quizdata.subtext3} onClick={()=>HandleClick(3)} /></ButtonStyle>
        {
            quizdata.option4 !== null && <ButtonStyle><Button text1={quizdata.option4} text2={quizdata.subtext4} onClick={()=>HandleClick(4)}/></ButtonStyle>
        }
        {/* END BUTTON: <ButtonStyle><Button txtcolor="#FFFFFF" txt1="Submit" bgcolor="#26325B"  border="#26325B" onClick={HandleEnd} /></ButtonStyle> */}
        </BigDiv>
        <BottomMenu/>


    </QuizPage1>
}
