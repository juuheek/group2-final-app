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




const Bad = {

  bad: ["https://res.cloudinary.com/dlzk0payu/image/upload/v1620711850/Group_221_haqiwc.svg","https://res.cloudinary.com/dlzk0payu/image/upload/v1620711850/Group_222_z4io5e.svg","https://res.cloudinary.com/dlzk0payu/image/upload/v1620711849/Group_223_naufel.svg","https://res.cloudinary.com/dlzk0payu/image/upload/v1620711849/Group_224_m3tqar.svg","https://res.cloudinary.com/dlzk0payu/image/upload/v1620711849/Group_225_xauk1t.svg"
],

good:[
  "https://res.cloudinary.com/dlzk0payu/image/upload/v1620710761/Group_211_zdoz3p.svg",
  "https://res.cloudinary.com/dlzk0payu/image/upload/v1620710812/Group_212_eqeb75.svg",
  "https://res.cloudinary.com/dlzk0payu/image/upload/v1620710534/Group_213_ak9og4.svg",
  "https://res.cloudinary.com/dlzk0payu/image/upload/v1620710855/Group_214_n6uce5.svg",
  "https://res.cloudinary.com/dlzk0payu/image/upload/v1620710879/Group_215_wq04q9.svg"
]
  
}


// const ImgsArr= Imgs.split(',');

const GoodTitles = ["Maintain a Balanced Diet","Have at Least 6-8 Glasses of Water","Have at Least 3 Meals a Day", "Protein on a Daily Basis", "Fruits and Vegetables on a Daily Basis"   ]


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

  const Habits = (k) =>{
    setKey(k);
    }

  const ImageChange = (ind1) => {
    if (ind1<0){
        ind1=0;
    }
    if(ind1>2){
        ind1=2;
    }

    setIndd(ind1)
}
const [key, setKey] = useState("good")
const [indd, setIndd] = useState(0);
const [sub_ind, setSubInd] = useState(0);
  // const [newCards, theCards] = useState(0)
  // const [sub_ind2, setSubInd2] = useState(0);

  return (
    <GlianCont>
        <BackDiv>
        <Back routeTo="/disclaimer"></Back>
    </BackDiv>

        <Titles onLeftClick={()=>Habits("good")} onRightClick={()=>Habits("bad")}  txt1="Good Eating Habits"  txt2="Bad Eating Habits " edcolor={edcolor} ehcolor={ehcolor}>

        </Titles>
        
        <Div>

       <GoodCarousel onTitle={(ind)=>setSubInd(ind)} imgdata={Bad[key]} /> 
        </Div>
        <Row>

        <Dots></Dots>
        <Dots></Dots>
        <Dots></Dots>
        <Dots></Dots>
        <Dots></Dots>

        </Row>
        <Greybg bold={GoodTitles[sub_ind]}></Greybg>
        <BottomMenu/>





    </GlianCont>
  )
}

// onRightClick={()=>ImageChange(indd+1)}
// onLeftClick={()=>ImageChange(indd-1)} 
