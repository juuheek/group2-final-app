import React from 'react';
import styled from 'styled-components';
import {AiOutlineInfoCircle} from 'react-icons/ai';
import BMI from '../BMI'

const BMIinfo = styled.div `
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25));
`;

//Try and find the component fil in the lecture to se what defines 
//"subtext" and translate it into the app

const Info = ({
  // onInfoClick = () => {},
  popup=''
})=>{
  // const [popup, setPopUp] = useState (false);

  var popup = ""

    return <BMIinfo>
        {popup}
        <AiOutlineInfoCircle size={40} style={{fill: '#F8E8AE'}}/>
    </BMIinfo>
  }

export default Info;