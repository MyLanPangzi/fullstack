import React, {FC} from "react";
import {ToggleableMenu} from "./ToggleableMenu";


export const Menu:FC = ()=>(
    <>
        <ToggleableMenu title={'One'}>A</ToggleableMenu>
        <ToggleableMenu title={'Two'}>B</ToggleableMenu>
        <ToggleableMenu title={'Three'}>C</ToggleableMenu>
    </>
)