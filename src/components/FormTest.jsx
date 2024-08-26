export default function FormTest() {
	function handleSubmitButton(event) {
		event.preventDefault();
		console.log("submitted");
	}

	return (
		<div className="about-you-form">
			<form onSubmit={handleSubmitButton}>
				<div className="input-container control no-margin">
					<label htmlFor="email">Email</label>
					<input id="email" type="email" name="email" />
				</div>

				<div className="input-container control no-margin">
					<label htmlFor="password">Password</label>
					<input id="password" type="password" name="password" />
				</div>

				<div className="input-container">
					<label htmlFor="first">First Name</label>
					<input
						type="text"
						id="first"
						name="first"
						placeholder="First Name"
					></input>
					<p className="input-error">Error</p>
				</div>
				<div className="input-container">
					<label htmlFor="last">Last Name</label>
					<input
						type="text"
						id="last"
						name="last"
						placeholder="Last Name"
					></input>
					<p className="input-error">Error</p>
				</div>
				<div className="input-container">
					<label htmlFor="emailform">Email Address</label>
					<input
						type="email"
						id="emailform"
						name="email"
						placeholder="Email Address"
					></input>
					<p className="input-error">Error</p>
				</div>
				<div className="input-container">
					<label htmlFor="passwordform">Password</label>
					<input
						type="text"
						id="passwordform"
						name="password"
						placeholder="Password"
					></input>
					<p className="input-error">Error</p>
				</div>

				<p className="form-actions">
					<button className="button button-flat">Reset</button>
					<button className="button">Submit</button>
				</p>
			</form>
		</div>
	);
}
