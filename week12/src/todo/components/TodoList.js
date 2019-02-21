import React from 'react';
import PropTypes from 'prop-types';
import Todo from "./Todo";

const TodoList = ({onTodoClick, todos}) => {
    return (
        <ul>
            {todos.map(todo => <Todo onClick={() => onTodoClick(todo.id)} text={todo.text}
                {...todo} />)}
        </ul>
    );
};

TodoList.propTypes = {
    onTodoClick: PropTypes.func.isRequired,
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
    }).isRequired,).isRequired,
};

export default TodoList;