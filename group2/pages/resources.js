
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

<<<<<<< HEAD
=======



const data = {
  Anorexia:{
    explanation:"Anorexia",
    explanationtext:"a psychological and potentially life-threatening eating disorder. Those suffering from this are typically suffering from an extremely low body weight relative to their height and body type.",
    cause:["Thinness culture in media","Professions and careers that promote being thin","Family and childhood traumas"],
    symptom:["Extremely restrictive eating","Intensive/ excessive exercise","Extreme thinness"],
    piedegree:"conic-gradient(#26325B 40deg, #E67571 0 235deg, #E67571 0)",
    pietext1:"Eating Disorders mortality rate is ",
    piepercent:"10-15%",
    pietext2:"which is the highest mortality rate of any mental illess",
    bgcolor:"#FFCCB2",
    imgsrc:["/A2.svg","/A3real.svg","/A1.svg"],
    imgurl:["/foodreal.svg","/exerciseeee.svg","/A4.svg"]


  },
  Bulimia:{
    explanation:"Bulimia Nervosa",
    explanationtext:"a psychological and severe life-threatening eating disorder described by the ingestion of an abnormally large amount of food in short time period, followed by an attempt to avoid gaining weight by purging what was consumed.",
    cause:["Stressful transitions or life changes","History of abuse or trauma","Negative body image"],
    symptom:["Chronically inflamed and sore throat ","Swollen salivary glands (by neck and jaw)","Reflux disorder/other gastrointestinal problems"],
    piedegree:"conic-gradient(#26325B 110deg, #E67571 0 250deg, #E67571 0)",
    pietext1:"Up to",
    piepercent:"33-70%",
    pietext2:"of those who have bulimia also have an addictive disorder",
    bgcolor:"#F8E8AE",
    imgsrc:["/b3.svg","/b1.svg","/b2.svg"],
    imgurl:["/b5.svg","/b6.svg","b7.svg"]


  },
  Orthorexia:{
    explanation:"Orthorexia",
    explanationtext:"a common co-occurring eating disorder. It is characterized by a fixation or desire to eat only “healthy” foods, or to avoid entire food groups. Every person suffering with orthorexia has their own food preferences; foods they will eat and foods that they won’t. Orthorexics feel isolated from or superior to people who may consume a food they they themselves reject.",
    cause:["Past history of trauma","perfectionism tendencies","current or former eating disorders"],
    symptom:["An increase in concern about the health of ingredients","showing high levels of stress if “safe” or “healthy” food are not available,","inability to eat anything but a narrow group of foods deemed “pure” or “healthy”"],
    piedegree:"conic-gradient(#26325B 90deg, #E67571 0 270deg, #E67571 0)",
    pietext1:"a study has found that",
    piepercent:"25%",
    pietext2:"of students attending university experience symptoms of orthorexia",
    bgcolor:"#FFC1C2",
    imgsrc:["/A1.svg","/o3.svg","/A3real.svg"],
    imgurl:["/A4.svg","/o6real.svg","/o5reall.svg"]

  },
  Binge:{
    explanation:"Binge Eating (BED)",
    explanationtext:"is commonly known by compulsive overeating or consuming abnormal amounts of food while feeling unable to stop and a loss of control. Binge eating episodes are typically classified as occurring on average a minimum of twice per week for a duration of six months.",
    cause:["Depression","The causes are unknown however genetics, biological factrs, long term dieting and psychological issues increase risk","The causes are unknown however genetics, biological factrs, long term dieting and psychological issues increase risk"],
    symptom:["Feeling that your eating behavior is out of control","out of control eating behavior","eating when full or not hungry"],
    piedegree:"conic-gradient(#26325B 108deg, #E67571 0 252deg, #E67571 0)",
    pietext1:"Up to",
    piepercent:"30%",
    pietext2:"of those looking into weight loss treatments likely show symptoms of BED",
    bgcolor:"#FFC1C2",
    imgsrc:["/A4.svg","/Binge1reall.svg","/Binge1reall.svg"],
    imgurl:["/b2.svg","/b2.svg","/Binge2.svg"]

  },
  ExcessiveExercise:{
    explanation:"Excessive Exercise",
    explanationtext:"Exercise and nutrition are foundational to good health, but extreme behaviors can be a red flag indicating unhealthy behaviors. Examples of this include excessive exercise, weight obsessions, bulimia, anorexia and binge eating disorders.",
    cause:["Physical 'burnout' ","body disphoris/body image disorder","unhealthy obsession/addiction with excercise"],
    symptom:["Feeling sore muscles or heavy limbs.","reducing other activites to make more time for exercising","inabiity to stick to reduced workout routines"],
    piedegree:"conic-gradient(#26325B 144deg, #E67571 0 216deg, #E67571 0)",
    pietext1:"out of those who suffer from an eating disorder",
    piepercent:"40%",
    pietext2:"also suffer from compulsive exercise",
    bgcolor:"#FFC1C2",
    imgsrc:["/Ex2.svg","/A3real.svg","/Ex1real.svg"],
    imgurl:["/Ex1real.svg","/Ex3.svg","/exerciseeee.svg"]

>>>>>>> 2218303fe23afa29421b502168e8cf6928275de8
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

<<<<<<< HEAD
const [key, setKey] = useState("Anorexia")
=======


const [key, setKey] = useState("Anorexia")
const [sub_ind, setSubInd] = useState(0);
const [sub_ind2, setSubInd2] = useState(0);
>>>>>>> 2218303fe23afa29421b502168e8cf6928275de8

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
    
<<<<<<< HEAD
    <JuheeCont>
      <NavBar onTxt2Click={()=>HandleExplanation("Bulimia")} onTxt1Click={()=>HandleExplanation("Anorexia")} onTxt3Click={()=>HandleExplanation("Orthorexia","a common co-occurring eating disorder. It is characterized by a fixation or desire to eat only “healthy” foods, or to avoid entire food groups. Every person suffering with orthorexia has their own food preferences; foods they will eat and foods that they won’t. Orthorexics feel isolated from or superior to people who may consume a food they they themselves reject.","Past history of trauma","An increase in concern about the health of ingredients", "conic-gradient(#26325B 90deg, #E67571 0 270deg, #E67571 0)","a study has found that","25%","of students attending university experience symptoms of orthorexia")} onTxt4Click={()=>HandleExplanation("Binge Eating (BED)","is commonly known by compulsive overeating or consuming abnormal amounts of food while feeling unable to stop and a loss of control. Binge eating episodes are typically classified as occurring on average a minimum of twice per week for a duration of six months.","Depression","Feeling that your eating behavior is out of control","conic-gradient(#26325B 108deg, #E67571 0 252deg, #E67571 0)","Up to","30%","of those looking into weight loss treatments likely show symptoms of BED")} onTxt5Click={()=>HandleExplanation("Excessive Exercise","Exercise and nutrition are foundational to good health, but extreme behaviors can be a red flag indicating unhealthy behaviors. Examples of this include excessive exercise, weight obsessions, bulimia, anorexia and binge eating disorders.","Physical 'burnout' ","Feeling sore muscles or heavy limbs." ,"conic-gradient(#26325B 144deg, #E67571 0 216deg, #E67571 0)","out of those who suffer from an eating disorder","40%","also suffer from compulsive exercise")}  routeTo="/ed"/>
      <JuheeDiv>
        <Whitebg  bold={data[key].explanation} text={data[key].explanationtext}/>
      </JuheeDiv>
      <JuheeDiv>
      <JuheeDiv2>
      <CauseCard onLeftClick ={HandleCauseLeft} onRightClick ={HandleCauseRight} toptext="Potential Causes" bottomcausetext={causetext} bottomcausetext={data[key].cause}/>
      </JuheeDiv2>
      <JuheeDiv2>
      <SymptomCard onLeftClick ={HandleSymptomLeft} onRightClick ={HandleSymptomRight} toptext="Symptoms" bottomsymptomtext={symptomtext} symptomiconimg={symptomimg} bottomsymptomtext={data[key].symptom}/>
=======
    <JuheeCont bgcolor={data[key].bgcolor} >
      <NavBar 

      onTxt2Click={()=>HandleExplanation("Bulimia")} 
      
      onTxt1Click={()=>HandleExplanation("Anorexia")} 
      
      onTxt3Click={()=>HandleExplanation("Orthorexia")} 
      
      onTxt4Click={()=>HandleExplanation("Binge")} 
      
      onTxt5Click={()=>HandleExplanation("ExcessiveExercise")}  routeTo="/ed"/>
      
      <JuheeDiv>
      <Whitebg  bold={data[key].explanation} text={data[key].explanationtext}/>
      </JuheeDiv>
      <JuheeDiv>
      <JuheeDiv2>
      <JuheeH3>Potential Causes</JuheeH3>
      <MiddleIcons>
      <LeftArrow onLeftClick ={()=>HandleCauseCard(sub_ind-1)}  />
      <CauseCard imgurl={data[key].imgsrc[sub_ind]} bottomcausetext={data[key].cause[sub_ind]}  />
      <RightArrow  onRightClick ={()=>HandleCauseCard(sub_ind+1)}   />
      </MiddleIcons>
      </JuheeDiv2>
      <JuheeDiv2>
      <JuheeH3>Symptoms</JuheeH3>
      <MiddleIcons>
      <LeftArrow onLeftClick ={()=>HandleSymptomCard(sub_ind2-1)}/>
      <SymptomCard  imgsrc={data[key].imgurl[sub_ind2]} bottomsymptomtext={data[key].symptom[sub_ind2]} />
      <RightArrow onRightClick ={()=>HandleSymptomCard(sub_ind2+1)}   />
      </MiddleIcons>
>>>>>>> 2218303fe23afa29421b502168e8cf6928275de8
      </JuheeDiv2>
      </JuheeDiv>
      <JuheeDiv>
        <PieChart degree={data[key].piedegree} text1={data[key].pietext1} percentage={data[key].piepercent} text2={data[key].pietext2} />
<<<<<<< HEAD
=======


>>>>>>> 2218303fe23afa29421b502168e8cf6928275de8
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

