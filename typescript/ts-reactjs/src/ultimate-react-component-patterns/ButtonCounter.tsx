import React, {Component} from "react";
import {ButtonWithDefaultProps as Button} from "./Button";

const initialState = {
    count: 0
}
type State = Readonly<typeof initialState>;

export class ButtonCounter extends Component<{}, State> {
    readonly state: State = initialState;

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {

        return (
            <>
                <Button onClick={this.handleIncrementClick}>Increment----{this.state.count}</Button>
                <Button onClick={this.handleDecrementClick}>Decrement----{this.state.count}</Button>
            </>
        );
    }

    private handleIncrementClick = () => this.setState(incrementClickCount);

    private handleDecrementClick = () => this.setState(decrementClickCount);

}

const incrementClickCount = (prevState: State) => ({count: prevState.count + 1});
const decrementClickCount = (prevState: State) => ({count: prevState.count - 1});