import React, {Component} from "react";
import ReactDom from "react-dom";
import uuid from "uuid";
import Li from './li';

export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.del = this.del.bind(this);
        this.state.list = this.props.list.map(e => <Li title={e.title} onDel={this.del} content={e.content}
                                                       key={uuid()}/>);
    }

    del(key) {
        const index = this.state.list.findIndex((e, i) => {
            if (e.key === key) {
                return i;
            }
        });
        this.state.list.splice(index, 1);
        this.setState({list: this.state.list});
    }

    render() {
        return <ul>
            {this.state.list}
        </ul>
    }
}
const list = [
    {
        title: 'a',
        content: 'a',
    },
    {
        title: 'b',
        content: 'b',
    },
];

ReactDom.render(<List list={list}/>, document.body);
