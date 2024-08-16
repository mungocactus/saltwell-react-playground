import NavMenu from "./NavMenu.jsx";
import Inputs from "./Inputs.jsx";

export default function PageAboutYou() {
	return (
		<>
			<NavMenu />
			<section className="about-you">
				<div className="about-you-form">
					<h2>Lets get some details about you!</h2>
					<form>
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
					</form>
					<button>Submit</button>
				</div>
				<div className="about-you-details">
					<h2>Hello Paul, welcome!</h2>
					<div>
						<p>Details</p>
					</div>
					<button>Edit</button>
				</div>
			</section>
		</>
	);
}
