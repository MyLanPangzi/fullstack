import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Li from './li';

export default class List extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const lis = this.props.articles.map(e => <Li title={e.title} content={e.content}></Li>)
        return <ul>
            {lis}
        </ul>
    }
}
const articles = [
    {
        title: 'A',
        content: 'A',
    },
    {
        title: 'B',
        content: 'B',
    },
];

ReactDom.render(<List articles={articles} />, document.body);