import React from "react";
import ReactDom from "react-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import updater from "./uilist/updater";
import UIList from "./UIList";

const uuid = require("uuid").v1;

let list = [
  {name:"leoa",id:uuid()},
  {name:"leoa2",id:uuid()},
  {name:"leoa3",id:uuid()},
];

const store = createStore(updater, {list , articleList:[]});

ReactDom.render(
  <Provider store={store}>
  <UIList/>
  </Provider>
  ,document.body
)
