import React, {Component, ComponentPropsWithRef, createRef, FC, forwardRef, ReactNode} from "react";

export class CustomTextInput extends Component {
    private textInput = createRef<HTMLInputElement>();

    focus = () => this.textInput.current!.focus();

    render(): ReactNode {
        return (
            <div>
                <input type={'text'} ref={this.textInput}/>

                <input type={'button'} onClick={this.focus} value={'Focus the input'}/>
            </div>
        );
    }
}

export class AutoFocusTextInput extends Component {
    private textInput = createRef<CustomTextInput>();

    componentDidMount(): void {
        this.textInput.current!.focus();
    }

    render(): ReactNode {
        return (
            <CustomTextInput ref={this.textInput}/>
        );
    }
}

type Props = {
    inputRef: (el: HTMLInputElement) => void;
}
const TextInput: FC<Props> = ({inputRef}) => (
    <div>
        <input type={'text'} ref={inputRef}/>
    </div>
);

export class Parent extends Component {
    private input!: HTMLInputElement;

    componentDidMount(): void {
        this.input.focus();
    }

    render(): ReactNode {
        return (
            <div>
                <TextInput inputRef={el => this.input = el}/>
            </div>
        );
    }
}

const FancyButton = forwardRef<HTMLButtonElement, ComponentPropsWithRef<'button'>>((props, ref) => (
    <button style={{border: '1px solid white'}} ref={ref}>
        {props.children}
    </button>
));

export class Button extends Component {
    private buttonRef = createRef<HTMLButtonElement>();

    componentDidMount(): void {
        this.buttonRef.current!.focus();
    }

    render(): ReactNode {
        return (
            <div>
                <FancyButton ref={this.buttonRef}>Button</FancyButton>
            </div>
        );
    }
}