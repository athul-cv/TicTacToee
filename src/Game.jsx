import React, { useState } from 'react';
import './Styles.css';

const App = () => {
  const initialBoard = Array(9).fill(null);
  const [board, setBoard] = useState(initialBoard);
  const [xIsNext, setXIsNext] = useState(true);
  const [gameStatus, setGameStatus] = useState(null);

  const handleClick = (index) => {
    if (gameStatus) {
      return; // Game is over, ignore clicks
    }

    const newBoard = [...board];

    if (calculateWinner(newBoard) || newBoard[index]) {
      return;
    }

    newBoard[index] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);

    const winner = calculateWinner(newBoard);
    if (winner) {
      alert(`Winner: ${winner}`)
      setGameStatus(`Winner: ${winner}`);
    } else if (newBoard.every((square) => square !== null)) {
      setGameStatus('It\'s a draw!');
    } else {
      setXIsNext(!xIsNext);
    }
  };

  const resetGame = () => {
    setBoard(initialBoard);
    setXIsNext(true);
    setGameStatus(null);
  };

  const renderSquare = (index) => (
    <button className="square" onClick={() => handleClick(index)}>
      {board[index]}
    </button>
  );

  return (
    <div>
      <div className="status">{gameStatus || `Next  Player: ${xIsNext ? 'X' : 'O'}`}</div>
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
      {gameStatus && (
        <div>
          <button className='reset-button' onClick={resetGame}>Reset Game</button>
        </div>
      )}
    </div>
  );
};

const calculateWinner = (squares) => {
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
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
};

export default App;