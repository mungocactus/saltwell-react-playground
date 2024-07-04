import { useState } from "react";
import NavMenu from "./NavMenu.jsx";
import gameImage from "../assets/ttt-game-logo.png";
import TTTPlayerInfo from "./TTTPlayerInfo.jsx";
import TTTGameBoard from "./TTTGameBoard.jsx";

export default function PageTicTacToe() {
	let [activePlayer, setActivePlayer] = useState("O");

	function playSelectActive() {
		setActivePlayer((currentPlayer) => (currentPlayer === "O" ? "X" : "O"));
		console.log("worked", activePlayer);
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
					bingoActivePlayer={activePlayer}
				/>
			</section>
		</div>
	);
}
