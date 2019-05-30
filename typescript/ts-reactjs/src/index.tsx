import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Button} from "./refs/CustomTextInput";

ReactDOM.render(<Button/>, document.getElementById('root'));

serviceWorker.register();