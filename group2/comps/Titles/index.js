import React from 'react';
import styled from 'styled-components';

const TitleCont = styled.div`
    display: flex;
    flex-direction:row;
    margin-top: 20px;
`;

const EatingDisorder = styled.div`
    font-family: Montserrat;
    font-size: 18px;
    font-weight: bold;
    margin: 20px;
    color: ${props => props.edcolor};
`;

const EatingHabits = styled.div`
    font-family: Montserrat;
    font-size: 18px;
    font-weight: bold;
    margin: 20px;
    color: ${props=> props.ehcolor};
`;

const Titles = ({

    onLeftClick = () => {},
    onRightClick = () => {},
    txt1="Eating Disorder",
    txt2="Eating Habits",
    edcolor="#E67571",
    ehcolor="#E67571"

}) => {

    return <TitleCont>

        <EatingDisorder edcolor={edcolor} onClick={onLeftClick}>{txt1}</EatingDisorder>

        <EatingHabits ehcolor={ehcolor} onClick={onRightClick}>{txt2}</EatingHabits>

    </TitleCont>

}

export default Titles