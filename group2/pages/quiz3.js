//import style
import styled from 'styled-components';

//import comps
import NavyButton from '../comps/NavyButton';
import Button from '../comps/Quesbutton';
import QuizNav from '../comps/QuizNav';
import BulletPoints from '../comps/bullet';
import React, {userstate} from 'react';
<<<<<<< HEAD
=======
import BottomMenu from '../comps/BottomMenu';
>>>>>>> 6e6f61c12508905cecb00d288a7f8d853a4687b2

const QuizPage = styled.div `
    width: 414px;
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
`;

 const Divider = styled.hr`
    border: 0.5px solid #FFFFFF;
    margin: 30px;
    width: 298px;
 `;
const ButtonStyle = styled.div `
    width:144px;
    padding:20px;
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
    return <QuizPage>

        <QuizNav Title="Question"></QuizNav>
        <BigDiv>

        <QuestionTxt>Do you engage in any of the following behaviours?  </QuestionTxt>
        <br></br>
        <br></br>
        <BulletPoints></BulletPoints>
        <br></br>

        <Divider></Divider>

        <ButtonStyle>
        <Button routeTo="/redresult" txt1="More than three"></Button>
        </ButtonStyle>
        <ButtonStyle>
        <Button routeTo="/redresult" txt1="Less than two"></Button>
        </ButtonStyle>
        <ButtonStyle>
        <Button routeTo="/redresult" txt1="None"></Button>
        </ButtonStyle>

        </BigDiv>
        <BottomMenu/>
    </QuizPage>
}