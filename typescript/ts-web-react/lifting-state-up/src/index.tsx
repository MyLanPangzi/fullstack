import React, {FC, Component, ChangeEvent} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

const BoilingVerdict: FC<({ celsius: number })> = ({celsius}) => (
    celsius >= 100 ? <p>The water would boil</p> : <p>The water would not boil</p>
);

function toCelsius(fahrenheit: number): number {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius: number): number {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature: string, conver: (n: number) => number): string {
    const input = Number.parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = conver(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
}

interface TemperatureState {
    temperature: string;
}

interface TemperatureProp {
    scale: 'c' | 'f';
    temperature: string;

    onChange(e?: ChangeEvent<HTMLInputElement>): void;
}

const Temperature: FC<TemperatureProp> = ({scale, temperature, onChange}) => (
    <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input type={"text"} value={temperature} onChange={onChange}/>
    </fieldset>
);


interface CalculatorState {
    temperature: string;
    scale: 'c' | 'f';
}

class Calculator extends Component<{}, CalculatorState> {
    constructor(props: any) {
        super(props);
        this.state = {
            temperature: '0',
            scale: 'c'
        }
    }

    private handleCelsiusChange = (e?: ChangeEvent<HTMLInputElement>) => this.setState({
        temperature: e!.target.value,
        scale: 'c'
    });
    private handleFahrenheitChange = (e?: ChangeEvent<HTMLInputElement>) => this.setState({
        temperature: e!.target.value,
        scale: 'f'
    });

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const {scale, temperature} = this.state;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
        return (
            <div>
                <Temperature scale={'c'} temperature={celsius} onChange={this.handleCelsiusChange}/>
                <Temperature scale={'f'} temperature={fahrenheit} onChange={this.handleFahrenheitChange}/>
                <BoilingVerdict celsius={Number.parseFloat(celsius)}/>
            </div>
        );
    }
}

ReactDOM.render(<Calculator/>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
