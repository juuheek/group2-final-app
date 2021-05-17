import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';
import {useState} from 'react';



const TitleCont = styled.div`
    display: flex;
    flex-direction:row;
    margin-top: 20px;
`;

const EatingDisorder = styled.div`
    text-align: center;
    font-family: Montserrat;
    font-size: 18px;
    font-weight: bold;
    margin: 20px;
    color: ${props => props.edcolor};
`;

const EatingHabits = styled.div`
    text-align: center;
    font-family: Montserrat;
    font-size: 18px;
    font-weight: bold;
    margin: 20px;
    color: ${props=> props.ehcolor};
`;

const Titles = ({
    
    txt1="Eating Disorder",
    txt2="Eating Habits",
    edcolor="#E67571",
    ehcolor="#26325B",
    
    onLeftClick = () => {},
    onRightClick = () => {}

}) => {

    const router =useRouter();
    return <TitleCont>

        <EatingDisorder onClick={onLeftClick} edcolor={edcolor}>{txt1}</EatingDisorder>

        <EatingHabits onClick={onRightClick} ehcolor={ehcolor}>{txt2}</EatingHabits>

    </TitleCont>

}

export default Titles;

// onClick={()=>router.push("/habits")}
// onClick={()=>router.push("/badhabits")}