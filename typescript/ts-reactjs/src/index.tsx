import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
// import {Game} from "./tic-tac-toe/Game";
import {App} from "./ultimate-react-component-patterns/App";

ReactDOM.render(<App/>, document.getElementById('root'));

serviceWorker.register();

