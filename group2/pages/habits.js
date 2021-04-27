import React, {useState} from 'react';
import styled from 'styled-components';
import Whitebg from '../comps/JuheeGreybg';
import Textbox from '../comps/textbox';
import Back from '../comps/back';
import Resources from '../comps/navigationpage';
import Cards from '../comps/GoodHabits';
import Dots from '../comps/imgcarousel';
import Greybg from '../comps/Habits';
import Titles from '../comps/Titles';
import BottomMenu from '../comps/BottomMenu'


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
  const [textbold, toptextbold] = useState ("Maintaining a Balanced Diet");
  const [title, setTitle] = useState ("Good Eating Habits");
  const [edcolor, setColor] = useState ("#E67571");
  const [ehcolor, setColors] = useState ("#26325b");

  const HandleText = (
    boldtxt="Maintaining a Balanced Diet",
    titletxt="Good Eating Habits",
    titlecolor="#E67571",
    titlecolors="#26325B"

  ) => {
    toptextbold(boldtxt)
    setTitle(titletxt)
    setColor(titlecolor)
    setColors(titlecolors)
  }
  return (
    <GlianCont>
        <BackDiv>
        <Back routeTo="/disclaimer"></Back>
    </BackDiv>

        <Titles txt1="Good Eating Habits"  txt2="Bad Eating Habits " onLeftClick={()=>HandleText("Maintaining a Balanced Diet","Good Eating Habits","#E67571","#26325B")} onRightClick={()=>HandleText("Emotional Eating","Bad Eating Habits","#26325B","#E67571")} edcolor={edcolor} ehcolor={ehcolor}>

        </Titles>
        
        <Cards></Cards>
        <Row>

        <Dots></Dots>
        <Dots></Dots>
        <Dots></Dots>
        <Dots></Dots>
        <Dots></Dots>

        </Row>
        <Greybg bold={textbold}></Greybg>
        <BottomMenu/>





    </GlianCont>
  )
}
