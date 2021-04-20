import React from "react";
import Nav from "../comps/nav";

export default {
    title:"Example/NavBar",
    component:<Nav />
}

export const DefaultNav = () => 
<Nav 
title=""
maring="10px"
/>

export const BullimiaNav = () => 
<Nav
title="Bulimia"
txt1="Anorexia"
/>

export const OrthorexiaNav = () => 
<Nav
title="Orthorexia"
txt1="Anorexia"
txt2="Bullimia"
txt3="Binge"
/>

export const BingeNav = () => 
<Nav
title="Binge"
txt1="Anorexia"
txt2="Bullimia"
txt3="Orthorexia"
/>

export const ExcessiveNav = () => 
<Nav
title="Excessive Exercise"
txt1="Anorexia"
txt2="Bullimia"
txt3="Binge"
txt4="Orthorexia"
margin="20px"
/>

