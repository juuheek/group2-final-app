//import style
import styled from 'styled-components';

//import comps
import NavyButton from '../comps/NavyButton';
import Button from '../comps/Quesbutton';
import QuizNav from '../comps/QuizNav';
import BulletPoints from '../comps/bullet';

const QuizPage = styled.div `
    width: 414px;
    height: 887px;
    padding: 30px;
    background-color:#E8ECF0;
    display:flex;
    flex-direction: column;
    justify-content: center;
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

//building page
export default function Quiz (){
    return <QuizPage>

        <QuizNav Title="Meals"></QuizNav>

        <QuestionTxt>Do you engage in any of the following behaviours?  </QuestionTxt>
        <BulletPoints></BulletPoints>

        <Divider></Divider>

        <ButtonStyle>
        <Button txt="YES"></Button>
        </ButtonStyle>
        <ButtonStyle>
        <Button txt="NO"></Button>
        </ButtonStyle>

        <ButtonStyle><NavyButton></NavyButton></ButtonStyle>

    </QuizPage>
}