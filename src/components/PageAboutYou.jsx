import NavMenu from "./NavMenu.jsx";
import Inputs from "./Inputs.jsx";
import { useState } from "react";

export default function PageAboutYou() {
	let [person, setPerson] = useState({
		first: "Paul",
		last: "Jones",
		email: "paulshess@icloud.com",
		phone: "077779133456",
		birthYear: 1961,
		country: "Australia",
	});

	let [isEditing, setIsEditing] = useState(true);

	function editName() {
		setIsEditing((isEditing) => !isEditing);
	}

	let personalDetails = (
		<div className="about-you-details">
			<h2>Hello {person.first}, welcome!</h2>
			<div className="details">
				<h4>Details</h4>
				<p>~</p>
				<p>
					Name: {person.first} {person.last}
				</p>
				<p>Email Address: {person.email}</p>
				<p>Phone Number: {person.phone}</p>
				<p>Age: {person.birthYear}</p>
				<p>... and you were born in {person.country}</p>
			</div>
			<button onClick={editName}>Edit</button>
		</div>
	);

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
						labelFor="first"
						labelTitle="First Name"
						inputType="text"
						inputId="first"
						inputPlaceholder="First Name"
						error="Whoops!"
					/>
					<Inputs
						labelFor="last"
						labelTitle="Last Name"
						inputType="text"
						inputId="last"
						inputPlaceholder="Last Name"
						error="Whoops!"
					/>
					<Inputs
						labelFor="email"
						labelTitle="Email Address"
						inputType="email"
						inputId="email"
						inputPlaceholder="Email Address"
						error="Whoops!"
					/>
					<Inputs
						labelFor="phone"
						labelTitle="Phone Number"
						inputType="number"
						inputId="phone"
						inputPlaceholder="Phone Number"
						error="Whoops!"
					/>
					<Inputs
						labelFor="birthyear"
						labelTitle="Year of Birth"
						inputType="number"
						inputId="birthyear"
						inputPlaceholder="Year of Birth"
						error="Whoops!"
					/>
					<Inputs
						labelFor="country"
						labelTitle="Country of Birth"
						inputType="text"
						inputId="country"
						inputPlaceholder="Country of Birth"
						error="Whoops!"
					/>
					<button type="submit">Submit</button>
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
