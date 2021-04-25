import React, {useState} from 'react';
import styled from 'styled-components';
import Whitebg from '../comps/JuheeGreybg';
import Textbox from '../comps/textbox';
import Back from '../comps/back';
import Resources from '../comps/navigationpage';
import Cards from '../comps/card';
import Dots from '../comps/imgcarousel';
import Greybg from '../comps/JuheeGreybg';
import Titles from '../comps/Titles';



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
flex-direction:row;
`;

const BackDiv = styled.div`
display:flex;
position:relative;
right:150px;
top:20px;
`;


export default function Glian(){
  const [textbold, toptextbold] = useState ("Anorexia Nervosa");
  const [textregular, bottomtextregular] = useState ("is a psychological and potentially life-threatening eating disorder.Those suffering from this are typically suffering from an extremely low body weight relative to their height and body type.");
  const [title, setTitle] = useState ("Eating Disorder Resources");
  const HandleText = (
    boldtxt="Anorexia Nervosa",
    regulartxt="is a psychological and potentially life-threatening eating disorder.Those suffering from this are typically suffering from an extremely low body weight relative to their height and body type.",
    titletxt="Good Eating Habits"
  ) => {
    toptextbold(boldtxt)
    bottomtextregular(regulartxt)
    setTitle(titletxt)
  }
  
  return (
    <GlianCont>
    <BackDiv>
    <Back routeTo="/disclaimer"/>
    </BackDiv>
        <Titles onLeftClick={()=>HandleText("Anorexia Nervosa","is a psychological and potentially life-threatening eating disorder.Those suffering from this are typically suffering from an extremely low body weight relative to their height and body type.","Eating Disorders Resources")} onRightClick={()=>HandleText("Good Eating Habits","To maintain a generally healthy lifestyle, eating is important! It provides our body with the nutrients it needs to get through the day. Click below to read more on good eating habits you can start using yourself.","Eating Habits Resources",)} navpageheader={title}></Titles>
        
        <Cards></Cards>
        <Row>

        <Dots></Dots>
        <Dots></Dots>
        <Dots></Dots>
        <Dots></Dots>
        <Dots></Dots>

        </Row>
        <Greybg bold={textbold} text={textregular} routeTo="/resources" ></Greybg>

    </GlianCont>
  )
}
