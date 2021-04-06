import React from "react";
import Button from "../comps/button";

export default {
    title:"Example/Button",
    component:<Button />
}

export const DefaultButton = () => <Button/>

export const ButtonWithTexxtProp = () => <Button txt="Normal" />

export const ButtonWithProp = () => (
    <Button
    txt="Underweight"
    bgcolor="E0E0E0"
    border="none"
    />
)