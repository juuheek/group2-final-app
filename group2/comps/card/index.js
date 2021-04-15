import React from 'react'
import styled from 'styled-components';

const CardContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

const FirstCard = styled.div`
display:flex;
justify-content: center;
align-items: center;
background-color: lightgrey;
height: 247px;
width: 216px;
border-radius: 15px;
z-index: 3;
position: relative;
`

const SecondCard = styled.div`
display:flex;
justify-content: center;
align-items: center;
background-color: #E67571;
height: 222px;
width: 262px;
border-radius: 15px;
z-index: 2;
position: absolute;
`

const ThirdCard = styled.div`
display:flex;
justify-content: center;
align-items: center;
background-color:#E79A74;
height: 200px;
width: 318px;
border-radius: 15px;
z-index: 1;
position: absolute;
`




const Card = () => {

    return <div>
            <CardContainer>
            <FirstCard>
                <div>
                    <img src="../../public/Vector.svg"/>
                </div>
            </FirstCard>
            <SecondCard></SecondCard>
            <ThirdCard></ThirdCard>
            </CardContainer>
    </div>
}

export default Card;