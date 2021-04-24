import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';


const MenuCont = styled.div`

 width:414px;
  height:75px;
  display:flex;
  flex-direction:row;
  justify-content: center;
  align-items:center;
  background-color:#FFF;
  border-radius:10px 10px 0 0;

`;
const MenuImg = styled.img`
padding:18px;
`;
const MenuImg2 = styled.img`
padding-left: 10px;
`;
const MenuImg3 = styled.img`
padding-left 18px;
`;
const BottomMenu = ({


}) =>{
  const router =useRouter(); 
  return <MenuCont > 
  <MenuImg onClick={()=>router.push("/resources")} src="/menu1.svg"/>
  <MenuImg onClick={()=>router.push("/habits")} src="/menu2.svg"/>
  <MenuImg2 onClick={()=>router.push("/ed")} src="/menu3.svg" />
  <MenuImg3 onClick={()=>router.push("/quiz1")} src="/menu4.svg"/>
  <MenuImg onClick={()=>router.push("/helpline")} src="/menu5.svg"/>

  </MenuCont>
}

export default BottomMenu;