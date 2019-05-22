import React, {FC} from "react";
import {Toggleable} from "./Toggleable";

type Props = { title: string; };
export const ToggleableMenu: FC<Props> = ({title, children}) => (
    <Toggleable render={({toggle, show}) => (
        <div style={{textAlign: 'center', margin: '10px'}}>
            <div onClick={toggle}>
                {title}
            </div>
            <p>{show ? children : null}</p>
        </div>
    )}/>
)