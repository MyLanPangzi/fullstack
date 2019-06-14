import React, {Component, ReactNode} from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {Index} from "../views/Index";
import {Book} from "../views/Book";
import {About} from "../views/About";
import {User} from "../views/User";
import {Details} from "../views/Details";


export class RouterIndex extends Component {
    render(): ReactNode {
        return (
            <Switch>
                <Route path={'/'} exact render={() => (
                    <Redirect to={'/index'}/>
                )}/>
                <Route path={'/index'} component={Index}/>
                <Route path={'/book'} component={Book}/>
                <Route path={'/about'} component={About}/>
                <Route path={'/user'} component={User}/>
                <Route path={'/details'} component={Details}/>
            </Switch>
        );
    }
}