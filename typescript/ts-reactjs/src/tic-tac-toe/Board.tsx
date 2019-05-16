import React from 'react';
import Square from './Square';
import './index.css';

interface BoardProp {
    squares: string[][];

    onClick(i: number, j: number): void;
}

const Board: React.FC<BoardProp> = (props) => {
    const rows = props.squares.map((row, rowIndex) => (
            <div className="board-row" key={rowIndex.toString()}>
                {
                    row.map((column, columnIndex) => (
                            <Square key={`${rowIndex}-${columnIndex}`} value={column}
                                    onClick={() => props.onClick(rowIndex, columnIndex)}/>
                        )
                    )
                }
            </div>
        )
    );

    return (
        <div>
            {rows}
        </div>
    );
};

export default Board;