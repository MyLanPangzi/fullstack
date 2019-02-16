import React, {Component} from 'react'

export default class Li extends Component {
    constructor(props) {
        super(props);
        this.state = {title: this.props.title, content: this.props.content, key: this.props.key};
        this.click = this.click.bind(this);
    }

    click() {
        this.props.onDel(this.state.key);
    }
    render() {
        return (
            <li key={this.state.key} onClick={this.click}>
                <h1>{this.state.title}</h1>
                <p>{this.state.content}</p>
            </li>
        )
    }
}

