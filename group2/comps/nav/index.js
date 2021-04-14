import React from "react";
import styled from "styled-components";

import Arrow from '../../images/BackArrow.svg';
import Back from '../back';

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
position: relative;
bottom: 3px;
`;

const NavCont = styled.div`
    display:inline-flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: white;
    border: 1px solid black;
    width: 414px:
    height: 194px;
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
    justify-content: center;
    // background-color:black;
`;

const Menus = styled.p`
    color: #26325B;
    font-family: DIN alternate;
    font-size: 14px;
    margin:${props => props.margin};
    margin-top: 30px;
`;

const Nav = ({ 
    title="Anorexia",
    txt1="Bulimia",
    txt2="Binge",
    txt3="Orthorexia",
    txt4="Excessive Exercise",
    margin="15px",
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
    <Back></Back>

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
}

export default Nav;