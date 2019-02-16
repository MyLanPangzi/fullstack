import React, { Component } from 'react'

export default class Li extends Component {
    constructor(props) {
        super(props);
        this.state = { title: this.props.title, content: this.props.content };
    }
    render() {
        return (
            <li>
                <h1>{this.state.title}</h1>
                <p>{this.state.content}</p>
            </li>
        )
    }
}

