import React, {Component} from 'react';
import Board from "./Board";
import './index.css';
import {ThemeContext} from "./ThemeContext";

interface GameState {
    history: History[];
    moves: number[][];
    xIsNext: boolean;
    stepNumber: number;
    color: string;
    boom: boolean;
}

interface History {
    squares: string[][]
}

// Display the location for each move in the format (col, row) in the move history list.
//     Bold the currently selected item in the move list.
//     Rewrite Board to use two loops to make the squares instead of hardcoding them.
//     Add a toggle button that lets you sort the moves in either ascending or descending order.
//     When someone wins, highlight the three squares that caused the win.
//     When no one wins, display a message about the result being a draw.
export class Game extends Component<{}, GameState> {
    constructor(props: any) {
        super(props);
        const rows = new Array<Array<string>>(3).fill(new Array<string>(3).fill(''));
        this.state = {
            history: [{squares: rows}],
            moves: [[-1, -1]],
            stepNumber: 0,
            xIsNext: true,
            color: 'black',
            boom: false
        }
    }

    private calculateWinner(squares: Array<Array<string>>): string | null {
        const lines = [
            [[0, 0], [1, 0], [2, 0]],
            [[0, 1], [1, 1], [2, 1]],
            [[0, 2], [1, 2], [2, 2]],

            [[0, 0], [0, 1], [0, 2]],
            [[1, 0], [1, 1], [1, 2]],
            [[2, 0], [2, 1], [2, 2]],

            [[0, 0], [1, 1], [2, 2]],
            [[0, 2], [1, 1], [2, 0]]
        ];
        for (let [[a, b], [c, d], [e, f]] of lines) {
            if (squares[a][b] && squares[a][b] === squares[c][d] && squares[e][f] === squares[c][d]) {
                return squares[a][b];
            }
        }
        return null;
    }

    render() {
        if (this.state.boom) {
            throw  new Error('bomb!!!!');
        }
        const history = this.state.history;
        const squares = history[this.state.stepNumber].squares;
        let winner = this.calculateWinner(squares);
        let status = `Next player is ${this.state.xIsNext ? 'X' : 'O'}`;
        if (winner) {
            status = `Winner is ${winner}`;
        }
        const moves = history.map((e, i) => {
            const text = i === 0 ? 'start' : `${i} + ${this.state.moves[i].join(',')}`;
            return (<li key={i}>
                <button
                    onClick={() => this.jumpTo(i)}>{`Game move to ${text} `} </button>
            </li>)
        });
        return (
            <ThemeContext.Provider value={this.state.color}>
                <div className="game">
                    <div className="game-board">
                        {<Board squares={squares} onClick={(row, column) => this.handleOnClick(row, column)}/>}
                    </div>
                    <div className="game-info">
                        <div>{status}</div>
                        <ol>{moves}</ol>
                    </div>
                    <div>
                        <button onClick={() => this.changeTheme('blue')}>blue</button>
                        <button onClick={() => this.changeTheme('red')}>red</button>
                        <button onClick={() => this.changeTheme('green')}>green</button>
                        <button onClick={this.bomb}>Boom</button>
                    </div>
                </div>
            </ThemeContext.Provider>
        );
    }

    private bomb = () => this.setState({boom: true});

    private changeTheme = (color: string) => this.setState({color});

    private handleOnClick(r: number, c: number) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const squares = history[history.length - 1].squares.slice();
        if (squares[r][c] || this.calculateWinner(squares)) {
            return;
        }

        const moves = this.state.moves.slice();
        moves[this.state.stepNumber + 1] = [r, c];
        squares[r] = squares[r].slice();
        squares[r][c] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            moves,
            history: history.concat([{squares}]),
            xIsNext: !this.state.xIsNext,
            stepNumber: history.length
        });

    }

    private jumpTo(i: number) {
        this.setState({
            stepNumber: i,
            xIsNext: i % 2 === 0
        })
    }
}

export default Game;