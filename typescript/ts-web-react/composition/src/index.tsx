import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import './assets/panel.css';
import * as serviceWorker from './serviceWorker';
import {FancyBorder} from "./components/FancyBorder";
import {Cantacts, Chat, SplitPanel} from "./components/SplitPanel";
import {SignUpDialog, WelcomeDialog} from "./components/Dialog";

ReactDOM.render(<WelcomeDialog/>, document.getElementById('special'));
ReactDOM.render(<SignUpDialog/>, document.getElementById('sign-up'));
ReactDOM.render(
    <FancyBorder color={'blue'}>
        <h1 className='Dialog-title'>Welcome to React</h1>
        <p className='Dialog-message'>Hello World</p>
    </FancyBorder>,
    document.getElementById('root'));

ReactDOM.render(
    <SplitPanel left={<Cantacts/>} right={<Chat/>}/>
    , document.getElementById('multiple'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
