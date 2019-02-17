import React, {Component} from 'react';
import uuid from "uuid";



class TabHead extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            className: this.props.className,
            key : uuid()
        };
        this.click = this.click.bind(this);
    }

    click() {
        this.props.onClick ? this.props.onClick(this.state.title) : '';
    }
    render() {
        return (
            <a onClick={this.click} className={this.state.className} key={this.state.key}>{this.state.title}</a>
        );
    }
}

export default TabHead;
