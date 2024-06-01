import React from 'react'
import useTicTacToe from '../hooks/useTicTacToe';

const TicTacToe = () => {
  const { board, gameStatus, handleClick, handleReset, gameStats } = useTicTacToe();
  
  
  return (
    <div className='game'>
      <div className='game-controls'>
        <span>{ gameStatus}</span>
        <button className='reset-btn' onClick={handleReset}>Reset</button>
      </div>
      <div className='board'>
        {board.map((cell, index) => {
          return <button className='board-cell' disabled={cell !== null} key={index} onClick={() => handleClick(index)}>{cell}</button>
        })}
      </div>
      <div className='game-stats'>
        <div>Total Number of Games - {gameStats.total}</div>
        <div>Number of Games Won by X - {gameStats.x}</div>
        <div>Number of Games Won by O - {gameStats.o}</div>
      </div>
    </div>
  )
}

export default TicTacToe