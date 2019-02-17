import React from "react";
import ReactDom from "react-dom";
import Button from "./button";

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            style: {
                backgroundColor: ''
            },
            value: 'default'
        };
        this.click = this.click.bind(this);

    }

    click(value) {
        this.state.style = {
            backgroundColor: value
        };
        this.state.value = value;
        this.setState(this.state);
    }

    render() {
        return (
            <div>
                <form action="#">
                    <textarea readOnly={true} style={this.state.style} value={this.state.value}></textarea>
                    <Button className={'btn'} onDbClick={this.click} value={"red"}/>
                    <Button className={'btn'} onDbClick={this.click} value={"yellow"}/>
                    <Button className={'btn'} onDbClick={this.click} value={"blue"}/>
                </form>
            </div>
        );
    }

}

ReactDom.render(<Form/>, document.body);