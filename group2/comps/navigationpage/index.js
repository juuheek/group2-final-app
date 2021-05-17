import React from 'react'; 
import styled from 'styled-components';
import {IoMdArrowDroprightCircle, IoMdArrowDropleftCircle} from 'react-icons/io';

const NavPageCont = styled.div`
  display:flex;
  flex-direciton: column;
  justify-content: space-between;
  max-width: 300px;
  font-weight: bold;
  font-size: 18px;
  color: #26325B;
  margin-top: 30px;


`;



const NavPage = ({
  onLeftClick = () => {},
  onRightClick = () => {},
  navpageheader="Resources"

}) => {
  return <NavPageCont>
    <IoMdArrowDropleftCircle  color="#E67571" onClick={onLeftClick}/>{navpageheader}<IoMdArrowDroprightCircle color="#E67571" onClick={onRightClick}/>
  </NavPageCont>
}

export default NavPage;
