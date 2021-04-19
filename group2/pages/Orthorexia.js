
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
export default function Orthorexia () {

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

  const [navbartitletext, navbartitle] = useState("bold");
  const [navbartxt1text, navbartxt1] = useState("text");
  const HandleTxt1Text = () => {
    navbartitle(" Bulimia");
    navbartxt1("Anorexia");
  }


  return (
    <JuheeComps >
    
    <JuheeCont>
      <NavBar title="Orthorexia" txt1="Anorexia" txt2="Bullimia" txt3="Binge"onTxt1Click={HandleTxt1Text} navbartitle={navbartitletext} navbartxt1={navbartxt1text} />
      <JuheeDiv>
        <Whitebg bold="Orthorexia " text="a common co-occurring eating disorder. It is characterized by a fixation or desire to eat only “healthy” foods, or to avoid entire food groups. Every person suffering with orthorexia has their own food preferences; foods they will eat and foods that they won’t. Orthorexics feel isolated from or superior to people who may consume a food they they themselves reject." height="300px"/>
      </JuheeDiv>
      <JuheeDiv>
      <JuheeDiv2>
      <CauseCard onLeftClick ={HandleCauseLeft} onRightClick ={HandleCauseRight} toptext="Potential Causes" bottomcausetext={causetext}/>
      </JuheeDiv2>
      <JuheeDiv2>
      <SymptomCard onLeftClick ={HandleSymptomLeft} onRightClick ={HandleSymptomRight} toptext="Symptoms" bottomsymptomtext={symptomtext} symptomiconimg={symptomimg}/>
      </JuheeDiv2>
      </JuheeDiv>
      <JuheeDiv>
      <JuheeDiv2>
      <NavyButton text="Self Diagnose" bgcolor="transparent" color="#26325B" border="1px #26325B solid" />
      </JuheeDiv2>
      <JuheeDiv2>
      <NavyButton text="Get Help" bgcolor="transparent" color="#26325B" border="1px #26325B solid" />
      </JuheeDiv2>
      </JuheeDiv>
      
    </JuheeCont>
  
  
        
    </JuheeComps>






  )
}

