export default function Inputs({
	labelTitle,
	labelFor,
	inputType,
	inputId,
	inputPlaceholder,
	error,
}) {
	return (
		<>
			<label for={labelFor}>{labelTitle}</label>
			<input
				type={inputType}
				id={inputId}
				placeholder={inputPlaceholder}
			></input>
			<p>{error}</p>
		</>
	);
}
