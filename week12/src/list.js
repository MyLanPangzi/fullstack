import React from "react";
import ReactDom from "react-dom";
// const React = require("react");
// const ReactDOM = require("react-dom");

class List extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <ul>
            <li>1111</li>
            <li>2222</li>
            <li>3333</li>
            <li>4</li>
        </ul>
    }
}

ReactDom.render(<List></List> , document.body);