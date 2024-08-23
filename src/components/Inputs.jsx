import { useState } from "react";

export default function Inputs({
	labelTitle,
	labelFor,
	inputType,
	inputId,
	inputPlaceholder,
	error,
}) {
	// let [inputValue, setInputValue] = useState();

	// function getValue(event) {
	// 	const { id, value } = event.target;
	// 	setInputValue((prevState) => ({
	// 		...prevState,
	// 		[id]: value,
	// 	}));
	// }

	// function getValue(event) {
	// 	console.log(inputId);
	// 	console.log("perhaps");
	// 	console.log(event.target.value);
	// 	setInputValue(event.target.value);
	// }

	// console.log(inputValue);

	return (
		<div className="input-container">
			<label htmlFor={labelFor}>{labelTitle}</label>
			<input
				type={inputType}
				name={inputId}
				placeholder={inputPlaceholder}
				// onChange={getValue}
			></input>
			<p className="input-error">{error}</p>
		</div>
	);
}
