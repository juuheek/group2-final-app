import Head from 'next/head'
// import styles from '../styles/global.css'
import styled from 'styled-components';
import NavyButton from '../comps/NavyButton'
import Whitebg from '../comps/JuheeWhitebg'
import Greybg from '../comps/JuheeGreybg'
import CauseCard from '../comps/JuheeCauseCard'

const JuheeComps = styled.div`
  .whole{
    background-color:#E8ECF0;
    padding:20px;
   
  }
`;
export default function Home() {
  return (
    <JuheeComps>
    <div className="whole">

     <NavyButton text="Let's get started" bgcolor="transparent" color="#26325B" border="1px #26325B solid" />
      <NavyButton text="Agree and Continue"bgcolor="transparent" color="#26325B" border="1px #26325B solid" /> 
      <NavyButton text="See All " bgcolor="transparent" color="#26325B" border="1px #26325B solid" />
      <NavyButton text="Get Help" bgcolor="transparent" color="#26325B" border="1px #26325B solid" />
      <NavyButton text="Self Diagnose" bgcolor="transparent" color="#26325B" border="1px #26325B solid" />
      <NavyButton text="Next" />
      <NavyButton text="Get Help" />
      <NavyButton text="Get Information" />
      <Whitebg />
      <Whitebg bold ="Bulimia Nervosa" text="a psychological and severe life-threatening eating disorder described by the ingestion of an abnormally large amount of food in short time period, followed by an attempt to avoid gaining weight by purging what was consumed."/>
      <Whitebg bold ="Binge Eating Disorder (BED)" text="commonly known by compulsive overeating or consuming abnormal amounts of food while feeling unable to stop and a loss of control. Binge eating episodes are typically classified as occurring on average a minimum of twice per week for a duration of six months." height="300"/>
      <Whitebg bold ="Orthorexia" text="a common co-occurring eating disorder. It is characterized by a fixation or desire to eat only “healthy” foods, or to avoid entire food groups. Every person suffering with orthorexia has their own food preferences; foods they will eat and foods that they won’t. Orthorexics feel isolated from or superior to people who may consume a food they they themselves reject." height="371"/>
      <Whitebg bold ="Excessive Exercise" text="Exercise and nutrition are foundational to good health, but extreme behaviors can be a red flag indicating unhealthy behaviors. Examples of this include excessive exercise, weight obsessions, bulimia, anorexia and binge eating disorders."/>
   
      <Greybg/>
      <CauseCard/>
    </div>

        
    </JuheeComps>
  )
}
