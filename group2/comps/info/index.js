import React from 'react';
import styled from 'styled-components';
import {AiOutlineInfoCircle} from 'react-icons/ai';

const BMIinfo = styled.div`
 
`;

//Try and find the component fil in the lecture to se what defines 
//"subtext" and translate it into the app

const Info = ({
  popup=''
})=>{
    return <BMIinfo>
        {popup}
        <AiOutlineInfoCircle size={40} style={{fill: '#F8E8AE'}}/>
    </BMIinfo>
  }

export default Info;
