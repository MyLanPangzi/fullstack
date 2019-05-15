import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

type SquareProp = {
    value: string,
    onClick: () => void
};

const Square: React.FC<SquareProp> = props => (
    <button
        className='square'
        onClick={props.onClick}
    >
        {props.value}
    </button>
);

type BoardProp = {
    squares: string[];
    onClick(i: number): void;
};
const Board: React.FC<BoardProp> = props => {
    const renderSquare = (i: number) => (<Square
        value={props.squares[i]}
        onClick={() => props.onClick(i)}
    />)

    return (
        <div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );
}

type GameState = {
    history: { squares: string[] }[],
    xIsNext: boolean,
    stepNumber: number
};


class Game extends React.Component<{}, GameState> {
    constructor(props: any) {
        super(props);
        this.state = {
            history: [{squares: new Array(9).fill('')}],
            xIsNext: true,
            stepNumber: 0
        }
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        let status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;
        const winner = calculateWinner(current.squares);
        if (winner) {
            status = `winner : ${winner}`;
        }
        const moves = history.map((step, move) => {
            const desc = move ? `Go to move #${move}` : 'Go to game start';

            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>{desc} </button>
                </li>
            )
        })

        return (
            <div className="game">
                <div className="game-board">
                    <Board squares={current.squares} onClick={i => this.handleClick(i)}/>
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }


    private handleClick(i: number) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();

        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{squares}]),
            xIsNext: !this.state.xIsNext,
            stepNumber: history.length
        });
    }

    private jumpTo(stepNumber: number) {
        this.setState({
            stepNumber,
            xIsNext: stepNumber % 2 === 0
        })
    }
}

const calculateWinner = (squares: string[]): string | null => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        let [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
            return squares[a];
        }
    }
    return null;
};

ReactDOM.render(
    <Game/>,
    document.getElementById('root')
);
