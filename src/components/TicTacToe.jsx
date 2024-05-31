import React from 'react'
import useTicTacToe from '../hooks/useTicTacToe';

const TicTacToe = () => {
  const { board, gameStatus, handleClick, handleReset, calculateWinner } = useTicTacToe();
  
  
  return (
    <div className='game'>
      <div className='game-controls'>
        <span>{gameStatus()}</span>
        <button className='reset-btn' onClick={handleReset}>Reset</button>
      </div>
      <div className='board'>
        {board.map((cell, index) => {
          return <button className='board-cell' key={index} onClick={() => handleClick(index)}>{cell}</button>
        })}
      </div>
      
    </div>
  )
}

export default TicTacToe