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
   width: 414px:
   height: 60px;
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
 
   return <NavCont style={{
       display: "inline-flex",
       width: 414,
     
   }}>
       <BackDiv>
   <Back ></Back>
   </BackDiv>
 
       <Title>

       </Title>
       <Row>
           <Button onClick = {onTxt1Click} color={color}> Anorexia</Button>
           <Button onClick = {onTxt2Click} color={color}>Bulimia</Button>
           <Button onClick = {onTxt3Click} color={color}>Orthorexia</Button>
           <Button  onClick = {onTxt4Click} color={color}>Binge</Button>
           <Button  onClick = {onTxt5Click} color={color}>Excessive Exercise</Button>
       </Row>
   </NavCont>
}
 
export default Nav;