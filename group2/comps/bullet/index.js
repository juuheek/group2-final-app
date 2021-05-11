import React from "react";
import styled from "styled-components";


const BulletCont = styled.div`
    display: flex;
    ${'' /* width:160px;
    height:126px; */}
    flex-direction: column;
`;

const Bullet = styled.div`
    width: 8px;
    height: 8px;
    border-radius: 10px;
    background-color: #E67571;
    margin-right:5px
`;

const Desc = styled.p`
    color: #FFFFFF;
    margin:5px;
`;

const Row = styled.div`
    display:flex;
    flex-direction: row;
    align-items:center;
`;


const BulletPoints = ({
    text="Skipping Breakfast",
    text2="Emotional eating",
    text3="Distracted eating",
    text4="Extreme concern about body shape",
}) => {

    return <BulletCont>
        
        <Row>
        <Bullet></Bullet>
        <Desc>{text}</Desc>
        </Row>

        <Row>
        <Bullet></Bullet>
        <Desc>{text2}</Desc>
        </Row>
        
        <Row>
        <Bullet></Bullet>
        <Desc>{text3}</Desc>
        </Row>

        <Row>
        <Bullet></Bullet>
        <Desc>{text4}</Desc>
        </Row>


    </BulletCont>
}

export default BulletPoints;
