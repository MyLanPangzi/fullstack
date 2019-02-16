import React from "react";
import ReactDom from "react-dom";
import Button from "./button";

class Panel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {title: ''};
        this.showMessage = this.showMessage.bind(this);
    }

    showMessage(title) {
        this.setState({title});
    }

    render() {
        return <div>
            <h2>{this.state.title}</h2>
            <Button title={"aaa"} value={"A"} onShowMessage={this.showMessage}/>
            <Button title={"bbbb"} value={"B"} onShowMessage={this.showMessage}/>
        </div>
    }
}

ReactDom.render(<Panel/>, document.body);