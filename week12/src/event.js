import React, { Component } from 'react';
import ReactDom from 'react-dom';

export class List extends Component {
    constructor(props) {
        super(props);
        this.state = { num: 0 };
        this.inc = this.inc.bind(this);
    }
    inc() {
        this.setState({ num: this.state.num + 1 });
    }
    render() {
        return (
            <ul>
                <li>{this.state.num} </li>
                <li onClick={this.inc}>点我加1</li>
            </ul>
        )
    }
}
export default List;
ReactDom.render(<List />, document.body);