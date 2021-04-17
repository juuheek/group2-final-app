import Head from 'next/head'
// import styles from '../styles/global.css'
import styled from 'styled-components';
import NavyButton from '../comps/NavyButton'
import Whitebg from '../comps/JuheeWhitebg'
import NavBar from '../comps/nav'
import CauseCard from '../comps/JuheeCauseCard'
import PieChart from '../comps/pie-chart'

const JuheeCont = styled.div`

   max-width:414px;
   max-height:1483px;
   background-color:#E8ECF0;
   display:flex;
   flex-direction:column;
   justify-content:center;
   align-items:center;
   
`;
const JuheeDiv = styled.div`
  margin:30px;
`;
const JuheeSmallDiv = styled.div`
  margin:15px;
`;
export default function EatingDisorders() {
  return (
    <JuheeCont>
    <NavBar/>
    
    <JuheeDiv>
      <Whitebg/>
    </JuheeDiv>
    <JuheeDiv>
    <JuheeSmallDiv>
    <CauseCard/>
    </JuheeSmallDiv>

    <JuheeSmallDiv>
    <CauseCard toptext="symptoms" bottomtext="Extremely restrictive eating"/>
    </JuheeSmallDiv>
      </JuheeDiv>
      <JuheeDiv>
      <PieChart/>
      </JuheeDiv>
      <JuheeDiv>
      <JuheeSmallDiv>

      <NavyButton text="Get Help" bgcolor="transparent" color="#26325B" border="1px #26325B solid" />
      </JuheeSmallDiv>
      <JuheeSmallDiv>
      <NavyButton text="Self Diagnose" bgcolor="transparent" color="#26325B" border="1px #26325B solid" />
</JuheeSmallDiv>
      </JuheeDiv>
   
     
   
      

  
    

        
    </JuheeCont>
  )
}
