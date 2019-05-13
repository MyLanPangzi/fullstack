import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/Game';
import {ErrorBoundary} from "./components/ErrorBoundary";

ReactDOM.render(
    <ErrorBoundary>
        <Game/>
    </ErrorBoundary>,
    document.querySelector('#root')
);
