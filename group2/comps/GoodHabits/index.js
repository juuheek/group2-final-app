
import React, { useState } from 'react'
import styled from 'styled-components';
import {BsEggFried} from 'react-icons/bs';
import {GiWaterDrop} from 'react-icons/gi';
import {GiMeat} from 'react-icons/gi';
import {GiForkKnifeSpoon} from 'react-icons/gi';
import {GiFruitBowl} from 'react-icons/gi';
import {IoMdArrowDroprightCircle, IoMdArrowDropleftCircle} from 'react-icons/io';

const CardContainer = styled.div`
margin-top: 17px;
margin-left: 20px;
min-width: 318px;
display: flex;
flex-direction:row;
justify-content: center;
align-items: center;
width:100vw;

`;

const FirstCard = styled.div`
display:flex;
flex-direction: row;
justify-content: center;
align-items: center;
background-color: ${props=>props.first};
height: 247px;
width: 216px;
z-index: 4;
border-radius: 15px;
left: 205px;
position: relative;
`;


const SecondCard = styled.div`
display:flex;
justify-content: center;
align-items: center;
background-color: ${props=>props.second};
height: 222px;
width: 131px;
border-radius: 15px;
z-index: 2;
position: relative;
left: 30px;
`;

const FourthCard = styled.div`
display:flex;
justify-content: center;
align-items: center;
background-color: #E67571;
height: 222px;
width: 131px;
border-radius: 15px;
z-index: 2;
position: relative;
left:50px;

`;

const ThirdCard = styled.div`
display:flex;
justify-content: center;
align-items: center;
background-color:#E79A74;
height: 200px;
width: 159px;
border-radius: 15px;
z-index: 1;
position: relative;
right: 220px;
`;

const FifthCard = styled.div`
display:flex;
justify-content: center;
align-items: center;
background-color:#E79A74;
height: 200px;
width: 159px;
border-radius: 15px;
z-index: 1;
position: relative;
right: 115px

`;

const Text = styled.h2`
font-family: Montserrat;
font-size: 18px;
font-weight: bold;
color: #26325B;
margin-left:10px;
`;

const LeftDot = styled.div`
display:flex;
position:relative;
left: -30px;
`;

const RightDot = styled.div`
display:flex;
position:relative;
right: -5px;
`;



const Card = ({

    // onLeftClick = () => {},
    // onRightClick = () => {},
    first="#E8ECF0",
    second="#E67571"

}) => {
    // const [color, cardcolor] = useState ("#E8ECF0");
    // cardcolor(first)
    
    return <CardContainer>
            <FirstCard first={first}>
                <BsEggFried size="100" color="#26325B"/>
            </FirstCard>
            <LeftDot>
            <IoMdArrowDropleftCircle color="#E67571" />
            </LeftDot>
            <SecondCard second={second}>
                <GiWaterDrop size="100" color="#26325B"/>
            </SecondCard>
            <FourthCard>
                <GiMeat size="100" color="#26325B" />
            </FourthCard>
            <ThirdCard>
                <GiForkKnifeSpoon size="100" color="#26235B" />
            </ThirdCard>
            <RightDot>
            <IoMdArrowDroprightCircle color="#E67571" />
            </RightDot>
            <FifthCard>
                <GiFruitBowl size="100" color="#26325B" />
            </FifthCard>
            </CardContainer>
}

export default Card;