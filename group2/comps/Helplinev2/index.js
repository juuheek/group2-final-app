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
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: 0.5s;
  transition-timing-function: ease;


`;

const MinHelplineBody = styled.p`
  font-size: 25px;
  text-align: center;
`;

const MinHelplineAddress = styled.p`
  font-size: 18px;
  text-align: center;
  display: ${props=>props.displayhide}; 
`;

const MinHelplinePhone = styled.p`
  font-size: 18px;
  text-align: center;
  display: ${props=>props.displayhide}; 
`;


const MinHelpline = ({
  doctorname= "Kelty Eating Disorders",
  width = 174,
  height = 133,
  display = "none",
  address="400 Circle Road, Stony Brook, NY, USA",
  phone="778-888-0137",
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
