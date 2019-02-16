import React from "react";
import ReactDom from "react-dom";
import TabHead from "./tabHead";
import TabBody from "./tabBody";
import uuid from "uuid";


export default class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabs: this.props.tabs,
            currentTitle: null,
        }
    }

    select(currentTitle) {
        this.setState({currentTitle, tabs : this.state.tabs});
    }

    render() {
        const heads = this.state.tabs.map(e => <TabHead title={e.title} onClick={() => this.select(e.title)}
                                                        className={this.state.currentTitle === e.title ? 'active' : ''}/>);
        const tab = this.state.tabs.find(e => e.title === this.state.currentTitle);
        const body = tab ? <TabBody body={tab.body} key={uuid()}/> : null;
        return (
            <div>
                <nav>
                    {heads}
                </nav>
                {body}
            </div>
        );
    }

}
const tabs = [
    {title: 'A', body: 'aaaa'},
    {title: 'B', body: 'bbbb'},
    {title: 'C', body: 'cccc'},
]

ReactDom.render(<Tabs tabs={tabs}/>, document.body);