import React, {useState} from "react";
import styled from "styled-components";
<<<<<<< HEAD
 
import {BiArrowBack} from 'react-icons/bi';
 
=======

import { BsArrowLeftShort } from 'react-icons/bs';


>>>>>>> c261b46653b7207867350e51e012a7e73b568b5d
const BackCont = styled.div`
   display: flex;
   flex-direction: row;
`;
<<<<<<< HEAD
const BackImg = styled.div`
display: inline-block;
width: 24px;
height: 24px;
`;
 
=======
// const BackImg = styled.image`
// display: inline-block;
// width: 24px;
// height: 24px;
// `;

>>>>>>> c261b46653b7207867350e51e012a7e73b568b5d
const Text = styled.h2`
font-family: DIN alternate;
font-size: 18px;
color:#8A8A8A;
margin: 0;
position: relative;
bottom: 3px;
`;
 
const Back = ({
width=24
}) => {
<<<<<<< HEAD
 
   return <BackCont>
       <BackImg>
       <BiArrowBack color="#8A8A8A" />
       </BackImg>
       <Text>BACK</Text>
   </BackCont>
=======
    const [open, setOpen] = useState(false);
    return <BackCont>
        <BsArrowLeftShort />
        <Text>BACK</Text>
    </BackCont>
>>>>>>> c261b46653b7207867350e51e012a7e73b568b5d
}
 
export default Back;