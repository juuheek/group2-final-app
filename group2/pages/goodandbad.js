import React, {useState} from 'react';
import styled from 'styled-components';
import Textbox from '../comps/textbox';
import Back from '../comps/back';
import Resources from '../comps/navigationpage';
import Cards from '../comps/GoodHabits';
import Dots from '../comps/imgcarousel';
import Titles from '../comps/Titles';
import BottomMenu from '../comps/BottomMenu';
import GoodBadCarousel from '../comps/GoodBad';
import Greybg from '../comps/JuheeOtherGreybg';


const default_data = [
  "https://res.cloudinary.com/dlzk0payu/image/upload/v1620156416/Anorexia_kepvd8.svg",
  "https://res.cloudinary.com/dlzk0payu/image/upload/v1620156492/Bullimia_t6vxoj.svg",
  "https://res.cloudinary.com/dlzk0payu/image/upload/v1620156606/Orthorexia_rag0py.svg",
  "https://res.cloudinary.com/dlzk0payu/image/upload/v1620185177/Binge_ntekpv.svg",
  "https://res.cloudinary.com/dlzk0payu/image/upload/v1620185223/Excessive_qbldkv.svg"

]

const badTitles = ["Good Habits","Bad Habits"   ]

const text = ["Healthy eating is more than the foods you eat. It is also about where, when, why and how you eat.","Nighttime snacking, emotional eating, junk-food binges — sound familiar? Break these common bad eating habits"]


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
  const [edcolor, setColor] = useState ("#26325b");
  const [ehcolor, setColors] = useState ("#E67571");

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

  const [sub_ind, setSubInd] = useState(0);
  return (
    <GlianCont>
        <BackDiv>
        <Back routeTo="/disclaimer"></Back>
    </BackDiv>

        <Titles first="/ed" second="/goodandbad" txt1="Eating Disorders"  txt2="Eating Habits "edcolor={edcolor} ehcolor={ehcolor}>

        </Titles>
        
        <Div>

       <GoodBadCarousel onTitle={(ind)=>setSubInd(ind)} /> 
        </Div>
        <Row>

      

        </Row>
        <Greybg bold={badTitles[sub_ind]} text={text[sub_ind]} routeTo="/habits"></Greybg>
        <BottomMenu/>





    </GlianCont>
  )
}
