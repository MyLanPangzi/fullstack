import React, {ChangeEvent, Component, FormEvent} from "react";

interface NameFormState {
    name: string;
}

export class NameForm extends Component<{}, NameFormState> {
    constructor(props: any) {
        super(props);
        this.state = {
            name: ''
        }
    }

    private handelSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert(`You was submitted name : ${this.state.name}`);
    };

    private handleChange = (e: ChangeEvent<HTMLInputElement>) => this.setState({name: e.target.value});

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <form onSubmit={this.handelSubmit}>
                Name:<input type='text' name='name' onChange={this.handleChange} value={this.state.name}/>
                <input type='submit' value='Submit'/>
            </form>
        );
    }
}