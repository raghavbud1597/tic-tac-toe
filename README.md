# Tic Tac Toe Game using React JS

## Overview
This project is a simple yet engaging Tic Tac Toe game built using React JS. The game allows two players to compete against each other in a classic 3x3 grid format. The primary focus of the project is to demonstrate the use of React JS for building interactive user interfaces, and to showcase the implementation of custom hooks and game logic to track wins and losses.

## Features
- **Interactive Gameplay**: Smooth and responsive game board where players can take turns to place their markers (X or O).
- **Custom Hooks**: Utilized custom React hooks to manage game state, handle player turns, and check for win/loss conditions.
- **Win/Loss Tracking**: Built-in logic to determine the winner or if the game ends in a draw. Keeps track of the game status in real-time.
- **Restart Option**: Ability to reset the game board to start a new game without refreshing the page.

## Deployed Link - https://raghavbud1597.github.io/tic-tac-toe/

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/raghavbud1597/tic-tac-toe.git
   ```
2. Navigate to the project directory:
   ```sh
   cd tic-tac-toe-react
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm start
   ```
5. Open your browser and navigate to `http://localhost:3000` to see the game in action.

## Usage
- Click on any empty cell in the grid to place your marker.
- Players alternate turns, with Player 1 starting as 'X' and Player 2 as 'O'.
- The game automatically checks for a winner or a draw after each turn.
- To restart the game, click the "Restart" button.

## Custom Hooks
The project makes use of custom hooks to encapsulate and manage the game logic efficiently:
- **useTicTacToe**: Manages the state of the game, including the game board and the current player's turn.

## Game Logic
The logic to track wins and losses involves checking the rows, columns, and diagonals of the grid after each move. If a player succeeds in placing three of their markers in a line, they are declared the winner. If the grid is filled without any player winning, the game is declared a draw.

## Contributing
Contributions are welcome! If you have any ideas or suggestions to improve the game, feel free to fork the repository and submit a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Thank you for checking out the Tic Tac Toe game built with React JS. Have fun playing!
