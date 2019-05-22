import React, {Component, MouseEvent} from "react";
import {isFunction} from "./util";

const initialState = {show: false};
type State = Readonly<typeof initialState>;
type Props = Partial<{
    render: RenderCallback;
    children: RenderCallback;
}>

type RenderCallback = (props: ToggleableComponentProps) => JSX.Element;
type ToggleableComponentProps = { show: State['show'], toggle: Toggleable['toggle'] };

export class Toggleable extends Component<Props, State> {
    readonly state: State = initialState;

    private toggle = (e: MouseEvent<HTMLElement>) => this.setState(updateSate);

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const {render, children} = this.props;
        const renderProps = {show: this.state.show, toggle: this.toggle};
        if (render) {
            return render(renderProps);
        }

        return isFunction(children) ? children(renderProps) : null;
    }

}

const updateSate = (prevState: State) => ({show: !prevState.show});