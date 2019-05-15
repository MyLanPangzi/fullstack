import React, {ChangeEvent, Component, FormEvent} from "react";

interface EasyFormState {
    value: string;
}

export class EasyForm extends Component<{}, EasyFormState> {
    constructor(props: any) {
        super(props);
        this.state = {value: 'hello world'};
    }

    private handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => this.setState({value: e.target.value});

    private handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert(this.state.value);
    };

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Easy:
                    <textarea value={this.state.value} onChange={this.handleChange}/>
                    <input type='submit' value={'Submit'}/>
                </label>
            </form>
        );
    }

}