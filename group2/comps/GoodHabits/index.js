
import React from 'react'
import styled from 'styled-components';
import {BsEggFried} from 'react-icons/bs';
import {GiWaterDrop} from 'react-icons/gi';
import {GiMeat} from 'react-icons/gi';
import {GiForkKnifeSpoon} from 'react-icons/gi';
import {GiFruitBowl} from 'react-icons/gi';

const CardContainer = styled.div`
margin-top: 17px;
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
left: 50px;
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
right: 230px
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
right: 250px

`;

const Text = styled.h2`
font-family: Montserrat;
font-size: 18px;
font-weight: bold;
color: #26325B;
margin-left:10px;
`;



const Card = () => {

    return <div>
            <CardContainer>
            <FirstCard>
                <BsEggFried size="100" color="#26325B"/>
            </FirstCard>
            <SecondCard>
                <GiWaterDrop size="100" color="#26325B"/>
            </SecondCard>
            <FourthCard>
                <GiMeat size="100" color="#26325B" />
            </FourthCard>
            <ThirdCard>
                <GiForkKnifeSpoon size="100" color="#26235B" />
            </ThirdCard>
            <FifthCard>
                <GiFruitBowl size="100" color="#26325B" />
            </FifthCard>
            </CardContainer>
    </div>
}

export default Card;