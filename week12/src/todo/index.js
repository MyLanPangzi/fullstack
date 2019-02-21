import React from "react";
import ReactDom from "react-dom";
import TodoList from "./components/TodoList";
import Link from "./components/Link";

import './reducers/index';

const todos = [
    {id: 1, text: 'a', completed: false},
    {id: 2, text: 'b', completed: false},
    {id: 3, text: 'c', completed: false},
]

// ReactDom.render(<TodoList onTodoClick={id => console.log(id)} todos={todos}/>, document.getElementById('app'));
// ReactDom.render(<Link onClick={() => console.log('click')} active={false} children={'click'}/>, document.getElementById('app'));