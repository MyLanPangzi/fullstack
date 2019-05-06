import React, {Component, FC} from 'react';

function toCelsius(fahrenheit: number): number {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius: number): number {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature: string, convert: (n: number) => number): string {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

interface CalculatorState {
    value: string;
    scale: string;

    onChange?(scale: string, e?: React.ChangeEvent<HTMLInputElement>): void;
}

export class Calculator extends Component<{}, CalculatorState> {
    constructor(props: any) {
        super(props);
        this.state = {
            value: '100',
            scale: 'c'
        }
    }

    private handleChange = (scale: string, e?: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            scale,
            value: e!.target.value
        })
    };

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const {value, scale} = this.state;
        const celsius = scale === 'f' ? tryConvert(value, toCelsius) : value;
        const fahrenheit = scale === 'c' ? tryConvert(value, toFahrenheit) : value;
        return (
            <div>
                <TemperatureInput value={celsius} scale={'c'} onChange={this.handleChange}/>
                <TemperatureInput value={fahrenheit} scale={'f'} onChange={this.handleChange}/>
                <BoilingVerdict value={Number.parseFloat(celsius)}/>
            </div>
        );
    }
}

const TemperatureInput: FC<CalculatorState> = ({value, scale, onChange}) => (
    <fieldset>
        <legend>Enter temperature in {scale === 'c' ? 'Celsius' : 'Fahrenheit'}</legend>
        <input type='text' value={value} onChange={e => onChange!(scale, e)}/>
    </fieldset>
);
const BoilingVerdict: FC<{ value: number }> = ({value}) => (
    value >= 100 ? <p>The water would boil.</p> : <p>The water would not boil.</p>
);