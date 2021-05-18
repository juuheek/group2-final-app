import React, {useState} from 'react';
import styled from 'styled-components';
import Back from '../comps/back';
import Resources from '../comps/navigationpage';
import Cards from '../comps/card';
import Dots from '../comps/imgcarousel';
import Greybg from '../comps/JuheeGreybg';
import Titles from '../comps/Titles';
import BottomMenu from '../comps/BottomMenu'
import Carousel from '../comps/carousel'
import {IoMdArrowDroprightCircle, IoMdArrowDropleftCircle} from 'react-icons/io';


const GlianCont = styled.div`
  display: flex;
  flex-direction: column;
  width:100vw;
  height:100vh;
  background-color: white;
  align-items: center;
  justify-content: space-between;
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

const CtrlButtons = styled.div`
        display:flex;
        padding:20px;
`;

const Div = styled.div`
margin:20px 0 20px 0;
`;




// array for grey box text
const EdTitles = ["Anorexia", "Bulimia", "Orthorexia", "Binge Eating", "Excessive Exercise"]

const Desc = [" is a psychological and potentially life-threatening eating disorder.Those suffering from this are typically suffering from an extremely low body weight relative to their height and body type."," is a psychological and severe life-threatening eating disorder described by the ingestion of an abnormally large amount of food in short time period, followed by an attempt to avoid gaining weight by purging what was consumed.", "is a common co-occurring eating disorder. It is characterized by a fixation or desire to eat only “healthy” foods, or to avoid entire food groups.","is commonly known by compulsive overeating or consuming abnormal amounts of food while feeling unable to stop and a loss of control. ", "Extreme behaviors can be a red flag indicating unhealthy behaviors."]


export default function Glian(){
  
  // State 1 for switching to eating habits 
  const [textbold, toptextbold] = useState ("Anorexia Nervosa");
  const [textregular, bottomtextregular] = useState ("is a psychological and potentially life-threatening eating disorder.Those suffering from this are typically suffering from an extremely low body weight relative to their height and body type.");
  const [title, setTitle] = useState ("Eating Disorder Resources");
  const [edcolor, setColor] = useState ("#E67571");
  const [ehcolor, setColors] = useState ("#26325B");
  const HandleText = (
    boldtxt="Anorexia Nervosa",
    regulartxt="is a psychological and potentially life-threatening eating disorder.Those suffering from this are typically suffering from an extremely low body weight relative to their height and body type.",
    titletxt="Good Eating Habits",
    titlecolor="#E67571",
    titlecolors="#26325b"
  ) => {
    toptextbold(boldtxt)
    bottomtextregular(regulartxt)
    setTitle(titletxt)
    setColor(titlecolor)
    setColors(titlecolors)
  }



  // state for grey box text
  const [sub_ind, setSubInd] = useState(0);
  // const [sub_ind2, setSubInd2] = useState(0);


  
  return (
    <GlianCont>


    <BackDiv>
    <Back routeTo="/disclaimer"/>
    </BackDiv>
        <Titles first="/ed" second="/goodandbad" edcolor={edcolor} ehcolor={ehcolor}></Titles>
        
        {/* <Cards></Cards> */}
        <Div>

       <Carousel onTitle={(ind)=>setSubInd(ind)}  /> 
        </Div>


        <Greybg bold={EdTitles[sub_ind]} text={Desc[sub_ind]} routeTo="/resources" ></Greybg>


        <BottomMenu/>
    </GlianCont>
  )
}