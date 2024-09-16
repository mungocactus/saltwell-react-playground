import NavMenu from "./NavMenu.jsx";
import Inputs from "./Inputs.jsx";
import { useState } from "react";

export default function PageAboutYou() {
	let [person, setPerson] = useState({
		first: "",
		last: "",
		email: "",
		phone: "",
		birthYear: "",
		country: "",
	});

	let [formDataInput, setformDataInput] = useState({
		first: "",
		last: "",
		email: "",
		phone: "",
		birthYear: "",
		country: "",
	});

	let [isEditing, setIsEditing] = useState(true);

	function editName() {
		setIsEditing((isEditing) => !isEditing);
	}

	let personalDetails = (
		<div className="about-you-details">
			<h2>Hello {person.first}, welcome!</h2>
			<div className="details">
				<h4>Your Details</h4>
				<p>~</p>
				<p>
					Name: {person.first} {person.last}
				</p>
				<p>Email Address: {person.email}</p>
				<p>Phone Number: {person.phone}</p>
				<p>Age: {person.birthYear}</p>
				<p>... and we believe you were born in {person.country}</p>
			</div>
			<button onClick={editName}>Edit</button>
		</div>
	);

	// function inputValues(e) {
	// 	// const blahBlah = e.target.value;
	// 	console.log(e.target.value);
	// 	console.log("blahBlah");
	// }

	// const inputValues = (e) => {
	// 	return e.target.value;
	// };

	// console.log(inputValues);

	function getInputValue(event) {
		// const inputName = event.target.name;
		// const inputValue = event.target.value;
		const { name, value } = event.target;
		console.log(name);
		console.log(value);
		setformDataInput((prevState) => ({ ...prevState, [name]: value }));

		console.log("perhaps");
		console.log(formDataInput);
		// console.log(inputName);
		// console.log(inputValue);
	}

	console.log("hmmm", formDataInput);

	const formComplete =
		formDataInput.first &&
		formDataInput.last &&
		formDataInput.email &&
		formDataInput.phone &&
		formDataInput.birthYear &&
		formDataInput.country;

	function handleshit(e) {
		// Prevent the browser from reloading the page
		e.preventDefault();

		// Read the form data
		const form = e.target;
		const formData = new FormData(form);

		let formEntries = Object.fromEntries(formData.entries());
		console.log("handle shit", formEntries);
		setPerson(formEntries);
		console.log(person);
		editName();
	}

	if (isEditing) {
		personalDetails = (
			<div className="about-you-form">
				<h2>Lets get some details about you!</h2>
				<form onSubmit={handleshit}>
					<Inputs
						labelTitle="First Name"
						inputType="text"
						inputId="first"
						inputPlaceholder="First Name"
						error="Whoops!"
						getInputValue={getInputValue}
					/>
					<Inputs
						labelTitle="Last Name"
						inputType="text"
						inputId="last"
						inputPlaceholder="Last Name"
						error="Whoops!"
						getInputValue={getInputValue}
					/>
					<Inputs
						labelTitle="Email Address"
						inputType="email"
						inputId="email"
						inputPlaceholder="Email Address"
						error="Whoops!"
						getInputValue={getInputValue}
					/>
					<Inputs
						labelTitle="Phone Number"
						inputType="number"
						inputId="phone"
						inputPlaceholder="Phone Number"
						error="Whoops!"
						getInputValue={getInputValue}
					/>
					<Inputs
						labelTitle="Year of Birth"
						inputType="number"
						inputId="birthYear"
						inputPlaceholder="Year of Birth"
						error="Whoops!"
						getInputValue={getInputValue}
					/>
					<Inputs
						labelTitle="Country of Birth"
						inputType="text"
						inputId="country"
						inputPlaceholder="Country of Birth"
						error="Whoops!"
						getInputValue={getInputValue}
					/>
					<button type="submit" disabled={!formComplete}>
						Submit
					</button>
				</form>
			</div>
		);
	}

	return (
		<>
			<NavMenu />
			<section className="about-you">{personalDetails}</section>
		</>
	);
}
