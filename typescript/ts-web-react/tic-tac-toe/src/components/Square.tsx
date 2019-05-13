import React from 'react';
import '../assets/index.css';
import {ThemeContext} from './ThemeContext';

type SquareProp = {
    value: string;
    onClick(): void;
}
const Square: React.FC<SquareProp> = (props) => (
    <ThemeContext.Consumer>
        {
            (color) => (
                <button className='square' onClick={props.onClick} style={{color}}>
                    {props.value}
                </button>
            )
        }
    </ThemeContext.Consumer>
);

export default Square;