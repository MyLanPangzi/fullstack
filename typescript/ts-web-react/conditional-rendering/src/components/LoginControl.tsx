import React, {Component, FC, MouseEvent} from "react";

type GreetingClick = {
    onClick(e: MouseEvent<HTMLButtonElement>): void;
}
const Login: FC<GreetingClick> = ({onClick}) => (<button onClick={onClick}>Login</button>);
const Logout: FC<GreetingClick> = ({onClick}) => (<button onClick={onClick}>Logout</button>);
const UserGreeting: FC = () => (<h1>Welcome back</h1>);
const GuestGreeting: FC = () => (<h1>Please sign up</h1>);
type LoginState = {
    isLogged: boolean;
}

class Greeting extends Component<LoginState, {}> {
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            this.props.isLogged ? <UserGreeting/> :
                <GuestGreeting/>
        );
    }
}

export class LoginControl extends Component<{}, LoginState> {
    constructor(props: any) {
        super(props);
        this.state = {
            isLogged: false
        }
    }

    private handleClick = () => this.setState({isLogged: !this.state.isLogged});

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {

        return (
            <div>
                <Greeting isLogged={this.state.isLogged}/>
                {this.state.isLogged ? <Logout onClick={this.handleClick}/> : <Login onClick={this.handleClick}/>}
            </div>
        );
    }
}