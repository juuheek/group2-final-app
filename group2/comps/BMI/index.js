import React from 'react';
import styled from 'styled-components';

const BMIcard = styled.div`
    border-radius: 5px;
    background-color: #E8ECF0;
    padding: 10px;
    margin: 10px;

`;

const BMIinfo = styled.p`
    align-text: left;
    color: #26325B;
    text-size: 10px;
    
`;

const Pbreak = styled.br`
`;

const Bold = styled.p`
    font-weight: bold;
    display: inline;
`;

// const BMI = ({

// })=>{
    function BMI(props){
    return (props.trigger) ? (<BMIcard>
    <BMIinfo>
        <Bold>Body Mass Index (BMI)</Bold> is a person’s weight in kilograms divided by the square of height in meters. 
        A high BMI can be an indicator of high body fatness.
        <Pbreak></Pbreak>
        <Pbreak></Pbreak>
        To calculate BMI, see the Adult BMI Calculator or determine BMI by finding your height and weight by clicking the button below 
    </BMIinfo>
    </BMIcard>
    ) : "";
  }

export default BMI;