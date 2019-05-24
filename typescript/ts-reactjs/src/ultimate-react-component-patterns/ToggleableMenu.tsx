import React, {FC} from "react";
import {Toggleable, ToggleableComponentProps} from "./Toggleable";

type MenuItemProps = { title: string; };
export const MenuItem: FC<MenuItemProps & ToggleableComponentProps> = ({title, toggle, show, children}) => (
    <div onClick={toggle} style={{textAlign: 'center', margin: '5px'}}>
        <h1>{title}</h1>
        {show ? <p>{children}</p> : null}
    </div>
);
export const ToggleableMenu: FC<{ title: string; }> = ({title, children}) => (
    <Toggleable render={({show, toggle}) => (
        <MenuItem title={title} show={show} toggle={toggle}>
            {children}
        </MenuItem>
    )}/>
);

export const ToggleMenuViaComponentInjection: FC<MenuItemProps> = ({title, children}) => (
    <Toggleable component={MenuItem} props={{title}}>
        {children}
    </Toggleable>
);