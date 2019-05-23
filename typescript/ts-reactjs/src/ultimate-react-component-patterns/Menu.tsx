import React, {FC} from "react";
import {ToggleableMenu, ToggleMenuViaComponentInjection} from "./ToggleableMenu";

export const Menu: FC = () => (
    <>
        <ToggleableMenu title={'One'}>A</ToggleableMenu>
        <ToggleableMenu title={'Two'}>B</ToggleableMenu>
        <ToggleableMenu title={'Three'}>Render Callback</ToggleableMenu>
        <ToggleMenuViaComponentInjection title={'Four'}>ToggleMenuViaComponentInjection</ToggleMenuViaComponentInjection>
    </>
);