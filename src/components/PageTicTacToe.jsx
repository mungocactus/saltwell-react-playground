import { useState } from "react";
import NavMenu from "./NavMenu.jsx";
import gameImage from "../assets/ttt-game-logo.png";
import TTTPlayerInfo from "./TTTPlayerInfo.jsx";
import TTTGameBoard from "./TTTGameBoard.jsx";

export default function PageTicTacToe() {
	let [activePlayer, setActivePlayer] = useState("O");
	let [gameTurns, setGameTurns] = useState([]);

	function playSelectActive(indexRow, indexColin) {
		setActivePlayer((currentPlayer) => (currentPlayer === "O" ? "X" : "O"));
		console.log("worked", activePlayer);
		setGameTurns((previousTurns) => {
			let currentActivePlayer = "O";

			if (previousTurns.length > 0 && previousTurns[0].player === "0") {
				currentActivePlayer = "X";
			}

			const updatedTurns = [
				{
					square: {
						row: indexRow,
						col: indexColin,
					},
					player: currentActivePlayer,
				},
				...previousTurns,
			];

			console.log(updatedTurns);
			return updatedTurns;
		});
	}

	return (
		<div className="content tictactoe">
			<NavMenu />
			<section>
				<h2>Tic Tac Toe</h2>
				<img src={gameImage} alt="tic tac toe image" />
				<div className="players-information-container">
					<TTTPlayerInfo
						playerSymbol="O"
						defaultPlayerName="Player 1"
						isActive={activePlayer === "O"}
					/>
					<TTTPlayerInfo
						playerSymbol="X"
						defaultPlayerName="Player 2"
						isActive={activePlayer === "X"}
					/>
				</div>
				<TTTGameBoard
					playSelectSquare={playSelectActive}
					// bingoActivePlayer={activePlayer}
					turns={gameTurns}
				/>
			</section>
		</div>
	);
}
