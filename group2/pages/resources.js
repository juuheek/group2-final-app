
// import styles from '../styles/global.css'
import styled from 'styled-components';
import NavyButton from '../comps/NavyButton'
import Whitebg from '../comps/JuheeWhitebg'
import NavBar from '../comps/nav'
import CauseCard from '../comps/JuheeCauseCard'
import PieChart from '../comps/pie-chart'
import SymptomCard from '../comps/JuheeSymptomCard'

import React, {useState} from 'react';

const JuheeComps = styled.div`
  
    ${'' /* background-color:#E8ECF0;
    padding:20px; */}
   
`;
const JuheeCont = styled.div`
    width:414px;
    max-height:1483px;
    background-color:#E8ECF0;
    display:flex;
    flex-direction:column;
    ${'' /* justify-content:center; */}
    align-items:center;
`;
const JuheeDiv =styled.div`
    margin:30px;
`;
const JuheeDiv2 = styled.div`
  margin:15px;
`;
export default function Resources () {

  const [causetext, bottomcausetext] = useState ("Thinness culture in media");
  const HandleCauseLeft = () => {
    bottomcausetext(" Professions and careers that promote being thin");
  }
  const HandleCauseRight = () => {
    bottomcausetext(" Family and childhood traumas");
  }

  const [symptomtext, bottomsymptomtext] = useState ("Extremely restrictive eating");
  const [symptomimg, symptomiconimg] = useState ("/food.svg");
  const HandleSymptomLeft = () => {
    bottomsymptomtext(" Intensive/excessive exercise");
    symptomiconimg("/exercise.svg")
  }
  const HandleSymptomRight = () => {
    bottomsymptomtext("Extreme thinness");
  }

const [explanation, explanationbold] = useState ("Anorexia");
const [explanationtext, explanationregular] = useState ("a psychological and potentially life-threatening eating disorder. Those suffering from this are typically suffering from an extremely low body weight relative to their height and body type. ");
const [cause, defaultcause] =useState("Thinness culture in media");
const [symptom, defaultsymptom] =useState("Extremely restrictive eating");
const [piedegree, piechartdegree] = useState("conic-gradient(#26325B 40deg, #E67571 0 235deg, #E67571 0)")
const [pietext1, piecharttext1] = useState("Eating Disorders mortality rate is ")
const [piepercent, piechartpercent]=useState("10-15%")
const [pietext2, piecharttext2] =useState("which is the highest mortality rate of any mental illess")


const HandleExplanation = (
  title="Anorexia",
  text="a psychological and potentially life-threatening eating disorder. Those suffering from this are typically suffering from an extremely low body weight relative to their height and body type.",
  bottomtxt="Thinness culture in media",
  bottomtxt2 = "Extremely restrictive eating ",
  mypiedegree="conic-gradient(#26325B 40deg, #E67571 0 235deg, #E67571 0)",
  mypietext1="Eating Disorders mortality rate is ",
  mypiepercent="10-15%",
  mypietext2="which is the highest mortality rate of any mental illess"

  
) =>{
  explanationbold(title)
  explanationregular(text)
  defaultcause(bottomtxt)
  defaultsymptom(bottomtxt2)
  piechartdegree(mypiedegree)
  piecharttext1(mypietext1)
  piechartpercent(mypiepercent)


  console.log("click")
}


  return (
    <JuheeComps >
    
    <JuheeCont>
      <NavBar onTxt2Click={()=>HandleExplanation("Bulimia Nervosa", "a psychological and severe life-threatening eating disorder described by the ingestion of an abnormally large amount of food in short time period, followed by an attempt to avoid gaining weight by purging what was consumed.","Stressful transitions or life ","Chronically inflamed and sore throat ","conic-gradient(#26325B 110deg, #E67571 0 250deg, #E67571 0)","Up to","33-70%","of those who have bulimia also have an addictive disorder")} onTxt1Click={()=>HandleExplanation("Anorexia")} onTxt3Click={()=>HandleExplanation("Orthorexia","a common co-occurring eating disorder. It is characterized by a fixation or desire to eat only “healthy” foods, or to avoid entire food groups. Every person suffering with orthorexia has their own food preferences; foods they will eat and foods that they won’t. Orthorexics feel isolated from or superior to people who may consume a food they they themselves reject.","Past history of trauma","An increase in concern about the health of ingredients", "conic-gradient(#26325B 90deg, #E67571 0 270deg, #E67571 0)","a study has found that","25%","of students attending university experience symptoms of orthorexia")} onTxt4Click={()=>HandleExplanation("Binge Eating (BED)","is commonly known by compulsive overeating or consuming abnormal amounts of food while feeling unable to stop and a loss of control. Binge eating episodes are typically classified as occurring on average a minimum of twice per week for a duration of six months.","Depression","Feeling that your eating behavior is out of control","conic-gradient(#26325B 108deg, #E67571 0 252deg, #E67571 0)","Up to","30%","of those looking into weight loss treatments likely show symptoms of BED")} onTxt5Click={()=>HandleExplanation("Excessive Exercise","Exercise and nutrition are foundational to good health, but extreme behaviors can be a red flag indicating unhealthy behaviors. Examples of this include excessive exercise, weight obsessions, bulimia, anorexia and binge eating disorders.","Physical 'burnout' ","Feeling sore muscles or heavy limbs." ,"conic-gradient(#26325B 144deg, #E67571 0 216deg, #E67571 0)","out of those who suffer from an eating disorder","40%","also suffer from compulsive exercise")}  routeTo="/ed"/>
      <JuheeDiv>
        <Whitebg  bold={explanation} text={explanationtext}/>
      </JuheeDiv>
      <JuheeDiv>
      <JuheeDiv2>
      <CauseCard onLeftClick ={HandleCauseLeft} onRightClick ={HandleCauseRight} toptext="Potential Causes" bottomcausetext={causetext} bottomcausetext={cause}/>
      </JuheeDiv2>
      <JuheeDiv2>
      <SymptomCard onLeftClick ={HandleSymptomLeft} onRightClick ={HandleSymptomRight} toptext="Symptoms" bottomsymptomtext={symptomtext} symptomiconimg={symptomimg} bottomsymptomtext={symptom}/>
      </JuheeDiv2>
      </JuheeDiv>
      <JuheeDiv>
        <PieChart degree={piedegree} text1={pietext1} percentage={piepercent} text2={pietext2} />
      </JuheeDiv>
      <JuheeDiv>
      <JuheeDiv2>
      <NavyButton text="Self Diagnose" bgcolor="transparent" color="#26325B" border="1px #26325B solid" routeTo="/quiz1" />
      </JuheeDiv2>
      <JuheeDiv2>
      <NavyButton text="Get Help" bgcolor="transparent" color="#26325B" border="1px #26325B solid" routeTo="/helpline"/>
      </JuheeDiv2>
      </JuheeDiv>
      
    </JuheeCont>
  
  
        
    </JuheeComps>






  )
}

