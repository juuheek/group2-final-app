import { motion } from "framer-motion";
import React from "react";
import { RiHealthBookLine } from "react-icons/ri";
import styled from "styled-components";
 
import Back from '../back';
 
const BackDiv = styled.div`
position: relative;
right: 150px;
top: 35px
`;
 
const NavCont = styled.div`
   display:inline-flex;
   justify-content: center;
   flex-direction: column;
   align-items: center;
   background-color: white;
   ${'' /* border: 1px solid black; */}
   min-width: 100vw;
   width: 100%;
   height: 130px;
   border-radius: 0 0 15px 15px;
`;
 
const Title = styled.h2`
   color: #26325B;
   font-family: DIN alternate;
   font-size: 30px;
   margin-top: 44px
`;
const Row = styled.div`
   display:flex;
   flex-direction: row;
   width: 100%;
   height:100%;
   padding:5px;
   justify-content: center;
   // background-color:black;
`;
 
const Button = styled.button`
   color:${props=>props.color};
   font-family: DIN alternate;
   font-size: 14px;
   margin: 4px;
   border:none;
   background-color:white;
  
`;
 
const Nav = ({
   color="#26325B",
   onTxt1Click = () => {},
   onTxt2Click= () => {},
   onTxt3Click= () => {},
   onTxt4Click= () => {},
   onTxt5Click= () => {}

}) => {
 
   return <NavCont
>
       <BackDiv>
   <Back routeTo="/ed" ></Back>
   </BackDiv>
 
       <Title>

       </Title>
       <Row>
           <motion.div   whileHover={{ scale: 0.9 }}
    whileTap={{ scale: 0.9 }}><Button onClick = {onTxt1Click} color={color}> Anorexia</Button></motion.div>
          <motion.div   whileHover={{ scale: 0.9 }}
    whileTap={{ scale: 0.9 }}> <Button onClick = {onTxt2Click} color={color}>Bulimia</Button></motion.div>
          <motion.div   whileHover={{ scale: 0.9 }}
    whileTap={{ scale: 0.9 }}> <Button onClick = {onTxt3Click} color={color}>Orthorexia</Button></motion.div>
          <motion.div   whileHover={{ scale:0.9 }}
    whileTap={{ scale: 0.9 }}> <Button  onClick = {onTxt4Click} color={color}>Binge</Button></motion.div>
          <motion.div   whileHover={{ scale: 0.9 }}
    whileTap={{ scale: 0.9 }}> <Button  onClick = {onTxt5Click} color={color}>Excessive Exercise</Button></motion.div>
    </Row>
   
   </NavCont>
}
 
export default Nav;
