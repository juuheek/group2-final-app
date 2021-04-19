import React from 'react';
import styled from 'styled-components';
import {FaHandsHelping} from 'react-icons/Fa'


const HelplineInput = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 216px;
    height: 247px;
    background-color: #26325B;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
`;

const ClinicName = styled.div`
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #FFFFFF;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
`;

const ClinicAddress = styled.div`
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #E79A74;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
`;

const Helpline = () => {
    return <div>
            <HelplineInput size={100}>
            <div>
                <FaHandsHelping color="white" />
                <ClinicName> Richmond Eating Disorders</ClinicName>
                <ClinicAddress>8100 Granville Ave, Rchmond, BC V6Y 3T6</ClinicAddress>
                </div>
            </HelplineInput>
            </div>
}

export default Helpline;