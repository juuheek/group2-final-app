import React from 'react'; 
import styled from 'styled-components';
import {GiPlainCircle} from 'react-icons/gi';

const CarouselCont = styled.div`
margin-top: 17px;

`;


const ImgCarousel = ({

}) => {
  return <CarouselCont>
    <GiPlainCircle color="#E3E3E3"/>
  </CarouselCont>
}

export default ImgCarousel;
