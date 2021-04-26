
import React from 'react'
import styled from 'styled-components';
import {BsEggFried} from 'react-icons/bs';
import {GiWaterDrop} from 'react-icons/gi';
import {GiMeat} from 'react-icons/gi';
import {GiForkKnifeSpoon} from 'react-icons/gi';
import {GiFruitBowl} from 'react-icons/gi';
import {IoMdArrowDroprightCircle, IoMdArrowDropleftCircle} from 'react-icons/Io';

const CardContainer = styled.div`
margin-top: 17px;
margin-left: 20px;
min-width: 318px;
display: flex;
flex-direction:row;
justify-content: center;
align-items: center;
`;

const FirstCard = styled.div`
display:flex;
flex-direction: row;
justify-content: center;
align-items: center;
background-color: #E8ECF0;
height: 247px;
width: 216px;
z-index: 4;
border-radius: 15px;
left: 290px;
position: relative;
`;


const SecondCard = styled.div`
display:flex;
justify-content: center;
align-items: center;
background-color: #E67571;
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
left:40px;

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
right: 250px
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
right: 270px

`;

const Text = styled.h2`
font-family: Montserrat;
font-size: 18px;
font-weight: bold;
color: #26325B;
margin-left:10px;
`;

const Margin = styled.div`
    display:flex;
    position: relative;
    right: 80px;
`;



const Card = () => {

    return <CardContainer>
            <FirstCard>
                <BsEggFried size="100" color="#26325B"/>
            </FirstCard>
            <IoMdArrowDropleftCircle color="#E67571" />
            <SecondCard>
                <GiWaterDrop size="100" color="#26325B"/>
            </SecondCard>
            <FourthCard>
                <GiMeat size="100" color="#26325B" />
            </FourthCard>
            <ThirdCard>
                <GiForkKnifeSpoon size="100" color="#26235B" />
            </ThirdCard>
            <Margin>
            <IoMdArrowDroprightCircle color="#E67571" />
            </Margin>
            <FifthCard>
                <GiFruitBowl size="100" color="#26325B" />
            </FifthCard>
            </CardContainer>
}

export default Card;