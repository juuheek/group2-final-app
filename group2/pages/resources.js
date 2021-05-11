
// import styles from '../styles/global.css'
import styled from 'styled-components';
import NavyButton from '../comps/NavyButton'
import Whitebg from '../comps/JuheeWhitebg'
import NavBar from '../comps/nav'
import CauseCard from '../comps/JuheeCauseCard'
import PieChart from '../comps/pie-chart'
import SymptomCard from '../comps/JuheeSymptomCard'
import BottomMenu from '../comps/BottomMenu'
import LeftArrow from '../comps/JuheeLeftArrow'
import RightArrow from '../comps/JuheeRightArrow'
import React, {useState} from 'react';
const data = {
  Anorexia:{
    explanation:"Anorexia",
    explanationtext:"a psychological and potentially life-threatening eating disorder. Those suffering from this are typically suffering from an extremely low body weight relative to their height and body type.",
    cause:"Thinness culture in media",
    symptom:"Extremely restrictive eating",
    piedegree:"conic-gradient(#26325B 40deg, #E67571 0 235deg, #E67571 0)",
    pietext1:"Eating Disorders mortality rate is ",
    piepercent:"10-15%",
    pietext2:"which is the highest mortality rate of any mental illess"

  },
  Bulimia:{
    explanation:"Bulimia Nervosa",
    explanationtext:"a psychological and severe life-threatening eating disorder described by the ingestion of an abnormally large amount of food in short time period, followed by an attempt to avoid gaining weight by purging what was consumed.",
    cause:"Stressful transitions or life ",
    symptom:"Chronically inflamed and sore throat ",
    piedegree:"conic-gradient(#26325B 110deg, #E67571 0 250deg, #E67571 0)",
    pietext1:"Up to",
    piepercent:"33-70%",
    pietext2:"of those who have bulimia also have an addictive disorder"

  },
  Orthorexia:{
    explanation:"Orthorexia",
    explanationtext:"a common co-occurring eating disorder. It is characterized by a fixation or desire to eat only “healthy” foods, or to avoid entire food groups. Every person suffering with orthorexia has their own food preferences; foods they will eat and foods that they won’t. Orthorexics feel isolated from or superior to people who may consume a food they they themselves reject.",
    cuase:"Past history of trauma",
    symptom:"An increase in concern about the health of ingredients",
    piedegree:"conic-gradient(#26325B 90deg, #E67571 0 270deg, #E67571 0)",
    pietext1:"a study has found that",
    piepercent:"25%",
    pietext2:"of students attending university experience symptoms of orthorexia"

  }
}
const JuheeComps = styled.div`
  margin:0 
`;
const JuheeCont = styled.div`
    height:1600px;
    width:100vw;
    ${'' /* height:100vh; */}
    background-color:${props=>props.bgcolor};
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
`;
const JuheeDiv =styled.div`
    margin:30px;
\
`;
const JuheeDiv2 = styled.div`
  margin:15px;
`;
const JuheeH3 = styled.h3`
display:flex;
justify-content:center;
font-family: DIN alternate;
color:#26325B;
`;
const CauseCardImg = styled.img`
padding:0 20px 0 20px;
`;
const MiddleIcons = styled.div`
display:flex;
  flex-direction:row;
  &* > {
    padding:5px;
  }
`;

export default function Resources () {

const [key, setKey] = useState("Anorexia")

const HandleExplanation = (k) =>{
setKey(k);
}

const HandleCauseCard = (ind) => {
  if(ind < 0){
    ind=0;
  }
  if(ind > 2){
    ind=2;
  }
  setSubInd(ind)
}
const HandleSymptomCard = (ind2) => {
  if(ind2 < 0){
    ind2=0;
  }
  if(ind2 > 2){
    ind2=2;
  }
  setSubInd2(ind2)
}

  return (
    <JuheeComps >
    
    <JuheeCont>
      <NavBar onTxt2Click={()=>HandleExplanation("Bulimia")} onTxt1Click={()=>HandleExplanation("Anorexia")} onTxt3Click={()=>HandleExplanation("Orthorexia","a common co-occurring eating disorder. It is characterized by a fixation or desire to eat only “healthy” foods, or to avoid entire food groups. Every person suffering with orthorexia has their own food preferences; foods they will eat and foods that they won’t. Orthorexics feel isolated from or superior to people who may consume a food they they themselves reject.","Past history of trauma","An increase in concern about the health of ingredients", "conic-gradient(#26325B 90deg, #E67571 0 270deg, #E67571 0)","a study has found that","25%","of students attending university experience symptoms of orthorexia")} onTxt4Click={()=>HandleExplanation("Binge Eating (BED)","is commonly known by compulsive overeating or consuming abnormal amounts of food while feeling unable to stop and a loss of control. Binge eating episodes are typically classified as occurring on average a minimum of twice per week for a duration of six months.","Depression","Feeling that your eating behavior is out of control","conic-gradient(#26325B 108deg, #E67571 0 252deg, #E67571 0)","Up to","30%","of those looking into weight loss treatments likely show symptoms of BED")} onTxt5Click={()=>HandleExplanation("Excessive Exercise","Exercise and nutrition are foundational to good health, but extreme behaviors can be a red flag indicating unhealthy behaviors. Examples of this include excessive exercise, weight obsessions, bulimia, anorexia and binge eating disorders.","Physical 'burnout' ","Feeling sore muscles or heavy limbs." ,"conic-gradient(#26325B 144deg, #E67571 0 216deg, #E67571 0)","out of those who suffer from an eating disorder","40%","also suffer from compulsive exercise")}  routeTo="/ed"/>
      <JuheeDiv>
        <Whitebg  bold={data[key].explanation} text={data[key].explanationtext}/>
      </JuheeDiv>
      <JuheeDiv>
      <JuheeDiv2>
      <CauseCard   bottomcausetext={data[key].cause}/>
      </JuheeDiv2>
      <JuheeDiv2>
      <SymptomCard bottomsymptomtext={data[key].symptom}/>
      </JuheeDiv2>
      </JuheeDiv>
      <JuheeDiv>
        <PieChart degree={data[key].piedegree} text1={data[key].pietext1} percentage={data[key].piepercent} text2={data[key].pietext2} />
      </JuheeDiv>
      <JuheeDiv>
      <JuheeDiv2>
      <NavyButton text="Self Diagnose" bgcolor="transparent" color="#26325B" border="1px #26325B solid" routeTo="/quiz1" />
      </JuheeDiv2>
      <JuheeDiv2>
      <NavyButton text="Get Help" bgcolor="transparent" color="#26325B" border="1px #26325B solid" routeTo="/helpline"/>
      </JuheeDiv2>
      </JuheeDiv>
      <BottomMenu/>
    </JuheeCont>
  
  
        
    </JuheeComps>





  )
}

