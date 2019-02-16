import React from "react";
import ReactDom from "react-dom";
import A from "./A";
import B from "./B";
import C from "./C";

import {BrowserRouter as Router, Route , Link} from "react-router-dom";

import {Provider} from "react-redux";

ReactDom.render(
  <Provider store={store}>
  <Router>
     <div>
     <nav>
      <Link to="/"> A </Link>
      <Link to="/b"> B </Link>
      <Link to="/c"> C </Link>
     </nav>

     <Route path="/" exact component={A} />
     <Route path="/b" exact component={B} />
     <Route path="/c" exact component={C} />
     </div>
  </Router>
  </Provider>,document.body
)
