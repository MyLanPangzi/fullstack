import React, {Component, ContextType, createContext, FC} from "react";

const ThemeContext = createContext<string>('red');
const Provider = ThemeContext.Provider;

export class App extends Component<{}, { theme: string }> {
    private handleClick = (theme: string) => {
        this.setState({theme: theme});
    };

    constructor(props: any) {
        super(props);
        this.state = {
            theme: 'red'
        }
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div>
                <Provider value={this.state.theme}>
                    <Toolbar onClick={this.handleClick}/>
                </Provider>
            </div>
        );
    }
}

type ToolbarProp = {
    onClick(theme: string): void;
}
const Toolbar: FC<ToolbarProp> = ({onClick}) => (
    <nav>
        <Button text={'red'} onClick={onClick}/>
        <Button text={'yellow'} onClick={onClick}/>
        <Button text={'blue'} onClick={onClick}/>
    </nav>
);

class Button extends Component<{ text: string; onClick(theme: string): void; }> {
    static contextType = ThemeContext;
    context!: ContextType<typeof Button.contextType>;
    private handleClick = () => this.props.onClick(this.props.text);

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {

        return (
            <button style={{color: this.context}} onClick={this.handleClick}>{this.props.text}</button>
        );
    }
}