import React, {Component, ComponentType, ReactNode} from "react";
import {isFunction} from "./util";

const initialState = {show: true};
type State = Readonly<typeof initialState>;

type DefaultProps<P extends {} = {}> = { props: P };
const defaultProps: DefaultProps = {props: {}};
export type ToggleableComponentProps<P extends {} = {}> = {
    show: State['show'];
    toggle: Toggleable['toggle'];
} & P;
type RenderCallback = (props: ToggleableComponentProps) => JSX.Element;
type Props<P extends {} = {}> = Partial<{
    render: RenderCallback;
    children: RenderCallback | ReactNode;
    component: ComponentType<ToggleableComponentProps<any>>;
} & DefaultProps<P>>;

type Constructor<T> = new(...args: any[]) => T;

export class Toggleable<T extends {} = {}> extends Component<Props<T>, State> {
    static readonly defaultProps: Props = defaultProps;

    static ofType<T extends {}>() {
        return Toggleable as Constructor<Toggleable<T>>;
    }

    readonly state: State = initialState;
    private toggle = () => this.setState(updateState);

    render() {
        const {render, children, component: InjectionComponent, props} = this.props;
        const renderProps = {show: this.state.show, toggle: this.toggle};
        if (InjectionComponent) {
            return (
                <InjectionComponent {...props} {...renderProps}>
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
