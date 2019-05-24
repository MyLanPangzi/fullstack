import React, {FC} from "react";
import {ToggleableMenu, ToggleMenuViaComponentInjection} from "./ToggleableMenu";

export const Menu: FC = () => (
    <>
        <ToggleableMenu title={'One'}>A</ToggleableMenu>
        <ToggleableMenu title={'Children Function'}>Children Function</ToggleableMenu>
        <ToggleableMenu title={'Render Callback'}>Render Callback</ToggleableMenu>
        <ToggleMenuViaComponentInjection title={'ComponentInjection'}>ComponentInjection</ToggleMenuViaComponentInjection>
    </>
);