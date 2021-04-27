import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';
import { motion } from "framer-motion"
import {FaHospitalAlt} from 'react-icons/fa';

const MinHelplineCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  width: ${props=>props.wt}px;
  height: ${props=>props.ht}px;
  border-radius: 15px;
  background-color: #FFF;
  margin: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

`;

const MinHelplineBody = styled.p`
  font-size: 25px;
  text-align: center;
`;

const MinHelplineAddress = styled.p`
  font-size: 18px;
  text-align: center;
`;

const MinHelplinePhone = styled.p`
  font-size: 18px;
  text-align: center;
`;


const MinHelpline = ({
  doctorname= "Kelty Eating Disorders",
  width = 174,
  height = 133,
  address="400 Circle Road, Stony Brook, NY, USA",
  phone="778-888-0137",
  onCardClick=() => {}

})=>{ 
  return <MinHelplineCont wt={width} ht={height} onClick={onCardClick}>
    <MinHelplineBody>{doctorname}</MinHelplineBody>
    <MinHelplineAddress>{address}</MinHelplineAddress>
    <MinHelplinePhone>{phone}</MinHelplinePhone>

  </MinHelplineCont>
}
export default MinHelpline;
