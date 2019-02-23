import React from "react";
import ReactDom from "react-dom";
import {createStore} from "redux";
import counter from "./reducers";
import Counter from "./components/Counter";

const store = createStore(counter);

const render = () => ReactDom.render(
    <Counter value={store.getState()} onIncrement={() => store.dispatch({type: 'INCREMENT'})}
             onDecrement={() => store.dispatch({type: 'DECREMENT'})}/>,
    document.getElementById('app')
)

render();
store.subscribe(render);