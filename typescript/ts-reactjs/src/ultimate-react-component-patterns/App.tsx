import React, {Component} from "react";
import {ButtonCounter} from "./ButtonCounter";

export class App extends Component {


    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (<ButtonCounter/>);
    }
}