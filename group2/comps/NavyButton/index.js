import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';
import {FaHandsHelping} from 'react-icons/fa';
import { route } from 'next/dist/next-server/server/router';
import { motion } from 'framer-motion';


const ButtonCont = styled.span`

  margin:10px;

  ${'' /* margin:20px; */}

`;

const ButtonInput = styled.button`
      background-color:${props=>props.bg};
      color:${props=>props.textcolor};
      width:315px;
      height:55px;
      padding:10px;
      border-radius: 10px;
      border:${props => props.navyborder};
      font-size:18px;
      z-index:1000;
      
`;

const NavyButton = ({

  text="Next",
  bgcolor="#26325B", 
  color = "#FFF",
  border = "none",
  icon = <FaHandsHelping/>,
  routeTo='/index',
  bold

}) => {
  const router =useRouter(); 
  const HandleClick = () => {

    if(bold=="Good Eating Habits"){
      router.push("/habits")
    }else if (bold=="Anorexia Nervosa"){
      router.push("/resources")
    } else {
      router.push(routeTo)
    }
    console.log(bold)
  };
  /* instead of buttoncont i put motion.div
  min
   */
  return <motion.div onClick={HandleClick}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}>



    <ButtonInput bg={bgcolor} textcolor={color} navyborder={border}>
    {icon} {text}
    </ButtonInput>
    
  </motion.div>
}

export default NavyButton;