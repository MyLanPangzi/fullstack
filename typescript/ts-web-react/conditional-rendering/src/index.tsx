import React, {Component, FC} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';


interface PageState {
    warning: boolean;
}

const Warn: FC<PageState> = ({warning}) => {
    if (!warning) {
        return null;
    }
    return (
        <div className='warning'>Warning!</div>
    )
}

class Page extends Component<{}, PageState> {
    constructor(props: any) {
        super(props);
        this.state = {
            warning: true
        }
    }

    private handleClick = () => this.setState(state => ({
        warning: !state.warning
    }));

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div>
                <Warn warning={this.state.warning}/>
                <button onClick={this.handleClick}>{this.state.warning ? 'Hide' : 'Show'}</button>
            </div>
        );
    }
}

ReactDOM.render(<Page/>, document.getElementById('root'));

serviceWorker.unregister();
