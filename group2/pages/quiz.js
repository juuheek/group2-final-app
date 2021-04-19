//import style
import styled from 'styled-components';

//import comps
import NavyButton from '../comps/NavyButton';
import Button from '../comps/Quesbutton';
import DefaultNav from '../comps/nav';

const QuizPage = styled.div `
    display:flex;
    justify-content: center;
    align-items: center;
 `;

 const QuizWrapper = styled.div `
    width: 414px;
    height: 887px;
    padding: 30px;
    background-color:#E8ECF0;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
 `;

 const Divider = styled.hr`
    border: 0.5px solid #000000;
    margin: 50px;
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

        <QuizWrapper>
        <p>Please follow this link that will direct you to a BMI Calculator and come back to select your weight</p>
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

        <ButtonStyle><NavyButton></NavyButton></ButtonStyle>

        </QuizWrapper>

    </QuizPage>
}