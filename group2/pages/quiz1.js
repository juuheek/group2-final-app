//import style
import styled from 'styled-components';

//import comps
import NavyButton from '../comps/NavyButton';
import Button from '../comps/Quesbutton';
import QuizNav from '../comps/QuizNav';
import React, {userstate} from 'react';

const QuizPage = styled.div `
    width: 414px;
    height: 887px;

    background-color:#E8ECF0;
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
    color: #000000;
    padding: 20px;
`;

 const Divider = styled.hr`
    border: 0.5px solid #000000;
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

//building page
export default function Quiz (){
    // const [sub, setSub] = useState("nothing sub")
    return <QuizPage>

        <QuizNav Title="BMI"></QuizNav>

        <QuestionTxt>Please follow this link that will direct you to a BMI Calculator and come back to select your weight </QuestionTxt>
        <NavyButton text="BMI Calculator" bgcolor="white" color="#26325B" border="1px #26325B solid"></NavyButton>
        
        <Divider></Divider>

        <ButtonStyle>
        <Button txt="Underweight"></Button>
        </ButtonStyle>
        <ButtonStyle>
        <Button txt="Normal"></Button>
        </ButtonStyle>
        <ButtonStyle>
        <Button txt="Overweight"></Button>
        </ButtonStyle>
        <ButtonStyle>
        <Button txt="Obesity"></Button>
        </ButtonStyle>

        <ButtonStyle><NavyButton routeTo="/quiz2"></NavyButton></ButtonStyle>

    </QuizPage>
}
/*2 states, conntect them to the card prop to tell react to redraw it when the state changes it*/