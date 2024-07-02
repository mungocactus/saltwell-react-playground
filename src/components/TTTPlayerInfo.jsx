import { useState } from "react";

export default function TTTPlayerInfo({ playerSymbol, defaultPlayerName }) {
	let [playerPersonalName, setPlayerPersonalName] = useState(defaultPlayerName);
	let [isEditing, setIsEditing] = useState(false);

	function editName() {
		setIsEditing((isEditing) => !isEditing);
	}

	function changeName(event) {
		setPlayerPersonalName(event.target.value);
	}

	let playerName = <h4>{playerPersonalName}</h4>;

	if (isEditing) {
		playerName = (
			<input type="text" placeholder="Players Name" onChange={changeName} />
		);
	}

	return (
		<div className="player-info-container">
			<div className="player-info">
				<div className="symbol">
					<p>{playerSymbol}</p>
				</div>
				{playerName}
			</div>
			<button onClick={editName}>{isEditing ? "save" : "edit"}</button>
		</div>
	);
}
