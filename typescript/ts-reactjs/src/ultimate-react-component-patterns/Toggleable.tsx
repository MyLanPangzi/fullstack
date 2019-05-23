import React, {Component, ComponentType, ReactNode} from "react";
import {isFunction} from "./util";

const initialState = {show: true};
type State = Readonly<typeof initialState>;

export type ToggleableComponentProps<P extends {} = {}> = {
    show: State['show'];
    toggle: Toggleable['toggle'];
} & P;
type RenderCallback = (props: ToggleableComponentProps) => JSX.Element;
const defaultProps = {props: {} as { [index: string]: any; }};
type DefaultProps = typeof defaultProps;
type Props = Partial<{
    render: RenderCallback;
    children: RenderCallback | ReactNode;
    component: ComponentType<ToggleableComponentProps<any>>;
} & DefaultProps>;

export class Toggleable extends Component<Props, State> {
    readonly state: State = initialState;
    private toggle = () => this.setState(updateState);

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const {component: InjectionComponent, render, children, props} = this.props;
        const renderProps = {show: this.state.show, toggle: this.toggle};
        if (InjectionComponent) {
            return (
                <InjectionComponent {...props}{...renderProps}>
                    {children}
                </InjectionComponent>
            )
        }
        if (render) {
            return render(renderProps);
        }
        return isFunction(children) ? children(renderProps) : null;
    }
}

const updateState = (prevState: State) => ({show: !prevState.show});
