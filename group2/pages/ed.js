import React, {useState} from 'react';
import styled from 'styled-components';
import Whitebg from '../comps/JuheeGreybg';
import Textbox from '../comps/textbox';
import Back from '../comps/back';
import Resources from '../comps/navigationpage';


const GlianCont = styled.div`
  display: flex;
  flex-direction: column;
  width:414px;
  height:896px;
  background-color: #E8ECF0;
  align-items: center;
`;


export default function Glian(){

  return (
    <GlianCont>
        <Back></Back>
        <Resources></Resources>




    </GlianCont>
  )
}
