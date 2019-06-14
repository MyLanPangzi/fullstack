import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {App} from "./cat-food-calculator/App";

ReactDOM.render(<App/>, document.getElementById('app'));

serviceWorker.register();