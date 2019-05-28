import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Menu} from "./ultimate-react-component-patterns/Menu";

ReactDOM.render(<Menu/>, document.getElementById('root'));

serviceWorker.register();

