import React from 'react';
import styled from 'styled-components';

const TextboxInput = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #ebebebc2;
    border-radius: 10px;
    width: 315px;
    height: 128px;
`;

const Textbox = ({
    text = "Based on your results you might have an eating disorder. You can use our app to get help and get more information."
}) => {
    return <TextboxInput>
                {text}
        </TextboxInput>

}

export default Textbox;
