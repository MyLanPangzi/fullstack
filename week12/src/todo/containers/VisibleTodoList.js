import {connect} from "react-redux";
import {toggleTodo, VisibilityFilters} from "../actions/index";
import TodoList from "../components/TodoList";

function getVisibleTodos(todos, filter) {
    switch (filter) {
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(todo => todo.completed);
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(todo => !todo.completed);
        case VisibilityFilters.SHOW_ALL:
            return todos;
        default:
            throw new Error('Unknown filter: ' + filter)
    }
}

const mapStateToProps = state => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = dispatch => ({
    onTodoClick: id => dispatch(toggleTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);


