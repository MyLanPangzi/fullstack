import React, {Component} from "react";
import {isFunction} from "./util";

const initialState = {show: true};
type State = Readonly<typeof initialState>;

type ToggleableComponentProps = {
    show: State['show'];
    toggle: Toggleable['toggle'];
}
type RenderCallback = (props: ToggleableComponentProps) => JSX.Element;
type Props = Partial<{
    render: RenderCallback;
    children: RenderCallback;
}>;

export class Toggleable extends Component<Props, State> {
    readonly state: State = initialState;
    private toggle = () => this.setState(updateState);

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const {render, children} = this.props;
        const renderProps = {show: this.state.show, toggle: this.toggle};
        if (render) {
            return render(renderProps);
        }
        return isFunction(children) ? children(renderProps) : null;
    }
}

const updateState = (prevState: State) => ({show: !prevState.show});
