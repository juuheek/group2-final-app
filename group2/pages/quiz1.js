//import style
import styled from 'styled-components';

//import comps
import NavyButton from '../comps/NavyButton';
import Button from '../comps/Quesbutton';
import QuizNav from '../comps/QuizNav';
import Info from '../comps/info';
import React, {userstate} from 'react';
import BottomMenu from '../comps/BottomMenu';

const QuizPage = styled.div `
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

//building page


export default function Quiz (){
    // const [sub, setSub] = useState("nothing sub")
    return <QuizPage>

        <QuizNav Title="BMI"></QuizNav>
        <BigDiv>
        <QuestionTxt>Please follow this link that will direct you to a BMI Calculator and come back to select your weight </QuestionTxt>
        <Info></Info>
        <NavyButton routeTo="https://www.calculator.net/bmi-calculator.html" text="BMI Calculator" bgcolor="white" color="#26325B" border="1px #26325B solid"></NavyButton>
        
        <Divider></Divider>

        <ButtonStyle>
        <Button txt1="Underweight" txt2="less than 18"></Button>
        </ButtonStyle>
        <ButtonStyle>
        <Button txt1="Normal" txt2="18-24"></Button>
        </ButtonStyle>
        <ButtonStyle>
        <Button txt1="Overweight" txt2="25-29"></Button>
        </ButtonStyle>
        <ButtonStyle>
        <Button txt1="Obesity" txt2="30 or greater"></Button>
        </ButtonStyle>
        </BigDiv>
        <BottomMenu/>

        {/* <ButtonStyle><NavyButton routeTo="/quiz2"></NavyButton></ButtonStyle> */}

    </QuizPage>
}