import { useState } from "react";

const useTicTacToe = () => {
    let initialBoard = Array(9).fill(null);

    const [board, setBoard] = useState(initialBoard);
    const [xIsNext, setXIsNext] = useState(true);
    const [gameStats, setGameStats] = useState({total:0, x:0, o:0});
    const [gameStatus, setGameStatus] = useState("Next player: X");

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
        const winner = calculateWinner([...board]);
        if (winner || board[index]) {
            return;
        }
        let newBoard = [...board];
        newBoard[index] = xIsNext ? "X" : "O";
        setXIsNext(!xIsNext);
        setBoard(newBoard);
        handleGameStatus(newBoard);
    };

    const handleReset = () => {
        setBoard(initialBoard);
        setXIsNext(true);
        setGameStatus("Next player: X");
    };

    const handleGameStats = (winner) => {
        let newGameStats = {...gameStats,};
        newGameStats.total++;
        if(winner) {
            winner === "X" ? newGameStats.x++ : newGameStats.o++;
        }
        setGameStats(newGameStats);
    };
    
    const handleGameStatus = (newBoard) => {
        const winner = calculateWinner(newBoard);
        if (winner) {
            handleGameStats(winner);
            return setGameStatus(`Winner: ${winner}`);
        }
        if(!newBoard.includes(null)) {
            handleGameStats(null);
            return setGameStatus("It's a draw!");
        }
        return setGameStatus(`Next player: ${!xIsNext ? "X" : "O"}`);
    };

    const calculateWinner = (board) => {
        for (let i = 0; i < winningCombos.length; i++) {
            const [a, b, c] = winningCombos[i];
            if (board[a] && board[a] === board[b] && board[a] === board[c]) return board[a];
        }
        return null;
    };

    return {
        board,
        gameStatus,
        handleClick,
        handleReset,
        gameStats
    };
}

export default useTicTacToe;