import React, {useState} from 'react';
import styled from 'styled-components';
import Whitebg from '../comps/JuheeGreybg';
import Textbox from '../comps/textbox';
import Back from '../comps/back';
import Resources from '../comps/navigationpage';
import Cards from '../comps/GoodHabits';
import Dots from '../comps/imgcarousel';
import Greybg from '../comps/Habits';


const GlianCont = styled.div`
  display: flex;
  flex-direction: column;
  width:414px;
  height:896px;
  background-color: white;
  align-items: center;
`;

const Row = styled.div`
display: flex;
flex-direction: row;

`;

const BackDiv = styled.div`
display:flex;
position:relative;
right:150px;
top:20px;
`;
export default function Glian(){
  const [textbold, toptextbold] = useState ("Eating Emotional");
  const HandleText = (
    boldtxt="Good Eating Habits",
  ) => {
    toptextbold(boldtxt)
  }
  return (
    <GlianCont>
        <BackDiv>
        <Back routeTo="/disclaimer"></Back>
    </BackDiv>
        
        <Resources onLeftClick={()=>HandleText("Good Eating Habits")} onRightClick={()=>HandleText("Bad Eating Habits")} navpageheader="Good Eating Habits"></Resources>
        <Cards></Cards>
        <Row>

        <Dots></Dots>
        <Dots></Dots>
        <Dots></Dots>
        <Dots></Dots>
        <Dots></Dots>

        </Row>
        <Greybg></Greybg>






    </GlianCont>
  )
}
