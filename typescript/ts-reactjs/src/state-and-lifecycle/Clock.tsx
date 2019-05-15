import React, {Component} from "react";

export class Clock extends Component<{}, { date: Date }> {
    private timer: number;

    constructor(props: any) {
        super(props);
        this.state = {
            date: new Date()
        }
        this.timer = 0;
    }

    componentDidMount(): void {
        this.timer = window.setInterval(this.tick, 1000);
    }

    private tick = () => this.setState({date: new Date()});

    componentWillMount(): void {
        window.clearInterval(this.timer);
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div>
                <h1>Hello World</h1>
                <h2>{this.state.date.toLocaleTimeString()} </h2>
            </div>
        );
    }
}