export default function Inputs({
	labelTitle,
	labelFor,
	inputType,
	inputId,
	inputPlaceholder,
	error,
}) {
	return (
		<div className="input-container">
			<label for={labelFor}>{labelTitle}</label>
			<input
				type={inputType}
				id={inputId}
				placeholder={inputPlaceholder}
			></input>
			<p className="input-error">{error}</p>
		</div>
	);
}
