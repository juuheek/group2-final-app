import React from 'react'; 
import styled from 'styled-components';
import {IoMdArrowDroprightCircle, IoMdArrowDropleftCircle} from 'react-icons/Io';

const NavPageCont = styled.div`
  display:flex;
  flex-direciton: column;
  justify-content: space-between;
  max-width: 200px;
  font-weight: bold;
  font-size: 18px;
  color: #26325B;



`;



const NavPage = ({
  navpageheader="Resources"

}) => {
  return <NavPageCont>
    <IoMdArrowDropleftCircle color="#E67571"/>{navpageheader}<IoMdArrowDroprightCircle color="#E67571"/>
  </NavPageCont>
}

export default NavPage;
