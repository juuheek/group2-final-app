import React from 'react'
import styled from 'styled-components';
import {RiStethoscopeLine} from 'react-icons/ri';
import {IoMdArrowDroprightCircle, IoMdArrowDropleftCircle} from 'react-icons/io';

const CardContainer = styled.div`
margin-top: 17px;
display: flex;
flex-direction:row;
justify-content: center;
align-items: center;
width:100vw;
`;

const FirstCard = styled.div`
//anorexia
display:flex;
flex-direction: row;
justify-content: center;
align-items: center;
background-color: #E8ECF0;
height: 247px;
width: 216px;
z-index: 4;
border-radius: 15px;
left: 220px;
position: relative;
`;


const SecondCard = styled.div`
//orthorexia
display:flex;
justify-content: center;
align-items: center;
background-color: #E67571;
height: 200px;
width: 131px;
border-radius: 15px;
z-index: 2;
position: relative;
left: 30px;
`;

const FourthCard = styled.div`
//bullimia
display:flex;
justify-content: center;
align-items: center;
background-color: #E67571;
height: 200px;
width: 131px;
border-radius: 15px;
z-index: 2;
position: relative;
left:60px;

`;

const ThirdCard = styled.div`
//binge
display:flex;
justify-content: center;
align-items: center;
background-color:#E79A74;
height: 170px;
width: 159px;
border-radius: 15px;
z-index: 1;
position: relative;
right: 253px
`;

const FifthCard = styled.div`
//excessive exercise
display:flex;
justify-content: center;
align-items: center;
background-color:#E79A74;
height: 170px;
width: 159px;
border-radius: 15px;
z-index: 1;
position: relative;
right: 85px

`;

const Text = styled.h2`
font-family: Montserrat;
font-size: 18px;
font-weight: bold;
color: #26325B;
margin-left:10px;
text-align: center;
`;


const LeftDot = styled.div`
display:flex;
position:relative;
left: -30px;
`;

const RightDot = styled.div`
display:flex;
position:relative;
right: -40px;
`;


const Card = ({

    text1 = "Anorexia",
    text2 = "Orthorexia",
    text3 = "Bullimia",
    text4 = "Binge",
    text5= "Excessive Exercise"

}) => {
    text1= "Anorexia" 

    return  <CardContainer>
            <FirstCard>
                <RiStethoscopeLine color="#E67571"></RiStethoscopeLine>
                <Text>{text1}</Text>
            </FirstCard>
            <LeftDot>
            <IoMdArrowDropleftCircle color="#E67571" />
            </LeftDot>
            <SecondCard>
            <RiStethoscopeLine color="#E79A74"></RiStethoscopeLine>
                <Text>{text2}</Text>
            </SecondCard>
            <FourthCard>
            <RiStethoscopeLine color="#E79A74"></RiStethoscopeLine>
                <Text>{text3}</Text>
            </FourthCard>
            <ThirdCard>
            <RiStethoscopeLine color="#E67571"></RiStethoscopeLine>
                <Text>{text4}</Text>
            </ThirdCard>
            <RightDot>
            <IoMdArrowDroprightCircle color="#E67571" />
            </RightDot>
            <FifthCard>
            <RiStethoscopeLine color="#E67571"></RiStethoscopeLine>
                <Text>{text5}</Text>
            </FifthCard>
            </CardContainer>
}

export default Card;