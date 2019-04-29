import React, {Component} from 'react';
import Board from "./Board";
import '../assets/index.css';

interface GameState {
    history: { squares: string[] }[];
    xIsNext: boolean;
    stepNumber: number;
}

class Game extends Component<{}, GameState> {
    constructor(props: any) {
        super(props);
        this.state = {
            history: [{squares: new Array<string>(9).fill('')}],
            stepNumber: 0,
            xIsNext: true
        }
    }

    private calculateWinner(squares: string[]): string | null {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let [a, b, c] of lines) {
            if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    render() {
        const history = this.state.history;
        const squares = history[this.state.stepNumber].squares;
        let winner = this.calculateWinner(squares);
        let status = `Next player is ${this.state.xIsNext ? 'X' : 'O'}`;
        if (winner) {
            status = `Winner is ${winner}`;
        }
        const moves = history.map((e, i) => {
            return (<li key={i}>
                <button onClick={() => this.jumpTo(i)}>{`Game move to ${i === 0 ? 'start' : i}`} </button>
            </li>)
        });
        return (
            <div className="game">
                <div className="game-board">
                    {<Board squares={squares} onClick={i => this.handleOnClick(i)}/>}
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }

    private handleOnClick(i: number) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const squares = history[history.length - 1].squares.slice();

        if (squares[i] || this.calculateWinner(squares)) {
            return;
        }

        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
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