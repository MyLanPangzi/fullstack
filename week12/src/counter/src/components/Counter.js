import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.incrementAsync = this.incrementAsync.bind(this);
        this.incrementIfOdd = this.incrementIfOdd.bind(this);
    }

    incrementIfOdd() {
        if (this.props.value % 2 === 0) {
            this.props.onIncrement();
        }
    }

    incrementAsync() {
        setTimeout(() => this.props.onIncrement(), 1000);
    }

    render() {
        return (
            <div>
                <span>Value : {this.props.value}</span>
                <button style={{margin:'4px'}} onClick={this.props.onIncrement}>Increment</button>
                <button style={{margin:'4px'}} onClick={this.props.onDecrement}>Decrement</button>
                <button style={{margin:'4px'}} onClick={this.incrementIfOdd}>IncrementIfOdd</button>
                <button style={{margin:'4px'}} onClick={this.incrementAsync}>IncrementAsync</button>
            </div>
        );
    }
}

Counter.propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired,
};

export default Counter;