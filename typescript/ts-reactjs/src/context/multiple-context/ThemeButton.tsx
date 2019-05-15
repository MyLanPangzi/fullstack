import React, {FC} from "react";
import {UserContext} from "./UserContext";
import {ThemeContext} from "./ThemeContext";


export const ThemeButton: FC = () => (
    <UserContext.Consumer>
        {({name}) => (
            <ThemeContext.Consumer>
                {(theme) => (
                    <button>
                        {`${name}-${theme}`}
                    </button>
                )}
            </ThemeContext.Consumer>
        )}
    </UserContext.Consumer>
)