import {ThemeContext} from "./ThemeContext";
import React, {FC} from "react";

export const ThemeTogglerButton: FC = () => (
    <ThemeContext.Consumer children={({theme, toggleTheme}) => (
        <button onClick={toggleTheme} style={{backgroundColor: theme.background}}>
            Change Theme
        </button>
    )}/>

)
