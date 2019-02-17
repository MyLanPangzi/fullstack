import React, {Component} from 'react';

class ListPanel extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const lis = [];
        for (let e of this.props.list) {
            lis.push(<li key={e.id} className={e.selected ? 'selected' : ''}
                         onClick={() => this.props.onSelect(e.id)}>{e.name}</li>);
        }
        return (
            <ul key={this.props.key}>
                {lis}
            </ul>
        );
    }
}

export default ListPanel;