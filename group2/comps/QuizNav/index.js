
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
   height: 117px;
   border-radius: 0 0 15px 15px;
`;
 
const NavTitle = styled.h2`
   color: #26325B;
   font-family: Montserrat;
   font-size: 30px;
   margin-top: 44px
`;
const Row = styled.div`
   display:flex;
   flex-direction: row;
   width: 100%;
   height:50px;
   padding:5px;
   justify-content: center;
   // background-color:black;
`;
 
const Button = styled.button`
   color: #26325B;
   font-family: DIN alternate;
   font-size: 14px;
   margin: 4px;
   border:none;
   background-color:white;
  
`;
 
const QuizNav = ({
  Title="HEllO",
  route="/resources"

}) => {
   
   return <NavCont style={{
       display: "inline-flex",
       width: 414,
       height:117
   }}>
       <BackDiv>
   <Back routeTo={route} ></Back>
   </BackDiv>
 
       <NavTitle>
          {Title}
       </NavTitle>
      <Row></Row>
   </NavCont>
}
 
export default QuizNav;