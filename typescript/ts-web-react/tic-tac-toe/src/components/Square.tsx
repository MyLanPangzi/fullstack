import React from 'react';
import '../assets/index.css';

type SquareProp = {
    value: string;
    onClick(): void;
}
const Square: React.FC<SquareProp> = (props) => (
    <button className='square' onClick={props.onClick}>
        {props.value}
    </button>
);

export default Square;