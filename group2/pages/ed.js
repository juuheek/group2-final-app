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

const Imgs = ["https://res.cloudinary.com/dlzk0payu/image/upload/v1620711850/Group_221_haqiwc.svg","https://res.cloudinary.com/dlzk0payu/image/upload/v1620711850/Group_222_z4io5e.svg","https://res.cloudinary.com/dlzk0payu/image/upload/v1620711849/Group_223_naufel.svg","https://res.cloudinary.com/dlzk0payu/image/upload/v1620711849/Group_224_m3tqar.svg","https://res.cloudinary.com/dlzk0payu/image/upload/v1620711849/Group_225_xauk1t.svg"
]
// array for grey box text
const EdTitles = ["Anorexia", "Bulimia", "Orthorexia", "Binge Eating", "Excessive Exercise"]

const Desc = [" is a psychological and potentially life-threatening eating disorder."," is a psychological and severe life-threatening eating disorder described by the ingestion of an abnormally large amount of food in short time period, followed by an attempt to avoid gaining weight by purging what was consumed.", "is a common co-occurring eating disorder. It is characterized by a fixation or desire to eat only “healthy” foods, or to avoid entire food groups.","is commonly known by compulsive overeating or consuming abnormal amounts of food while feeling unable to stop and a loss of control. ", "Extreme behaviors can be a red flag indicating unhealthy behaviors."]


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
  const [sub_ind2, setSubInd2] = useState(0);


  
  return (
    <GlianCont>
    <BackDiv>
    <Back routeTo="/disclaimer"/>
    </BackDiv>
        <Titles onCards={(imgdata)=>setSubInd2(imgdata)} onLeftClick={()=>HandleText("Anorexia Nervosa","is a psychological and potentially life-threatening eating disorder.Those suffering from this are typically suffering from an extremely low body weight relative to their height and body type.","Eating Disorders Resources", "#E67571","26325B")} onRightClick={()=>HandleText("Good Eating Habits","To maintain a generally healthy lifestyle, eating is important! It provides our body with the nutrients it needs to get through the day. Click below to read more on good eating habits you can start using yourself.","Eating Habits Resources", "#26325B", "#E67571")} edcolor={edcolor} ehcolor={ehcolor}></Titles>
        
        {/* <Cards></Cards> */}
        <Div>

       <Carousel onTitle={(ind)=>setSubInd(ind)} imgdata={Imgs[sub_ind2]} /> 
        </Div>
        <Row>

        <Dots></Dots>
        <Dots></Dots>
        <Dots></Dots>
        <Dots></Dots>
        <Dots></Dots>

        </Row>
        <Greybg bold={EdTitles[sub_ind]} text={Desc[sub_ind]} routeTo="/resources" ></Greybg>
        <BottomMenu/>
    </GlianCont>
  )
}