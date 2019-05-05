import React, {Component, FC} from "react";
import {FancyBorder} from "./FancyBorder";

interface DialogProp {
    title: string;
    message: string;
}

export const Dialog: FC<DialogProp> = ({title, message, children}) => (
    <FancyBorder color={'blue'}>
        <div className='Dialog-title'>
            {title}
        </div>
        <div className='Dialog-message'>
            {message}
        </div>
        {children}
    </FancyBorder>
);
export const WelcomeDialog: FC = props => (
    <Dialog title={'Welcome'} message={'Hello'}/>
);

interface SignUpDialogState {
    login: string;
}

export class SignUpDialog extends Component<{}, SignUpDialogState> {
    constructor(props: any) {
        super(props);
        this.state = {
            login: ''
        }
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <Dialog title={'login'} message={'hello'}>
                <input type='text' value={this.state.login} onChange={this.handleChange}/>
                <button onClick={this.handleClick}>Click me</button>
            </Dialog>
        );
    }

    private handleChange = (e: React.ChangeEvent<HTMLInputElement>) => this.setState({login: e.target.value});

    private handleClick = () => alert(`Hello ${this.state.login}`);
}