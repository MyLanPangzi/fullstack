import React from 'react';
import Square from './Square';
import './index.css';

interface BoardProp {
    squares: string[][];
    winners: number[][] | null;

    onClick(i: number, j: number): void;
}

const Board: React.FC<BoardProp> = ({squares, winners, onClick}) => {
    const rows = squares.map((row, rowIndex) => (
            <div className="board-row" key={rowIndex.toString()}>
                {
                    row.map((column, columnIndex) => {
                            let isWinenr = false;
                            if (winners) {
                                isWinenr = winners.some(e => e[0] === rowIndex && e[1] === columnIndex);
                            }
                            return (
                                <Square isWinner={isWinenr} key={`${rowIndex}-${columnIndex}`} value={column}
                                        onClick={() => onClick(rowIndex, columnIndex)}/>
                            );
                        }
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