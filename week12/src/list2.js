import React from "react";
import ReactDom from "react-dom";
import Li from './li';
// const React = require("react");
// const ReactDom = require("react-dom");

class List extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <ul>
            <Li tilte="A" content="AAA"></Li>
            <Li tilte="B" content="BBB"></Li>
            <Li tilte="C" content="CCC"></Li>
        </ul>
    }
}

ReactDom.render(<List></List>, document.body);