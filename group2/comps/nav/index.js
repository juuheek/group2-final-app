import React from "react";
import { RiHealthBookLine } from "react-icons/ri";
import styled from "styled-components";


// import Arrow from '../../images/BackArrow.svg';
// import Back from '../back';

const BackCont = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    top: 50px;
    right: 150px;
`;
const BackImg = styled.image`
display: inline-block;
width: 24px;
height: 24px;
`;

const Text = styled.h2`
font-family: DIN alternate;
font-size: 18px;
color:#8A8A8A;
margin: 0;
`;
 
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
    height: 194px;
    border-radius: 0 0 15px 15px;

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
        height: 194,
    }}>
        {/* <BackCont>
        <BackImg>
            <img src={Arrow} alt="Arrow Icon"/>
        </BackImg>
        <Text>BACK</Text>
    </BackCont> */}
    {/* <Back></Back> */}

        <Title >
            {title}
        </Title>
        <Row>
            <Menus margin = {margin}>{txt1}</Menus>
            <Menus margin = {margin}>{txt2}</Menus>
            <Menus margin = {margin}>{txt3}</Menus>
            <Menus margin = {margin}>{txt4}</Menus>
        </Row>
    </NavCont>

 
   return <NavCont style={{
       display: "inline-flex",
       width: 414,
     
   }}>
       <BackDiv>
   <Back ></Back>
   </BackDiv>
 
       <Title>

    return <NavCont style={{
        display: "inline-flex",
        width: 414,
        height: 194,
    }}>
        <BackDiv>
    <Back ></Back>
    </BackDiv>

        <Title >
            {title}
        </Title>
        <Row>
            <Menus margin = {margin}>{txt1}</Menus>
            <Menus margin = {margin}>{txt2}</Menus>
            <Menus margin = {margin}>{txt3}</Menus>
            <Menus margin = {margin}>{txt4}</Menus>
        </Row>
    </NavCont>
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