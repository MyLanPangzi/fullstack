import React, {Component} from 'react';

class TabBody extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     body: this.props.body,
        //     key: uuid()
        // }
    }

    render() {
        return (
            <div key={this.props.key}>
                {this.props.body}
            </div>
        );
    }
}

export default TabBody;