import React, {Component} from "react";
import {ThemeButton} from "./ThemedButton";
import {Theme, themes, ThemeContext} from "./ThemeContext";

class Toolbar extends Component<{ changeTheme(): void; }> {
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <ThemeButton onClick={this.props.changeTheme}>
                Change Theme
            </ThemeButton>
        );
    }
}

export class App extends Component<{}, { theme: Theme }> {
    constructor(props: any) {
        super(props);
        this.state = {
            theme: themes.light
        }
    }

    private toggleTheme = () => {
        this.setState({
            theme: this.state.theme !== themes.light ? themes.light : themes.dark
        });
    };

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div>
                <ThemeContext.Provider value={this.state.theme}>
                    <Toolbar changeTheme={this.toggleTheme}/>
                </ThemeContext.Provider>
                <section>
                    <ThemeButton>
                        Default Theme
                    </ThemeButton>
                </section>
            </div>
        );
    }

}