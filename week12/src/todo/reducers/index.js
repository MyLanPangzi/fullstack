import {combineReducers} from "redux";
import {todos} from "./todos";
import {visibilityFilter} from "./visibilityFilter";

export default combineReducers({todos, visibilityFilter});
// const store = createStore(reducers);
//
// const unsubscribe = store.subscribe(() => console.log(store.getState()));
// store.dispatch(addTodo('learn actions'));
// store.dispatch(addTodo('learn reducers'));
// store.dispatch(addTodo('learn store'));
// store.dispatch(toggleTodo(0));
// store.dispatch(toggleTodo(1));
// store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));
// unsubscribe();
