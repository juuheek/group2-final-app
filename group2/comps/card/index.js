import React from 'react'
import styled from 'styled-components';
import {RiStethoscopeLine} from 'react-icons/ri';
import {IoMdArrowDroprightCircle, IoMdArrowDropleftCircle} from 'react-icons/io';

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
text-align: center;
`;

const Margin = styled.div`
    display:flex;
    position: relative;
    right: 80px;
`;



const Card = () => {

    return  <CardContainer>
            <FirstCard>
                <RiStethoscopeLine color="#E67571"></RiStethoscopeLine>
                <Text>Anorexia</Text>
            </FirstCard>
            <IoMdArrowDropleftCircle color="#E67571" />
            <SecondCard>
            <RiStethoscopeLine color="#E67571"></RiStethoscopeLine>
                <Text>Orthorexia</Text>
            </SecondCard>
            <FourthCard>
            <RiStethoscopeLine color="#E67571"></RiStethoscopeLine>
                <Text>Bulimia</Text>
            </FourthCard>
            <ThirdCard>
            <RiStethoscopeLine color="#E67571"></RiStethoscopeLine>
                <Text>Binge</Text>
            </ThirdCard>
            <Margin>
            <IoMdArrowDroprightCircle color="#E67571" />
            </Margin>
            <FifthCard>
            <RiStethoscopeLine color="#E67571"></RiStethoscopeLine>
                <Text>Excessive Exercise</Text>
            </FifthCard>
            </CardContainer>
}

export default Card;