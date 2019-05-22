import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
// import {Game} from "./tic-tac-toe/Game";
// import {App} from "./ultimate-react-component-patterns/App";
// import {Toggleable} from "./ultimate-react-component-patterns/Toggleable";
import {Menu} from "./ultimate-react-component-patterns/Menu";

// ReactDOM.render(<App/>, document.getElementById('root'));
ReactDOM.render(<Menu/>,document.getElementById('root'));

serviceWorker.register();

