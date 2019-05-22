import React, {FC} from "react";
import {Toggleable} from "./Toggleable";

export const ToggleableMenu: FC<{ title: string; }> = ({title, children}) => (
    <Toggleable render={({show, toggle}) => (
        <div onClick={toggle} style={{textAlign: 'center', margin: '5px'}}>
            <h1>{title}</h1>
            {show ? <p>{children}</p> : null}
        </div>
    )}/>
);