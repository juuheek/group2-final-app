import React from 'react'
import styled from 'styled-components';

const Circle = styled.div`
display:flex;
justify-content:center;
align-items:center;
height: 200px;
width: 200px;
background-color: #E67571;
border-radius: 50%;
animation: spin 3s linear infinite,
             bg 6s step-end infinite;
background-image: ${props => props.degree};

`;

const Percentage = styled.p`
font-family: Montserrat;
font-style: normal;
font-weight: bold;
font-size: 25px;
color: #FFF27C;
margin: 10px;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)
`;

const Fact = styled.p`
font-family: Arial;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 18px;
text-align: center;
color: #FFFFFF;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
padding: 10px;
`;

const Piechart = ({
    degree="conic-gradient(#26325B 40deg, #E67571 0 235deg, #E67571 0);",
    text1="Eating Disorders mortality rate is ",
    percentage="10-15%",
    text2="also suffer from compulsive exercise"



}) => {

    return <Circle degree={degree}> <Fact>{text1}<Percentage>{percentage}</Percentage>{text2}</Fact></Circle>

}

export default Piechart;