import React from 'react'
import styled from 'styled-components';

const Circle = styled.span`
height: 100px;
width: 100px;
background-color: #bbb;
border-radius: 50%;
display: inline-block;
color:#E67571;
`

const Piechart = () => {

    return <div>
            <Circle></Circle>
    </div>
}

export default Piechart;