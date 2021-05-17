import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';
import { motion } from "framer-motion"
import {FaHospitalAlt} from 'react-icons/fa';
import { BiBorderNone } from 'react-icons/bi';
import { GiHidden } from 'react-icons/gi';

const MinHelplineCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  width: ${props=>props.wt}px;
  height: ${props=>props.ht}px;
  border-radius: 15px;
  background-color: ${props=>props.bg};
  margin: 20px;
  padding: 0 15px 0 15px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: 1s;
  transition-timing-function: ease;

`;

const MinHelplineBody = styled.p`
  font-size: 18px;
  text-align: center;
`;

const MinHelplineAddress = styled.p`
  font-size: 12px;
  text-align: center;
  display: ${props=>props.displayhide}; 
`;

const MinHelplinePhone = styled.p`
  font-size: 12px;
  text-align: center;
  display: ${props=>props.displayhide}; 
`;


const MinHelpline = ({
  doctorname= "Richmond Eating Disorders",
  width = 120,
  height = 80,
  display = "none",
  address="48100 Granville Ave, Richmond, BC V6Y 3T6",
  phone="604-244-5486",
  backgroundcolor = "#FFF",
  onCardClick=() => {}

})=>{ 
  return <MinHelplineCont bg={backgroundcolor} wt={width} ht={height} onClick={onCardClick}>
    <MinHelplineBody>{doctorname}</MinHelplineBody>
    <MinHelplineAddress displayhide={display}>{address}</MinHelplineAddress>
    <MinHelplinePhone displayhide={display}>{phone}</MinHelplinePhone>

  </MinHelplineCont>
}

export default MinHelpline;
 