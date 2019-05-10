import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Clock} from "./components/Clock";

ReactDOM.render(<Clock/>, document.getElementById('root'));

// setInterval(tick, 1000);
// ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.register();
