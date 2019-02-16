import React, {Component} from 'react';
import TabHead from "./tabHead";
import TabBody from "./tabBody";

class Tab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            body: this.props.body,
        }
    }

    render() {
        return (
            <div>
                <TabHead title={this.state.title}/>
                <TabBody body={this.state.body}/>
            </div>
        );
    }
}

export default Tab;
