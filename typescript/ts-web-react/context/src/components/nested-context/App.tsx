import {Component} from "react";
import {ThemeContextType, themes, ThemeContext} from "./ThemeContext";
import * as React from "react";
import {ThemeTogglerButton} from "./ThemeTogglerButton";

export class App extends Component<{}, ThemeContextType> {
    constructor(props: any) {
        super(props);
        this.state = {
            theme: themes.dark,
            toggleTheme: this.toggleTheme
        }
    }

    private toggleTheme = () => {
        this.setState({
            theme: this.state.theme !== themes.light ? themes.light : themes.dark
        });
    };

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div>{/*很诡异，Provider定义的是一个函数接口，但不能调用*/}
                <ThemeContext.Provider value={this.state}>
                    <ThemeTogglerButton />
                </ThemeContext.Provider>
            </div>
        );
    }
}