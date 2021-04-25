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
    color: #E67571;
`;

const EatingHabits = styled.div`
    font-family: Montserrat;
    font-size: 18px;
    font-weight: bold;
    margin: 20px;
    color: #26325B;
`;

const Titles = ({

    onLeftClick = () => {},
    onRightClick = () => {},

}) => {

    return <TitleCont>

        <EatingDisorder onClick={onLeftClick}>Eating Disorder</EatingDisorder>

        <EatingHabits onClick={onRightClick}>Eating Habits</EatingHabits>

    </TitleCont>

}

export default Titles