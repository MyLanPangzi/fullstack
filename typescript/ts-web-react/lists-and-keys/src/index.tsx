import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {NumberList} from "./components/NumberList";
import {Blog} from "./components/Blog";

const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];

ReactDOM.render(
    <NumberList numbers={[1, 2, 3, 4, 5, 6]}/>,
    document.getElementById('root')
);
ReactDOM.render(
    <Blog posts={posts}/>,
    document.getElementById('blog')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
