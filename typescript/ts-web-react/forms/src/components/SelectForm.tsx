import React, {ChangeEvent, Component, FormEvent} from "react";

interface SelectFormState {
    value: string;
}

export class SelectForm extends Component<{}, SelectFormState> {
    constructor(props: any) {
        super(props);
        this.state = {value: 'coconut'}
    }

    private handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert(`You pick favorite flavor : ${this.state.value}`);
    };


    private handleChange = (e: ChangeEvent<HTMLSelectElement>) => this.setState({value: e.target.value});

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Pick your favorite flavor:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value='grapfruit'>grapfruit</option>
                        <option value='lime' selected>lime</option>
                        <option value='coconut'>coconut</option>
                    </select>
                    <input type={'submit'} value={'Submit'}/>
                </label>
            </form>
        );
    }
}