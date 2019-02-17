import React, {Component} from 'react';
import ReactDom from "react-dom";
import ListPanel from "./listPanel";
import uuid from "uuid";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.state.leftMap = new Map(this.props.list.map(e => [e.id, e]));
        this.state.rightMap = new Map();
        this.selectLeft = this.selectLeft.bind(this);
        this.selectRight = this.selectRight.bind(this);
        this.select = this.select.bind(this);
        this.toRight = this.toRight.bind(this);
        this.toLeft = this.toLeft.bind(this);
        this.move = this.move.bind(this);
    }

    select(map, id) {
        const e = map.get(id);
        if (!e) {
            return;
        }
        e.selected = !e.selected;
        this.forceUpdate();
    }

    selectLeft(id) {
        this.select(this.state.leftMap, id);
    }

    selectRight(id) {
        this.select(this.state.rightMap, id);
    }

    move(from, to) {
        for (let [id, e] of from.entries()) {
            if (e.selected) {
                e.selected = !e.selected;
                to.set(id, e);
                from.delete(id);
            }
        }
        this.forceUpdate();
    }

    toRight() {
        this.move(this.state.leftMap, this.state.rightMap);
    }

    toLeft() {
        this.move(this.state.rightMap, this.state.leftMap);
    }

    render() {
        const style = {float: 'left'};
        return (
            <div>
                <div style={style}>
                    <ListPanel key={uuid()} onSelect={this.selectLeft} list={this.state.leftMap.values()}/>
                </div>
                <div style={style}>
                    <button onClick={this.toLeft}>&lt;&lt; </button>
                    <button onClick={this.toRight}>&gt;&gt; </button>
                </div>
                <div style={style}>
                    <ListPanel key={uuid()} onSelect={this.selectRight} list={this.state.rightMap.values()}/>
                </div>
            </div>
        );
    }
}

const list = [
    {id: uuid(), name: 'a', selected: false},
    {id: uuid(), name: 'b', selected: false},
    {id: uuid(), name: 'b', selected: false},
];

ReactDom.render(<App list={list}/>, document.body);