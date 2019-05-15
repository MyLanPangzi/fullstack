import React, {ChangeEvent, Component} from "react";

interface MultipleFormState {
    foods: Set<string>;
    gender: string;
}

export class MultipleForm extends Component<{}, MultipleFormState> {
    constructor(props: any) {
        super(props);
        this.state = {
            foods: new Set<string>(),
            gender: 'm'
        }
    }

    private handleFoodsChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {value, checked} = e.target;
        const foods = new Set<string>(this.state.foods);
        if (checked) {
            foods.add(value);
        } else {
            foods.delete(value);
        }
        this.setState({foods});
    };

    private handleGenderChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {value: gender, checked} = e.target;
        if (checked) {
            this.setState({gender});
        }
    };

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <form>
                Banana:<input name={'foods'} type='checkbox' value={'banana'} onChange={this.handleFoodsChange}/><br/>
                Orange:<input name={'foods'} type='checkbox' value={'orange'} onChange={this.handleFoodsChange}/><br/>
                Apple:<input name={'foods'} type='checkbox' value={'apple'} onChange={this.handleFoodsChange}/><br/>
                Gender: <input name={'gender'} type={'radio'} value={'m'} onChange={this.handleGenderChange}/>:M
                <input name={'gender'} type={'radio'} value={'f'} onChange={this.handleGenderChange}/>:F
                Gender:{this.state.gender}
                <fieldset>
                    <legend>Fodds</legend>
                    <p>{[...this.state.foods].join('-')} </p>
                </fieldset>
            </form>
        );
    }

}