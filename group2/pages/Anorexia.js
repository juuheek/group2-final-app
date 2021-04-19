
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
export default function Anorexia () {

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

const [explanation, explanationbold] = useState ("nothing text");
const HandleExplanation = () =>{
  explanationtext("Bulimia Nervosa")
}

  return (
    <JuheeComps >
    
    <JuheeCont>
      <NavBar  />
      <JuheeDiv>
        <Whitebg onTxt2Click={HandleExplanation} explanationbold={explanation}/>
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
        <PieChart/>
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

