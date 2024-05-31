import { useState } from "react";

const useTicTacToe = () => {
    let initialBoard = Array(9).fill(null);
    const [board, setBoard] = useState(initialBoard);
    const [xIsNext, setXIsNext] = useState(true);

    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    const handleClick = (index) => {
        debugger;
        let newBoard = [...board];
        newBoard[index] = xIsNext ? "X" : "O";
        setXIsNext(!xIsNext);
        setBoard(newBoard);
    };
    const handleReset = () => {
        setBoard(initialBoard);
        setXIsNext(true);
    };
    const gameStatus = () => {
        const winner = calculateWinner();
        if (winner) {
            return `Winner: ${winner}`;
        } else {
            return `Next player: ${xIsNext ? "X" : "O"}`;
        }
    };
    const calculateWinner = () => {};

    return {
        board,
        gameStatus,
        xIsNext,
        handleClick,
        handleReset,
        calculateWinner
    };
}

export default useTicTacToe;