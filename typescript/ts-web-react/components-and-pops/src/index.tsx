import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {comment, Comment} from "./components/Comment";

// ReactDOM.render(<Welcome name={'World'}/>, document.getElementById('root'));
// ReactDOM.render(<App/>, document.getElementById('root'));
ReactDOM.render(<Comment comment={comment}/>, document.getElementById('root'));
serviceWorker.register();
