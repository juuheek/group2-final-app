import React from "react";
import Button from "../comps/button";

export default {
    title:"Example/Button",
    component:<Button />
}

export const DefaultButton = () => <Button/>

export const ButtonWithProp = () => (
    <Button
    txt="Underweight"
    bgcolor="E0E0E0"
    />
)
