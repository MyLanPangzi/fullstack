import React, {FC} from "react";
import {ThemeButton} from "./ThemeButton";
import {ThemeContext} from "./ThemeContext";
import {UserContext} from "./UserContext";

export const App: FC = () => (
    <ThemeContext.Provider value={'dark'}>
        <UserContext.Provider value={{name: 'Hello'}}>
            <ThemeButton/>
        </UserContext.Provider>
    </ThemeContext.Provider>
)