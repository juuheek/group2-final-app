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
import BottomMenu from '../comps/BottomMenu';
import GoodCarousel from '../comps/goodcarousel';

const default_data = [
  "https://res.cloudinary.com/dlzk0payu/image/upload/v1620156416/Anorexia_kepvd8.svg",
  "https://res.cloudinary.com/dlzk0payu/image/upload/v1620156492/Bullimia_t6vxoj.svg",
  "https://res.cloudinary.com/dlzk0payu/image/upload/v1620156606/Orthorexia_rag0py.svg",
  "https://res.cloudinary.com/dlzk0payu/image/upload/v1620185177/Binge_ntekpv.svg",
  "https://res.cloudinary.com/dlzk0payu/image/upload/v1620185223/Excessive_qbldkv.svg"

]
const data = {
Anorexia:{


},

Bulimia:{

},
Orthorexia:{

},
Binge:{
  
},
ExcessiveExercise:{
  
},
}


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
flex-direction: row;

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
        
        <Div>

       <GoodCarousel /> 
        </Div>
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
