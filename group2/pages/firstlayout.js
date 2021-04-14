import Head from 'next/head'
// import styles from '../styles/global.css'
import styled from 'styled-components';
import NavyButton from '../comps/NavyButton'
import Whitebg from '../comps/JuheeWhitebg'
import Greybg from '../comps/JuheeGreybg'
import CauseCard from '../comps/JuheeCauseCard'

const cont = styled.div`
 .boxcontainer{
   width:300px;
   height:600px;
   background-color:#000;
 }
   
   
  
`;
export default function Home() {
  return (
    <cont>
    
    <div className="boxcontainer">

      <Greybg />
 
     
   
      
    </div>
  
    

        
    </cont>
  )
}
