import React from "react";

export default class Button extends React.Component {
    constructor(props) {
        super(props);
        this.click = this.click.bind(this);
        this.doubleClick = this.doubleClick.bind(this);
        this.state = {
            className: this.props.className,
        }
    }

    click() {
        // this.props.onShowMessage(this.props.title);
    }

    doubleClick() {
        this.props.onDbClick(this.props.value);
    }

    render() {
        return <button className={this.state.className} onDoubleClick={this.doubleClick} onClick={this.click}>双击我变颜色
            ：{this.props.value}</button>
    }
}