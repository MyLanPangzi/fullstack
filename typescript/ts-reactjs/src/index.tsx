import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Game} from "./tic-tac-toe/Game";

ReactDOM.render(<Game />, document.getElementById('tic-tac-toe'));

serviceWorker.register();
