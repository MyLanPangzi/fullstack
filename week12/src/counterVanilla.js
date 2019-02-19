import {createStore} from "redux";
import counter from "./reducers/counterVanilla";

const store = createStore(counter);
const valueEl = document.getElementById('value');

function render() {
    valueEl.innerHTML = store.getState().toString();
}

render();

store.subscribe(render);

document.getElementById('add')
    .addEventListener("click", () => store.dispatch({type: 'add'}));

document.getElementById('sub')
    .addEventListener("click", () => store.dispatch({type: 'sub'}));

document.getElementById('addIfOdd')
    .addEventListener("click", () => {
        if (store.getState() % 2 === 0) {
            store.dispatch({type: 'add'});
        }
    });

document.getElementById('addAsync')
    .addEventListener("click", () => setTimeout(() => store.dispatch({type: 'add'}), 1000));
