import { useState } from "react";

const initialGameBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];

console.log(initialGameBoard);

export default function TTTGameBoard({ playSelectSquare, bingoActivePlayer }) {
	const [gameBoard, setGameBoard] = useState(initialGameBoard);

	function selectedSquare(indexRow, indexColin) {
		setGameBoard((prevGameBoard) => {
			const updatedGameBoard = [
				...prevGameBoard.map((innerArray) => [...innerArray]),
			];
			updatedGameBoard[indexRow][indexColin] = bingoActivePlayer;
			return updatedGameBoard;
		});
		console.log(indexRow, indexColin, "jumble");
		playSelectSquare();
	}

	return (
		<>
			<h4>Game Board</h4>
			<div className="game-board">
				{gameBoard.map((row, indexRow) => (
					<div key={indexRow}>
						<div>
							{row.map((symbolPlayer, indexColin) => (
								<div key={indexColin}>
									<button onClick={() => selectedSquare(indexRow, indexColin)}>
										{symbolPlayer}
									</button>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</>
	);
}
