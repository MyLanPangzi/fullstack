import React, {Component} from "react";
import ReactDom from "react-dom";

class Time extends Component {
    constructor(props) {
        super(props);
        this.state = {num: 0};
        this.inc = this.inc.bind(this);
    }

    inc() {
        if (this.props.max > this.state.num) {
            this.setState({num: this.state.num + 1});
        }
    }

    render() {
        setTimeout(this.inc, 1000);
        return <div>
            {this.state.num}
        </div>
    }
}

ReactDom.render(<Time max={10}/>, document.body);