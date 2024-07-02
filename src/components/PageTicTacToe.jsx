import NavMenu from "./NavMenu.jsx";
import gameImage from "../assets/ttt-game-logo.png";
import TTTPlayerInfo from "./TTTPlayerInfo.jsx";

export default function PageTicTacToe() {
	return (
		<div className="content tictactoe">
			<NavMenu />
			<section>
				<h2>Tic Tac Toe</h2>
				<img src={gameImage} alt="tic tac toe image" />
				<div className="players-information-container">
					<TTTPlayerInfo playerSymbol="X" defaultPlayerName="Player 1" />
					<TTTPlayerInfo playerSymbol="O" defaultPlayerName="Player 2" />
				</div>
			</section>
		</div>
	);
}
