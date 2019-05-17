import React from 'react';
import './index.css';
import {ThemeContext} from './ThemeContext';

type SquareProp = {
    value: string;
    onClick(): void;
    isWinner: boolean;
}
const Square: React.FC<SquareProp> = ({value, onClick, isWinner}) => (
    <ThemeContext.Consumer>
        {
            (color) => (
                <button className='square' onClick={onClick} style={isWinner ? {color: 'red'} : {color}}>
                    {value}
                </button>
            )
        }
    </ThemeContext.Consumer>
);

export default Square;