import React from "react";

export default class Buttion extends React.Component {
    constructor(props) {
        super(props);
        this.click = this.click.bind(this);
    }

    click() {
        this.props.onShowMessage(this.props.title);
    }

    render() {
        return <button onClick={this.click}>{this.props.value}</button>
    }
}