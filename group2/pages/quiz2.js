//import style
import styled from 'styled-components';

//import comps
import NavyButton from '../comps/NavyButton';
import Button from '../comps/Quesbutton';
import QuizNav from '../comps/QuizNav'

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
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #000000;
    padding: 20px;
`;

 const Divider = styled.hr`
    border: 0.5px solid #000000;
    margin: 30px;
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
        margin-top:100px;
`;

//building page
export default function Quiz (){
    return <QuizPage>

        <QuizNav Title="Meals"></QuizNav>
        <br></br>
        <BigDiv>
        <QuestionTxt>How many meals do you eat in a day?</QuestionTxt>
        
        <Divider></Divider>

        <ButtonStyle>
        <Button txt="1"></Button>
        </ButtonStyle>
        <ButtonStyle>
        <Button txt="2"></Button>
        </ButtonStyle>
        <ButtonStyle>
        <Button txt="3"></Button>
        </ButtonStyle>
        <ButtonStyle>
        <Button txt="4"></Button>
        </ButtonStyle>

        <ButtonStyle><NavyButton></NavyButton></ButtonStyle>
        </BigDiv>
  

    </QuizPage>
}