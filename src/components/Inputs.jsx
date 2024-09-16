export default function Inputs({
	labelTitle,
	inputType,
	inputId,
	inputValue,
	inputRef,
	inputPlaceholder,
	getInputValue,
	error,
}) {
	return (
		<div className="input-container">
			<label htmlFor={inputId}>{labelTitle}</label>
			<input
				ref={inputRef}
				type={inputType}
				id={inputId}
				name={inputId}
				defaultValue={inputValue}
				placeholder={inputPlaceholder}
				onChange={getInputValue}
			></input>
			<p className="input-error">{error}</p>
		</div>
	);
}
