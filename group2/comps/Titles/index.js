import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';


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

    onLeftClick = () => {},
    onRightClick = () => {},
    txt1="Eating Disorders",
    txt2="Eating Habits",
    edcolor="#E67571",
    ehcolor="#26325B",
    first="/habits",
    second="/badhabits",

}) => {

    const router = useRouter();

    return <TitleCont>

        <EatingDisorder onClick={()=>router.push(first)} edcolor={edcolor}>{txt1}</EatingDisorder>

        <EatingHabits onClick={()=>router.push(second)} ehcolor={ehcolor} >{txt2}</EatingHabits>

    </TitleCont>

}

export default Titles